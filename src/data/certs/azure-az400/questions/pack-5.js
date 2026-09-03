export const AZURE_AZ400_QUESTIONS_5 = [
  {
    id: "azure-az400-101",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Build and Release Pipeline Scenario #21",
    scenario: "A DevOps engineer is designing multi-stage YAML pipelines, container builds with ACR, and automated rollback gates.",
    question: "Which pipeline implementation best satisfies deployment requirement #21?",
    options: [
      { id: 'A', text: "Disabling all test tasks and build validation to accelerate deployment speed" },
      { id: 'B', text: "Structuring multi-stage YAML pipelines with environment deployment gates, variable group secrets, and automated rollback conditions" },
      { id: 'C', text: "Storing plain-text administrative passwords in open pipeline YAML repository files" },
      { id: 'D', text: "Using manual unversioned GUI release scripts executed sequentially by engineers" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Modern Azure Pipelines design mandates modular YAML definitions, deployment environments with manual and automated approval gates, and secure secret retrieval via Azure Key Vault.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/yaml-schema",
    tags: ["Azure Pipelines", "YAML", "CI/CD"]
  },
  {
    id: "azure-az400-102",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Build and Release Pipeline Scenario #22",
    scenario: "A DevOps engineer is designing multi-stage YAML pipelines, container builds with ACR, and automated rollback gates.",
    question: "Which pipeline implementation best satisfies deployment requirement #22?",
    options: [
      { id: 'A', text: "Storing plain-text administrative passwords in open pipeline YAML repository files" },
      { id: 'B', text: "Structuring multi-stage YAML pipelines with environment deployment gates, variable group secrets, and automated rollback conditions" },
      { id: 'C', text: "Using manual unversioned GUI release scripts executed sequentially by engineers" },
      { id: 'D', text: "Disabling all test tasks and build validation to accelerate deployment speed" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Modern Azure Pipelines design mandates modular YAML definitions, deployment environments with manual and automated approval gates, and secure secret retrieval via Azure Key Vault.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/yaml-schema",
    tags: ["Azure Pipelines", "YAML", "CI/CD"]
  },
  {
    id: "azure-az400-103",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Build and Release Pipeline Scenario #23",
    scenario: "A DevOps engineer is designing multi-stage YAML pipelines, container builds with ACR, and automated rollback gates.",
    question: "Which pipeline implementation best satisfies deployment requirement #23?",
    options: [
      { id: 'A', text: "Using manual unversioned GUI release scripts executed sequentially by engineers" },
      { id: 'B', text: "Disabling all test tasks and build validation to accelerate deployment speed" },
      { id: 'C', text: "Structuring multi-stage YAML pipelines with environment deployment gates, variable group secrets, and automated rollback conditions" },
      { id: 'D', text: "Storing plain-text administrative passwords in open pipeline YAML repository files" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Modern Azure Pipelines design mandates modular YAML definitions, deployment environments with manual and automated approval gates, and secure secret retrieval via Azure Key Vault.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/yaml-schema",
    tags: ["Azure Pipelines", "YAML", "CI/CD"]
  },
  {
    id: "azure-az400-104",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Build and Release Pipeline Scenario #24",
    scenario: "A DevOps engineer is designing multi-stage YAML pipelines, container builds with ACR, and automated rollback gates.",
    question: "Which pipeline implementation best satisfies deployment requirement #24?",
    options: [
      { id: 'A', text: "Storing plain-text administrative passwords in open pipeline YAML repository files" },
      { id: 'B', text: "Using manual unversioned GUI release scripts executed sequentially by engineers" },
      { id: 'C', text: "Disabling all test tasks and build validation to accelerate deployment speed" },
      { id: 'D', text: "Structuring multi-stage YAML pipelines with environment deployment gates, variable group secrets, and automated rollback conditions" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Modern Azure Pipelines design mandates modular YAML definitions, deployment environments with manual and automated approval gates, and secure secret retrieval via Azure Key Vault.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/yaml-schema",
    tags: ["Azure Pipelines", "YAML", "CI/CD"]
  },
  {
    id: "azure-az400-105",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Build and Release Pipeline Scenario #25",
    scenario: "A DevOps engineer is designing multi-stage YAML pipelines, container builds with ACR, and automated rollback gates.",
    question: "Which pipeline implementation best satisfies deployment requirement #25?",
    options: [
      { id: 'A', text: "Using manual unversioned GUI release scripts executed sequentially by engineers" },
      { id: 'B', text: "Disabling all test tasks and build validation to accelerate deployment speed" },
      { id: 'C', text: "Structuring multi-stage YAML pipelines with environment deployment gates, variable group secrets, and automated rollback conditions" },
      { id: 'D', text: "Storing plain-text administrative passwords in open pipeline YAML repository files" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Modern Azure Pipelines design mandates modular YAML definitions, deployment environments with manual and automated approval gates, and secure secret retrieval via Azure Key Vault.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/yaml-schema",
    tags: ["Azure Pipelines", "YAML", "CI/CD"]
  },
  {
    id: "azure-az400-106",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Build and Release Pipeline Scenario #26",
    scenario: "A DevOps engineer is designing multi-stage YAML pipelines, container builds with ACR, and automated rollback gates.",
    question: "Which pipeline implementation best satisfies deployment requirement #26?",
    options: [
      { id: 'A', text: "Disabling all test tasks and build validation to accelerate deployment speed" },
      { id: 'B', text: "Storing plain-text administrative passwords in open pipeline YAML repository files" },
      { id: 'C', text: "Structuring multi-stage YAML pipelines with environment deployment gates, variable group secrets, and automated rollback conditions" },
      { id: 'D', text: "Using manual unversioned GUI release scripts executed sequentially by engineers" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Modern Azure Pipelines design mandates modular YAML definitions, deployment environments with manual and automated approval gates, and secure secret retrieval via Azure Key Vault.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/yaml-schema",
    tags: ["Azure Pipelines", "YAML", "CI/CD"]
  },
  {
    id: "azure-az400-107",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Build and Release Pipeline Scenario #27",
    scenario: "A DevOps engineer is designing multi-stage YAML pipelines, container builds with ACR, and automated rollback gates.",
    question: "Which pipeline implementation best satisfies deployment requirement #27?",
    options: [
      { id: 'A', text: "Disabling all test tasks and build validation to accelerate deployment speed" },
      { id: 'B', text: "Storing plain-text administrative passwords in open pipeline YAML repository files" },
      { id: 'C', text: "Structuring multi-stage YAML pipelines with environment deployment gates, variable group secrets, and automated rollback conditions" },
      { id: 'D', text: "Using manual unversioned GUI release scripts executed sequentially by engineers" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Modern Azure Pipelines design mandates modular YAML definitions, deployment environments with manual and automated approval gates, and secure secret retrieval via Azure Key Vault.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/yaml-schema",
    tags: ["Azure Pipelines", "YAML", "CI/CD"]
  },
  {
    id: "azure-az400-108",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Build and Release Pipeline Scenario #28",
    scenario: "A DevOps engineer is designing multi-stage YAML pipelines, container builds with ACR, and automated rollback gates.",
    question: "Which pipeline implementation best satisfies deployment requirement #28?",
    options: [
      { id: 'A', text: "Storing plain-text administrative passwords in open pipeline YAML repository files" },
      { id: 'B', text: "Structuring multi-stage YAML pipelines with environment deployment gates, variable group secrets, and automated rollback conditions" },
      { id: 'C', text: "Using manual unversioned GUI release scripts executed sequentially by engineers" },
      { id: 'D', text: "Disabling all test tasks and build validation to accelerate deployment speed" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Modern Azure Pipelines design mandates modular YAML definitions, deployment environments with manual and automated approval gates, and secure secret retrieval via Azure Key Vault.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/yaml-schema",
    tags: ["Azure Pipelines", "YAML", "CI/CD"]
  },
  {
    id: "azure-az400-109",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Build and Release Pipeline Scenario #29",
    scenario: "A DevOps engineer is designing multi-stage YAML pipelines, container builds with ACR, and automated rollback gates.",
    question: "Which pipeline implementation best satisfies deployment requirement #29?",
    options: [
      { id: 'A', text: "Structuring multi-stage YAML pipelines with environment deployment gates, variable group secrets, and automated rollback conditions" },
      { id: 'B', text: "Disabling all test tasks and build validation to accelerate deployment speed" },
      { id: 'C', text: "Using manual unversioned GUI release scripts executed sequentially by engineers" },
      { id: 'D', text: "Storing plain-text administrative passwords in open pipeline YAML repository files" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Modern Azure Pipelines design mandates modular YAML definitions, deployment environments with manual and automated approval gates, and secure secret retrieval via Azure Key Vault.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/yaml-schema",
    tags: ["Azure Pipelines", "YAML", "CI/CD"]
  },
  {
    id: "azure-az400-110",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Build and Release Pipeline Scenario #30",
    scenario: "A DevOps engineer is designing multi-stage YAML pipelines, container builds with ACR, and automated rollback gates.",
    question: "Which pipeline implementation best satisfies deployment requirement #30?",
    options: [
      { id: 'A', text: "Storing plain-text administrative passwords in open pipeline YAML repository files" },
      { id: 'B', text: "Structuring multi-stage YAML pipelines with environment deployment gates, variable group secrets, and automated rollback conditions" },
      { id: 'C', text: "Using manual unversioned GUI release scripts executed sequentially by engineers" },
      { id: 'D', text: "Disabling all test tasks and build validation to accelerate deployment speed" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Modern Azure Pipelines design mandates modular YAML definitions, deployment environments with manual and automated approval gates, and secure secret retrieval via Azure Key Vault.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/yaml-schema",
    tags: ["Azure Pipelines", "YAML", "CI/CD"]
  },
  {
    id: "azure-az400-111",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Build and Release Pipeline Scenario #31",
    scenario: "A DevOps engineer is designing multi-stage YAML pipelines, container builds with ACR, and automated rollback gates.",
    question: "Which pipeline implementation best satisfies deployment requirement #31?",
    options: [
      { id: 'A', text: "Storing plain-text administrative passwords in open pipeline YAML repository files" },
      { id: 'B', text: "Structuring multi-stage YAML pipelines with environment deployment gates, variable group secrets, and automated rollback conditions" },
      { id: 'C', text: "Using manual unversioned GUI release scripts executed sequentially by engineers" },
      { id: 'D', text: "Disabling all test tasks and build validation to accelerate deployment speed" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Modern Azure Pipelines design mandates modular YAML definitions, deployment environments with manual and automated approval gates, and secure secret retrieval via Azure Key Vault.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/yaml-schema",
    tags: ["Azure Pipelines", "YAML", "CI/CD"]
  },
  {
    id: "azure-az400-112",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Build and Release Pipeline Scenario #32",
    scenario: "A DevOps engineer is designing multi-stage YAML pipelines, container builds with ACR, and automated rollback gates.",
    question: "Which pipeline implementation best satisfies deployment requirement #32?",
    options: [
      { id: 'A', text: "Using manual unversioned GUI release scripts executed sequentially by engineers" },
      { id: 'B', text: "Storing plain-text administrative passwords in open pipeline YAML repository files" },
      { id: 'C', text: "Disabling all test tasks and build validation to accelerate deployment speed" },
      { id: 'D', text: "Structuring multi-stage YAML pipelines with environment deployment gates, variable group secrets, and automated rollback conditions" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Modern Azure Pipelines design mandates modular YAML definitions, deployment environments with manual and automated approval gates, and secure secret retrieval via Azure Key Vault.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/yaml-schema",
    tags: ["Azure Pipelines", "YAML", "CI/CD"]
  },
  {
    id: "azure-az400-113",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Build and Release Pipeline Scenario #33",
    scenario: "A DevOps engineer is designing multi-stage YAML pipelines, container builds with ACR, and automated rollback gates.",
    question: "Which pipeline implementation best satisfies deployment requirement #33?",
    options: [
      { id: 'A', text: "Disabling all test tasks and build validation to accelerate deployment speed" },
      { id: 'B', text: "Storing plain-text administrative passwords in open pipeline YAML repository files" },
      { id: 'C', text: "Using manual unversioned GUI release scripts executed sequentially by engineers" },
      { id: 'D', text: "Structuring multi-stage YAML pipelines with environment deployment gates, variable group secrets, and automated rollback conditions" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Modern Azure Pipelines design mandates modular YAML definitions, deployment environments with manual and automated approval gates, and secure secret retrieval via Azure Key Vault.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/yaml-schema",
    tags: ["Azure Pipelines", "YAML", "CI/CD"]
  },
  {
    id: "azure-az400-114",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Build and Release Pipeline Scenario #34",
    scenario: "A DevOps engineer is designing multi-stage YAML pipelines, container builds with ACR, and automated rollback gates.",
    question: "Which pipeline implementation best satisfies deployment requirement #34?",
    options: [
      { id: 'A', text: "Structuring multi-stage YAML pipelines with environment deployment gates, variable group secrets, and automated rollback conditions" },
      { id: 'B', text: "Using manual unversioned GUI release scripts executed sequentially by engineers" },
      { id: 'C', text: "Disabling all test tasks and build validation to accelerate deployment speed" },
      { id: 'D', text: "Storing plain-text administrative passwords in open pipeline YAML repository files" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Modern Azure Pipelines design mandates modular YAML definitions, deployment environments with manual and automated approval gates, and secure secret retrieval via Azure Key Vault.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/yaml-schema",
    tags: ["Azure Pipelines", "YAML", "CI/CD"]
  },
  {
    id: "azure-az400-115",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Build and Release Pipeline Scenario #35",
    scenario: "A DevOps engineer is designing multi-stage YAML pipelines, container builds with ACR, and automated rollback gates.",
    question: "Which pipeline implementation best satisfies deployment requirement #35?",
    options: [
      { id: 'A', text: "Using manual unversioned GUI release scripts executed sequentially by engineers" },
      { id: 'B', text: "Structuring multi-stage YAML pipelines with environment deployment gates, variable group secrets, and automated rollback conditions" },
      { id: 'C', text: "Storing plain-text administrative passwords in open pipeline YAML repository files" },
      { id: 'D', text: "Disabling all test tasks and build validation to accelerate deployment speed" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Modern Azure Pipelines design mandates modular YAML definitions, deployment environments with manual and automated approval gates, and secure secret retrieval via Azure Key Vault.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/yaml-schema",
    tags: ["Azure Pipelines", "YAML", "CI/CD"]
  },
  {
    id: "azure-az400-116",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Build and Release Pipeline Scenario #36",
    scenario: "A DevOps engineer is designing multi-stage YAML pipelines, container builds with ACR, and automated rollback gates.",
    question: "Which pipeline implementation best satisfies deployment requirement #36?",
    options: [
      { id: 'A', text: "Storing plain-text administrative passwords in open pipeline YAML repository files" },
      { id: 'B', text: "Using manual unversioned GUI release scripts executed sequentially by engineers" },
      { id: 'C', text: "Disabling all test tasks and build validation to accelerate deployment speed" },
      { id: 'D', text: "Structuring multi-stage YAML pipelines with environment deployment gates, variable group secrets, and automated rollback conditions" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Modern Azure Pipelines design mandates modular YAML definitions, deployment environments with manual and automated approval gates, and secure secret retrieval via Azure Key Vault.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/yaml-schema",
    tags: ["Azure Pipelines", "YAML", "CI/CD"]
  },
  {
    id: "azure-az400-117",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Build and Release Pipeline Scenario #37",
    scenario: "A DevOps engineer is designing multi-stage YAML pipelines, container builds with ACR, and automated rollback gates.",
    question: "Which pipeline implementation best satisfies deployment requirement #37?",
    options: [
      { id: 'A', text: "Storing plain-text administrative passwords in open pipeline YAML repository files" },
      { id: 'B', text: "Using manual unversioned GUI release scripts executed sequentially by engineers" },
      { id: 'C', text: "Structuring multi-stage YAML pipelines with environment deployment gates, variable group secrets, and automated rollback conditions" },
      { id: 'D', text: "Disabling all test tasks and build validation to accelerate deployment speed" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Modern Azure Pipelines design mandates modular YAML definitions, deployment environments with manual and automated approval gates, and secure secret retrieval via Azure Key Vault.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/yaml-schema",
    tags: ["Azure Pipelines", "YAML", "CI/CD"]
  },
  {
    id: "azure-az400-118",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Build and Release Pipeline Scenario #38",
    scenario: "A DevOps engineer is designing multi-stage YAML pipelines, container builds with ACR, and automated rollback gates.",
    question: "Which pipeline implementation best satisfies deployment requirement #38?",
    options: [
      { id: 'A', text: "Storing plain-text administrative passwords in open pipeline YAML repository files" },
      { id: 'B', text: "Structuring multi-stage YAML pipelines with environment deployment gates, variable group secrets, and automated rollback conditions" },
      { id: 'C', text: "Disabling all test tasks and build validation to accelerate deployment speed" },
      { id: 'D', text: "Using manual unversioned GUI release scripts executed sequentially by engineers" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Modern Azure Pipelines design mandates modular YAML definitions, deployment environments with manual and automated approval gates, and secure secret retrieval via Azure Key Vault.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/yaml-schema",
    tags: ["Azure Pipelines", "YAML", "CI/CD"]
  },
  {
    id: "azure-az400-119",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Build and Release Pipeline Scenario #39",
    scenario: "A DevOps engineer is designing multi-stage YAML pipelines, container builds with ACR, and automated rollback gates.",
    question: "Which pipeline implementation best satisfies deployment requirement #39?",
    options: [
      { id: 'A', text: "Storing plain-text administrative passwords in open pipeline YAML repository files" },
      { id: 'B', text: "Disabling all test tasks and build validation to accelerate deployment speed" },
      { id: 'C', text: "Using manual unversioned GUI release scripts executed sequentially by engineers" },
      { id: 'D', text: "Structuring multi-stage YAML pipelines with environment deployment gates, variable group secrets, and automated rollback conditions" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Modern Azure Pipelines design mandates modular YAML definitions, deployment environments with manual and automated approval gates, and secure secret retrieval via Azure Key Vault.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/yaml-schema",
    tags: ["Azure Pipelines", "YAML", "CI/CD"]
  },
  {
    id: "azure-az400-120",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Build and Release Pipeline Scenario #40",
    scenario: "A DevOps engineer is designing multi-stage YAML pipelines, container builds with ACR, and automated rollback gates.",
    question: "Which pipeline implementation best satisfies deployment requirement #40?",
    options: [
      { id: 'A', text: "Storing plain-text administrative passwords in open pipeline YAML repository files" },
      { id: 'B', text: "Structuring multi-stage YAML pipelines with environment deployment gates, variable group secrets, and automated rollback conditions" },
      { id: 'C', text: "Disabling all test tasks and build validation to accelerate deployment speed" },
      { id: 'D', text: "Using manual unversioned GUI release scripts executed sequentially by engineers" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Modern Azure Pipelines design mandates modular YAML definitions, deployment environments with manual and automated approval gates, and secure secret retrieval via Azure Key Vault.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/yaml-schema",
    tags: ["Azure Pipelines", "YAML", "CI/CD"]
  },
  {
    id: "azure-az400-121",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Build and Release Pipeline Scenario #41",
    scenario: "A DevOps engineer is designing multi-stage YAML pipelines, container builds with ACR, and automated rollback gates.",
    question: "Which pipeline implementation best satisfies deployment requirement #41?",
    options: [
      { id: 'A', text: "Storing plain-text administrative passwords in open pipeline YAML repository files" },
      { id: 'B', text: "Structuring multi-stage YAML pipelines with environment deployment gates, variable group secrets, and automated rollback conditions" },
      { id: 'C', text: "Disabling all test tasks and build validation to accelerate deployment speed" },
      { id: 'D', text: "Using manual unversioned GUI release scripts executed sequentially by engineers" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Modern Azure Pipelines design mandates modular YAML definitions, deployment environments with manual and automated approval gates, and secure secret retrieval via Azure Key Vault.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/yaml-schema",
    tags: ["Azure Pipelines", "YAML", "CI/CD"]
  },
  {
    id: "azure-az400-122",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Build and Release Pipeline Scenario #42",
    scenario: "A DevOps engineer is designing multi-stage YAML pipelines, container builds with ACR, and automated rollback gates.",
    question: "Which pipeline implementation best satisfies deployment requirement #42?",
    options: [
      { id: 'A', text: "Structuring multi-stage YAML pipelines with environment deployment gates, variable group secrets, and automated rollback conditions" },
      { id: 'B', text: "Storing plain-text administrative passwords in open pipeline YAML repository files" },
      { id: 'C', text: "Disabling all test tasks and build validation to accelerate deployment speed" },
      { id: 'D', text: "Using manual unversioned GUI release scripts executed sequentially by engineers" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Modern Azure Pipelines design mandates modular YAML definitions, deployment environments with manual and automated approval gates, and secure secret retrieval via Azure Key Vault.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/yaml-schema",
    tags: ["Azure Pipelines", "YAML", "CI/CD"]
  },
  {
    id: "azure-az400-123",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Build and Release Pipeline Scenario #43",
    scenario: "A DevOps engineer is designing multi-stage YAML pipelines, container builds with ACR, and automated rollback gates.",
    question: "Which pipeline implementation best satisfies deployment requirement #43?",
    options: [
      { id: 'A', text: "Storing plain-text administrative passwords in open pipeline YAML repository files" },
      { id: 'B', text: "Using manual unversioned GUI release scripts executed sequentially by engineers" },
      { id: 'C', text: "Disabling all test tasks and build validation to accelerate deployment speed" },
      { id: 'D', text: "Structuring multi-stage YAML pipelines with environment deployment gates, variable group secrets, and automated rollback conditions" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Modern Azure Pipelines design mandates modular YAML definitions, deployment environments with manual and automated approval gates, and secure secret retrieval via Azure Key Vault.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/yaml-schema",
    tags: ["Azure Pipelines", "YAML", "CI/CD"]
  },
  {
    id: "azure-az400-124",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Build and Release Pipeline Scenario #44",
    scenario: "A DevOps engineer is designing multi-stage YAML pipelines, container builds with ACR, and automated rollback gates.",
    question: "Which pipeline implementation best satisfies deployment requirement #44?",
    options: [
      { id: 'A', text: "Storing plain-text administrative passwords in open pipeline YAML repository files" },
      { id: 'B', text: "Structuring multi-stage YAML pipelines with environment deployment gates, variable group secrets, and automated rollback conditions" },
      { id: 'C', text: "Using manual unversioned GUI release scripts executed sequentially by engineers" },
      { id: 'D', text: "Disabling all test tasks and build validation to accelerate deployment speed" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Modern Azure Pipelines design mandates modular YAML definitions, deployment environments with manual and automated approval gates, and secure secret retrieval via Azure Key Vault.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/yaml-schema",
    tags: ["Azure Pipelines", "YAML", "CI/CD"]
  },
  {
    id: "azure-az400-125",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Build and Release Pipeline Scenario #45",
    scenario: "A DevOps engineer is designing multi-stage YAML pipelines, container builds with ACR, and automated rollback gates.",
    question: "Which pipeline implementation best satisfies deployment requirement #45?",
    options: [
      { id: 'A', text: "Disabling all test tasks and build validation to accelerate deployment speed" },
      { id: 'B', text: "Structuring multi-stage YAML pipelines with environment deployment gates, variable group secrets, and automated rollback conditions" },
      { id: 'C', text: "Using manual unversioned GUI release scripts executed sequentially by engineers" },
      { id: 'D', text: "Storing plain-text administrative passwords in open pipeline YAML repository files" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Modern Azure Pipelines design mandates modular YAML definitions, deployment environments with manual and automated approval gates, and secure secret retrieval via Azure Key Vault.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/yaml-schema",
    tags: ["Azure Pipelines", "YAML", "CI/CD"]
  }
];

export default AZURE_AZ400_QUESTIONS_5;
