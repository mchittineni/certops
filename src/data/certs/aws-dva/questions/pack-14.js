export const AWS_DVA_QUESTIONS_14 = [
  {
    id: "aws-dva-326",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "Step Functions Task Tokens Callback Pattern: Dr Failover",
    scenario: "A high-availability enterprise cloud service requires strict operational resilience and automated disaster recovery capabilities. The engineering team must eliminate single points of failure across operational workflows. The application utilizes AWS Step Functions to pause a serverless workflow to wait for external human manager approval or third-party legacy batch completion before proceeding to the next step.",
    question: "Which implementation or architectural approach satisfies these resilience criteria? Step Functions callback pattern with task tokens is being implemented.",
    options: [
      { id: 'A', text: "Configure a Step Functions Task state with `.waitForTaskToken`, pass the task token to the external process, and call `SendTaskSuccess` when approved." },
      { id: 'B', text: "Write an AWS Lambda function with an infinite loop executing `sleep(30)` until an external database flag changes." },
      { id: 'C', text: "Deploy an Amazon SQS queue polled by Step Functions every 10 seconds." },
      { id: 'D', text: "Create an AWS CodePipeline pipeline with a manual approval action." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a Step Functions Task state with `.waitForTaskToken`, pass the task token to the external process, and call `SendTaskSuccess` when approved. The Step Functions callback pattern (`.waitForTaskToken`) pauses the state machine execution indefinitely (up to 1 year) without consuming compute resources while waiting for an external system or human reviewer to return the task token using the `SendTaskSuccess` or `SendTaskFailure` API.",
    referenceUrl: "https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-wait-token",
    tags: ["AWS Step Functions", "Step Functions", "Dr Failover"]
  },
  {
    id: "aws-dva-327",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "Step Functions Task Tokens Callback Pattern: High Load Scale",
    scenario: "A high-throughput digital platform experiences sudden spikes in concurrent user traffic during flash promotions. Developers must ensure sub-second response times and predictable scaling under peak throughput. The application utilizes AWS Step Functions to pause a serverless workflow to wait for external human manager approval or third-party legacy batch completion before proceeding to the next step.",
    question: "Which architectural approach should the developer recommend to handle this workload efficiently? Step Functions callback pattern with task tokens is being implemented.",
    options: [
      { id: 'A', text: "Configure a Step Functions Task state with `.waitForTaskToken`, pass the task token to the external process, and call `SendTaskSuccess` when approved." },
      { id: 'B', text: "Write an AWS Lambda function with an infinite loop executing `sleep(30)` until an external database flag changes." },
      { id: 'C', text: "Deploy an Amazon SQS queue polled by Step Functions every 10 seconds." },
      { id: 'D', text: "Create an AWS CodePipeline pipeline with a manual approval action." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a Step Functions Task state with `.waitForTaskToken`, pass the task token to the external process, and call `SendTaskSuccess` when approved. The Step Functions callback pattern (`.waitForTaskToken`) pauses the state machine execution indefinitely (up to 1 year) without consuming compute resources while waiting for an external system or human reviewer to return the task token using the `SendTaskSuccess` or `SendTaskFailure` API.",
    referenceUrl: "https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-wait-token",
    tags: ["AWS Step Functions", "Step Functions", "High Load Scale"]
  },
  {
    id: "aws-dva-328",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "Step Functions Task Tokens Callback Pattern: Security Compliance",
    scenario: "A financial and healthcare service must adhere to strict regulatory compliance, encryption standards, and least privilege access principles. Security auditors require verified enforcement across all application tiers. The application utilizes AWS Step Functions to pause a serverless workflow to wait for external human manager approval or third-party legacy batch completion before proceeding to the next step.",
    question: "Which solution properly implements these mandatory security and governance controls? Step Functions callback pattern with task tokens is being implemented.",
    options: [
      { id: 'A', text: "Configure a Step Functions Task state with `.waitForTaskToken`, pass the task token to the external process, and call `SendTaskSuccess` when approved." },
      { id: 'B', text: "Write an AWS Lambda function with an infinite loop executing `sleep(30)` until an external database flag changes." },
      { id: 'C', text: "Deploy an Amazon SQS queue polled by Step Functions every 10 seconds." },
      { id: 'D', text: "Create an AWS CodePipeline pipeline with a manual approval action." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a Step Functions Task state with `.waitForTaskToken`, pass the task token to the external process, and call `SendTaskSuccess` when approved. The Step Functions callback pattern (`.waitForTaskToken`) pauses the state machine execution indefinitely (up to 1 year) without consuming compute resources while waiting for an external system or human reviewer to return the task token using the `SendTaskSuccess` or `SendTaskFailure` API.",
    referenceUrl: "https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-wait-token",
    tags: ["AWS Step Functions", "Step Functions", "Security Compliance"]
  },
  {
    id: "aws-dva-329",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "Step Functions Task Tokens Callback Pattern: Hybrid Migration",
    scenario: "An enterprise development team is refactoring a legacy monolithic application into cloud-native microservices on AWS. The architecture must minimize operational complexity while leveraging managed services. The application utilizes AWS Step Functions to pause a serverless workflow to wait for external human manager approval or third-party legacy batch completion before proceeding to the next step.",
    question: "Which solution provides a robust implementation while minimizing ongoing operational maintenance? Step Functions callback pattern with task tokens is being implemented.",
    options: [
      { id: 'A', text: "Configure a Step Functions Task state with `.waitForTaskToken`, pass the task token to the external process, and call `SendTaskSuccess` when approved." },
      { id: 'B', text: "Write an AWS Lambda function with an infinite loop executing `sleep(30)` until an external database flag changes." },
      { id: 'C', text: "Deploy an Amazon SQS queue polled by Step Functions every 10 seconds." },
      { id: 'D', text: "Create an AWS CodePipeline pipeline with a manual approval action." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a Step Functions Task state with `.waitForTaskToken`, pass the task token to the external process, and call `SendTaskSuccess` when approved. The Step Functions callback pattern (`.waitForTaskToken`) pauses the state machine execution indefinitely (up to 1 year) without consuming compute resources while waiting for an external system or human reviewer to return the task token using the `SendTaskSuccess` or `SendTaskFailure` API.",
    referenceUrl: "https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-wait-token",
    tags: ["AWS Step Functions", "Step Functions", "Hybrid Migration"]
  },
  {
    id: "aws-dva-330",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "Step Functions Task Tokens Callback Pattern: Resilience Failure",
    scenario: "A distributed cloud application experiences intermittent downstream service timeouts and connection exhaustion during peak operational hours. The development team must establish automated recovery and fault isolation. The application utilizes AWS Step Functions to pause a serverless workflow to wait for external human manager approval or third-party legacy batch completion before proceeding to the next step.",
    question: "Which design pattern or service configuration eliminates bottlenecks and provides automated fault recovery? Step Functions callback pattern with task tokens is being implemented.",
    options: [
      { id: 'A', text: "Configure a Step Functions Task state with `.waitForTaskToken`, pass the task token to the external process, and call `SendTaskSuccess` when approved." },
      { id: 'B', text: "Write an AWS Lambda function with an infinite loop executing `sleep(30)` until an external database flag changes." },
      { id: 'C', text: "Deploy an Amazon SQS queue polled by Step Functions every 10 seconds." },
      { id: 'D', text: "Create an AWS CodePipeline pipeline with a manual approval action." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a Step Functions Task state with `.waitForTaskToken`, pass the task token to the external process, and call `SendTaskSuccess` when approved. The Step Functions callback pattern (`.waitForTaskToken`) pauses the state machine execution indefinitely (up to 1 year) without consuming compute resources while waiting for an external system or human reviewer to return the task token using the `SendTaskSuccess` or `SendTaskFailure` API.",
    referenceUrl: "https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-wait-token",
    tags: ["AWS Step Functions", "Step Functions", "Resilience Failure"]
  },
  {
    id: "aws-dva-331",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "KMS GenerateDataKey Envelope Encryption: Dr Failover",
    scenario: "A high-availability enterprise cloud service requires strict operational resilience and automated disaster recovery capabilities. The engineering team must eliminate single points of failure across operational workflows. The application utilizes AWS KMS to encrypt large 5 GB video files locally within an application before uploading them to storage without transmitting the entire payload over the network to AWS KMS.",
    question: "Which implementation or architectural approach satisfies these resilience criteria? KMS GenerateDataKey API for envelope encryption is being implemented.",
    options: [
      { id: 'A', text: "Call the KMS `GenerateDataKey` API to obtain a plaintext data key and an encrypted data key, encrypt the file locally with the plaintext key, erase the plaintext key from memory, and store the encrypted data key alongside the ciphertext." },
      { id: 'B', text: "Send the entire 5 GB file to the KMS `Encrypt` API endpoint directly." },
      { id: 'C', text: "Store the master KMS key plaintext material in an encrypted configuration file." },
      { id: 'D', text: "Encrypt the file using AWS CloudTrail digests before uploading." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Call the KMS `GenerateDataKey` API to obtain a plaintext data key and an encrypted data key, encrypt the file locally with the plaintext key, erase the plaintext key from memory, and store the encrypted data key alongside the ciphertext. AWS KMS `Encrypt` API can only encrypt up to 4 KB of data directly. For larger payloads, applications implement envelope encryption using `GenerateDataKey`: the KMS customer managed key protects a 256-bit symmetric data key, and the data key encrypts the large payload locally using AES-GCM.",
    referenceUrl: "https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#enveloping",
    tags: ["AWS KMS", "KMS", "Dr Failover"]
  },
  {
    id: "aws-dva-332",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "KMS GenerateDataKey Envelope Encryption: High Load Scale",
    scenario: "A high-throughput digital platform experiences sudden spikes in concurrent user traffic during flash promotions. Developers must ensure sub-second response times and predictable scaling under peak throughput. The application utilizes AWS KMS to encrypt large 5 GB video files locally within an application before uploading them to storage without transmitting the entire payload over the network to AWS KMS.",
    question: "Which architectural approach should the developer recommend to handle this workload efficiently? KMS GenerateDataKey API for envelope encryption is being implemented.",
    options: [
      { id: 'A', text: "Call the KMS `GenerateDataKey` API to obtain a plaintext data key and an encrypted data key, encrypt the file locally with the plaintext key, erase the plaintext key from memory, and store the encrypted data key alongside the ciphertext." },
      { id: 'B', text: "Send the entire 5 GB file to the KMS `Encrypt` API endpoint directly." },
      { id: 'C', text: "Store the master KMS key plaintext material in an encrypted configuration file." },
      { id: 'D', text: "Encrypt the file using AWS CloudTrail digests before uploading." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Call the KMS `GenerateDataKey` API to obtain a plaintext data key and an encrypted data key, encrypt the file locally with the plaintext key, erase the plaintext key from memory, and store the encrypted data key alongside the ciphertext. AWS KMS `Encrypt` API can only encrypt up to 4 KB of data directly. For larger payloads, applications implement envelope encryption using `GenerateDataKey`: the KMS customer managed key protects a 256-bit symmetric data key, and the data key encrypts the large payload locally using AES-GCM.",
    referenceUrl: "https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#enveloping",
    tags: ["AWS KMS", "KMS", "High Load Scale"]
  },
  {
    id: "aws-dva-333",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "KMS GenerateDataKey Envelope Encryption: Security Compliance",
    scenario: "A financial and healthcare service must adhere to strict regulatory compliance, encryption standards, and least privilege access principles. Security auditors require verified enforcement across all application tiers. The application utilizes AWS KMS to encrypt large 5 GB video files locally within an application before uploading them to storage without transmitting the entire payload over the network to AWS KMS.",
    question: "Which solution properly implements these mandatory security and governance controls? KMS GenerateDataKey API for envelope encryption is being implemented.",
    options: [
      { id: 'A', text: "Call the KMS `GenerateDataKey` API to obtain a plaintext data key and an encrypted data key, encrypt the file locally with the plaintext key, erase the plaintext key from memory, and store the encrypted data key alongside the ciphertext." },
      { id: 'B', text: "Send the entire 5 GB file to the KMS `Encrypt` API endpoint directly." },
      { id: 'C', text: "Store the master KMS key plaintext material in an encrypted configuration file." },
      { id: 'D', text: "Encrypt the file using AWS CloudTrail digests before uploading." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Call the KMS `GenerateDataKey` API to obtain a plaintext data key and an encrypted data key, encrypt the file locally with the plaintext key, erase the plaintext key from memory, and store the encrypted data key alongside the ciphertext. AWS KMS `Encrypt` API can only encrypt up to 4 KB of data directly. For larger payloads, applications implement envelope encryption using `GenerateDataKey`: the KMS customer managed key protects a 256-bit symmetric data key, and the data key encrypts the large payload locally using AES-GCM.",
    referenceUrl: "https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#enveloping",
    tags: ["AWS KMS", "KMS", "Security Compliance"]
  },
  {
    id: "aws-dva-334",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "KMS GenerateDataKey Envelope Encryption: Hybrid Migration",
    scenario: "An enterprise development team is refactoring a legacy monolithic application into cloud-native microservices on AWS. The architecture must minimize operational complexity while leveraging managed services. The application utilizes AWS KMS to encrypt large 5 GB video files locally within an application before uploading them to storage without transmitting the entire payload over the network to AWS KMS.",
    question: "Which solution provides a robust implementation while minimizing ongoing operational maintenance? KMS GenerateDataKey API for envelope encryption is being implemented.",
    options: [
      { id: 'A', text: "Call the KMS `GenerateDataKey` API to obtain a plaintext data key and an encrypted data key, encrypt the file locally with the plaintext key, erase the plaintext key from memory, and store the encrypted data key alongside the ciphertext." },
      { id: 'B', text: "Send the entire 5 GB file to the KMS `Encrypt` API endpoint directly." },
      { id: 'C', text: "Store the master KMS key plaintext material in an encrypted configuration file." },
      { id: 'D', text: "Encrypt the file using AWS CloudTrail digests before uploading." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Call the KMS `GenerateDataKey` API to obtain a plaintext data key and an encrypted data key, encrypt the file locally with the plaintext key, erase the plaintext key from memory, and store the encrypted data key alongside the ciphertext. AWS KMS `Encrypt` API can only encrypt up to 4 KB of data directly. For larger payloads, applications implement envelope encryption using `GenerateDataKey`: the KMS customer managed key protects a 256-bit symmetric data key, and the data key encrypts the large payload locally using AES-GCM.",
    referenceUrl: "https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#enveloping",
    tags: ["AWS KMS", "KMS", "Hybrid Migration"]
  },
  {
    id: "aws-dva-335",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "KMS GenerateDataKey Envelope Encryption: Resilience Failure",
    scenario: "A distributed cloud application experiences intermittent downstream service timeouts and connection exhaustion during peak operational hours. The development team must establish automated recovery and fault isolation. The application utilizes AWS KMS to encrypt large 5 GB video files locally within an application before uploading them to storage without transmitting the entire payload over the network to AWS KMS.",
    question: "Which design pattern or service configuration eliminates bottlenecks and provides automated fault recovery? KMS GenerateDataKey API for envelope encryption is being implemented.",
    options: [
      { id: 'A', text: "Call the KMS `GenerateDataKey` API to obtain a plaintext data key and an encrypted data key, encrypt the file locally with the plaintext key, erase the plaintext key from memory, and store the encrypted data key alongside the ciphertext." },
      { id: 'B', text: "Send the entire 5 GB file to the KMS `Encrypt` API endpoint directly." },
      { id: 'C', text: "Store the master KMS key plaintext material in an encrypted configuration file." },
      { id: 'D', text: "Encrypt the file using AWS CloudTrail digests before uploading." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Call the KMS `GenerateDataKey` API to obtain a plaintext data key and an encrypted data key, encrypt the file locally with the plaintext key, erase the plaintext key from memory, and store the encrypted data key alongside the ciphertext. AWS KMS `Encrypt` API can only encrypt up to 4 KB of data directly. For larger payloads, applications implement envelope encryption using `GenerateDataKey`: the KMS customer managed key protects a 256-bit symmetric data key, and the data key encrypts the large payload locally using AES-GCM.",
    referenceUrl: "https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#enveloping",
    tags: ["AWS KMS", "KMS", "Resilience Failure"]
  },
  {
    id: "aws-dva-336",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "KMS Key Policies for Cross-Account Access: Dr Failover",
    scenario: "A high-availability enterprise cloud service requires strict operational resilience and automated disaster recovery capabilities. The engineering team must eliminate single points of failure across operational workflows. The application utilizes AWS KMS to allow an AWS Lambda function running in Account B to decrypt S3 objects in Account A that are encrypted with Account A's customer managed KMS key.",
    question: "Which implementation or architectural approach satisfies these resilience criteria? KMS Key Policy granting external account access is being implemented.",
    options: [
      { id: 'A', text: "Update the KMS Key Policy in Account A to grant `kms:Decrypt` permissions to Account B's root or role ARN, and attach an IAM policy in Account B allowing `kms:Decrypt` on the KMS key ARN." },
      { id: 'B', text: "Attach an IAM policy in Account B only, without modifying Account A's KMS Key Policy." },
      { id: 'C', text: "Export the KMS key material from Account A and import it into Account B." },
      { id: 'D', text: "Configure an S3 Object ACL granting Account B public read access." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Update the KMS Key Policy in Account A to grant `kms:Decrypt` permissions to Account B's root or role ARN, and attach an IAM policy in Account B allowing `kms:Decrypt` on the KMS key ARN. Cross-account access to KMS customer-managed keys requires explicit authorization in both accounts: the KMS Key Policy in the owning account (Account A) must delegate permission to the external account, and the IAM policy in the consuming account (Account B) must grant the principal permission to call the key.",
    referenceUrl: "https://docs.aws.amazon.com/kms/latest/developerguide/key-policy-modifying-external-accounts.html",
    tags: ["AWS KMS", "KMS", "Dr Failover"]
  },
  {
    id: "aws-dva-337",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "KMS Key Policies for Cross-Account Access: High Load Scale",
    scenario: "A high-throughput digital platform experiences sudden spikes in concurrent user traffic during flash promotions. Developers must ensure sub-second response times and predictable scaling under peak throughput. The application utilizes AWS KMS to allow an AWS Lambda function running in Account B to decrypt S3 objects in Account A that are encrypted with Account A's customer managed KMS key.",
    question: "Which architectural approach should the developer recommend to handle this workload efficiently? KMS Key Policy granting external account access is being implemented.",
    options: [
      { id: 'A', text: "Update the KMS Key Policy in Account A to grant `kms:Decrypt` permissions to Account B's root or role ARN, and attach an IAM policy in Account B allowing `kms:Decrypt` on the KMS key ARN." },
      { id: 'B', text: "Attach an IAM policy in Account B only, without modifying Account A's KMS Key Policy." },
      { id: 'C', text: "Export the KMS key material from Account A and import it into Account B." },
      { id: 'D', text: "Configure an S3 Object ACL granting Account B public read access." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Update the KMS Key Policy in Account A to grant `kms:Decrypt` permissions to Account B's root or role ARN, and attach an IAM policy in Account B allowing `kms:Decrypt` on the KMS key ARN. Cross-account access to KMS customer-managed keys requires explicit authorization in both accounts: the KMS Key Policy in the owning account (Account A) must delegate permission to the external account, and the IAM policy in the consuming account (Account B) must grant the principal permission to call the key.",
    referenceUrl: "https://docs.aws.amazon.com/kms/latest/developerguide/key-policy-modifying-external-accounts.html",
    tags: ["AWS KMS", "KMS", "High Load Scale"]
  },
  {
    id: "aws-dva-338",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "KMS Key Policies for Cross-Account Access: Security Compliance",
    scenario: "A financial and healthcare service must adhere to strict regulatory compliance, encryption standards, and least privilege access principles. Security auditors require verified enforcement across all application tiers. The application utilizes AWS KMS to allow an AWS Lambda function running in Account B to decrypt S3 objects in Account A that are encrypted with Account A's customer managed KMS key.",
    question: "Which solution properly implements these mandatory security and governance controls? KMS Key Policy granting external account access is being implemented.",
    options: [
      { id: 'A', text: "Update the KMS Key Policy in Account A to grant `kms:Decrypt` permissions to Account B's root or role ARN, and attach an IAM policy in Account B allowing `kms:Decrypt` on the KMS key ARN." },
      { id: 'B', text: "Attach an IAM policy in Account B only, without modifying Account A's KMS Key Policy." },
      { id: 'C', text: "Export the KMS key material from Account A and import it into Account B." },
      { id: 'D', text: "Configure an S3 Object ACL granting Account B public read access." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Update the KMS Key Policy in Account A to grant `kms:Decrypt` permissions to Account B's root or role ARN, and attach an IAM policy in Account B allowing `kms:Decrypt` on the KMS key ARN. Cross-account access to KMS customer-managed keys requires explicit authorization in both accounts: the KMS Key Policy in the owning account (Account A) must delegate permission to the external account, and the IAM policy in the consuming account (Account B) must grant the principal permission to call the key.",
    referenceUrl: "https://docs.aws.amazon.com/kms/latest/developerguide/key-policy-modifying-external-accounts.html",
    tags: ["AWS KMS", "KMS", "Security Compliance"]
  },
  {
    id: "aws-dva-339",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "KMS Key Policies for Cross-Account Access: Hybrid Migration",
    scenario: "An enterprise development team is refactoring a legacy monolithic application into cloud-native microservices on AWS. The architecture must minimize operational complexity while leveraging managed services. The application utilizes AWS KMS to allow an AWS Lambda function running in Account B to decrypt S3 objects in Account A that are encrypted with Account A's customer managed KMS key.",
    question: "Which solution provides a robust implementation while minimizing ongoing operational maintenance? KMS Key Policy granting external account access is being implemented.",
    options: [
      { id: 'A', text: "Update the KMS Key Policy in Account A to grant `kms:Decrypt` permissions to Account B's root or role ARN, and attach an IAM policy in Account B allowing `kms:Decrypt` on the KMS key ARN." },
      { id: 'B', text: "Attach an IAM policy in Account B only, without modifying Account A's KMS Key Policy." },
      { id: 'C', text: "Export the KMS key material from Account A and import it into Account B." },
      { id: 'D', text: "Configure an S3 Object ACL granting Account B public read access." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Update the KMS Key Policy in Account A to grant `kms:Decrypt` permissions to Account B's root or role ARN, and attach an IAM policy in Account B allowing `kms:Decrypt` on the KMS key ARN. Cross-account access to KMS customer-managed keys requires explicit authorization in both accounts: the KMS Key Policy in the owning account (Account A) must delegate permission to the external account, and the IAM policy in the consuming account (Account B) must grant the principal permission to call the key.",
    referenceUrl: "https://docs.aws.amazon.com/kms/latest/developerguide/key-policy-modifying-external-accounts.html",
    tags: ["AWS KMS", "KMS", "Hybrid Migration"]
  },
  {
    id: "aws-dva-340",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "KMS Key Policies for Cross-Account Access: Resilience Failure",
    scenario: "A distributed cloud application experiences intermittent downstream service timeouts and connection exhaustion during peak operational hours. The development team must establish automated recovery and fault isolation. The application utilizes AWS KMS to allow an AWS Lambda function running in Account B to decrypt S3 objects in Account A that are encrypted with Account A's customer managed KMS key.",
    question: "Which design pattern or service configuration eliminates bottlenecks and provides automated fault recovery? KMS Key Policy granting external account access is being implemented.",
    options: [
      { id: 'A', text: "Update the KMS Key Policy in Account A to grant `kms:Decrypt` permissions to Account B's root or role ARN, and attach an IAM policy in Account B allowing `kms:Decrypt` on the KMS key ARN." },
      { id: 'B', text: "Attach an IAM policy in Account B only, without modifying Account A's KMS Key Policy." },
      { id: 'C', text: "Export the KMS key material from Account A and import it into Account B." },
      { id: 'D', text: "Configure an S3 Object ACL granting Account B public read access." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Update the KMS Key Policy in Account A to grant `kms:Decrypt` permissions to Account B's root or role ARN, and attach an IAM policy in Account B allowing `kms:Decrypt` on the KMS key ARN. Cross-account access to KMS customer-managed keys requires explicit authorization in both accounts: the KMS Key Policy in the owning account (Account A) must delegate permission to the external account, and the IAM policy in the consuming account (Account B) must grant the principal permission to call the key.",
    referenceUrl: "https://docs.aws.amazon.com/kms/latest/developerguide/key-policy-modifying-external-accounts.html",
    tags: ["AWS KMS", "KMS", "Resilience Failure"]
  },
  {
    id: "aws-dva-341",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "KMS Grants for Transient Delegated Access: Dr Failover",
    scenario: "A high-availability enterprise cloud service requires strict operational resilience and automated disaster recovery capabilities. The engineering team must eliminate single points of failure across operational workflows. The application utilizes AWS KMS to grant temporary, programmatic access to an external analytics worker to decrypt specific encrypted files without modifying the persistent KMS Key Policy.",
    question: "Which implementation or architectural approach satisfies these resilience criteria? AWS KMS Grants for temporary delegated access is being implemented.",
    options: [
      { id: 'A', text: "Use the KMS `CreateGrant` API to create a programmatic grant specifying the grantee principal, operations, and encryption context constraints, and revoke the grant upon completion." },
      { id: 'B', text: "Update the primary KMS Key Policy to add the temporary worker ARN and delete it later." },
      { id: 'C', text: "Generate a temporary AWS account root credential and share it with the worker." },
      { id: 'D', text: "Disable key rotation on the KMS customer managed key during the analytics job." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the KMS `CreateGrant` API to create a programmatic grant specifying the grantee principal, operations, and encryption context constraints, and revoke the grant upon completion. AWS KMS grants provide an advanced mechanism to grant long-term or temporary permissions programmatically to principals without modifying key policies or IAM policies. Grants can be created, retired, or revoked dynamically and are commonly used by AWS services like Amazon EBS and Amazon Redshift.",
    referenceUrl: "https://docs.aws.amazon.com/kms/latest/developerguide/grants.html",
    tags: ["AWS KMS", "KMS", "Dr Failover"]
  },
  {
    id: "aws-dva-342",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "KMS Grants for Transient Delegated Access: High Load Scale",
    scenario: "A high-throughput digital platform experiences sudden spikes in concurrent user traffic during flash promotions. Developers must ensure sub-second response times and predictable scaling under peak throughput. The application utilizes AWS KMS to grant temporary, programmatic access to an external analytics worker to decrypt specific encrypted files without modifying the persistent KMS Key Policy.",
    question: "Which architectural approach should the developer recommend to handle this workload efficiently? AWS KMS Grants for temporary delegated access is being implemented.",
    options: [
      { id: 'A', text: "Use the KMS `CreateGrant` API to create a programmatic grant specifying the grantee principal, operations, and encryption context constraints, and revoke the grant upon completion." },
      { id: 'B', text: "Update the primary KMS Key Policy to add the temporary worker ARN and delete it later." },
      { id: 'C', text: "Generate a temporary AWS account root credential and share it with the worker." },
      { id: 'D', text: "Disable key rotation on the KMS customer managed key during the analytics job." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the KMS `CreateGrant` API to create a programmatic grant specifying the grantee principal, operations, and encryption context constraints, and revoke the grant upon completion. AWS KMS grants provide an advanced mechanism to grant long-term or temporary permissions programmatically to principals without modifying key policies or IAM policies. Grants can be created, retired, or revoked dynamically and are commonly used by AWS services like Amazon EBS and Amazon Redshift.",
    referenceUrl: "https://docs.aws.amazon.com/kms/latest/developerguide/grants.html",
    tags: ["AWS KMS", "KMS", "High Load Scale"]
  },
  {
    id: "aws-dva-343",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "KMS Grants for Transient Delegated Access: Security Compliance",
    scenario: "A financial and healthcare service must adhere to strict regulatory compliance, encryption standards, and least privilege access principles. Security auditors require verified enforcement across all application tiers. The application utilizes AWS KMS to grant temporary, programmatic access to an external analytics worker to decrypt specific encrypted files without modifying the persistent KMS Key Policy.",
    question: "Which solution properly implements these mandatory security and governance controls? AWS KMS Grants for temporary delegated access is being implemented.",
    options: [
      { id: 'A', text: "Use the KMS `CreateGrant` API to create a programmatic grant specifying the grantee principal, operations, and encryption context constraints, and revoke the grant upon completion." },
      { id: 'B', text: "Update the primary KMS Key Policy to add the temporary worker ARN and delete it later." },
      { id: 'C', text: "Generate a temporary AWS account root credential and share it with the worker." },
      { id: 'D', text: "Disable key rotation on the KMS customer managed key during the analytics job." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the KMS `CreateGrant` API to create a programmatic grant specifying the grantee principal, operations, and encryption context constraints, and revoke the grant upon completion. AWS KMS grants provide an advanced mechanism to grant long-term or temporary permissions programmatically to principals without modifying key policies or IAM policies. Grants can be created, retired, or revoked dynamically and are commonly used by AWS services like Amazon EBS and Amazon Redshift.",
    referenceUrl: "https://docs.aws.amazon.com/kms/latest/developerguide/grants.html",
    tags: ["AWS KMS", "KMS", "Security Compliance"]
  },
  {
    id: "aws-dva-344",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "KMS Grants for Transient Delegated Access: Hybrid Migration",
    scenario: "An enterprise development team is refactoring a legacy monolithic application into cloud-native microservices on AWS. The architecture must minimize operational complexity while leveraging managed services. The application utilizes AWS KMS to grant temporary, programmatic access to an external analytics worker to decrypt specific encrypted files without modifying the persistent KMS Key Policy.",
    question: "Which solution provides a robust implementation while minimizing ongoing operational maintenance? AWS KMS Grants for temporary delegated access is being implemented.",
    options: [
      { id: 'A', text: "Use the KMS `CreateGrant` API to create a programmatic grant specifying the grantee principal, operations, and encryption context constraints, and revoke the grant upon completion." },
      { id: 'B', text: "Update the primary KMS Key Policy to add the temporary worker ARN and delete it later." },
      { id: 'C', text: "Generate a temporary AWS account root credential and share it with the worker." },
      { id: 'D', text: "Disable key rotation on the KMS customer managed key during the analytics job." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the KMS `CreateGrant` API to create a programmatic grant specifying the grantee principal, operations, and encryption context constraints, and revoke the grant upon completion. AWS KMS grants provide an advanced mechanism to grant long-term or temporary permissions programmatically to principals without modifying key policies or IAM policies. Grants can be created, retired, or revoked dynamically and are commonly used by AWS services like Amazon EBS and Amazon Redshift.",
    referenceUrl: "https://docs.aws.amazon.com/kms/latest/developerguide/grants.html",
    tags: ["AWS KMS", "KMS", "Hybrid Migration"]
  },
  {
    id: "aws-dva-345",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "KMS Grants for Transient Delegated Access: Resilience Failure",
    scenario: "A distributed cloud application experiences intermittent downstream service timeouts and connection exhaustion during peak operational hours. The development team must establish automated recovery and fault isolation. The application utilizes AWS KMS to grant temporary, programmatic access to an external analytics worker to decrypt specific encrypted files without modifying the persistent KMS Key Policy.",
    question: "Which design pattern or service configuration eliminates bottlenecks and provides automated fault recovery? AWS KMS Grants for temporary delegated access is being implemented.",
    options: [
      { id: 'A', text: "Use the KMS `CreateGrant` API to create a programmatic grant specifying the grantee principal, operations, and encryption context constraints, and revoke the grant upon completion." },
      { id: 'B', text: "Update the primary KMS Key Policy to add the temporary worker ARN and delete it later." },
      { id: 'C', text: "Generate a temporary AWS account root credential and share it with the worker." },
      { id: 'D', text: "Disable key rotation on the KMS customer managed key during the analytics job." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the KMS `CreateGrant` API to create a programmatic grant specifying the grantee principal, operations, and encryption context constraints, and revoke the grant upon completion. AWS KMS grants provide an advanced mechanism to grant long-term or temporary permissions programmatically to principals without modifying key policies or IAM policies. Grants can be created, retired, or revoked dynamically and are commonly used by AWS services like Amazon EBS and Amazon Redshift.",
    referenceUrl: "https://docs.aws.amazon.com/kms/latest/developerguide/grants.html",
    tags: ["AWS KMS", "KMS", "Resilience Failure"]
  },
  {
    id: "aws-dva-346",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "Secrets Manager vs Parameter Store SecureString: Dr Failover",
    scenario: "A high-availability enterprise cloud service requires strict operational resilience and automated disaster recovery capabilities. The engineering team must eliminate single points of failure across operational workflows. The application utilizes AWS Secrets Manager to store RDS database credentials with automated 30-day password rotation and built-in cross-account secret sharing.",
    question: "Which implementation or architectural approach satisfies these resilience criteria? AWS Secrets Manager with automated rotation is being implemented.",
    options: [
      { id: 'A', text: "Store the database credentials in AWS Secrets Manager and configure automated rotation with an AWS-managed Lambda function." },
      { id: 'B', text: "Store the database credentials in AWS Systems Manager Parameter Store as a Standard String parameter." },
      { id: 'C', text: "Store the database credentials in an unencrypted AWS CodeBuild environment variable." },
      { id: 'D', text: "Store credentials in an Amazon DynamoDB table with client-side hashing." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Store the database credentials in AWS Secrets Manager and configure automated rotation with an AWS-managed Lambda function. AWS Secrets Manager is specifically designed for database and API credentials, featuring native integration with Amazon RDS for automated password rotation without downtime, cross-region replication, and fine-grained resource-based policies. Parameter Store does not provide built-in automated credential rotation.",
    referenceUrl: "https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html",
    tags: ["AWS Secrets Manager", "Secrets Manager", "Dr Failover"]
  },
  {
    id: "aws-dva-347",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "Secrets Manager vs Parameter Store SecureString: High Load Scale",
    scenario: "A high-throughput digital platform experiences sudden spikes in concurrent user traffic during flash promotions. Developers must ensure sub-second response times and predictable scaling under peak throughput. The application utilizes AWS Secrets Manager to store RDS database credentials with automated 30-day password rotation and built-in cross-account secret sharing.",
    question: "Which architectural approach should the developer recommend to handle this workload efficiently? AWS Secrets Manager with automated rotation is being implemented.",
    options: [
      { id: 'A', text: "Store the database credentials in AWS Secrets Manager and configure automated rotation with an AWS-managed Lambda function." },
      { id: 'B', text: "Store the database credentials in AWS Systems Manager Parameter Store as a Standard String parameter." },
      { id: 'C', text: "Store the database credentials in an unencrypted AWS CodeBuild environment variable." },
      { id: 'D', text: "Store credentials in an Amazon DynamoDB table with client-side hashing." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Store the database credentials in AWS Secrets Manager and configure automated rotation with an AWS-managed Lambda function. AWS Secrets Manager is specifically designed for database and API credentials, featuring native integration with Amazon RDS for automated password rotation without downtime, cross-region replication, and fine-grained resource-based policies. Parameter Store does not provide built-in automated credential rotation.",
    referenceUrl: "https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html",
    tags: ["AWS Secrets Manager", "Secrets Manager", "High Load Scale"]
  },
  {
    id: "aws-dva-348",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "Secrets Manager vs Parameter Store SecureString: Security Compliance",
    scenario: "A financial and healthcare service must adhere to strict regulatory compliance, encryption standards, and least privilege access principles. Security auditors require verified enforcement across all application tiers. The application utilizes AWS Secrets Manager to store RDS database credentials with automated 30-day password rotation and built-in cross-account secret sharing.",
    question: "Which solution properly implements these mandatory security and governance controls? AWS Secrets Manager with automated rotation is being implemented.",
    options: [
      { id: 'A', text: "Store the database credentials in AWS Secrets Manager and configure automated rotation with an AWS-managed Lambda function." },
      { id: 'B', text: "Store the database credentials in AWS Systems Manager Parameter Store as a Standard String parameter." },
      { id: 'C', text: "Store the database credentials in an unencrypted AWS CodeBuild environment variable." },
      { id: 'D', text: "Store credentials in an Amazon DynamoDB table with client-side hashing." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Store the database credentials in AWS Secrets Manager and configure automated rotation with an AWS-managed Lambda function. AWS Secrets Manager is specifically designed for database and API credentials, featuring native integration with Amazon RDS for automated password rotation without downtime, cross-region replication, and fine-grained resource-based policies. Parameter Store does not provide built-in automated credential rotation.",
    referenceUrl: "https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html",
    tags: ["AWS Secrets Manager", "Secrets Manager", "Security Compliance"]
  },
  {
    id: "aws-dva-349",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "Secrets Manager vs Parameter Store SecureString: Hybrid Migration",
    scenario: "An enterprise development team is refactoring a legacy monolithic application into cloud-native microservices on AWS. The architecture must minimize operational complexity while leveraging managed services. The application utilizes AWS Secrets Manager to store RDS database credentials with automated 30-day password rotation and built-in cross-account secret sharing.",
    question: "Which solution provides a robust implementation while minimizing ongoing operational maintenance? AWS Secrets Manager with automated rotation is being implemented.",
    options: [
      { id: 'A', text: "Store the database credentials in AWS Secrets Manager and configure automated rotation with an AWS-managed Lambda function." },
      { id: 'B', text: "Store the database credentials in AWS Systems Manager Parameter Store as a Standard String parameter." },
      { id: 'C', text: "Store the database credentials in an unencrypted AWS CodeBuild environment variable." },
      { id: 'D', text: "Store credentials in an Amazon DynamoDB table with client-side hashing." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Store the database credentials in AWS Secrets Manager and configure automated rotation with an AWS-managed Lambda function. AWS Secrets Manager is specifically designed for database and API credentials, featuring native integration with Amazon RDS for automated password rotation without downtime, cross-region replication, and fine-grained resource-based policies. Parameter Store does not provide built-in automated credential rotation.",
    referenceUrl: "https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html",
    tags: ["AWS Secrets Manager", "Secrets Manager", "Hybrid Migration"]
  },
  {
    id: "aws-dva-350",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "Secrets Manager vs Parameter Store SecureString: Resilience Failure",
    scenario: "A distributed cloud application experiences intermittent downstream service timeouts and connection exhaustion during peak operational hours. The development team must establish automated recovery and fault isolation. The application utilizes AWS Secrets Manager to store RDS database credentials with automated 30-day password rotation and built-in cross-account secret sharing.",
    question: "Which design pattern or service configuration eliminates bottlenecks and provides automated fault recovery? AWS Secrets Manager with automated rotation is being implemented.",
    options: [
      { id: 'A', text: "Store the database credentials in AWS Secrets Manager and configure automated rotation with an AWS-managed Lambda function." },
      { id: 'B', text: "Store the database credentials in AWS Systems Manager Parameter Store as a Standard String parameter." },
      { id: 'C', text: "Store the database credentials in an unencrypted AWS CodeBuild environment variable." },
      { id: 'D', text: "Store credentials in an Amazon DynamoDB table with client-side hashing." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Store the database credentials in AWS Secrets Manager and configure automated rotation with an AWS-managed Lambda function. AWS Secrets Manager is specifically designed for database and API credentials, featuring native integration with Amazon RDS for automated password rotation without downtime, cross-region replication, and fine-grained resource-based policies. Parameter Store does not provide built-in automated credential rotation.",
    referenceUrl: "https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html",
    tags: ["AWS Secrets Manager", "Secrets Manager", "Resilience Failure"]
  }
];

export default AWS_DVA_QUESTIONS_14;
