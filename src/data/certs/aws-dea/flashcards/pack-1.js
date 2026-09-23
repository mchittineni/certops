export const AWS_DEA_FLASHCARDS_1 = [
  {
    id: 'aws-dea-fc-1',
    difficulty: 'easy',
    certId: 'aws-dea',
    domainId: 'd1',
    front: 'Why is Apache Parquet preferred over CSV for analytical queries in Amazon Athena?',
    hint: 'Columnar storage and predicate pushdown.',
    back: '<strong>Apache Parquet</strong> is a columnar format supporting data compression, dictionary encoding, and column pruning. Amazon Athena reads only the queried columns and skips non-matching row groups using statistics (min/max), dramatically reducing scanned bytes and query cost.',
    tags: ['Athena', 'Parquet', 'Columnar Storage']
  },
  {
    id: 'aws-dea-fc-2',
    difficulty: 'medium',
    certId: 'aws-dea',
    domainId: 'd2',
    front: 'What are the three core distribution styles (DISTSTYLE) in Amazon Redshift?',
    hint: 'KEY, EVEN, ALL.',
    back: '<strong>DISTSTYLE KEY</strong> distributes rows based on hash values of a specific column to collocate join keys; <strong>DISTSTYLE EVEN</strong> distributes rows round-robin across slices for uniform distribution; <strong>DISTSTYLE ALL</strong> replicates the whole table to every node for small dimension tables.',
    tags: ['Redshift', 'DISTSTYLE']
  },
  {
    id: 'aws-dea-fc-3',
    difficulty: 'medium',
    certId: 'aws-dea',
    domainId: 'd3',
    front: 'What is the role of an AWS Glue Data Catalog crawler?',
    hint: 'Automated schema discovery.',
    back: 'An <strong>AWS Glue crawler</strong> connects to source datastores (such as Amazon S3, JDBC databases, or DynamoDB), determines data formats, infers schemas, detects partitions, and writes table metadata definitions into the central AWS Glue Data Catalog.',
    tags: ['AWS Glue', 'Data Catalog', 'Crawlers']
  },
  {
    id: 'aws-dea-fc-4',
    difficulty: 'hard',
    certId: 'aws-dea',
    domainId: 'd4',
    front: 'How does AWS Lake Formation implement cell-level security?',
    hint: 'Data filters combining column inclusion and row filter expressions.',
    back: 'Lake Formation uses <strong>Data Filters</strong> that define both a column-level inclusion or exclusion list and an open-SQL row filter expression (e.g. <code>country = "US"</code>). Query engines like Athena and Redshift Spectrum automatically enforce these filters per IAM principal.',
    tags: ['Lake Formation', 'Cell-level Security', 'Governance']
  }
];

export default AWS_DEA_FLASHCARDS_1;
