export const AWS_DOP_QUESTIONS_5 = [
  {
    id: "aws-dop-101",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Dead-Letter Queue (DLQ) Redrive Policies",
    scenario: "A payment processing microservice consumes messages from an Amazon SQS standard queue. Occasionally, corrupted transaction payloads cause the consumer Lambda function to throw exceptions and fail repeatedly.",
    question: "How should the architecture be updated to prevent poisoned messages from blocking the processing queue?",
    options: [
      { id: 'A', text: "Configure the Lambda function to delete any message that fails on the first attempt without logging" },
      { id: 'B', text: "Replace the standard queue with an Amazon SNS FIFO topic with zero retries" },
      { id: 'C', text: "Increase the SQS visibility timeout to 12 hours so failed messages remain hidden" },
      { id: 'D', text: "Configure an Amazon SQS Dead-Letter Queue (DLQ) with a maxReceiveCount threshold, and use SQS dead-letter queue redrive to reprocess messages after fixing the underlying bug" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "An Amazon SQS Dead-Letter Queue (DLQ) isolates messages that cannot be processed successfully after a designated number of attempts (maxReceiveCount). This prevents unprocessable 'poison-pill' messages from looping indefinitely and consuming system capacity, allowing engineers to analyze and redrive messages once remediated.",
    referenceUrl: "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html",
    tags: ["SQS", "DLQ", "Lambda", "Resilience"]
  },
  {
    id: "aws-dop-102",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Resilient Cloud Solutions Scenario #1",
    scenario: "A DevOps team is architecting fault-tolerant distributed systems capable of surviving zone outages and traffic spikes without degradation.",
    question: "Which architecture provides optimal resilience and high availability for scenario #1?",
    options: [
      { id: 'A', text: "Relying on manual DNS updates to redirect traffic to static maintenance error pages" },
      { id: 'B', text: "Disabling all health checks and timeouts to allow backlogged requests to accumulate" },
      { id: 'C', text: "Single-instance standalone deployment in a single Availability Zone without automated backups" },
      { id: 'D', text: "Multi-AZ deployment behind an Application Load Balancer with auto-healing Auto Scaling groups and cross-zone replication" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Resilient cloud architectures in AWS require distributing stateless application tiers across multiple Availability Zones with automated health checks, target tracking scaling policies, and managed multi-AZ database backends.",
    referenceUrl: "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html",
    tags: ["Resilience", "High Availability", "Auto Scaling"]
  },
  {
    id: "aws-dop-103",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Resilient Cloud Solutions Scenario #2",
    scenario: "A DevOps team is architecting fault-tolerant distributed systems capable of surviving zone outages and traffic spikes without degradation.",
    question: "Which architecture provides optimal resilience and high availability for scenario #2?",
    options: [
      { id: 'A', text: "Multi-AZ deployment behind an Application Load Balancer with auto-healing Auto Scaling groups and cross-zone replication" },
      { id: 'B', text: "Relying on manual DNS updates to redirect traffic to static maintenance error pages" },
      { id: 'C', text: "Disabling all health checks and timeouts to allow backlogged requests to accumulate" },
      { id: 'D', text: "Single-instance standalone deployment in a single Availability Zone without automated backups" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Resilient cloud architectures in AWS require distributing stateless application tiers across multiple Availability Zones with automated health checks, target tracking scaling policies, and managed multi-AZ database backends.",
    referenceUrl: "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html",
    tags: ["Resilience", "High Availability", "Auto Scaling"]
  },
  {
    id: "aws-dop-104",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Resilient Cloud Solutions Scenario #3",
    scenario: "A DevOps team is architecting fault-tolerant distributed systems capable of surviving zone outages and traffic spikes without degradation.",
    question: "Which architecture provides optimal resilience and high availability for scenario #3?",
    options: [
      { id: 'A', text: "Single-instance standalone deployment in a single Availability Zone without automated backups" },
      { id: 'B', text: "Multi-AZ deployment behind an Application Load Balancer with auto-healing Auto Scaling groups and cross-zone replication" },
      { id: 'C', text: "Relying on manual DNS updates to redirect traffic to static maintenance error pages" },
      { id: 'D', text: "Disabling all health checks and timeouts to allow backlogged requests to accumulate" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Resilient cloud architectures in AWS require distributing stateless application tiers across multiple Availability Zones with automated health checks, target tracking scaling policies, and managed multi-AZ database backends.",
    referenceUrl: "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html",
    tags: ["Resilience", "High Availability", "Auto Scaling"]
  },
  {
    id: "aws-dop-105",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Resilient Cloud Solutions Scenario #4",
    scenario: "A DevOps team is architecting fault-tolerant distributed systems capable of surviving zone outages and traffic spikes without degradation.",
    question: "Which architecture provides optimal resilience and high availability for scenario #4?",
    options: [
      { id: 'A', text: "Disabling all health checks and timeouts to allow backlogged requests to accumulate" },
      { id: 'B', text: "Multi-AZ deployment behind an Application Load Balancer with auto-healing Auto Scaling groups and cross-zone replication" },
      { id: 'C', text: "Single-instance standalone deployment in a single Availability Zone without automated backups" },
      { id: 'D', text: "Relying on manual DNS updates to redirect traffic to static maintenance error pages" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Resilient cloud architectures in AWS require distributing stateless application tiers across multiple Availability Zones with automated health checks, target tracking scaling policies, and managed multi-AZ database backends.",
    referenceUrl: "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html",
    tags: ["Resilience", "High Availability", "Auto Scaling"]
  },
  {
    id: "aws-dop-106",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Resilient Cloud Solutions Scenario #5",
    scenario: "A DevOps team is architecting fault-tolerant distributed systems capable of surviving zone outages and traffic spikes without degradation.",
    question: "Which architecture provides optimal resilience and high availability for scenario #5?",
    options: [
      { id: 'A', text: "Multi-AZ deployment behind an Application Load Balancer with auto-healing Auto Scaling groups and cross-zone replication" },
      { id: 'B', text: "Disabling all health checks and timeouts to allow backlogged requests to accumulate" },
      { id: 'C', text: "Single-instance standalone deployment in a single Availability Zone without automated backups" },
      { id: 'D', text: "Relying on manual DNS updates to redirect traffic to static maintenance error pages" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Resilient cloud architectures in AWS require distributing stateless application tiers across multiple Availability Zones with automated health checks, target tracking scaling policies, and managed multi-AZ database backends.",
    referenceUrl: "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html",
    tags: ["Resilience", "High Availability", "Auto Scaling"]
  },
  {
    id: "aws-dop-107",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Resilient Cloud Solutions Scenario #6",
    scenario: "A DevOps team is architecting fault-tolerant distributed systems capable of surviving zone outages and traffic spikes without degradation.",
    question: "Which architecture provides optimal resilience and high availability for scenario #6?",
    options: [
      { id: 'A', text: "Multi-AZ deployment behind an Application Load Balancer with auto-healing Auto Scaling groups and cross-zone replication" },
      { id: 'B', text: "Single-instance standalone deployment in a single Availability Zone without automated backups" },
      { id: 'C', text: "Disabling all health checks and timeouts to allow backlogged requests to accumulate" },
      { id: 'D', text: "Relying on manual DNS updates to redirect traffic to static maintenance error pages" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Resilient cloud architectures in AWS require distributing stateless application tiers across multiple Availability Zones with automated health checks, target tracking scaling policies, and managed multi-AZ database backends.",
    referenceUrl: "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html",
    tags: ["Resilience", "High Availability", "Auto Scaling"]
  },
  {
    id: "aws-dop-108",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Resilient Cloud Solutions Scenario #7",
    scenario: "A DevOps team is architecting fault-tolerant distributed systems capable of surviving zone outages and traffic spikes without degradation.",
    question: "Which architecture provides optimal resilience and high availability for scenario #7?",
    options: [
      { id: 'A', text: "Single-instance standalone deployment in a single Availability Zone without automated backups" },
      { id: 'B', text: "Disabling all health checks and timeouts to allow backlogged requests to accumulate" },
      { id: 'C', text: "Relying on manual DNS updates to redirect traffic to static maintenance error pages" },
      { id: 'D', text: "Multi-AZ deployment behind an Application Load Balancer with auto-healing Auto Scaling groups and cross-zone replication" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Resilient cloud architectures in AWS require distributing stateless application tiers across multiple Availability Zones with automated health checks, target tracking scaling policies, and managed multi-AZ database backends.",
    referenceUrl: "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html",
    tags: ["Resilience", "High Availability", "Auto Scaling"]
  },
  {
    id: "aws-dop-109",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Resilient Cloud Solutions Scenario #8",
    scenario: "A DevOps team is architecting fault-tolerant distributed systems capable of surviving zone outages and traffic spikes without degradation.",
    question: "Which architecture provides optimal resilience and high availability for scenario #8?",
    options: [
      { id: 'A', text: "Relying on manual DNS updates to redirect traffic to static maintenance error pages" },
      { id: 'B', text: "Single-instance standalone deployment in a single Availability Zone without automated backups" },
      { id: 'C', text: "Multi-AZ deployment behind an Application Load Balancer with auto-healing Auto Scaling groups and cross-zone replication" },
      { id: 'D', text: "Disabling all health checks and timeouts to allow backlogged requests to accumulate" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Resilient cloud architectures in AWS require distributing stateless application tiers across multiple Availability Zones with automated health checks, target tracking scaling policies, and managed multi-AZ database backends.",
    referenceUrl: "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html",
    tags: ["Resilience", "High Availability", "Auto Scaling"]
  },
  {
    id: "aws-dop-110",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Resilient Cloud Solutions Scenario #9",
    scenario: "A DevOps team is architecting fault-tolerant distributed systems capable of surviving zone outages and traffic spikes without degradation.",
    question: "Which architecture provides optimal resilience and high availability for scenario #9?",
    options: [
      { id: 'A', text: "Relying on manual DNS updates to redirect traffic to static maintenance error pages" },
      { id: 'B', text: "Single-instance standalone deployment in a single Availability Zone without automated backups" },
      { id: 'C', text: "Multi-AZ deployment behind an Application Load Balancer with auto-healing Auto Scaling groups and cross-zone replication" },
      { id: 'D', text: "Disabling all health checks and timeouts to allow backlogged requests to accumulate" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Resilient cloud architectures in AWS require distributing stateless application tiers across multiple Availability Zones with automated health checks, target tracking scaling policies, and managed multi-AZ database backends.",
    referenceUrl: "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html",
    tags: ["Resilience", "High Availability", "Auto Scaling"]
  },
  {
    id: "aws-dop-111",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Resilient Cloud Solutions Scenario #10",
    scenario: "A DevOps team is architecting fault-tolerant distributed systems capable of surviving zone outages and traffic spikes without degradation.",
    question: "Which architecture provides optimal resilience and high availability for scenario #10?",
    options: [
      { id: 'A', text: "Multi-AZ deployment behind an Application Load Balancer with auto-healing Auto Scaling groups and cross-zone replication" },
      { id: 'B', text: "Single-instance standalone deployment in a single Availability Zone without automated backups" },
      { id: 'C', text: "Disabling all health checks and timeouts to allow backlogged requests to accumulate" },
      { id: 'D', text: "Relying on manual DNS updates to redirect traffic to static maintenance error pages" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Resilient cloud architectures in AWS require distributing stateless application tiers across multiple Availability Zones with automated health checks, target tracking scaling policies, and managed multi-AZ database backends.",
    referenceUrl: "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html",
    tags: ["Resilience", "High Availability", "Auto Scaling"]
  },
  {
    id: "aws-dop-112",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Resilient Cloud Solutions Scenario #11",
    scenario: "A DevOps team is architecting fault-tolerant distributed systems capable of surviving zone outages and traffic spikes without degradation.",
    question: "Which architecture provides optimal resilience and high availability for scenario #11?",
    options: [
      { id: 'A', text: "Multi-AZ deployment behind an Application Load Balancer with auto-healing Auto Scaling groups and cross-zone replication" },
      { id: 'B', text: "Disabling all health checks and timeouts to allow backlogged requests to accumulate" },
      { id: 'C', text: "Single-instance standalone deployment in a single Availability Zone without automated backups" },
      { id: 'D', text: "Relying on manual DNS updates to redirect traffic to static maintenance error pages" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Resilient cloud architectures in AWS require distributing stateless application tiers across multiple Availability Zones with automated health checks, target tracking scaling policies, and managed multi-AZ database backends.",
    referenceUrl: "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html",
    tags: ["Resilience", "High Availability", "Auto Scaling"]
  },
  {
    id: "aws-dop-113",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Resilient Cloud Solutions Scenario #12",
    scenario: "A DevOps team is architecting fault-tolerant distributed systems capable of surviving zone outages and traffic spikes without degradation.",
    question: "Which architecture provides optimal resilience and high availability for scenario #12?",
    options: [
      { id: 'A', text: "Disabling all health checks and timeouts to allow backlogged requests to accumulate" },
      { id: 'B', text: "Multi-AZ deployment behind an Application Load Balancer with auto-healing Auto Scaling groups and cross-zone replication" },
      { id: 'C', text: "Relying on manual DNS updates to redirect traffic to static maintenance error pages" },
      { id: 'D', text: "Single-instance standalone deployment in a single Availability Zone without automated backups" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Resilient cloud architectures in AWS require distributing stateless application tiers across multiple Availability Zones with automated health checks, target tracking scaling policies, and managed multi-AZ database backends.",
    referenceUrl: "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html",
    tags: ["Resilience", "High Availability", "Auto Scaling"]
  },
  {
    id: "aws-dop-114",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Resilient Cloud Solutions Scenario #13",
    scenario: "A DevOps team is architecting fault-tolerant distributed systems capable of surviving zone outages and traffic spikes without degradation.",
    question: "Which architecture provides optimal resilience and high availability for scenario #13?",
    options: [
      { id: 'A', text: "Relying on manual DNS updates to redirect traffic to static maintenance error pages" },
      { id: 'B', text: "Single-instance standalone deployment in a single Availability Zone without automated backups" },
      { id: 'C', text: "Multi-AZ deployment behind an Application Load Balancer with auto-healing Auto Scaling groups and cross-zone replication" },
      { id: 'D', text: "Disabling all health checks and timeouts to allow backlogged requests to accumulate" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Resilient cloud architectures in AWS require distributing stateless application tiers across multiple Availability Zones with automated health checks, target tracking scaling policies, and managed multi-AZ database backends.",
    referenceUrl: "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html",
    tags: ["Resilience", "High Availability", "Auto Scaling"]
  },
  {
    id: "aws-dop-115",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Resilient Cloud Solutions Scenario #14",
    scenario: "A DevOps team is architecting fault-tolerant distributed systems capable of surviving zone outages and traffic spikes without degradation.",
    question: "Which architecture provides optimal resilience and high availability for scenario #14?",
    options: [
      { id: 'A', text: "Relying on manual DNS updates to redirect traffic to static maintenance error pages" },
      { id: 'B', text: "Single-instance standalone deployment in a single Availability Zone without automated backups" },
      { id: 'C', text: "Disabling all health checks and timeouts to allow backlogged requests to accumulate" },
      { id: 'D', text: "Multi-AZ deployment behind an Application Load Balancer with auto-healing Auto Scaling groups and cross-zone replication" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Resilient cloud architectures in AWS require distributing stateless application tiers across multiple Availability Zones with automated health checks, target tracking scaling policies, and managed multi-AZ database backends.",
    referenceUrl: "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html",
    tags: ["Resilience", "High Availability", "Auto Scaling"]
  },
  {
    id: "aws-dop-116",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Resilient Cloud Solutions Scenario #15",
    scenario: "A DevOps team is architecting fault-tolerant distributed systems capable of surviving zone outages and traffic spikes without degradation.",
    question: "Which architecture provides optimal resilience and high availability for scenario #15?",
    options: [
      { id: 'A', text: "Single-instance standalone deployment in a single Availability Zone without automated backups" },
      { id: 'B', text: "Relying on manual DNS updates to redirect traffic to static maintenance error pages" },
      { id: 'C', text: "Multi-AZ deployment behind an Application Load Balancer with auto-healing Auto Scaling groups and cross-zone replication" },
      { id: 'D', text: "Disabling all health checks and timeouts to allow backlogged requests to accumulate" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Resilient cloud architectures in AWS require distributing stateless application tiers across multiple Availability Zones with automated health checks, target tracking scaling policies, and managed multi-AZ database backends.",
    referenceUrl: "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html",
    tags: ["Resilience", "High Availability", "Auto Scaling"]
  },
  {
    id: "aws-dop-117",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Resilient Cloud Solutions Scenario #16",
    scenario: "A DevOps team is architecting fault-tolerant distributed systems capable of surviving zone outages and traffic spikes without degradation.",
    question: "Which architecture provides optimal resilience and high availability for scenario #16?",
    options: [
      { id: 'A', text: "Disabling all health checks and timeouts to allow backlogged requests to accumulate" },
      { id: 'B', text: "Single-instance standalone deployment in a single Availability Zone without automated backups" },
      { id: 'C', text: "Relying on manual DNS updates to redirect traffic to static maintenance error pages" },
      { id: 'D', text: "Multi-AZ deployment behind an Application Load Balancer with auto-healing Auto Scaling groups and cross-zone replication" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Resilient cloud architectures in AWS require distributing stateless application tiers across multiple Availability Zones with automated health checks, target tracking scaling policies, and managed multi-AZ database backends.",
    referenceUrl: "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html",
    tags: ["Resilience", "High Availability", "Auto Scaling"]
  },
  {
    id: "aws-dop-118",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Resilient Cloud Solutions Scenario #17",
    scenario: "A DevOps team is architecting fault-tolerant distributed systems capable of surviving zone outages and traffic spikes without degradation.",
    question: "Which architecture provides optimal resilience and high availability for scenario #17?",
    options: [
      { id: 'A', text: "Single-instance standalone deployment in a single Availability Zone without automated backups" },
      { id: 'B', text: "Multi-AZ deployment behind an Application Load Balancer with auto-healing Auto Scaling groups and cross-zone replication" },
      { id: 'C', text: "Disabling all health checks and timeouts to allow backlogged requests to accumulate" },
      { id: 'D', text: "Relying on manual DNS updates to redirect traffic to static maintenance error pages" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Resilient cloud architectures in AWS require distributing stateless application tiers across multiple Availability Zones with automated health checks, target tracking scaling policies, and managed multi-AZ database backends.",
    referenceUrl: "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html",
    tags: ["Resilience", "High Availability", "Auto Scaling"]
  },
  {
    id: "aws-dop-119",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Resilient Cloud Solutions Scenario #18",
    scenario: "A DevOps team is architecting fault-tolerant distributed systems capable of surviving zone outages and traffic spikes without degradation.",
    question: "Which architecture provides optimal resilience and high availability for scenario #18?",
    options: [
      { id: 'A', text: "Multi-AZ deployment behind an Application Load Balancer with auto-healing Auto Scaling groups and cross-zone replication" },
      { id: 'B', text: "Single-instance standalone deployment in a single Availability Zone without automated backups" },
      { id: 'C', text: "Relying on manual DNS updates to redirect traffic to static maintenance error pages" },
      { id: 'D', text: "Disabling all health checks and timeouts to allow backlogged requests to accumulate" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Resilient cloud architectures in AWS require distributing stateless application tiers across multiple Availability Zones with automated health checks, target tracking scaling policies, and managed multi-AZ database backends.",
    referenceUrl: "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html",
    tags: ["Resilience", "High Availability", "Auto Scaling"]
  },
  {
    id: "aws-dop-120",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Resilient Cloud Solutions Scenario #19",
    scenario: "A DevOps team is architecting fault-tolerant distributed systems capable of surviving zone outages and traffic spikes without degradation.",
    question: "Which architecture provides optimal resilience and high availability for scenario #19?",
    options: [
      { id: 'A', text: "Relying on manual DNS updates to redirect traffic to static maintenance error pages" },
      { id: 'B', text: "Disabling all health checks and timeouts to allow backlogged requests to accumulate" },
      { id: 'C', text: "Multi-AZ deployment behind an Application Load Balancer with auto-healing Auto Scaling groups and cross-zone replication" },
      { id: 'D', text: "Single-instance standalone deployment in a single Availability Zone without automated backups" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Resilient cloud architectures in AWS require distributing stateless application tiers across multiple Availability Zones with automated health checks, target tracking scaling policies, and managed multi-AZ database backends.",
    referenceUrl: "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html",
    tags: ["Resilience", "High Availability", "Auto Scaling"]
  },
  {
    id: "aws-dop-121",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Resilient Cloud Solutions Scenario #20",
    scenario: "A DevOps team is architecting fault-tolerant distributed systems capable of surviving zone outages and traffic spikes without degradation.",
    question: "Which architecture provides optimal resilience and high availability for scenario #20?",
    options: [
      { id: 'A', text: "Single-instance standalone deployment in a single Availability Zone without automated backups" },
      { id: 'B', text: "Disabling all health checks and timeouts to allow backlogged requests to accumulate" },
      { id: 'C', text: "Relying on manual DNS updates to redirect traffic to static maintenance error pages" },
      { id: 'D', text: "Multi-AZ deployment behind an Application Load Balancer with auto-healing Auto Scaling groups and cross-zone replication" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Resilient cloud architectures in AWS require distributing stateless application tiers across multiple Availability Zones with automated health checks, target tracking scaling policies, and managed multi-AZ database backends.",
    referenceUrl: "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html",
    tags: ["Resilience", "High Availability", "Auto Scaling"]
  },
  {
    id: "aws-dop-122",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Resilient Cloud Solutions Scenario #21",
    scenario: "A DevOps team is architecting fault-tolerant distributed systems capable of surviving zone outages and traffic spikes without degradation.",
    question: "Which architecture provides optimal resilience and high availability for scenario #21?",
    options: [
      { id: 'A', text: "Multi-AZ deployment behind an Application Load Balancer with auto-healing Auto Scaling groups and cross-zone replication" },
      { id: 'B', text: "Relying on manual DNS updates to redirect traffic to static maintenance error pages" },
      { id: 'C', text: "Disabling all health checks and timeouts to allow backlogged requests to accumulate" },
      { id: 'D', text: "Single-instance standalone deployment in a single Availability Zone without automated backups" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Resilient cloud architectures in AWS require distributing stateless application tiers across multiple Availability Zones with automated health checks, target tracking scaling policies, and managed multi-AZ database backends.",
    referenceUrl: "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html",
    tags: ["Resilience", "High Availability", "Auto Scaling"]
  },
  {
    id: "aws-dop-123",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Resilient Cloud Solutions Scenario #22",
    scenario: "A DevOps team is architecting fault-tolerant distributed systems capable of surviving zone outages and traffic spikes without degradation.",
    question: "Which architecture provides optimal resilience and high availability for scenario #22?",
    options: [
      { id: 'A', text: "Disabling all health checks and timeouts to allow backlogged requests to accumulate" },
      { id: 'B', text: "Multi-AZ deployment behind an Application Load Balancer with auto-healing Auto Scaling groups and cross-zone replication" },
      { id: 'C', text: "Relying on manual DNS updates to redirect traffic to static maintenance error pages" },
      { id: 'D', text: "Single-instance standalone deployment in a single Availability Zone without automated backups" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Resilient cloud architectures in AWS require distributing stateless application tiers across multiple Availability Zones with automated health checks, target tracking scaling policies, and managed multi-AZ database backends.",
    referenceUrl: "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html",
    tags: ["Resilience", "High Availability", "Auto Scaling"]
  },
  {
    id: "aws-dop-124",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Resilient Cloud Solutions Scenario #23",
    scenario: "A DevOps team is architecting fault-tolerant distributed systems capable of surviving zone outages and traffic spikes without degradation.",
    question: "Which architecture provides optimal resilience and high availability for scenario #23?",
    options: [
      { id: 'A', text: "Multi-AZ deployment behind an Application Load Balancer with auto-healing Auto Scaling groups and cross-zone replication" },
      { id: 'B', text: "Disabling all health checks and timeouts to allow backlogged requests to accumulate" },
      { id: 'C', text: "Relying on manual DNS updates to redirect traffic to static maintenance error pages" },
      { id: 'D', text: "Single-instance standalone deployment in a single Availability Zone without automated backups" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Resilient cloud architectures in AWS require distributing stateless application tiers across multiple Availability Zones with automated health checks, target tracking scaling policies, and managed multi-AZ database backends.",
    referenceUrl: "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html",
    tags: ["Resilience", "High Availability", "Auto Scaling"]
  },
  {
    id: "aws-dop-125",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Resilient Cloud Solutions Scenario #24",
    scenario: "A DevOps team is architecting fault-tolerant distributed systems capable of surviving zone outages and traffic spikes without degradation.",
    question: "Which architecture provides optimal resilience and high availability for scenario #24?",
    options: [
      { id: 'A', text: "Disabling all health checks and timeouts to allow backlogged requests to accumulate" },
      { id: 'B', text: "Single-instance standalone deployment in a single Availability Zone without automated backups" },
      { id: 'C', text: "Multi-AZ deployment behind an Application Load Balancer with auto-healing Auto Scaling groups and cross-zone replication" },
      { id: 'D', text: "Relying on manual DNS updates to redirect traffic to static maintenance error pages" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Resilient cloud architectures in AWS require distributing stateless application tiers across multiple Availability Zones with automated health checks, target tracking scaling policies, and managed multi-AZ database backends.",
    referenceUrl: "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html",
    tags: ["Resilience", "High Availability", "Auto Scaling"]
  }
];

export default AWS_DOP_QUESTIONS_5;
