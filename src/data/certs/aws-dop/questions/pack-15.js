export const AWS_DOP_QUESTIONS_15 = [
  {
    id: "aws-dop-351",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Route 53 Application Recovery Controller (ARC): Dr Failover",
    scenario: "An enterprise DevOps organization is establishing cross-region operational continuity guidelines and high-availability architecture for AWS workloads. The DevOps engineer evaluates Route 53 ARC to orchestrate safe, reliable failover of application traffic between AWS regions without relying on impaired regional control planes during an outage.",
    question: "Which architectural approach or configuration satisfies these multi-region disaster recovery and resilience objectives? Multi-region traffic failover using ARC routing controls and readiness checks is under consideration.",
    options: [
      { id: 'A', text: "Implement Route 53 Application Recovery Controller (ARC) routing controls with regional readiness checks and zonal shift capabilities." },
      { id: 'B', text: "Perform manual Route 53 DNS record updates using the AWS Console during an active outage." },
      { id: 'C', text: "Use basic Route 53 health checks without evaluating recovery readiness." },
      { id: 'D', text: "Route all traffic through a single EC2 instance running BIND DNS." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement Route 53 Application Recovery Controller (ARC) routing controls with regional readiness checks and zonal shift capabilities. Route 53 Application Recovery Controller (ARC) provides highly reliable routing controls that operate independently of regional control planes. ARC evaluates regional readiness (capacity, quotas) and executes instant traffic shifts via simple on/off routing control switches.",
    referenceUrl: "https://docs.aws.amazon.com/r53recovery/latest/dg/what-is-route-53-recovery-control.html",
    tags: ["Route 53 ARC", "Route 53 ARC", "Dr Failover"]
  },
  {
    id: "aws-dop-352",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Route 53 Application Recovery Controller (ARC): High Load Scale",
    scenario: "A high-throughput AWS application experiences rapid surges in user traffic and transaction volume across multiple Availability Zones. The DevOps engineer evaluates Route 53 ARC to orchestrate safe, reliable failover of application traffic between AWS regions without relying on impaired regional control planes during an outage.",
    question: "Which engineering approach should the DevOps team select to manage this demand efficiently without manual intervention? Multi-region traffic failover using ARC routing controls and readiness checks is under consideration.",
    options: [
      { id: 'A', text: "Implement Route 53 Application Recovery Controller (ARC) routing controls with regional readiness checks and zonal shift capabilities." },
      { id: 'B', text: "Perform manual Route 53 DNS record updates using the AWS Console during an active outage." },
      { id: 'C', text: "Use basic Route 53 health checks without evaluating recovery readiness." },
      { id: 'D', text: "Route all traffic through a single EC2 instance running BIND DNS." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement Route 53 Application Recovery Controller (ARC) routing controls with regional readiness checks and zonal shift capabilities. Route 53 Application Recovery Controller (ARC) provides highly reliable routing controls that operate independently of regional control planes. ARC evaluates regional readiness (capacity, quotas) and executes instant traffic shifts via simple on/off routing control switches.",
    referenceUrl: "https://docs.aws.amazon.com/r53recovery/latest/dg/what-is-route-53-recovery-control.html",
    tags: ["Route 53 ARC", "Route 53 ARC", "High Load Scale"]
  },
  {
    id: "aws-dop-353",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Route 53 Application Recovery Controller (ARC): Security Compliance",
    scenario: "A security compliance auditor requires automated verification of resource configurations, secret isolation, and governance across all AWS accounts. The DevOps engineer evaluates Route 53 ARC to orchestrate safe, reliable failover of application traffic between AWS regions without relying on impaired regional control planes during an outage.",
    question: "Which solution implements these mandatory compliance and security controls? Multi-region traffic failover using ARC routing controls and readiness checks is under consideration.",
    options: [
      { id: 'A', text: "Implement Route 53 Application Recovery Controller (ARC) routing controls with regional readiness checks and zonal shift capabilities." },
      { id: 'B', text: "Perform manual Route 53 DNS record updates using the AWS Console during an active outage." },
      { id: 'C', text: "Use basic Route 53 health checks without evaluating recovery readiness." },
      { id: 'D', text: "Route all traffic through a single EC2 instance running BIND DNS." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement Route 53 Application Recovery Controller (ARC) routing controls with regional readiness checks and zonal shift capabilities. Route 53 Application Recovery Controller (ARC) provides highly reliable routing controls that operate independently of regional control planes. ARC evaluates regional readiness (capacity, quotas) and executes instant traffic shifts via simple on/off routing control switches.",
    referenceUrl: "https://docs.aws.amazon.com/r53recovery/latest/dg/what-is-route-53-recovery-control.html",
    tags: ["Route 53 ARC", "Route 53 ARC", "Security Compliance"]
  },
  {
    id: "aws-dop-354",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Route 53 Application Recovery Controller (ARC): Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on AWS. The DevOps engineer evaluates Route 53 ARC to orchestrate safe, reliable failover of application traffic between AWS regions without relying on impaired regional control planes during an outage.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Multi-region traffic failover using ARC routing controls and readiness checks is under consideration.",
    options: [
      { id: 'A', text: "Implement Route 53 Application Recovery Controller (ARC) routing controls with regional readiness checks and zonal shift capabilities." },
      { id: 'B', text: "Perform manual Route 53 DNS record updates using the AWS Console during an active outage." },
      { id: 'C', text: "Use basic Route 53 health checks without evaluating recovery readiness." },
      { id: 'D', text: "Route all traffic through a single EC2 instance running BIND DNS." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement Route 53 Application Recovery Controller (ARC) routing controls with regional readiness checks and zonal shift capabilities. Route 53 Application Recovery Controller (ARC) provides highly reliable routing controls that operate independently of regional control planes. ARC evaluates regional readiness (capacity, quotas) and executes instant traffic shifts via simple on/off routing control switches.",
    referenceUrl: "https://docs.aws.amazon.com/r53recovery/latest/dg/what-is-route-53-recovery-control.html",
    tags: ["Route 53 ARC", "Route 53 ARC", "Hybrid Migration"]
  },
  {
    id: "aws-dop-355",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Route 53 Application Recovery Controller (ARC): Resilience Failure",
    scenario: "A DevOps team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate incident response. The DevOps engineer evaluates Route 53 ARC to orchestrate safe, reliable failover of application traffic between AWS regions without relying on impaired regional control planes during an outage.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform stability? Multi-region traffic failover using ARC routing controls and readiness checks is under consideration.",
    options: [
      { id: 'A', text: "Implement Route 53 Application Recovery Controller (ARC) routing controls with regional readiness checks and zonal shift capabilities." },
      { id: 'B', text: "Perform manual Route 53 DNS record updates using the AWS Console during an active outage." },
      { id: 'C', text: "Use basic Route 53 health checks without evaluating recovery readiness." },
      { id: 'D', text: "Route all traffic through a single EC2 instance running BIND DNS." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement Route 53 Application Recovery Controller (ARC) routing controls with regional readiness checks and zonal shift capabilities. Route 53 Application Recovery Controller (ARC) provides highly reliable routing controls that operate independently of regional control planes. ARC evaluates regional readiness (capacity, quotas) and executes instant traffic shifts via simple on/off routing control switches.",
    referenceUrl: "https://docs.aws.amazon.com/r53recovery/latest/dg/what-is-route-53-recovery-control.html",
    tags: ["Route 53 ARC", "Route 53 ARC", "Resilience Failure"]
  },
  {
    id: "aws-dop-356",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Auto Scaling Predictive and Target Tracking Scaling: Dr Failover",
    scenario: "An enterprise DevOps organization is establishing cross-region operational continuity guidelines and high-availability architecture for AWS workloads. The DevOps engineer evaluates Auto Scaling to scale an Amazon EC2 Auto Scaling group proactively to handle predictable daily traffic surges that spike sharply every morning at 8:00 AM.",
    question: "Which architectural approach or configuration satisfies these multi-region disaster recovery and resilience objectives? Combining Target Tracking scaling policies with Predictive Scaling for traffic surges is under consideration.",
    options: [
      { id: 'A', text: "Configure Predictive Scaling based on historical metrics combined with a Target Tracking scaling policy maintaining 60% average CPU utilization." },
      { id: 'B', text: "Use Simple Scaling policies with static thresholds and 10-minute cooldown periods." },
      { id: 'C', text: "Manually scale instance counts by hand at 8:00 AM every single morning." },
      { id: 'D', text: "Over-provision thousands of static EC2 instances permanently." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Predictive Scaling based on historical metrics combined with a Target Tracking scaling policy maintaining 60% average CPU utilization. Predictive Scaling uses machine learning to forecast upcoming traffic patterns based on historical CloudWatch metrics and provisions capacity in advance. Pairing it with Target Tracking scaling ensures unexpected real-time spikes are handled smoothly while maintaining optimal resource efficiency.",
    referenceUrl: "https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-predictive-scaling.html",
    tags: ["Auto Scaling", "Predictive Scaling", "Dr Failover"]
  },
  {
    id: "aws-dop-357",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Auto Scaling Predictive and Target Tracking Scaling: High Load Scale",
    scenario: "A high-throughput AWS application experiences rapid surges in user traffic and transaction volume across multiple Availability Zones. The DevOps engineer evaluates Auto Scaling to scale an Amazon EC2 Auto Scaling group proactively to handle predictable daily traffic surges that spike sharply every morning at 8:00 AM.",
    question: "Which engineering approach should the DevOps team select to manage this demand efficiently without manual intervention? Combining Target Tracking scaling policies with Predictive Scaling for traffic surges is under consideration.",
    options: [
      { id: 'A', text: "Configure Predictive Scaling based on historical metrics combined with a Target Tracking scaling policy maintaining 60% average CPU utilization." },
      { id: 'B', text: "Use Simple Scaling policies with static thresholds and 10-minute cooldown periods." },
      { id: 'C', text: "Manually scale instance counts by hand at 8:00 AM every single morning." },
      { id: 'D', text: "Over-provision thousands of static EC2 instances permanently." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Predictive Scaling based on historical metrics combined with a Target Tracking scaling policy maintaining 60% average CPU utilization. Predictive Scaling uses machine learning to forecast upcoming traffic patterns based on historical CloudWatch metrics and provisions capacity in advance. Pairing it with Target Tracking scaling ensures unexpected real-time spikes are handled smoothly while maintaining optimal resource efficiency.",
    referenceUrl: "https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-predictive-scaling.html",
    tags: ["Auto Scaling", "Predictive Scaling", "High Load Scale"]
  },
  {
    id: "aws-dop-358",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Auto Scaling Predictive and Target Tracking Scaling: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of resource configurations, secret isolation, and governance across all AWS accounts. The DevOps engineer evaluates Auto Scaling to scale an Amazon EC2 Auto Scaling group proactively to handle predictable daily traffic surges that spike sharply every morning at 8:00 AM.",
    question: "Which solution implements these mandatory compliance and security controls? Combining Target Tracking scaling policies with Predictive Scaling for traffic surges is under consideration.",
    options: [
      { id: 'A', text: "Configure Predictive Scaling based on historical metrics combined with a Target Tracking scaling policy maintaining 60% average CPU utilization." },
      { id: 'B', text: "Use Simple Scaling policies with static thresholds and 10-minute cooldown periods." },
      { id: 'C', text: "Manually scale instance counts by hand at 8:00 AM every single morning." },
      { id: 'D', text: "Over-provision thousands of static EC2 instances permanently." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Predictive Scaling based on historical metrics combined with a Target Tracking scaling policy maintaining 60% average CPU utilization. Predictive Scaling uses machine learning to forecast upcoming traffic patterns based on historical CloudWatch metrics and provisions capacity in advance. Pairing it with Target Tracking scaling ensures unexpected real-time spikes are handled smoothly while maintaining optimal resource efficiency.",
    referenceUrl: "https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-predictive-scaling.html",
    tags: ["Auto Scaling", "Predictive Scaling", "Security Compliance"]
  },
  {
    id: "aws-dop-359",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Auto Scaling Predictive and Target Tracking Scaling: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on AWS. The DevOps engineer evaluates Auto Scaling to scale an Amazon EC2 Auto Scaling group proactively to handle predictable daily traffic surges that spike sharply every morning at 8:00 AM.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Combining Target Tracking scaling policies with Predictive Scaling for traffic surges is under consideration.",
    options: [
      { id: 'A', text: "Configure Predictive Scaling based on historical metrics combined with a Target Tracking scaling policy maintaining 60% average CPU utilization." },
      { id: 'B', text: "Use Simple Scaling policies with static thresholds and 10-minute cooldown periods." },
      { id: 'C', text: "Manually scale instance counts by hand at 8:00 AM every single morning." },
      { id: 'D', text: "Over-provision thousands of static EC2 instances permanently." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Predictive Scaling based on historical metrics combined with a Target Tracking scaling policy maintaining 60% average CPU utilization. Predictive Scaling uses machine learning to forecast upcoming traffic patterns based on historical CloudWatch metrics and provisions capacity in advance. Pairing it with Target Tracking scaling ensures unexpected real-time spikes are handled smoothly while maintaining optimal resource efficiency.",
    referenceUrl: "https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-predictive-scaling.html",
    tags: ["Auto Scaling", "Predictive Scaling", "Hybrid Migration"]
  },
  {
    id: "aws-dop-360",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Auto Scaling Predictive and Target Tracking Scaling: Resilience Failure",
    scenario: "A DevOps team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate incident response. The DevOps engineer evaluates Auto Scaling to scale an Amazon EC2 Auto Scaling group proactively to handle predictable daily traffic surges that spike sharply every morning at 8:00 AM.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform stability? Combining Target Tracking scaling policies with Predictive Scaling for traffic surges is under consideration.",
    options: [
      { id: 'A', text: "Configure Predictive Scaling based on historical metrics combined with a Target Tracking scaling policy maintaining 60% average CPU utilization." },
      { id: 'B', text: "Use Simple Scaling policies with static thresholds and 10-minute cooldown periods." },
      { id: 'C', text: "Manually scale instance counts by hand at 8:00 AM every single morning." },
      { id: 'D', text: "Over-provision thousands of static EC2 instances permanently." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Predictive Scaling based on historical metrics combined with a Target Tracking scaling policy maintaining 60% average CPU utilization. Predictive Scaling uses machine learning to forecast upcoming traffic patterns based on historical CloudWatch metrics and provisions capacity in advance. Pairing it with Target Tracking scaling ensures unexpected real-time spikes are handled smoothly while maintaining optimal resource efficiency.",
    referenceUrl: "https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-predictive-scaling.html",
    tags: ["Auto Scaling", "Predictive Scaling", "Resilience Failure"]
  },
  {
    id: "aws-dop-361",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "AWS Fault Injection Service (FIS) for Chaos Engineering: Dr Failover",
    scenario: "An enterprise DevOps organization is establishing cross-region operational continuity guidelines and high-availability architecture for AWS workloads. The DevOps engineer evaluates Chaos Engineering to test whether an auto-scaling, multi-AZ application gracefully survives sudden availability zone disconnects and database failovers before going live to customers.",
    question: "Which architectural approach or configuration satisfies these multi-region disaster recovery and resilience objectives? Controlled fault injection testing of AZ failures and CPU stress with AWS FIS is under consideration.",
    options: [
      { id: 'A', text: "Design and execute controlled experiments using AWS Fault Injection Service (FIS) to inject AZ network disruptions, latency, and RDS failovers." },
      { id: 'B', text: "Shut down random production servers during peak business hours without stop conditions." },
      { id: 'C', text: "Assume multi-AZ deployment guarantees high availability without empirical validation." },
      { id: 'D', text: "Simulate failures only in non-cloud local desktop environments." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Design and execute controlled experiments using AWS Fault Injection Service (FIS) to inject AZ network disruptions, latency, and RDS failovers. AWS Fault Injection Service (FIS) is a managed service for running chaos engineering experiments. It provides pre-configured fault injection templates (stopping instances, throttling APIs, killing RDS primaries) with safety stop conditions to validate system resilience under real-world stress safely.",
    referenceUrl: "https://docs.aws.amazon.com/fis/latest/userguide/what-is.html",
    tags: ["Chaos Engineering", "AWS FIS", "Dr Failover"]
  },
  {
    id: "aws-dop-362",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "AWS Fault Injection Service (FIS) for Chaos Engineering: High Load Scale",
    scenario: "A high-throughput AWS application experiences rapid surges in user traffic and transaction volume across multiple Availability Zones. The DevOps engineer evaluates Chaos Engineering to test whether an auto-scaling, multi-AZ application gracefully survives sudden availability zone disconnects and database failovers before going live to customers.",
    question: "Which engineering approach should the DevOps team select to manage this demand efficiently without manual intervention? Controlled fault injection testing of AZ failures and CPU stress with AWS FIS is under consideration.",
    options: [
      { id: 'A', text: "Design and execute controlled experiments using AWS Fault Injection Service (FIS) to inject AZ network disruptions, latency, and RDS failovers." },
      { id: 'B', text: "Shut down random production servers during peak business hours without stop conditions." },
      { id: 'C', text: "Assume multi-AZ deployment guarantees high availability without empirical validation." },
      { id: 'D', text: "Simulate failures only in non-cloud local desktop environments." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Design and execute controlled experiments using AWS Fault Injection Service (FIS) to inject AZ network disruptions, latency, and RDS failovers. AWS Fault Injection Service (FIS) is a managed service for running chaos engineering experiments. It provides pre-configured fault injection templates (stopping instances, throttling APIs, killing RDS primaries) with safety stop conditions to validate system resilience under real-world stress safely.",
    referenceUrl: "https://docs.aws.amazon.com/fis/latest/userguide/what-is.html",
    tags: ["Chaos Engineering", "AWS FIS", "High Load Scale"]
  },
  {
    id: "aws-dop-363",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "AWS Fault Injection Service (FIS) for Chaos Engineering: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of resource configurations, secret isolation, and governance across all AWS accounts. The DevOps engineer evaluates Chaos Engineering to test whether an auto-scaling, multi-AZ application gracefully survives sudden availability zone disconnects and database failovers before going live to customers.",
    question: "Which solution implements these mandatory compliance and security controls? Controlled fault injection testing of AZ failures and CPU stress with AWS FIS is under consideration.",
    options: [
      { id: 'A', text: "Design and execute controlled experiments using AWS Fault Injection Service (FIS) to inject AZ network disruptions, latency, and RDS failovers." },
      { id: 'B', text: "Shut down random production servers during peak business hours without stop conditions." },
      { id: 'C', text: "Assume multi-AZ deployment guarantees high availability without empirical validation." },
      { id: 'D', text: "Simulate failures only in non-cloud local desktop environments." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Design and execute controlled experiments using AWS Fault Injection Service (FIS) to inject AZ network disruptions, latency, and RDS failovers. AWS Fault Injection Service (FIS) is a managed service for running chaos engineering experiments. It provides pre-configured fault injection templates (stopping instances, throttling APIs, killing RDS primaries) with safety stop conditions to validate system resilience under real-world stress safely.",
    referenceUrl: "https://docs.aws.amazon.com/fis/latest/userguide/what-is.html",
    tags: ["Chaos Engineering", "AWS FIS", "Security Compliance"]
  },
  {
    id: "aws-dop-364",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "AWS Fault Injection Service (FIS) for Chaos Engineering: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on AWS. The DevOps engineer evaluates Chaos Engineering to test whether an auto-scaling, multi-AZ application gracefully survives sudden availability zone disconnects and database failovers before going live to customers.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Controlled fault injection testing of AZ failures and CPU stress with AWS FIS is under consideration.",
    options: [
      { id: 'A', text: "Design and execute controlled experiments using AWS Fault Injection Service (FIS) to inject AZ network disruptions, latency, and RDS failovers." },
      { id: 'B', text: "Shut down random production servers during peak business hours without stop conditions." },
      { id: 'C', text: "Assume multi-AZ deployment guarantees high availability without empirical validation." },
      { id: 'D', text: "Simulate failures only in non-cloud local desktop environments." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Design and execute controlled experiments using AWS Fault Injection Service (FIS) to inject AZ network disruptions, latency, and RDS failovers. AWS Fault Injection Service (FIS) is a managed service for running chaos engineering experiments. It provides pre-configured fault injection templates (stopping instances, throttling APIs, killing RDS primaries) with safety stop conditions to validate system resilience under real-world stress safely.",
    referenceUrl: "https://docs.aws.amazon.com/fis/latest/userguide/what-is.html",
    tags: ["Chaos Engineering", "AWS FIS", "Hybrid Migration"]
  },
  {
    id: "aws-dop-365",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "AWS Fault Injection Service (FIS) for Chaos Engineering: Resilience Failure",
    scenario: "A DevOps team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate incident response. The DevOps engineer evaluates Chaos Engineering to test whether an auto-scaling, multi-AZ application gracefully survives sudden availability zone disconnects and database failovers before going live to customers.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform stability? Controlled fault injection testing of AZ failures and CPU stress with AWS FIS is under consideration.",
    options: [
      { id: 'A', text: "Design and execute controlled experiments using AWS Fault Injection Service (FIS) to inject AZ network disruptions, latency, and RDS failovers." },
      { id: 'B', text: "Shut down random production servers during peak business hours without stop conditions." },
      { id: 'C', text: "Assume multi-AZ deployment guarantees high availability without empirical validation." },
      { id: 'D', text: "Simulate failures only in non-cloud local desktop environments." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Design and execute controlled experiments using AWS Fault Injection Service (FIS) to inject AZ network disruptions, latency, and RDS failovers. AWS Fault Injection Service (FIS) is a managed service for running chaos engineering experiments. It provides pre-configured fault injection templates (stopping instances, throttling APIs, killing RDS primaries) with safety stop conditions to validate system resilience under real-world stress safely.",
    referenceUrl: "https://docs.aws.amazon.com/fis/latest/userguide/what-is.html",
    tags: ["Chaos Engineering", "AWS FIS", "Resilience Failure"]
  },
  {
    id: "aws-dop-366",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Decoupling with Amazon SQS and Dead Letter Queues (DLQ): Dr Failover",
    scenario: "An enterprise DevOps organization is establishing cross-region operational continuity guidelines and high-availability architecture for AWS workloads. The DevOps engineer evaluates Asynchronous Decoupling to prevent backend order processing services from crashing during traffic spikes while isolating malformed messages that fail processing repeatedly.",
    question: "Which architectural approach or configuration satisfies these multi-region disaster recovery and resilience objectives? Buffering transaction bursts and isolating poisonous messages with SQS DLQs is under consideration.",
    options: [
      { id: 'A', text: "Place an Amazon SQS queue between frontend APIs and backend workers, and configure a Dead Letter Queue (DLQ) with `maxReceiveCount: 5` and a CloudWatch alarm." },
      { id: 'B', text: "Call backend worker APIs synchronously from the frontend web servers." },
      { id: 'C', text: "Discard any message that encounters an error immediately without logging." },
      { id: 'D', text: "Store orders in a flat text file on an ephemeral EC2 instance disk." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Place an Amazon SQS queue between frontend APIs and backend workers, and configure a Dead Letter Queue (DLQ) with `maxReceiveCount: 5` and a CloudWatch alarm. Amazon SQS buffers unpredictable request spikes, decoupling producers from consumers. Configuring a Dead Letter Queue (DLQ) moves poisonous or unparseable messages aside after `maxReceiveCount` retries, preventing head-of-line blocking and allowing engineering analysis.",
    referenceUrl: "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html",
    tags: ["Asynchronous Decoupling", "SQS and DLQ", "Dr Failover"]
  },
  {
    id: "aws-dop-367",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Decoupling with Amazon SQS and Dead Letter Queues (DLQ): High Load Scale",
    scenario: "A high-throughput AWS application experiences rapid surges in user traffic and transaction volume across multiple Availability Zones. The DevOps engineer evaluates Asynchronous Decoupling to prevent backend order processing services from crashing during traffic spikes while isolating malformed messages that fail processing repeatedly.",
    question: "Which engineering approach should the DevOps team select to manage this demand efficiently without manual intervention? Buffering transaction bursts and isolating poisonous messages with SQS DLQs is under consideration.",
    options: [
      { id: 'A', text: "Place an Amazon SQS queue between frontend APIs and backend workers, and configure a Dead Letter Queue (DLQ) with `maxReceiveCount: 5` and a CloudWatch alarm." },
      { id: 'B', text: "Call backend worker APIs synchronously from the frontend web servers." },
      { id: 'C', text: "Discard any message that encounters an error immediately without logging." },
      { id: 'D', text: "Store orders in a flat text file on an ephemeral EC2 instance disk." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Place an Amazon SQS queue between frontend APIs and backend workers, and configure a Dead Letter Queue (DLQ) with `maxReceiveCount: 5` and a CloudWatch alarm. Amazon SQS buffers unpredictable request spikes, decoupling producers from consumers. Configuring a Dead Letter Queue (DLQ) moves poisonous or unparseable messages aside after `maxReceiveCount` retries, preventing head-of-line blocking and allowing engineering analysis.",
    referenceUrl: "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html",
    tags: ["Asynchronous Decoupling", "SQS and DLQ", "High Load Scale"]
  },
  {
    id: "aws-dop-368",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Decoupling with Amazon SQS and Dead Letter Queues (DLQ): Security Compliance",
    scenario: "A security compliance auditor requires automated verification of resource configurations, secret isolation, and governance across all AWS accounts. The DevOps engineer evaluates Asynchronous Decoupling to prevent backend order processing services from crashing during traffic spikes while isolating malformed messages that fail processing repeatedly.",
    question: "Which solution implements these mandatory compliance and security controls? Buffering transaction bursts and isolating poisonous messages with SQS DLQs is under consideration.",
    options: [
      { id: 'A', text: "Place an Amazon SQS queue between frontend APIs and backend workers, and configure a Dead Letter Queue (DLQ) with `maxReceiveCount: 5` and a CloudWatch alarm." },
      { id: 'B', text: "Call backend worker APIs synchronously from the frontend web servers." },
      { id: 'C', text: "Discard any message that encounters an error immediately without logging." },
      { id: 'D', text: "Store orders in a flat text file on an ephemeral EC2 instance disk." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Place an Amazon SQS queue between frontend APIs and backend workers, and configure a Dead Letter Queue (DLQ) with `maxReceiveCount: 5` and a CloudWatch alarm. Amazon SQS buffers unpredictable request spikes, decoupling producers from consumers. Configuring a Dead Letter Queue (DLQ) moves poisonous or unparseable messages aside after `maxReceiveCount` retries, preventing head-of-line blocking and allowing engineering analysis.",
    referenceUrl: "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html",
    tags: ["Asynchronous Decoupling", "SQS and DLQ", "Security Compliance"]
  },
  {
    id: "aws-dop-369",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Decoupling with Amazon SQS and Dead Letter Queues (DLQ): Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on AWS. The DevOps engineer evaluates Asynchronous Decoupling to prevent backend order processing services from crashing during traffic spikes while isolating malformed messages that fail processing repeatedly.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Buffering transaction bursts and isolating poisonous messages with SQS DLQs is under consideration.",
    options: [
      { id: 'A', text: "Place an Amazon SQS queue between frontend APIs and backend workers, and configure a Dead Letter Queue (DLQ) with `maxReceiveCount: 5` and a CloudWatch alarm." },
      { id: 'B', text: "Call backend worker APIs synchronously from the frontend web servers." },
      { id: 'C', text: "Discard any message that encounters an error immediately without logging." },
      { id: 'D', text: "Store orders in a flat text file on an ephemeral EC2 instance disk." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Place an Amazon SQS queue between frontend APIs and backend workers, and configure a Dead Letter Queue (DLQ) with `maxReceiveCount: 5` and a CloudWatch alarm. Amazon SQS buffers unpredictable request spikes, decoupling producers from consumers. Configuring a Dead Letter Queue (DLQ) moves poisonous or unparseable messages aside after `maxReceiveCount` retries, preventing head-of-line blocking and allowing engineering analysis.",
    referenceUrl: "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html",
    tags: ["Asynchronous Decoupling", "SQS and DLQ", "Hybrid Migration"]
  },
  {
    id: "aws-dop-370",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Decoupling with Amazon SQS and Dead Letter Queues (DLQ): Resilience Failure",
    scenario: "A DevOps team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate incident response. The DevOps engineer evaluates Asynchronous Decoupling to prevent backend order processing services from crashing during traffic spikes while isolating malformed messages that fail processing repeatedly.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform stability? Buffering transaction bursts and isolating poisonous messages with SQS DLQs is under consideration.",
    options: [
      { id: 'A', text: "Place an Amazon SQS queue between frontend APIs and backend workers, and configure a Dead Letter Queue (DLQ) with `maxReceiveCount: 5` and a CloudWatch alarm." },
      { id: 'B', text: "Call backend worker APIs synchronously from the frontend web servers." },
      { id: 'C', text: "Discard any message that encounters an error immediately without logging." },
      { id: 'D', text: "Store orders in a flat text file on an ephemeral EC2 instance disk." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Place an Amazon SQS queue between frontend APIs and backend workers, and configure a Dead Letter Queue (DLQ) with `maxReceiveCount: 5` and a CloudWatch alarm. Amazon SQS buffers unpredictable request spikes, decoupling producers from consumers. Configuring a Dead Letter Queue (DLQ) moves poisonous or unparseable messages aside after `maxReceiveCount` retries, preventing head-of-line blocking and allowing engineering analysis.",
    referenceUrl: "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html",
    tags: ["Asynchronous Decoupling", "SQS and DLQ", "Resilience Failure"]
  },
  {
    id: "aws-dop-371",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Automating RDS Automated Backups and Cross-Region Copies: Dr Failover",
    scenario: "An enterprise DevOps organization is establishing cross-region operational continuity guidelines and high-availability architecture for AWS workloads. The DevOps engineer evaluates Database Resilience to ensure database recovery point objectives (RPO) are maintained even in the catastrophic event of a complete AWS regional failure.",
    question: "Which architectural approach or configuration satisfies these multi-region disaster recovery and resilience objectives? Enforcing automated RDS snapshots and scheduled cross-region snapshot replication is under consideration.",
    options: [
      { id: 'A', text: "Enable automated RDS backups with a retention period and configure AWS Backup or RDS automated cross-region snapshot copy with KMS encryption." },
      { id: 'B', text: "Take manual database dumps using mysqldump and store them on the local database host disk." },
      { id: 'C', text: "Rely on single-AZ database storage without backups." },
      { id: 'D', text: "Disable snapshot encryption to speed up copy times." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable automated RDS backups with a retention period and configure AWS Backup or RDS automated cross-region snapshot copy with KMS encryption. AWS Backup and RDS support automated cross-region snapshot replication. When an automated backup is taken in the primary region, it is copied asynchronously to a secondary disaster recovery region, encrypted with a regional KMS key, guaranteeing data durability against regional catastrophes.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_CopySnapshot.html#USER_CopySnapshot.CrossRegion",
    tags: ["Database Resilience", "Cross-Region Backups", "Dr Failover"]
  },
  {
    id: "aws-dop-372",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Automating RDS Automated Backups and Cross-Region Copies: High Load Scale",
    scenario: "A high-throughput AWS application experiences rapid surges in user traffic and transaction volume across multiple Availability Zones. The DevOps engineer evaluates Database Resilience to ensure database recovery point objectives (RPO) are maintained even in the catastrophic event of a complete AWS regional failure.",
    question: "Which engineering approach should the DevOps team select to manage this demand efficiently without manual intervention? Enforcing automated RDS snapshots and scheduled cross-region snapshot replication is under consideration.",
    options: [
      { id: 'A', text: "Enable automated RDS backups with a retention period and configure AWS Backup or RDS automated cross-region snapshot copy with KMS encryption." },
      { id: 'B', text: "Take manual database dumps using mysqldump and store them on the local database host disk." },
      { id: 'C', text: "Rely on single-AZ database storage without backups." },
      { id: 'D', text: "Disable snapshot encryption to speed up copy times." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable automated RDS backups with a retention period and configure AWS Backup or RDS automated cross-region snapshot copy with KMS encryption. AWS Backup and RDS support automated cross-region snapshot replication. When an automated backup is taken in the primary region, it is copied asynchronously to a secondary disaster recovery region, encrypted with a regional KMS key, guaranteeing data durability against regional catastrophes.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_CopySnapshot.html#USER_CopySnapshot.CrossRegion",
    tags: ["Database Resilience", "Cross-Region Backups", "High Load Scale"]
  },
  {
    id: "aws-dop-373",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Automating RDS Automated Backups and Cross-Region Copies: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of resource configurations, secret isolation, and governance across all AWS accounts. The DevOps engineer evaluates Database Resilience to ensure database recovery point objectives (RPO) are maintained even in the catastrophic event of a complete AWS regional failure.",
    question: "Which solution implements these mandatory compliance and security controls? Enforcing automated RDS snapshots and scheduled cross-region snapshot replication is under consideration.",
    options: [
      { id: 'A', text: "Enable automated RDS backups with a retention period and configure AWS Backup or RDS automated cross-region snapshot copy with KMS encryption." },
      { id: 'B', text: "Take manual database dumps using mysqldump and store them on the local database host disk." },
      { id: 'C', text: "Rely on single-AZ database storage without backups." },
      { id: 'D', text: "Disable snapshot encryption to speed up copy times." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable automated RDS backups with a retention period and configure AWS Backup or RDS automated cross-region snapshot copy with KMS encryption. AWS Backup and RDS support automated cross-region snapshot replication. When an automated backup is taken in the primary region, it is copied asynchronously to a secondary disaster recovery region, encrypted with a regional KMS key, guaranteeing data durability against regional catastrophes.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_CopySnapshot.html#USER_CopySnapshot.CrossRegion",
    tags: ["Database Resilience", "Cross-Region Backups", "Security Compliance"]
  },
  {
    id: "aws-dop-374",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Automating RDS Automated Backups and Cross-Region Copies: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on AWS. The DevOps engineer evaluates Database Resilience to ensure database recovery point objectives (RPO) are maintained even in the catastrophic event of a complete AWS regional failure.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Enforcing automated RDS snapshots and scheduled cross-region snapshot replication is under consideration.",
    options: [
      { id: 'A', text: "Enable automated RDS backups with a retention period and configure AWS Backup or RDS automated cross-region snapshot copy with KMS encryption." },
      { id: 'B', text: "Take manual database dumps using mysqldump and store them on the local database host disk." },
      { id: 'C', text: "Rely on single-AZ database storage without backups." },
      { id: 'D', text: "Disable snapshot encryption to speed up copy times." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable automated RDS backups with a retention period and configure AWS Backup or RDS automated cross-region snapshot copy with KMS encryption. AWS Backup and RDS support automated cross-region snapshot replication. When an automated backup is taken in the primary region, it is copied asynchronously to a secondary disaster recovery region, encrypted with a regional KMS key, guaranteeing data durability against regional catastrophes.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_CopySnapshot.html#USER_CopySnapshot.CrossRegion",
    tags: ["Database Resilience", "Cross-Region Backups", "Hybrid Migration"]
  },
  {
    id: "aws-dop-375",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Automating RDS Automated Backups and Cross-Region Copies: Resilience Failure",
    scenario: "A DevOps team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate incident response. The DevOps engineer evaluates Database Resilience to ensure database recovery point objectives (RPO) are maintained even in the catastrophic event of a complete AWS regional failure.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform stability? Enforcing automated RDS snapshots and scheduled cross-region snapshot replication is under consideration.",
    options: [
      { id: 'A', text: "Enable automated RDS backups with a retention period and configure AWS Backup or RDS automated cross-region snapshot copy with KMS encryption." },
      { id: 'B', text: "Take manual database dumps using mysqldump and store them on the local database host disk." },
      { id: 'C', text: "Rely on single-AZ database storage without backups." },
      { id: 'D', text: "Disable snapshot encryption to speed up copy times." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable automated RDS backups with a retention period and configure AWS Backup or RDS automated cross-region snapshot copy with KMS encryption. AWS Backup and RDS support automated cross-region snapshot replication. When an automated backup is taken in the primary region, it is copied asynchronously to a secondary disaster recovery region, encrypted with a regional KMS key, guaranteeing data durability against regional catastrophes.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_CopySnapshot.html#USER_CopySnapshot.CrossRegion",
    tags: ["Database Resilience", "Cross-Region Backups", "Resilience Failure"]
  }
];

export default AWS_DOP_QUESTIONS_15;
