export const AWS_DOP_QUESTIONS_16 = [
  {
    id: "aws-dop-376",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Application Load Balancer Cross-Zone Load Balancing: Dr Failover",
    scenario: "An enterprise DevOps organization is establishing cross-region operational continuity guidelines and high-availability architecture for AWS workloads. The DevOps engineer evaluates Load Balancing to prevent uneven server load and request queuing when client connections are distributed unevenly across Availability Zones.",
    question: "Which architectural approach or configuration satisfies these multi-region disaster recovery and resilience objectives? Balancing traffic evenly across AZs with ALB cross-zone load balancing is under consideration.",
    options: [
      { id: 'A', text: "Enable cross-zone load balancing on the Application Load Balancer (enabled by default on ALB)." },
      { id: 'B', text: "Disable cross-zone load balancing to restrict traffic strictly to local AZ targets." },
      { id: 'C', text: "Use DNS round-robin without a load balancer." },
      { id: 'D', text: "Deploy independent monolithic servers in each AZ without shared state." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable cross-zone load balancing on the Application Load Balancer (enabled by default on ALB). When cross-zone load balancing is enabled on an Application Load Balancer, each load balancer node distributes incoming traffic evenly across all registered targets in all enabled Availability Zones, preventing individual AZ targets from becoming overloaded while others sit idle.",
    referenceUrl: "https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html#modify-cross-zone-load-balancing",
    tags: ["Load Balancing", "Cross-Zone Balancing", "Dr Failover"]
  },
  {
    id: "aws-dop-377",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Application Load Balancer Cross-Zone Load Balancing: High Load Scale",
    scenario: "A high-throughput AWS application experiences rapid surges in user traffic and transaction volume across multiple Availability Zones. The DevOps engineer evaluates Load Balancing to prevent uneven server load and request queuing when client connections are distributed unevenly across Availability Zones.",
    question: "Which engineering approach should the DevOps team select to manage this demand efficiently without manual intervention? Balancing traffic evenly across AZs with ALB cross-zone load balancing is under consideration.",
    options: [
      { id: 'A', text: "Enable cross-zone load balancing on the Application Load Balancer (enabled by default on ALB)." },
      { id: 'B', text: "Disable cross-zone load balancing to restrict traffic strictly to local AZ targets." },
      { id: 'C', text: "Use DNS round-robin without a load balancer." },
      { id: 'D', text: "Deploy independent monolithic servers in each AZ without shared state." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable cross-zone load balancing on the Application Load Balancer (enabled by default on ALB). When cross-zone load balancing is enabled on an Application Load Balancer, each load balancer node distributes incoming traffic evenly across all registered targets in all enabled Availability Zones, preventing individual AZ targets from becoming overloaded while others sit idle.",
    referenceUrl: "https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html#modify-cross-zone-load-balancing",
    tags: ["Load Balancing", "Cross-Zone Balancing", "High Load Scale"]
  },
  {
    id: "aws-dop-378",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Application Load Balancer Cross-Zone Load Balancing: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of resource configurations, secret isolation, and governance across all AWS accounts. The DevOps engineer evaluates Load Balancing to prevent uneven server load and request queuing when client connections are distributed unevenly across Availability Zones.",
    question: "Which solution implements these mandatory compliance and security controls? Balancing traffic evenly across AZs with ALB cross-zone load balancing is under consideration.",
    options: [
      { id: 'A', text: "Enable cross-zone load balancing on the Application Load Balancer (enabled by default on ALB)." },
      { id: 'B', text: "Disable cross-zone load balancing to restrict traffic strictly to local AZ targets." },
      { id: 'C', text: "Use DNS round-robin without a load balancer." },
      { id: 'D', text: "Deploy independent monolithic servers in each AZ without shared state." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable cross-zone load balancing on the Application Load Balancer (enabled by default on ALB). When cross-zone load balancing is enabled on an Application Load Balancer, each load balancer node distributes incoming traffic evenly across all registered targets in all enabled Availability Zones, preventing individual AZ targets from becoming overloaded while others sit idle.",
    referenceUrl: "https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html#modify-cross-zone-load-balancing",
    tags: ["Load Balancing", "Cross-Zone Balancing", "Security Compliance"]
  },
  {
    id: "aws-dop-379",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Application Load Balancer Cross-Zone Load Balancing: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on AWS. The DevOps engineer evaluates Load Balancing to prevent uneven server load and request queuing when client connections are distributed unevenly across Availability Zones.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Balancing traffic evenly across AZs with ALB cross-zone load balancing is under consideration.",
    options: [
      { id: 'A', text: "Enable cross-zone load balancing on the Application Load Balancer (enabled by default on ALB)." },
      { id: 'B', text: "Disable cross-zone load balancing to restrict traffic strictly to local AZ targets." },
      { id: 'C', text: "Use DNS round-robin without a load balancer." },
      { id: 'D', text: "Deploy independent monolithic servers in each AZ without shared state." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable cross-zone load balancing on the Application Load Balancer (enabled by default on ALB). When cross-zone load balancing is enabled on an Application Load Balancer, each load balancer node distributes incoming traffic evenly across all registered targets in all enabled Availability Zones, preventing individual AZ targets from becoming overloaded while others sit idle.",
    referenceUrl: "https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html#modify-cross-zone-load-balancing",
    tags: ["Load Balancing", "Cross-Zone Balancing", "Hybrid Migration"]
  },
  {
    id: "aws-dop-380",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Application Load Balancer Cross-Zone Load Balancing: Resilience Failure",
    scenario: "A DevOps team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate incident response. The DevOps engineer evaluates Load Balancing to prevent uneven server load and request queuing when client connections are distributed unevenly across Availability Zones.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform stability? Balancing traffic evenly across AZs with ALB cross-zone load balancing is under consideration.",
    options: [
      { id: 'A', text: "Enable cross-zone load balancing on the Application Load Balancer (enabled by default on ALB)." },
      { id: 'B', text: "Disable cross-zone load balancing to restrict traffic strictly to local AZ targets." },
      { id: 'C', text: "Use DNS round-robin without a load balancer." },
      { id: 'D', text: "Deploy independent monolithic servers in each AZ without shared state." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable cross-zone load balancing on the Application Load Balancer (enabled by default on ALB). When cross-zone load balancing is enabled on an Application Load Balancer, each load balancer node distributes incoming traffic evenly across all registered targets in all enabled Availability Zones, preventing individual AZ targets from becoming overloaded while others sit idle.",
    referenceUrl: "https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html#modify-cross-zone-load-balancing",
    tags: ["Load Balancing", "Cross-Zone Balancing", "Resilience Failure"]
  },
  {
    id: "aws-dop-381",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Self-Healing Auto Scaling Groups with Health Checks: Dr Failover",
    scenario: "An enterprise DevOps organization is establishing cross-region operational continuity guidelines and high-availability architecture for AWS workloads. The DevOps engineer evaluates Self-Healing Infrastructure to ensure that EC2 instances failing application HTTP health checks are automatically terminated and replaced by healthy instances in the Auto Scaling group.",
    question: "Which architectural approach or configuration satisfies these multi-region disaster recovery and resilience objectives? Using ELB health checks on Auto Scaling groups to replace impaired instances is under consideration.",
    options: [
      { id: 'A', text: "Configure the Auto Scaling group health check type to `ELB` and set a reasonable `HealthCheckGracePeriod`." },
      { id: 'B', text: "Set the health check type to `EC2` exclusively, ignoring application-level web server crashes." },
      { id: 'C', text: "Disable Auto Scaling health checks entirely." },
      { id: 'D', text: "Instruct operations personnel to manually terminate unresponsive instances." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the Auto Scaling group health check type to `ELB` and set a reasonable `HealthCheckGracePeriod`. By default, Auto Scaling groups use `EC2` health checks, which only detect hardware and hypervisor failures. Changing health check type to `ELB` causes the ASG to terminate and replace instances whenever the Application Load Balancer marks them unhealthy, enabling automated self-healing for crashed software.",
    referenceUrl: "https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-add-elb-healthcheck.html",
    tags: ["Self-Healing Infrastructure", "ASG Health Checks", "Dr Failover"]
  },
  {
    id: "aws-dop-382",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Self-Healing Auto Scaling Groups with Health Checks: High Load Scale",
    scenario: "A high-throughput AWS application experiences rapid surges in user traffic and transaction volume across multiple Availability Zones. The DevOps engineer evaluates Self-Healing Infrastructure to ensure that EC2 instances failing application HTTP health checks are automatically terminated and replaced by healthy instances in the Auto Scaling group.",
    question: "Which engineering approach should the DevOps team select to manage this demand efficiently without manual intervention? Using ELB health checks on Auto Scaling groups to replace impaired instances is under consideration.",
    options: [
      { id: 'A', text: "Configure the Auto Scaling group health check type to `ELB` and set a reasonable `HealthCheckGracePeriod`." },
      { id: 'B', text: "Set the health check type to `EC2` exclusively, ignoring application-level web server crashes." },
      { id: 'C', text: "Disable Auto Scaling health checks entirely." },
      { id: 'D', text: "Instruct operations personnel to manually terminate unresponsive instances." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the Auto Scaling group health check type to `ELB` and set a reasonable `HealthCheckGracePeriod`. By default, Auto Scaling groups use `EC2` health checks, which only detect hardware and hypervisor failures. Changing health check type to `ELB` causes the ASG to terminate and replace instances whenever the Application Load Balancer marks them unhealthy, enabling automated self-healing for crashed software.",
    referenceUrl: "https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-add-elb-healthcheck.html",
    tags: ["Self-Healing Infrastructure", "ASG Health Checks", "High Load Scale"]
  },
  {
    id: "aws-dop-383",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Self-Healing Auto Scaling Groups with Health Checks: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of resource configurations, secret isolation, and governance across all AWS accounts. The DevOps engineer evaluates Self-Healing Infrastructure to ensure that EC2 instances failing application HTTP health checks are automatically terminated and replaced by healthy instances in the Auto Scaling group.",
    question: "Which solution implements these mandatory compliance and security controls? Using ELB health checks on Auto Scaling groups to replace impaired instances is under consideration.",
    options: [
      { id: 'A', text: "Configure the Auto Scaling group health check type to `ELB` and set a reasonable `HealthCheckGracePeriod`." },
      { id: 'B', text: "Set the health check type to `EC2` exclusively, ignoring application-level web server crashes." },
      { id: 'C', text: "Disable Auto Scaling health checks entirely." },
      { id: 'D', text: "Instruct operations personnel to manually terminate unresponsive instances." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the Auto Scaling group health check type to `ELB` and set a reasonable `HealthCheckGracePeriod`. By default, Auto Scaling groups use `EC2` health checks, which only detect hardware and hypervisor failures. Changing health check type to `ELB` causes the ASG to terminate and replace instances whenever the Application Load Balancer marks them unhealthy, enabling automated self-healing for crashed software.",
    referenceUrl: "https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-add-elb-healthcheck.html",
    tags: ["Self-Healing Infrastructure", "ASG Health Checks", "Security Compliance"]
  },
  {
    id: "aws-dop-384",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Self-Healing Auto Scaling Groups with Health Checks: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on AWS. The DevOps engineer evaluates Self-Healing Infrastructure to ensure that EC2 instances failing application HTTP health checks are automatically terminated and replaced by healthy instances in the Auto Scaling group.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Using ELB health checks on Auto Scaling groups to replace impaired instances is under consideration.",
    options: [
      { id: 'A', text: "Configure the Auto Scaling group health check type to `ELB` and set a reasonable `HealthCheckGracePeriod`." },
      { id: 'B', text: "Set the health check type to `EC2` exclusively, ignoring application-level web server crashes." },
      { id: 'C', text: "Disable Auto Scaling health checks entirely." },
      { id: 'D', text: "Instruct operations personnel to manually terminate unresponsive instances." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the Auto Scaling group health check type to `ELB` and set a reasonable `HealthCheckGracePeriod`. By default, Auto Scaling groups use `EC2` health checks, which only detect hardware and hypervisor failures. Changing health check type to `ELB` causes the ASG to terminate and replace instances whenever the Application Load Balancer marks them unhealthy, enabling automated self-healing for crashed software.",
    referenceUrl: "https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-add-elb-healthcheck.html",
    tags: ["Self-Healing Infrastructure", "ASG Health Checks", "Hybrid Migration"]
  },
  {
    id: "aws-dop-385",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Self-Healing Auto Scaling Groups with Health Checks: Resilience Failure",
    scenario: "A DevOps team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate incident response. The DevOps engineer evaluates Self-Healing Infrastructure to ensure that EC2 instances failing application HTTP health checks are automatically terminated and replaced by healthy instances in the Auto Scaling group.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform stability? Using ELB health checks on Auto Scaling groups to replace impaired instances is under consideration.",
    options: [
      { id: 'A', text: "Configure the Auto Scaling group health check type to `ELB` and set a reasonable `HealthCheckGracePeriod`." },
      { id: 'B', text: "Set the health check type to `EC2` exclusively, ignoring application-level web server crashes." },
      { id: 'C', text: "Disable Auto Scaling health checks entirely." },
      { id: 'D', text: "Instruct operations personnel to manually terminate unresponsive instances." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the Auto Scaling group health check type to `ELB` and set a reasonable `HealthCheckGracePeriod`. By default, Auto Scaling groups use `EC2` health checks, which only detect hardware and hypervisor failures. Changing health check type to `ELB` causes the ASG to terminate and replace instances whenever the Application Load Balancer marks them unhealthy, enabling automated self-healing for crashed software.",
    referenceUrl: "https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-add-elb-healthcheck.html",
    tags: ["Self-Healing Infrastructure", "ASG Health Checks", "Resilience Failure"]
  },
  {
    id: "aws-dop-386",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "CloudWatch Metric Filters and Alarms: Dr Failover",
    scenario: "An enterprise DevOps organization is establishing cross-region operational continuity guidelines and high-availability architecture for AWS workloads. The DevOps engineer evaluates CloudWatch Metric Filters to monitor application error frequency and trigger automated notifications whenever HTTP 500 error occurrences exceed 50 in a 5-minute window.",
    question: "Which architectural approach or configuration satisfies these multi-region disaster recovery and resilience objectives? Extracting numeric metrics from log streams and triggering threshold alarms is under consideration.",
    options: [
      { id: 'A', text: "Create a CloudWatch Logs Metric Filter with a pattern matching `[..., status = 500, ...]` and configure a CloudWatch Alarm on the resulting custom metric." },
      { id: 'B', text: "Download raw log files daily to run manual grep commands." },
      { id: 'C', text: "Configure an alarm directly on EC2 CPU utilization." },
      { id: 'D', text: "Disable application error logging to suppress alarms." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a CloudWatch Logs Metric Filter with a pattern matching `[..., status = 500, ...]` and configure a CloudWatch Alarm on the resulting custom metric. CloudWatch Logs metric filters evaluate ingested log streams against filter patterns and extract numeric values or count occurrences as custom CloudWatch metrics. Teams can then attach standard CloudWatch alarms to these metrics to alert on application error surges.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/MonitoringLogData.html",
    tags: ["CloudWatch Metric Filters", "Metric Filters", "Dr Failover"]
  },
  {
    id: "aws-dop-387",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "CloudWatch Metric Filters and Alarms: High Load Scale",
    scenario: "A high-throughput AWS application experiences rapid surges in user traffic and transaction volume across multiple Availability Zones. The DevOps engineer evaluates CloudWatch Metric Filters to monitor application error frequency and trigger automated notifications whenever HTTP 500 error occurrences exceed 50 in a 5-minute window.",
    question: "Which engineering approach should the DevOps team select to manage this demand efficiently without manual intervention? Extracting numeric metrics from log streams and triggering threshold alarms is under consideration.",
    options: [
      { id: 'A', text: "Create a CloudWatch Logs Metric Filter with a pattern matching `[..., status = 500, ...]` and configure a CloudWatch Alarm on the resulting custom metric." },
      { id: 'B', text: "Download raw log files daily to run manual grep commands." },
      { id: 'C', text: "Configure an alarm directly on EC2 CPU utilization." },
      { id: 'D', text: "Disable application error logging to suppress alarms." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a CloudWatch Logs Metric Filter with a pattern matching `[..., status = 500, ...]` and configure a CloudWatch Alarm on the resulting custom metric. CloudWatch Logs metric filters evaluate ingested log streams against filter patterns and extract numeric values or count occurrences as custom CloudWatch metrics. Teams can then attach standard CloudWatch alarms to these metrics to alert on application error surges.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/MonitoringLogData.html",
    tags: ["CloudWatch Metric Filters", "Metric Filters", "High Load Scale"]
  },
  {
    id: "aws-dop-388",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "CloudWatch Metric Filters and Alarms: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of resource configurations, secret isolation, and governance across all AWS accounts. The DevOps engineer evaluates CloudWatch Metric Filters to monitor application error frequency and trigger automated notifications whenever HTTP 500 error occurrences exceed 50 in a 5-minute window.",
    question: "Which solution implements these mandatory compliance and security controls? Extracting numeric metrics from log streams and triggering threshold alarms is under consideration.",
    options: [
      { id: 'A', text: "Create a CloudWatch Logs Metric Filter with a pattern matching `[..., status = 500, ...]` and configure a CloudWatch Alarm on the resulting custom metric." },
      { id: 'B', text: "Download raw log files daily to run manual grep commands." },
      { id: 'C', text: "Configure an alarm directly on EC2 CPU utilization." },
      { id: 'D', text: "Disable application error logging to suppress alarms." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a CloudWatch Logs Metric Filter with a pattern matching `[..., status = 500, ...]` and configure a CloudWatch Alarm on the resulting custom metric. CloudWatch Logs metric filters evaluate ingested log streams against filter patterns and extract numeric values or count occurrences as custom CloudWatch metrics. Teams can then attach standard CloudWatch alarms to these metrics to alert on application error surges.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/MonitoringLogData.html",
    tags: ["CloudWatch Metric Filters", "Metric Filters", "Security Compliance"]
  },
  {
    id: "aws-dop-389",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "CloudWatch Metric Filters and Alarms: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on AWS. The DevOps engineer evaluates CloudWatch Metric Filters to monitor application error frequency and trigger automated notifications whenever HTTP 500 error occurrences exceed 50 in a 5-minute window.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Extracting numeric metrics from log streams and triggering threshold alarms is under consideration.",
    options: [
      { id: 'A', text: "Create a CloudWatch Logs Metric Filter with a pattern matching `[..., status = 500, ...]` and configure a CloudWatch Alarm on the resulting custom metric." },
      { id: 'B', text: "Download raw log files daily to run manual grep commands." },
      { id: 'C', text: "Configure an alarm directly on EC2 CPU utilization." },
      { id: 'D', text: "Disable application error logging to suppress alarms." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a CloudWatch Logs Metric Filter with a pattern matching `[..., status = 500, ...]` and configure a CloudWatch Alarm on the resulting custom metric. CloudWatch Logs metric filters evaluate ingested log streams against filter patterns and extract numeric values or count occurrences as custom CloudWatch metrics. Teams can then attach standard CloudWatch alarms to these metrics to alert on application error surges.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/MonitoringLogData.html",
    tags: ["CloudWatch Metric Filters", "Metric Filters", "Hybrid Migration"]
  },
  {
    id: "aws-dop-390",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "CloudWatch Metric Filters and Alarms: Resilience Failure",
    scenario: "A DevOps team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate incident response. The DevOps engineer evaluates CloudWatch Metric Filters to monitor application error frequency and trigger automated notifications whenever HTTP 500 error occurrences exceed 50 in a 5-minute window.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform stability? Extracting numeric metrics from log streams and triggering threshold alarms is under consideration.",
    options: [
      { id: 'A', text: "Create a CloudWatch Logs Metric Filter with a pattern matching `[..., status = 500, ...]` and configure a CloudWatch Alarm on the resulting custom metric." },
      { id: 'B', text: "Download raw log files daily to run manual grep commands." },
      { id: 'C', text: "Configure an alarm directly on EC2 CPU utilization." },
      { id: 'D', text: "Disable application error logging to suppress alarms." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a CloudWatch Logs Metric Filter with a pattern matching `[..., status = 500, ...]` and configure a CloudWatch Alarm on the resulting custom metric. CloudWatch Logs metric filters evaluate ingested log streams against filter patterns and extract numeric values or count occurrences as custom CloudWatch metrics. Teams can then attach standard CloudWatch alarms to these metrics to alert on application error surges.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/MonitoringLogData.html",
    tags: ["CloudWatch Metric Filters", "Metric Filters", "Resilience Failure"]
  },
  {
    id: "aws-dop-391",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "Centralized Logging with Kinesis Data Firehose: Dr Failover",
    scenario: "An enterprise DevOps organization is establishing cross-region operational continuity guidelines and high-availability architecture for AWS workloads. The DevOps engineer evaluates Log Aggregation to aggregate application and system logs from hundreds of AWS accounts into a centralized security data lake in Amazon S3 for long-term compliance retention.",
    question: "Which architectural approach or configuration satisfies these multi-region disaster recovery and resilience objectives? Streaming multi-account CloudWatch Logs to centralized S3 and OpenSearch via Kinesis Firehose is under consideration.",
    options: [
      { id: 'A', text: "Configure CloudWatch Logs Subscription Filters to stream logs to an Amazon Kinesis Data Firehose delivery stream backed by a centralized S3 bucket." },
      { id: 'B', text: "Set up cross-account VPC peering between every account and SCP raw log files over SSH." },
      { id: 'C', text: "Store logs in local instance filesystems without off-instance streaming." },
      { id: 'D', text: "Email log archives to a centralized distribution list." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure CloudWatch Logs Subscription Filters to stream logs to an Amazon Kinesis Data Firehose delivery stream backed by a centralized S3 bucket. CloudWatch Logs Subscription Filters forward real-time log events to destinations like Amazon Kinesis Data Firehose. Firehose batches, compresses (GZIP, Snappy), and delivers log streams into Amazon S3 or OpenSearch in a centralized logging account, enabling scalable enterprise log aggregation.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Subscriptions.html",
    tags: ["Log Aggregation", "Centralized Logging", "Dr Failover"]
  },
  {
    id: "aws-dop-392",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "Centralized Logging with Kinesis Data Firehose: High Load Scale",
    scenario: "A high-throughput AWS application experiences rapid surges in user traffic and transaction volume across multiple Availability Zones. The DevOps engineer evaluates Log Aggregation to aggregate application and system logs from hundreds of AWS accounts into a centralized security data lake in Amazon S3 for long-term compliance retention.",
    question: "Which engineering approach should the DevOps team select to manage this demand efficiently without manual intervention? Streaming multi-account CloudWatch Logs to centralized S3 and OpenSearch via Kinesis Firehose is under consideration.",
    options: [
      { id: 'A', text: "Configure CloudWatch Logs Subscription Filters to stream logs to an Amazon Kinesis Data Firehose delivery stream backed by a centralized S3 bucket." },
      { id: 'B', text: "Set up cross-account VPC peering between every account and SCP raw log files over SSH." },
      { id: 'C', text: "Store logs in local instance filesystems without off-instance streaming." },
      { id: 'D', text: "Email log archives to a centralized distribution list." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure CloudWatch Logs Subscription Filters to stream logs to an Amazon Kinesis Data Firehose delivery stream backed by a centralized S3 bucket. CloudWatch Logs Subscription Filters forward real-time log events to destinations like Amazon Kinesis Data Firehose. Firehose batches, compresses (GZIP, Snappy), and delivers log streams into Amazon S3 or OpenSearch in a centralized logging account, enabling scalable enterprise log aggregation.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Subscriptions.html",
    tags: ["Log Aggregation", "Centralized Logging", "High Load Scale"]
  },
  {
    id: "aws-dop-393",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "Centralized Logging with Kinesis Data Firehose: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of resource configurations, secret isolation, and governance across all AWS accounts. The DevOps engineer evaluates Log Aggregation to aggregate application and system logs from hundreds of AWS accounts into a centralized security data lake in Amazon S3 for long-term compliance retention.",
    question: "Which solution implements these mandatory compliance and security controls? Streaming multi-account CloudWatch Logs to centralized S3 and OpenSearch via Kinesis Firehose is under consideration.",
    options: [
      { id: 'A', text: "Configure CloudWatch Logs Subscription Filters to stream logs to an Amazon Kinesis Data Firehose delivery stream backed by a centralized S3 bucket." },
      { id: 'B', text: "Set up cross-account VPC peering between every account and SCP raw log files over SSH." },
      { id: 'C', text: "Store logs in local instance filesystems without off-instance streaming." },
      { id: 'D', text: "Email log archives to a centralized distribution list." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure CloudWatch Logs Subscription Filters to stream logs to an Amazon Kinesis Data Firehose delivery stream backed by a centralized S3 bucket. CloudWatch Logs Subscription Filters forward real-time log events to destinations like Amazon Kinesis Data Firehose. Firehose batches, compresses (GZIP, Snappy), and delivers log streams into Amazon S3 or OpenSearch in a centralized logging account, enabling scalable enterprise log aggregation.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Subscriptions.html",
    tags: ["Log Aggregation", "Centralized Logging", "Security Compliance"]
  },
  {
    id: "aws-dop-394",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "Centralized Logging with Kinesis Data Firehose: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on AWS. The DevOps engineer evaluates Log Aggregation to aggregate application and system logs from hundreds of AWS accounts into a centralized security data lake in Amazon S3 for long-term compliance retention.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Streaming multi-account CloudWatch Logs to centralized S3 and OpenSearch via Kinesis Firehose is under consideration.",
    options: [
      { id: 'A', text: "Configure CloudWatch Logs Subscription Filters to stream logs to an Amazon Kinesis Data Firehose delivery stream backed by a centralized S3 bucket." },
      { id: 'B', text: "Set up cross-account VPC peering between every account and SCP raw log files over SSH." },
      { id: 'C', text: "Store logs in local instance filesystems without off-instance streaming." },
      { id: 'D', text: "Email log archives to a centralized distribution list." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure CloudWatch Logs Subscription Filters to stream logs to an Amazon Kinesis Data Firehose delivery stream backed by a centralized S3 bucket. CloudWatch Logs Subscription Filters forward real-time log events to destinations like Amazon Kinesis Data Firehose. Firehose batches, compresses (GZIP, Snappy), and delivers log streams into Amazon S3 or OpenSearch in a centralized logging account, enabling scalable enterprise log aggregation.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Subscriptions.html",
    tags: ["Log Aggregation", "Centralized Logging", "Hybrid Migration"]
  },
  {
    id: "aws-dop-395",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "Centralized Logging with Kinesis Data Firehose: Resilience Failure",
    scenario: "A DevOps team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate incident response. The DevOps engineer evaluates Log Aggregation to aggregate application and system logs from hundreds of AWS accounts into a centralized security data lake in Amazon S3 for long-term compliance retention.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform stability? Streaming multi-account CloudWatch Logs to centralized S3 and OpenSearch via Kinesis Firehose is under consideration.",
    options: [
      { id: 'A', text: "Configure CloudWatch Logs Subscription Filters to stream logs to an Amazon Kinesis Data Firehose delivery stream backed by a centralized S3 bucket." },
      { id: 'B', text: "Set up cross-account VPC peering between every account and SCP raw log files over SSH." },
      { id: 'C', text: "Store logs in local instance filesystems without off-instance streaming." },
      { id: 'D', text: "Email log archives to a centralized distribution list." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure CloudWatch Logs Subscription Filters to stream logs to an Amazon Kinesis Data Firehose delivery stream backed by a centralized S3 bucket. CloudWatch Logs Subscription Filters forward real-time log events to destinations like Amazon Kinesis Data Firehose. Firehose batches, compresses (GZIP, Snappy), and delivers log streams into Amazon S3 or OpenSearch in a centralized logging account, enabling scalable enterprise log aggregation.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Subscriptions.html",
    tags: ["Log Aggregation", "Centralized Logging", "Resilience Failure"]
  },
  {
    id: "aws-dop-396",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "AWS X-Ray Distributed Tracing: Dr Failover",
    scenario: "An enterprise DevOps organization is establishing cross-region operational continuity guidelines and high-availability architecture for AWS workloads. The DevOps engineer evaluates Distributed Tracing to identify which downstream microservice or database query is responsible for latency spikes in an e-commerce checkout flow.",
    question: "Which architectural approach or configuration satisfies these multi-region disaster recovery and resilience objectives? Tracing latency bottlenecks across microservices, Lambda, and DynamoDB is under consideration.",
    options: [
      { id: 'A', text: "Instrument services with the AWS X-Ray SDK or AWS Distro for OpenTelemetry (ADOT) to propagate trace headers and view trace maps in CloudWatch ServiceLens." },
      { id: 'B', text: "Inspect individual EC2 CPU graphs without correlating request IDs." },
      { id: 'C', text: "Add print statements in code and attempt to align log timestamps manually." },
      { id: 'D', text: "Restart all microservices simultaneously whenever a slow request occurs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Instrument services with the AWS X-Ray SDK or AWS Distro for OpenTelemetry (ADOT) to propagate trace headers and view trace maps in CloudWatch ServiceLens. AWS X-Ray provides end-to-end distributed tracing across microservices, AWS Lambda, API Gateway, and Amazon DynamoDB. Propagating tracing headers correlates requests across distributed network hops, highlighting exact latency bottlenecks and error originations in service maps.",
    referenceUrl: "https://docs.aws.amazon.com/xray/latest/devguide/aws-xray.html",
    tags: ["Distributed Tracing", "AWS X-Ray", "Dr Failover"]
  },
  {
    id: "aws-dop-397",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "AWS X-Ray Distributed Tracing: High Load Scale",
    scenario: "A high-throughput AWS application experiences rapid surges in user traffic and transaction volume across multiple Availability Zones. The DevOps engineer evaluates Distributed Tracing to identify which downstream microservice or database query is responsible for latency spikes in an e-commerce checkout flow.",
    question: "Which engineering approach should the DevOps team select to manage this demand efficiently without manual intervention? Tracing latency bottlenecks across microservices, Lambda, and DynamoDB is under consideration.",
    options: [
      { id: 'A', text: "Instrument services with the AWS X-Ray SDK or AWS Distro for OpenTelemetry (ADOT) to propagate trace headers and view trace maps in CloudWatch ServiceLens." },
      { id: 'B', text: "Inspect individual EC2 CPU graphs without correlating request IDs." },
      { id: 'C', text: "Add print statements in code and attempt to align log timestamps manually." },
      { id: 'D', text: "Restart all microservices simultaneously whenever a slow request occurs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Instrument services with the AWS X-Ray SDK or AWS Distro for OpenTelemetry (ADOT) to propagate trace headers and view trace maps in CloudWatch ServiceLens. AWS X-Ray provides end-to-end distributed tracing across microservices, AWS Lambda, API Gateway, and Amazon DynamoDB. Propagating tracing headers correlates requests across distributed network hops, highlighting exact latency bottlenecks and error originations in service maps.",
    referenceUrl: "https://docs.aws.amazon.com/xray/latest/devguide/aws-xray.html",
    tags: ["Distributed Tracing", "AWS X-Ray", "High Load Scale"]
  },
  {
    id: "aws-dop-398",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "AWS X-Ray Distributed Tracing: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of resource configurations, secret isolation, and governance across all AWS accounts. The DevOps engineer evaluates Distributed Tracing to identify which downstream microservice or database query is responsible for latency spikes in an e-commerce checkout flow.",
    question: "Which solution implements these mandatory compliance and security controls? Tracing latency bottlenecks across microservices, Lambda, and DynamoDB is under consideration.",
    options: [
      { id: 'A', text: "Instrument services with the AWS X-Ray SDK or AWS Distro for OpenTelemetry (ADOT) to propagate trace headers and view trace maps in CloudWatch ServiceLens." },
      { id: 'B', text: "Inspect individual EC2 CPU graphs without correlating request IDs." },
      { id: 'C', text: "Add print statements in code and attempt to align log timestamps manually." },
      { id: 'D', text: "Restart all microservices simultaneously whenever a slow request occurs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Instrument services with the AWS X-Ray SDK or AWS Distro for OpenTelemetry (ADOT) to propagate trace headers and view trace maps in CloudWatch ServiceLens. AWS X-Ray provides end-to-end distributed tracing across microservices, AWS Lambda, API Gateway, and Amazon DynamoDB. Propagating tracing headers correlates requests across distributed network hops, highlighting exact latency bottlenecks and error originations in service maps.",
    referenceUrl: "https://docs.aws.amazon.com/xray/latest/devguide/aws-xray.html",
    tags: ["Distributed Tracing", "AWS X-Ray", "Security Compliance"]
  },
  {
    id: "aws-dop-399",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "AWS X-Ray Distributed Tracing: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on AWS. The DevOps engineer evaluates Distributed Tracing to identify which downstream microservice or database query is responsible for latency spikes in an e-commerce checkout flow.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Tracing latency bottlenecks across microservices, Lambda, and DynamoDB is under consideration.",
    options: [
      { id: 'A', text: "Instrument services with the AWS X-Ray SDK or AWS Distro for OpenTelemetry (ADOT) to propagate trace headers and view trace maps in CloudWatch ServiceLens." },
      { id: 'B', text: "Inspect individual EC2 CPU graphs without correlating request IDs." },
      { id: 'C', text: "Add print statements in code and attempt to align log timestamps manually." },
      { id: 'D', text: "Restart all microservices simultaneously whenever a slow request occurs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Instrument services with the AWS X-Ray SDK or AWS Distro for OpenTelemetry (ADOT) to propagate trace headers and view trace maps in CloudWatch ServiceLens. AWS X-Ray provides end-to-end distributed tracing across microservices, AWS Lambda, API Gateway, and Amazon DynamoDB. Propagating tracing headers correlates requests across distributed network hops, highlighting exact latency bottlenecks and error originations in service maps.",
    referenceUrl: "https://docs.aws.amazon.com/xray/latest/devguide/aws-xray.html",
    tags: ["Distributed Tracing", "AWS X-Ray", "Hybrid Migration"]
  },
  {
    id: "aws-dop-400",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "AWS X-Ray Distributed Tracing: Resilience Failure",
    scenario: "A DevOps team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate incident response. The DevOps engineer evaluates Distributed Tracing to identify which downstream microservice or database query is responsible for latency spikes in an e-commerce checkout flow.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform stability? Tracing latency bottlenecks across microservices, Lambda, and DynamoDB is under consideration.",
    options: [
      { id: 'A', text: "Instrument services with the AWS X-Ray SDK or AWS Distro for OpenTelemetry (ADOT) to propagate trace headers and view trace maps in CloudWatch ServiceLens." },
      { id: 'B', text: "Inspect individual EC2 CPU graphs without correlating request IDs." },
      { id: 'C', text: "Add print statements in code and attempt to align log timestamps manually." },
      { id: 'D', text: "Restart all microservices simultaneously whenever a slow request occurs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Instrument services with the AWS X-Ray SDK or AWS Distro for OpenTelemetry (ADOT) to propagate trace headers and view trace maps in CloudWatch ServiceLens. AWS X-Ray provides end-to-end distributed tracing across microservices, AWS Lambda, API Gateway, and Amazon DynamoDB. Propagating tracing headers correlates requests across distributed network hops, highlighting exact latency bottlenecks and error originations in service maps.",
    referenceUrl: "https://docs.aws.amazon.com/xray/latest/devguide/aws-xray.html",
    tags: ["Distributed Tracing", "AWS X-Ray", "Resilience Failure"]
  }
];

export default AWS_DOP_QUESTIONS_16;
