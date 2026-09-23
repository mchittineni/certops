export const AWS_DEA_QUESTIONS_1 = [
  {
    id: "aws-dea-1",
    difficulty: "easy",
    certId: "aws-dea",
    domainId: "d1",
    domainName: "Data Ingestion and Transformation",
    title: "Serverless Event-Driven ETL with AWS Glue",
    scenario: "An analytics team processes daily CSV dumps arriving in Amazon S3. The pipeline must automatically infer schemas, convert records into columnar Apache Parquet format, and partition datasets by year, month, and day.",
    question: "Which AWS managed data service is best suited to perform this transformation without server provisioning?",
    options: [
      { id: 'A', text: "AWS Glue ETL Jobs with DynamicFrames" },
      { id: 'B', text: "Amazon EC2 instance with custom Python scripts" },
      { id: 'C', text: "Amazon OpenSearch Service ingest pipelines" },
      { id: 'D', text: "Amazon RDS for PostgreSQL with cron tasks" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AWS Glue is a serverless data integration service running managed Apache Spark engines. Glue ETL jobs natively use DynamicFrames to process, clean, and convert raw CSV data into partitioned columnar Parquet formats with automated schema handling and without provisioning clusters.",
    referenceUrl: "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl.html",
    tags: ["AWS Glue", "Parquet", "ETL"]
  },
  {
    id: "aws-dea-2",
    difficulty: "medium",
    certId: "aws-dea",
    domainId: "d2",
    domainName: "Data Store Management",
    title: "Optimizing Query Performance on Amazon Redshift",
    scenario: "A data warehouse engineer needs to optimize multi-table join queries in Amazon Redshift between a massive 10-billion-row sales fact table and a 500-row store location dimension table.",
    question: "Which distribution style should the engineer choose for the small dimension table?",
    options: [
      { id: 'A', text: "DISTSTYLE ALL" },
      { id: 'B', text: "DISTSTYLE EVEN" },
      { id: 'C', text: "DISTSTYLE KEY" },
      { id: 'D', text: "DISTSTYLE AUTO" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "DISTSTYLE ALL replicates the entire table across all compute nodes in the Amazon Redshift cluster. For small dimension tables (such as a 500-row store lookup table), replicating the data guarantees local joins with the collocated slices of the large fact table, eliminating expensive network redistribution during query processing.",
    referenceUrl: "https://docs.aws.amazon.com/redshift/latest/dg/c_choosing_dist_sort.html",
    tags: ["Amazon Redshift", "DISTSTYLE", "Data Warehousing"]
  },
  {
    id: "aws-dea-3",
    difficulty: "medium",
    certId: "aws-dea",
    domainId: "d3",
    domainName: "Data Operations and Support",
    title: "Orchestrating Complex Pipelines with AWS Step Functions",
    scenario: "An enterprise data team requires automated pipeline orchestration that triggers an AWS Glue crawler, waits for completion, starts an Amazon EMR Spark step on success, and alerts on failure with exponential retry logic.",
    question: "Which orchestration service provides native state-machine visual workflows and retry handling for these requirements?",
    options: [
      { id: 'A', text: "AWS Step Functions state machines" },
      { id: 'B', text: "Amazon SQS dead-letter queue polling" },
      { id: 'C', text: "AWS Batch job queues with shell scripts" },
      { id: 'D', text: "Amazon EventBridge scheduled cron rules alone" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AWS Step Functions provides low-code visual workflow orchestration that natively integrates with AWS Glue, Amazon EMR, Athena, and SNS. It handles branching logic, conditional state transitions, service polling, and configurable error catchers with exponential backoff retries.",
    referenceUrl: "https://docs.aws.amazon.com/step-functions/latest/dg/connect-glue.html",
    tags: ["Step Functions", "Orchestration", "EMR", "Glue"]
  },
  {
    id: "aws-dea-4",
    difficulty: "hard",
    certId: "aws-dea",
    domainId: "d4",
    domainName: "Data Security and Governance",
    title: "Fine-Grained Column-Level Permissions with AWS Lake Formation",
    scenario: "A financial organization maintains an S3 data lake queried via Amazon Athena and Amazon Redshift Spectrum. Compliance regulations require masking credit card numbers and restricting column access based on the querying user's IAM role.",
    question: "Which service centralizes fine-grained column-level access controls across Amazon Athena and Redshift Spectrum?",
    options: [
      { id: 'A', text: "AWS Lake Formation permissions with data filters" },
      { id: 'B', text: "Amazon S3 bucket policies with string condition keys" },
      { id: 'C', text: "AWS KMS key policies with grant tokens" },
      { id: 'D', text: "AWS IAM inline policies with resource ARN wildcards" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AWS Lake Formation centralizes security management for data lakes. Its data filters enable cell-level and column-level security and data masking, enforcing access policies transparently when users query data lake tables through Amazon Athena, Amazon Redshift Spectrum, or AWS Glue.",
    referenceUrl: "https://docs.aws.amazon.com/lake-formation/latest/dg/data-filters-about.html",
    tags: ["Lake Formation", "Data Governance", "Column-level Security"]
  }
];

export default AWS_DEA_QUESTIONS_1;
