export const AWS_SCS_QUESTIONS_3 = [
  {
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d2",
    "domainName": "Security Logging and Monitoring",
    "title": "Detecting Disabling of CloudTrail Logging",
    "scenario": "An attacker compromises administrator credentials and attempts to disable security monitoring by calling StopLogging on the account's CloudTrail trail.",
    "question": "Which EventBridge rule pattern detects and alerts on attempts to stop CloudTrail logging in real time?",
    "options": [
      {
        "id": "A",
        "text": "<code>{ \"source\": [\"aws.cloudtrail\"], \"detail-type\": [\"AWS API Call via CloudTrail\"], \"detail\": { \"eventSource\": [\"cloudtrail.amazonaws.com\"], \"eventName\": [\"StopLogging\", \"DeleteTrail\", \"UpdateTrail\"] } }</code>"
      },
      {
        "id": "B",
        "text": "<code>{ \"source\": [\"aws.ec2\"], \"detail-type\": [\"EC2 Instance State-change Notification\"] }</code>"
      },
      {
        "id": "C",
        "text": "<code>{ \"source\": [\"aws.health\"], \"detail\": { \"service\": [\"CLOUDTRAIL\"] } }</code>"
      },
      {
        "id": "D",
        "text": "<code>{ \"source\": [\"aws.guardduty\"], \"detail\": { \"severity\": [\"LOW\"] } }</code>"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "EventBridge can match specific management API calls captured by CloudTrail. Matching `eventSource: [\"cloudtrail.amazonaws.com\"]` with `eventName: [\"StopLogging\", \"DeleteTrail\", \"UpdateTrail\"]` enables immediate alerting and automated remediation (such as invoking Lambda to call `StartLogging` immediately).",
    "referenceUrl": "https://docs.aws.amazon.com/security/",
    "tags": [
      "EventBridge",
      "CloudTrail",
      "StopLogging",
      "Tamper-Detection"
    ],
    "id": "aws-scs-51"
  },
  {
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d2",
    "domainName": "Security Logging and Monitoring",
    "title": "Monitoring Network Gateway Changes with CloudWatch Alarms",
    "scenario": "To prevent unauthorized backdoors, a company requires real-time alerting whenever an Internet Gateway, Customer Gateway, NAT Gateway, or Virtual Private Gateway is created or attached to a VPC.",
    "question": "Which metric filter pattern satisfies CIS Benchmark compliance for network gateway changes?",
    "options": [
      {
        "id": "A",
        "text": "<code>{($.eventName=CreateCustomerGateway)||($.eventName=DeleteCustomerGateway)||($.eventName=AttachInternetGateway)||($.eventName=CreateInternetGateway)||($.eventName=DeleteInternetGateway)||($.eventName=DetachInternetGateway)||($.eventName=CreateNatGateway)||($.eventName=DeleteNatGateway)}</code>"
      },
      {
        "id": "B",
        "text": "<code>{ $.eventSource = \"s3.amazonaws.com\" }</code>"
      },
      {
        "id": "C",
        "text": "<code>{ $.eventName = \"AuthorizeSecurityGroupIngress\" }</code>"
      },
      {
        "id": "D",
        "text": "<code>{ $.userIdentity.sessionContext.sessionIssuer.userName = \"NetworkAdmin\" }</code>"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "Monitoring network gateway lifecycle events flags unauthorized ingress and egress points that could bypass perimeter security. The CIS AWS Foundations benchmark requires filtering CloudTrail logs for gateway creation, deletion, and detachment events.",
    "referenceUrl": "https://docs.aws.amazon.com/security/",
    "tags": [
      "CloudWatch",
      "Metric-Filter",
      "Network-Gateway",
      "CIS-Benchmark"
    ],
    "id": "aws-scs-52"
  },
  {
    "difficulty": "hard",
    "certId": "aws-scs",
    "domainId": "d2",
    "domainName": "Security Logging and Monitoring",
    "title": "Cross-Account CloudWatch Log Sharing with Amazon OpenSearch",
    "scenario": "An enterprise with 20 AWS accounts wants to stream security-related CloudWatch log groups to a centralized Amazon OpenSearch Service cluster in the Security account.",
    "question": "Which architectural pattern provides automated, scalable log streaming across accounts?",
    "options": [
      {
        "id": "A",
        "text": "Configure CloudWatch Logs Subscription Filters in each member account targeting an Amazon Kinesis Data Stream in the Security account via a cross-account IAM role, and process the stream into OpenSearch using Kinesis Data Firehose"
      },
      {
        "id": "B",
        "text": "Grant public access to the OpenSearch cluster and configure member accounts to write directly over the public internet"
      },
      {
        "id": "C",
        "text": "Export CloudWatch Logs to local member account S3 buckets and configure S3 cross-region replication to OpenSearch"
      },
      {
        "id": "D",
        "text": "Deploy an EC2 instance in each member account to run logstash"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "CloudWatch Logs subscription filters can stream log events across accounts to an Amazon Kinesis Data Stream in a centralized account. Kinesis Data Firehose then consumes from the stream, transforms/formats the records, and indexes them into Amazon OpenSearch Service securely within the private network.",
    "referenceUrl": "https://docs.aws.amazon.com/security/",
    "tags": [
      "CloudWatch-Logs",
      "OpenSearch",
      "Subscription-Filter",
      "Cross-Account"
    ],
    "id": "aws-scs-53"
  },
  {
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d2",
    "domainName": "Security Logging and Monitoring",
    "title": "S3 Server Access Logs vs. CloudTrail S3 Data Events",
    "scenario": "A security architect must choose between Amazon S3 Server Access Logging and AWS CloudTrail S3 Data Events for tracking access to an internal data archive.",
    "question": "What is a key technical differentiator between S3 Server Access Logging and CloudTrail S3 Data Events?",
    "options": [
      {
        "id": "A",
        "text": "CloudTrail S3 data events provide detailed caller IAM identity (role ARN, session context, STS credentials) and integrate with EventBridge, whereas S3 server access logs provide HTTP-level details (Turnaround Time, HTTP status codes) but have best-effort delivery and no EventBridge integration"
      },
      {
        "id": "B",
        "text": "S3 server access logging requires customer managed KMS keys, while CloudTrail cannot be encrypted"
      },
      {
        "id": "C",
        "text": "CloudTrail data events are free of charge, while S3 server access logging is billed per API call"
      },
      {
        "id": "D",
        "text": "S3 server access logs can only record PUT requests, while CloudTrail records only GET requests"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "CloudTrail data events record rich IAM identity metadata (exact IAM user/role ARN, assumed role session details, MFA status) and generate EventBridge events for real-time automation. S3 server access logs operate at the web server access layer, capturing HTTP request details (turnaround time, HTTP referer) with best-effort delivery, but lack deep IAM session tracking.",
    "referenceUrl": "https://docs.aws.amazon.com/security/",
    "tags": [
      "S3",
      "Server-Access-Logs",
      "CloudTrail",
      "Data-Events"
    ],
    "id": "aws-scs-54"
  },
  {
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d2",
    "domainName": "Security Logging and Monitoring",
    "title": "Monitoring KMS Key Deletion and Disabling",
    "scenario": "A rogue insider attempts to render encrypted customer databases unrecoverable by scheduling the deletion of critical Customer Managed KMS Keys.",
    "question": "Which CloudTrail event names must be monitored to immediately detect KMS key destruction attempts?",
    "options": [
      {
        "id": "A",
        "text": "<code>ScheduleKeyDeletion</code> and <code>DisableKey</code>"
      },
      {
        "id": "B",
        "text": "<code>Encrypt</code> and <code>Decrypt</code>"
      },
      {
        "id": "C",
        "text": "<code>GenerateDataKey</code> and <code>DescribeKey</code>"
      },
      {
        "id": "D",
        "text": "<code>CreateGrant</code> and <code>ListGrants</code>"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "Scheduling a KMS key for deletion (which enters a mandatory waiting period of 7 to 30 days) triggers the `ScheduleKeyDeletion` API. Disabling a key triggers `DisableKey`. Monitoring these specific API events in CloudTrail allows security teams to cancel key deletion via `CancelKeyDeletion` before data becomes permanently inaccessible.",
    "referenceUrl": "https://docs.aws.amazon.com/security/",
    "tags": [
      "KMS",
      "ScheduleKeyDeletion",
      "CloudTrail",
      "Ransomware-Prevention"
    ],
    "id": "aws-scs-55"
  },
  {
    "difficulty": "easy",
    "certId": "aws-scs",
    "domainId": "d2",
    "domainName": "Security Logging and Monitoring",
    "title": "Amazon CloudWatch Observability Access Manager for Cross-Account Monitoring",
    "scenario": "An operations team needs a single unified CloudWatch console to view alarms, logs, and metrics across all production member accounts without configuring complex custom streaming pipelines.",
    "question": "Which native AWS capability configures centralized cross-account cross-Region CloudWatch dashboards and log access?",
    "options": [
      {
        "id": "A",
        "text": "AWS CloudWatch Observability Access Manager (OAM) linking source accounts to a central monitoring account"
      },
      {
        "id": "B",
        "text": "IAM cross-account role switching in the AWS Management Console for every query"
      },
      {
        "id": "C",
        "text": "Configuring an S3 bucket in each account with public read permissions"
      },
      {
        "id": "D",
        "text": "Amazon VPC Peering between all VPCs across all accounts"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "AWS CloudWatch Observability Access Manager (OAM) allows designated monitoring accounts to seamlessly view and search CloudWatch telemetry (logs, metrics, traces, application insights) originating from multiple source accounts within or across AWS Organizations, without custom pipeline maintenance.",
    "referenceUrl": "https://docs.aws.amazon.com/security/",
    "tags": [
      "CloudWatch",
      "OAM",
      "Cross-Account",
      "Observability"
    ],
    "id": "aws-scs-56"
  },
  {
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d2",
    "domainName": "Security Logging and Monitoring",
    "title": "CloudWatch Metric Filter for S3 Bucket Policy Alterations",
    "scenario": "A compliance check mandates alerting whenever an S3 bucket policy, bucket ACL, or bucket replication configuration is modified in the account.",
    "question": "Which CloudWatch Logs metric filter pattern identifies S3 configuration changes?",
    "options": [
      {
        "id": "A",
        "text": "<code>{($.eventSource=s3.amazonaws.com)&&(($.eventName=PutBucketAcl)||($.eventName=PutBucketPolicy)||($.eventName=PutBucketCors)||($.eventName=PutBucketLifecycle)||($.eventName=PutBucketReplication)||($.eventName=DeleteBucketPolicy)||($.eventName=DeleteBucketCors)||($.eventName=DeleteBucketLifecycle))}</code>"
      },
      {
        "id": "B",
        "text": "<code>{ $.eventName = \"GetObject\" }</code>"
      },
      {
        "id": "C",
        "text": "<code>{ $.eventSource = \"ec2.amazonaws.com\" }</code>"
      },
      {
        "id": "D",
        "text": "<code>{ $.errorCode = \"403\" }</code>"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "Modifications to S3 bucket policies or ACLs can expose sensitive data to the public internet or attackers. The CIS AWS Foundations benchmark requires filtering CloudTrail logs for S3 bucket configuration changes (PutBucketPolicy, DeleteBucketPolicy, PutBucketAcl, etc.).",
    "referenceUrl": "https://docs.aws.amazon.com/security/",
    "tags": [
      "CloudWatch",
      "Metric-Filter",
      "S3-Bucket-Policy",
      "CIS-Benchmark"
    ],
    "id": "aws-scs-57"
  },
  {
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d2",
    "domainName": "Security Logging and Monitoring",
    "title": "Analyzing Application Load Balancer Access Logs with Athena",
    "scenario": "A web application behind an ALB is targeted by an HTTP flood attack. The security engineer must find the top 10 client IP addresses sending the highest volume of requests within the past hour.",
    "question": "How can the engineer query the ALB access logs efficiently?",
    "options": [
      {
        "id": "A",
        "text": "Create an Athena table over the ALB access logs S3 location, and run a query grouping by <code>client_ip</code> with <code>COUNT(*)</code> ordered descending"
      },
      {
        "id": "B",
        "text": "Open each raw gzip file locally using text editors"
      },
      {
        "id": "C",
        "text": "Use CloudWatch Metrics for ALB RequestCount"
      },
      {
        "id": "D",
        "text": "Review the AWS WAF Sampled Requests tab which displays 100% of all requests"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "ALB access logs capture detailed HTTP request records (client IP, request processing time, target response time, user agent, request URL). Storing these in S3 and using Amazon Athena allows running standard SQL queries to aggregate requests by `client_ip` and identify DDoS sources in seconds.",
    "referenceUrl": "https://docs.aws.amazon.com/security/",
    "tags": [
      "ALB",
      "Access-Logs",
      "Athena",
      "Incident-Analysis"
    ],
    "id": "aws-scs-58"
  },
  {
    "difficulty": "hard",
    "certId": "aws-scs",
    "domainId": "d2",
    "domainName": "Security Logging and Monitoring",
    "title": "CloudTrail Event Insights: Detecting Anomalous API Call Volume",
    "scenario": "An enterprise wants automated detection when an unusual spike in write API activity or read API anomalies occurs in their AWS account (e.g. sudden mass resource terminations or massive Describe calls).",
    "question": "Which native CloudTrail feature uses machine learning to detect and alert on anomalous API call rate spikes?",
    "options": [
      {
        "id": "A",
        "text": "CloudTrail Insights"
      },
      {
        "id": "B",
        "text": "CloudWatch Synthetics"
      },
      {
        "id": "C",
        "text": "AWS Trusted Advisor"
      },
      {
        "id": "D",
        "text": "AWS Health Dashboard"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "CloudTrail Insights continuously analyzes management events against baseline historical usage patterns. When it detects an unusual surge in API call volume or error rates (e.g. an unexpected burst of EC2 TerminateInstances or IAM PutUserPolicy calls), it generates Insights events that can trigger EventBridge alarms.",
    "referenceUrl": "https://docs.aws.amazon.com/security/",
    "tags": [
      "CloudTrail-Insights",
      "Anomaly-Detection",
      "Machine-Learning",
      "Threat-Hunting"
    ],
    "id": "aws-scs-59"
  },
  {
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d2",
    "domainName": "Security Logging and Monitoring",
    "title": "AWS Config Rule Evaluation Modes: Proactive vs. Detective",
    "scenario": "A DevOps team wants to evaluate CloudFormation templates during CI/CD pre-deployment pipelines to ensure resources comply with security policies before being provisioned.",
    "question": "Which AWS Config rule mode allows evaluating resource configurations prior to creation?",
    "options": [
      {
        "id": "A",
        "text": "Proactive mode evaluation using the <code>StartResourceEvaluation</code> API or CloudFormation Guard"
      },
      {
        "id": "B",
        "text": "Detective mode evaluation using CloudTrail event triggers"
      },
      {
        "id": "C",
        "text": "Periodic mode evaluation running on a 24-hour schedule"
      },
      {
        "id": "D",
        "text": "Reactive mode evaluation via CloudWatch alarms"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "AWS Config supports **Proactive mode** evaluation. In proactive mode, developers call the `StartResourceEvaluation` API passing proposed resource configurations (or via CloudFormation Guard in CI/CD pipelines) to verify compliance against Config rules *before* deploying to production.",
    "referenceUrl": "https://docs.aws.amazon.com/security/",
    "tags": [
      "AWS-Config",
      "Proactive-Mode",
      "CI-CD",
      "DevSecOps"
    ],
    "id": "aws-scs-60"
  },
  {
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d2",
    "domainName": "Security Logging and Monitoring",
    "title": "Capturing Transit Gateway Flow Logs",
    "scenario": "A network architect designs a multi-account hub-and-spoke network with an AWS Transit Gateway (TGW). The security team must inspect all cross-VPC and hybrid Direct Connect traffic flowing across the transit hub.",
    "question": "Where should Transit Gateway Flow Logs be enabled?",
    "options": [
      {
        "id": "A",
        "text": "Enable flow logs directly on the Transit Gateway attachments, delivering to S3, CloudWatch Logs, or Kinesis Data Firehose"
      },
      {
        "id": "B",
        "text": "Install Wireshark on a central EC2 instance"
      },
      {
        "id": "C",
        "text": "Enable flow logs only on the Direct Connect virtual interface"
      },
      {
        "id": "D",
        "text": "Enable VPC peering flow logs"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "AWS supports Transit Gateway Flow Logs. Enabling flow logs directly on Transit Gateway attachments captures metadata about all IP traffic traversing TGW attachments (VPCs, VPNs, Direct Connect, and peering attachments) without needing individual VPC configuration.",
    "referenceUrl": "https://docs.aws.amazon.com/security/",
    "tags": [
      "Transit-Gateway",
      "Flow-Logs",
      "Network-Security",
      "Hub-and-Spoke"
    ],
    "id": "aws-scs-61"
  },
  {
    "difficulty": "easy",
    "certId": "aws-scs",
    "domainId": "d2",
    "domainName": "Security Logging and Monitoring",
    "title": "Securing Log Archives with S3 Object Lock Compliance Mode",
    "scenario": "To meet regulatory retention requirements, a company must ensure that centralized CloudTrail and VPC Flow Logs cannot be deleted or overwritten by anyone, including the AWS account root user, for 5 years.",
    "question": "Which S3 feature and mode must be configured on the log archive S3 bucket?",
    "options": [
      {
        "id": "A",
        "text": "S3 Object Lock in Compliance mode with a default retention period of 5 years"
      },
      {
        "id": "B",
        "text": "S3 Object Lock in Governance mode"
      },
      {
        "id": "C",
        "text": "S3 Glacier Vault Lock alone without versioning"
      },
      {
        "id": "D",
        "text": "S3 Bucket Policy denying s3:DeleteObject for non-root users"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "S3 Object Lock in **Compliance mode** ensures Write Once, Read Many (WORM) storage where no user\u2014including the AWS account root user\u2014can overwrite or delete protected object versions until the retention period expires. In contrast, Governance mode allows users with `s3:BypassGovernanceRetention` to delete objects.",
    "referenceUrl": "https://docs.aws.amazon.com/security/",
    "tags": [
      "S3",
      "Object-Lock",
      "Compliance-Mode",
      "WORM"
    ],
    "id": "aws-scs-62"
  },
  {
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d2",
    "domainName": "Security Logging and Monitoring",
    "title": "Monitoring AWS CloudWatch Logs Retention Policies for Compliance",
    "scenario": "An audit discovers that multiple CloudWatch log groups have their retention setting set to 'Never Expire', violating corporate data retention and privacy policies that mandate purging logs after 90 days.",
    "question": "Which AWS Config rule detects log groups that fail to enforce the required retention period?",
    "options": [
      {
        "id": "A",
        "text": "<code>cw-loggroup-retention-period-check</code>"
      },
      {
        "id": "B",
        "text": "<code>s3-bucket-retention-check</code>"
      },
      {
        "id": "C",
        "text": "<code>cloudtrail-s3-dataevents-enabled</code>"
      },
      {
        "id": "D",
        "text": "<code>iam-user-unused-credentials-check</code>"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "The AWS Config managed rule `cw-loggroup-retention-period-check` evaluates whether Amazon CloudWatch Log groups have a retention period configured and verifies that the retention period matches or exceeds the specified parameter (e.g. 90 days).",
    "referenceUrl": "https://docs.aws.amazon.com/security/",
    "tags": [
      "AWS-Config",
      "CloudWatch-Logs",
      "Retention",
      "Compliance"
    ],
    "id": "aws-scs-63"
  },
  {
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d2",
    "domainName": "Security Logging and Monitoring",
    "title": "Monitoring Console Authentication Failures",
    "scenario": "An attacker initiates a brute-force credential stuffing attack against the AWS Management Console.",
    "question": "Which CloudWatch Logs metric filter pattern identifies failed console login attempts in CloudTrail?",
    "options": [
      {
        "id": "A",
        "text": "<code>{($.eventName=ConsoleLogin)&&($.errorMessage=\"Failed authentication\")}</code>"
      },
      {
        "id": "B",
        "text": "<code>{ $.userIdentity.type = \"Root\" }</code>"
      },
      {
        "id": "C",
        "text": "<code>{ $.errorCode = \"UnauthorizedOperation\" }</code>"
      },
      {
        "id": "D",
        "text": "<code>{ $.responseElements = null }</code>"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "When an AWS Management Console login attempt fails (e.g. due to an incorrect password or invalid MFA token), CloudTrail records a `ConsoleLogin` event with `errorMessage: \"Failed authentication\"`. Alerting on spikes in this metric detects brute-force and credential stuffing campaigns.",
    "referenceUrl": "https://docs.aws.amazon.com/security/",
    "tags": [
      "CloudWatch",
      "Metric-Filter",
      "Authentication",
      "Brute-Force"
    ],
    "id": "aws-scs-64"
  },
  {
    "difficulty": "hard",
    "certId": "aws-scs",
    "domainId": "d2",
    "domainName": "Security Logging and Monitoring",
    "title": "CloudFront Real-Time Log Streaming via Kinesis",
    "scenario": "A security operations team requires sub-second latency for streaming CloudFront CDN access logs into an analytical engine to immediately identify and block malicious scraping bots.",
    "question": "Which CloudFront feature streams access logs in real time with field selection?",
    "options": [
      {
        "id": "A",
        "text": "CloudFront Real-Time Logs configured to publish selected fields to an Amazon Kinesis Data Stream"
      },
      {
        "id": "B",
        "text": "CloudFront standard logging delivered to Amazon S3"
      },
      {
        "id": "C",
        "text": "AWS CloudTrail S3 data events"
      },
      {
        "id": "D",
        "text": "VPC Flow Logs on CloudFront edge locations"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "CloudFront Real-Time Logs deliver access logs within seconds of receiving requests. Administrators can configure a real-time log configuration that selects specific fields (e.g. `c-ip`, `cs-uri-stem`, `cs-headers`) and a sampling rate, streaming records directly to an Amazon Kinesis Data Stream.",
    "referenceUrl": "https://docs.aws.amazon.com/security/",
    "tags": [
      "CloudFront",
      "Real-Time-Logs",
      "Kinesis",
      "Bot-Mitigation"
    ],
    "id": "aws-scs-65"
  },
  {
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d2",
    "domainName": "Security Logging and Monitoring",
    "title": "Monitoring AWS WAF Blocked Requests with CloudWatch Metrics",
    "scenario": "A web application has AWS WAF deployed on an Application Load Balancer. The security team needs an automated alarm whenever the count of WAF-blocked SQL injection requests exceeds 50 in a 1-minute window.",
    "question": "Which CloudWatch metric and dimension should be configured for the alarm?",
    "options": [
      {
        "id": "A",
        "text": "Metric <code>BlockedRequests</code> in namespace <code>AWS/WAFV2</code> with dimensions <code>WebACL</code>, <code>Rule</code> (matching the SQL injection rule), and <code>Region</code>"
      },
      {
        "id": "B",
        "text": "Metric <code>HTTPCode_Target_5XX_Count</code> in namespace <code>AWS/ApplicationELB</code>"
      },
      {
        "id": "C",
        "text": "Metric <code>RequestCount</code> in namespace <code>AWS/CloudFront</code>"
      },
      {
        "id": "D",
        "text": "Metric <code>PacketsDropCW</code> in namespace <code>AWS/NetworkFirewall</code>"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "AWS WAF publishes metrics to the `AWS/WAFV2` CloudWatch namespace. The `BlockedRequests` metric with the `Rule` dimension representing the SQL injection rule group allows alarming specifically on malicious traffic blocked by that exact security rule.",
    "referenceUrl": "https://docs.aws.amazon.com/security/",
    "tags": [
      "AWS-WAF",
      "CloudWatch",
      "BlockedRequests",
      "SQLi"
    ],
    "id": "aws-scs-66"
  },
  {
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d2",
    "domainName": "Security Logging and Monitoring",
    "title": "Detecting Security Group Ingress Rule Modifications in Real Time",
    "scenario": "A security administrator needs an instant notification whenever any security group in any VPC is modified to permit inbound traffic from 0.0.0.0/0 on any port.",
    "question": "Which event-driven architecture detects permissive security group rules immediately upon execution?",
    "options": [
      {
        "id": "A",
        "text": "An Amazon EventBridge rule matching CloudTrail API calls <code>AuthorizeSecurityGroupIngress</code>, triggering a Lambda function that inspects the <code>ipPermissions</code> payload and sends an alert via SNS if CIDR 0.0.0.0/0 is detected"
      },
      {
        "id": "B",
        "text": "An Amazon CloudWatch Logs metric filter that runs once a day"
      },
      {
        "id": "C",
        "text": "A cron script that calls aws ec2 describe-security-groups every hour"
      },
      {
        "id": "D",
        "text": "An S3 Lifecycle rule that deletes security groups"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "EventBridge receives CloudTrail API calls in near-real-time. Matching `AuthorizeSecurityGroupIngress` and passing the event payload to an AWS Lambda function allows evaluating the exact IP permissions added; if `0.0.0.0/0` is found, Lambda can alert via SNS and invoke `RevokeSecurityGroupIngress` to auto-remediate.",
    "referenceUrl": "https://docs.aws.amazon.com/security/",
    "tags": [
      "EventBridge",
      "Security-Groups",
      "AuthorizeSecurityGroupIngress",
      "Automation"
    ],
    "id": "aws-scs-67"
  },
  {
    "difficulty": "easy",
    "certId": "aws-scs",
    "domainId": "d2",
    "domainName": "Security Logging and Monitoring",
    "title": "Amazon Athena Querying CloudTrail for Compromised Access Key Actions",
    "scenario": "An AWS access key was exposed publicly. An investigator must find all API operations executed by this access key ID across all regions in the past 48 hours.",
    "question": "Which SQL query against the CloudTrail Athena table returns the activity of this compromised access key?",
    "options": [
      {
        "id": "A",
        "text": "<code>SELECT eventtime, eventsource, eventname, sourceipaddress, useragent FROM cloudtrail_logs WHERE useridentity.accesskeyid = 'AKIAEXAMPLE12345' AND eventtime &gt;= '2026-09-01T00:00:00Z' ORDER BY eventtime DESC;</code>"
      },
      {
        "id": "B",
        "text": "<code>SELECT * FROM cloudtrail_logs WHERE useridentity.type = 'Root';</code>"
      },
      {
        "id": "C",
        "text": "<code>SELECT count(*) FROM cloudtrail_logs GROUP BY eventsource;</code>"
      },
      {
        "id": "D",
        "text": "<code>SELECT * FROM vpc_flow_logs WHERE action = 'REJECT';</code>"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "In CloudTrail event schemas, the access key ID used to sign the API request is recorded under `userIdentity.accessKeyId`. Querying by this field returns the exact timeline of actions, source IPs, and user agents associated with the compromised credential.",
    "referenceUrl": "https://docs.aws.amazon.com/security/",
    "tags": [
      "Athena",
      "CloudTrail",
      "Forensics",
      "Access-Keys"
    ],
    "id": "aws-scs-68"
  },
  {
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d2",
    "domainName": "Security Logging and Monitoring",
    "title": "Configuring Cross-Account Access for CloudTrail S3 Bucket Delivery",
    "scenario": "CloudTrail in Account A fails to deliver log files to an S3 bucket in Account B with an `AccessDenied` error in the CloudTrail console.",
    "question": "What permissions must be granted in the S3 bucket policy in Account B to allow CloudTrail log delivery?",
    "options": [
      {
        "id": "A",
        "text": "Grant <code>s3:PutObject</code> and <code>s3:GetBucketAcl</code> permissions to the principal <code>cloudtrail.amazonaws.com</code> with a condition matching Account A's ARN or ID (or <code>aws:SourceArn</code> of the trail)"
      },
      {
        "id": "B",
        "text": "Grant full <code>s3:*</code> access to <code>*</code> without any conditions"
      },
      {
        "id": "C",
        "text": "Attach an IAM user policy to the root account of Account B"
      },
      {
        "id": "D",
        "text": "Disable S3 bucket encryption in Account B"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "To deliver logs across accounts, the destination S3 bucket policy in Account B must explicitly permit the `cloudtrail.amazonaws.com` service principal to call `s3:GetBucketAcl` and `s3:PutObject`. To prevent confused deputy vulnerabilities, the policy must include an `aws:SourceArn` condition matching the specific trail ARN.",
    "referenceUrl": "https://docs.aws.amazon.com/security/",
    "tags": [
      "S3-Bucket-Policy",
      "CloudTrail",
      "Cross-Account",
      "Least-Privilege"
    ],
    "id": "aws-scs-69"
  },
  {
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d2",
    "domainName": "Security Logging and Monitoring",
    "title": "Detecting VPC Peering Route Alterations via CloudWatch Alarms",
    "scenario": "To enforce perimeter integrity, a security policy mandates real-time alerting whenever a VPC route table is updated to route traffic to a VPC peering connection.",
    "question": "Which metric filter pattern satisfies CIS Benchmark requirements for VPC route table changes?",
    "options": [
      {
        "id": "A",
        "text": "<code>{($.eventName=CreateRoute)||($.eventName=CreateRouteTable)||($.eventName=ReplaceRoute)||($.eventName=ReplaceRouteTableAssociation)||($.eventName=DeleteRouteTable)||($.eventName=DeleteRoute)||($.eventName=DisassociateRouteTable)}</code>"
      },
      {
        "id": "B",
        "text": "<code>{ $.eventSource = \"iam.amazonaws.com\" }</code>"
      },
      {
        "id": "C",
        "text": "<code>{ $.eventName = \"DescribeRouteTables\" }</code>"
      },
      {
        "id": "D",
        "text": "<code>{ $.userIdentity.sessionContext = null }</code>"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "Modifications to VPC route tables (e.g. adding routes pointing to VPC peering connections, virtual private gateways, or internet gateways) can alter traffic paths and bypass firewalls. Filtering for `CreateRoute`, `ReplaceRoute`, and route table association changes satisfies CIS benchmarks.",
    "referenceUrl": "https://docs.aws.amazon.com/security/",
    "tags": [
      "CloudWatch",
      "Metric-Filter",
      "Route-Tables",
      "CIS-Benchmark"
    ],
    "id": "aws-scs-70"
  },
  {
    "difficulty": "hard",
    "certId": "aws-scs",
    "domainId": "d2",
    "domainName": "Security Logging and Monitoring",
    "title": "Monitoring Network ACL Modifications",
    "scenario": "A malicious insider attempts to disable network segmentation by adding an allow-all inbound rule to a subnet's Network ACL.",
    "question": "Which CloudWatch Logs metric filter pattern identifies Network ACL modifications?",
    "options": [
      {
        "id": "A",
        "text": "<code>{($.eventName=CreateNetworkAcl)||($.eventName=CreateNetworkAclEntry)||($.eventName=DeleteNetworkAcl)||($.eventName=DeleteNetworkAclEntry)||($.eventName=ReplaceNetworkAclEntry)||($.eventName=ReplaceNetworkAclAssociation)}</code>"
      },
      {
        "id": "B",
        "text": "<code>{ $.eventSource = \"lambda.amazonaws.com\" }</code>"
      },
      {
        "id": "C",
        "text": "<code>{ $.eventName = \"DescribeNetworkAcls\" }</code>"
      },
      {
        "id": "D",
        "text": "<code>{ $.responseElements = true }</code>"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "Network ACLs act as stateless subnet firewalls. Any addition, deletion, or replacement of Network ACL entries could expose critical subnets to attack. The CIS AWS Foundations benchmark specifies filtering CloudTrail logs for all `*NetworkAcl*` modification events.",
    "referenceUrl": "https://docs.aws.amazon.com/security/",
    "tags": [
      "CloudWatch",
      "Metric-Filter",
      "Network-ACL",
      "CIS-Benchmark"
    ],
    "id": "aws-scs-71"
  },
  {
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d2",
    "domainName": "Security Logging and Monitoring",
    "title": "Enabling CloudWatch Logs Data Protection and Masking",
    "scenario": "Application containers running on ECS write customer diagnostic logs to CloudWatch Logs. Occasionally, developers accidentally log credit card numbers and email addresses in plaintext.",
    "question": "Which CloudWatch Logs feature automatically masks sensitive PII and financial data in log streams without changing application code?",
    "options": [
      {
        "id": "A",
        "text": "CloudWatch Logs Data Protection policies configured with managed data identifiers for credit cards and email addresses"
      },
      {
        "id": "B",
        "text": "AWS WAF Data Masking rules attached to the ECS task definition"
      },
      {
        "id": "C",
        "text": "S3 Glacier Vault Lock policies"
      },
      {
        "id": "D",
        "text": "Amazon GuardDuty Malware Protection"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "CloudWatch Logs Data Protection uses pattern matching and machine learning to automatically detect and mask sensitive data (PII, credit card numbers, secret keys) as it is ingested into log groups. Masked data appears as asterisks in the console, while authorized users with the `logs:Unmask` permission can view the unmasked payload.",
    "referenceUrl": "https://docs.aws.amazon.com/security/",
    "tags": [
      "CloudWatch-Logs",
      "Data-Protection",
      "PII-Masking",
      "Compliance"
    ],
    "id": "aws-scs-72"
  },
  {
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d2",
    "domainName": "Security Logging and Monitoring",
    "title": "Detecting S3 Bucket Lifecycle Policy Deletion",
    "scenario": "An enterprise relies on S3 Lifecycle rules to transition sensitive data to Glacier after 30 days and permanently expire it after 365 days. The security team must be notified if any lifecycle configuration is deleted.",
    "question": "Which EventBridge rule pattern detects the deletion of S3 bucket lifecycle configurations?",
    "options": [
      {
        "id": "A",
        "text": "<code>{ \"source\": [\"aws.s3\"], \"detail-type\": [\"AWS API Call via CloudTrail\"], \"detail\": { \"eventSource\": [\"s3.amazonaws.com\"], \"eventName\": [\"DeleteBucketLifecycle\"] } }</code>"
      },
      {
        "id": "B",
        "text": "<code>{ \"source\": [\"aws.glacier\"], \"detail\": { \"action\": [\"Expire\"] } }</code>"
      },
      {
        "id": "C",
        "text": "<code>{ \"source\": [\"aws.s3\"], \"detail\": { \"eventName\": [\"GetObject\"] } }</code>"
      },
      {
        "id": "D",
        "text": "<code>{ \"source\": [\"aws.config\"], \"detail\": { \"configRuleName\": [\"s3-lifecycle\"] } }</code>"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "Deleting an S3 lifecycle configuration halts automated archiving and expiration, leading to compliance violations and data retention risks. Matching `eventName: [\"DeleteBucketLifecycle\"]` in an EventBridge rule triggers immediate alerting and automated rollback.",
    "referenceUrl": "https://docs.aws.amazon.com/security/",
    "tags": [
      "EventBridge",
      "S3",
      "DeleteBucketLifecycle",
      "Data-Retention"
    ],
    "id": "aws-scs-73"
  },
  {
    "difficulty": "easy",
    "certId": "aws-scs",
    "domainId": "d2",
    "domainName": "Security Logging and Monitoring",
    "title": "AWS Config Conformance Packs for Automated Regulatory Compliance",
    "scenario": "An enterprise must ensure that all accounts in their AWS Organization comply with the PCI-DSS security framework across all services (IAM, S3, KMS, EC2) using pre-packaged, auditable templates.",
    "question": "Which AWS Config capability packages rules and remediation actions into a single manageable unit across an organization?",
    "options": [
      {
        "id": "A",
        "text": "AWS Config Conformance Packs deployed organization-wide using an Organization Conformance Pack"
      },
      {
        "id": "B",
        "text": "AWS Systems Manager Inventory dashboards"
      },
      {
        "id": "C",
        "text": "Amazon Inspector Assessment Templates"
      },
      {
        "id": "D",
        "text": "AWS Artifact Reports"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "A Conformance Pack is a collection of AWS Config rules and automated remediation actions packaged into a single YAML template. Deploying an Organization Conformance Pack pushes the entire compliance baseline (e.g. Operational Best Practices for PCI-DSS) across all accounts in the organization in a single deployment.",
    "referenceUrl": "https://docs.aws.amazon.com/security/",
    "tags": [
      "AWS-Config",
      "Conformance-Packs",
      "PCI-DSS",
      "Governance"
    ],
    "id": "aws-scs-74"
  },
  {
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d2",
    "domainName": "Security Logging and Monitoring",
    "title": "Monitoring AWS Shield Advanced DDoS Detection Metrics",
    "scenario": "A critical banking web application is protected by AWS Shield Advanced. The SOC team must monitor DDoS attack vectors and receive alerts if an application-layer flood attack begins.",
    "question": "Which CloudWatch metric emitted by AWS Shield Advanced indicates an active DDoS event?",
    "options": [
      {
        "id": "A",
        "text": "Metric <code>DDoSDetected</code> in namespace <code>AWS/DDoSProtection</code> with dimension <code>ResourceArn</code>"
      },
      {
        "id": "B",
        "text": "Metric <code>CPUUtilization</code> in namespace <code>AWS/EC2</code>"
      },
      {
        "id": "C",
        "text": "Metric <code>SurgeQueueLength</code> in namespace <code>AWS/ELB</code>"
      },
      {
        "id": "D",
        "text": "Metric <code>IncomingBytes</code> in namespace <code>AWS/Kinesis</code>"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "AWS Shield Advanced publishes DDoS detection metrics to the `AWS/DDoSProtection` CloudWatch namespace. The `DDoSDetected` metric has a value of 1 when Shield Advanced detects an attack against a protected resource (e.g. an ALB, CloudFront distribution, or Route 53 hosted zone).",
    "referenceUrl": "https://docs.aws.amazon.com/security/",
    "tags": [
      "Shield-Advanced",
      "DDoSDetected",
      "CloudWatch",
      "Perimeter-Security"
    ],
    "id": "aws-scs-75"
  }
];

export default AWS_SCS_QUESTIONS_3;
