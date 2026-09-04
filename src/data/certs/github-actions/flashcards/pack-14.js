export const GITHUB_ACTIONS_FLASHCARDS_14 = [
  {
    id: "github-actions-fc-326",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d1",
    front: "Workflow Service Containers (Postgres / Redis) (Dr Failover)",
    hint: "Spinning up ephemeral database and cache services for integration testing.",
    back: "Declaring <strong>services:</strong> at the job level launches containerized dependencies (like Redis or PostgreSQL) linked to the job, providing isolated integration test services.",
    tags: ["Service Containers", "Service Containers", "Dr Failover"]
  },
  {
    id: "github-actions-fc-327",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "Workflow Service Containers (Postgres / Redis) (High Load Scale)",
    hint: "Spinning up ephemeral database and cache services for integration testing.",
    back: "Declaring <strong>services:</strong> at the job level launches containerized dependencies (like Redis or PostgreSQL) linked to the job, providing isolated integration test services.",
    tags: ["Service Containers", "Service Containers", "High Load Scale"]
  },
  {
    id: "github-actions-fc-328",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "Workflow Service Containers (Postgres / Redis) (Security Compliance)",
    hint: "Spinning up ephemeral database and cache services for integration testing.",
    back: "Declaring <strong>services:</strong> at the job level launches containerized dependencies (like Redis or PostgreSQL) linked to the job, providing isolated integration test services.",
    tags: ["Service Containers", "Service Containers", "Security Compliance"]
  },
  {
    id: "github-actions-fc-329",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d1",
    front: "Workflow Service Containers (Postgres / Redis) (Hybrid Migration)",
    hint: "Spinning up ephemeral database and cache services for integration testing.",
    back: "Declaring <strong>services:</strong> at the job level launches containerized dependencies (like Redis or PostgreSQL) linked to the job, providing isolated integration test services.",
    tags: ["Service Containers", "Service Containers", "Hybrid Migration"]
  },
  {
    id: "github-actions-fc-330",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "Workflow Service Containers (Postgres / Redis) (Resilience Failure)",
    hint: "Spinning up ephemeral database and cache services for integration testing.",
    back: "Declaring <strong>services:</strong> at the job level launches containerized dependencies (like Redis or PostgreSQL) linked to the job, providing isolated integration test services.",
    tags: ["Service Containers", "Service Containers", "Resilience Failure"]
  },
  {
    id: "github-actions-fc-331",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d1",
    front: "Error Tolerance with continue-on-error (Dr Failover)",
    hint: "Allowing optional or experimental steps to fail without failing the overall run.",
    back: "Setting <strong>continue-on-error: true</strong> permits non-critical steps (like experimental linters) to fail without failing the overall job, keeping downstream deployments on track.",
    tags: ["Error Tolerance", "continue-on-error", "Dr Failover"]
  },
  {
    id: "github-actions-fc-332",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "Error Tolerance with continue-on-error (High Load Scale)",
    hint: "Allowing optional or experimental steps to fail without failing the overall run.",
    back: "Setting <strong>continue-on-error: true</strong> permits non-critical steps (like experimental linters) to fail without failing the overall job, keeping downstream deployments on track.",
    tags: ["Error Tolerance", "continue-on-error", "High Load Scale"]
  },
  {
    id: "github-actions-fc-333",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "Error Tolerance with continue-on-error (Security Compliance)",
    hint: "Allowing optional or experimental steps to fail without failing the overall run.",
    back: "Setting <strong>continue-on-error: true</strong> permits non-critical steps (like experimental linters) to fail without failing the overall job, keeping downstream deployments on track.",
    tags: ["Error Tolerance", "continue-on-error", "Security Compliance"]
  },
  {
    id: "github-actions-fc-334",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d1",
    front: "Error Tolerance with continue-on-error (Hybrid Migration)",
    hint: "Allowing optional or experimental steps to fail without failing the overall run.",
    back: "Setting <strong>continue-on-error: true</strong> permits non-critical steps (like experimental linters) to fail without failing the overall job, keeping downstream deployments on track.",
    tags: ["Error Tolerance", "continue-on-error", "Hybrid Migration"]
  },
  {
    id: "github-actions-fc-335",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "Error Tolerance with continue-on-error (Resilience Failure)",
    hint: "Allowing optional or experimental steps to fail without failing the overall run.",
    back: "Setting <strong>continue-on-error: true</strong> permits non-critical steps (like experimental linters) to fail without failing the overall job, keeping downstream deployments on track.",
    tags: ["Error Tolerance", "continue-on-error", "Resilience Failure"]
  },
  {
    id: "github-actions-fc-336",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d1",
    front: "pull_request_target Security Considerations (Dr Failover)",
    hint: "Safely handling fork pull requests without exposing repository secrets.",
    back: "<strong>pull_request_target</strong> executes in the base repository context with secret access; executing untrusted code from the fork inside this workflow creates severe secret-exfiltration risks.",
    tags: ["Trigger Security", "pull_request_target", "Dr Failover"]
  },
  {
    id: "github-actions-fc-337",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "pull_request_target Security Considerations (High Load Scale)",
    hint: "Safely handling fork pull requests without exposing repository secrets.",
    back: "<strong>pull_request_target</strong> executes in the base repository context with secret access; executing untrusted code from the fork inside this workflow creates severe secret-exfiltration risks.",
    tags: ["Trigger Security", "pull_request_target", "High Load Scale"]
  },
  {
    id: "github-actions-fc-338",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "pull_request_target Security Considerations (Security Compliance)",
    hint: "Safely handling fork pull requests without exposing repository secrets.",
    back: "<strong>pull_request_target</strong> executes in the base repository context with secret access; executing untrusted code from the fork inside this workflow creates severe secret-exfiltration risks.",
    tags: ["Trigger Security", "pull_request_target", "Security Compliance"]
  },
  {
    id: "github-actions-fc-339",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d1",
    front: "pull_request_target Security Considerations (Hybrid Migration)",
    hint: "Safely handling fork pull requests without exposing repository secrets.",
    back: "<strong>pull_request_target</strong> executes in the base repository context with secret access; executing untrusted code from the fork inside this workflow creates severe secret-exfiltration risks.",
    tags: ["Trigger Security", "pull_request_target", "Hybrid Migration"]
  },
  {
    id: "github-actions-fc-340",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "pull_request_target Security Considerations (Resilience Failure)",
    hint: "Safely handling fork pull requests without exposing repository secrets.",
    back: "<strong>pull_request_target</strong> executes in the base repository context with secret access; executing untrusted code from the fork inside this workflow creates severe secret-exfiltration risks.",
    tags: ["Trigger Security", "pull_request_target", "Resilience Failure"]
  },
  {
    id: "github-actions-fc-341",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d1",
    front: "Workflow Trigger paths-ignore Filtering (Dr Failover)",
    hint: "Suppressing workflow executions for documentation and non-code updates.",
    back: "Configuring <strong>paths-ignore: ['docs/**', '**.md']</strong> prevents workflow dispatches when commits only touch documentation, preserving runner capacity for code changes.",
    tags: ["Path Filtering", "paths-ignore", "Dr Failover"]
  },
  {
    id: "github-actions-fc-342",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "Workflow Trigger paths-ignore Filtering (High Load Scale)",
    hint: "Suppressing workflow executions for documentation and non-code updates.",
    back: "Configuring <strong>paths-ignore: ['docs/**', '**.md']</strong> prevents workflow dispatches when commits only touch documentation, preserving runner capacity for code changes.",
    tags: ["Path Filtering", "paths-ignore", "High Load Scale"]
  },
  {
    id: "github-actions-fc-343",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "Workflow Trigger paths-ignore Filtering (Security Compliance)",
    hint: "Suppressing workflow executions for documentation and non-code updates.",
    back: "Configuring <strong>paths-ignore: ['docs/**', '**.md']</strong> prevents workflow dispatches when commits only touch documentation, preserving runner capacity for code changes.",
    tags: ["Path Filtering", "paths-ignore", "Security Compliance"]
  },
  {
    id: "github-actions-fc-344",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d1",
    front: "Workflow Trigger paths-ignore Filtering (Hybrid Migration)",
    hint: "Suppressing workflow executions for documentation and non-code updates.",
    back: "Configuring <strong>paths-ignore: ['docs/**', '**.md']</strong> prevents workflow dispatches when commits only touch documentation, preserving runner capacity for code changes.",
    tags: ["Path Filtering", "paths-ignore", "Hybrid Migration"]
  },
  {
    id: "github-actions-fc-345",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "Workflow Trigger paths-ignore Filtering (Resilience Failure)",
    hint: "Suppressing workflow executions for documentation and non-code updates.",
    back: "Configuring <strong>paths-ignore: ['docs/**', '**.md']</strong> prevents workflow dispatches when commits only touch documentation, preserving runner capacity for code changes.",
    tags: ["Path Filtering", "paths-ignore", "Resilience Failure"]
  },
  {
    id: "github-actions-fc-346",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d1",
    front: "Encrypted Secrets and Automated Log Masking (Dr Failover)",
    hint: "Consuming repository secrets safely with built-in output redaction.",
    back: "Referencing credentials via <strong>${{ secrets.TOKEN }}</strong> in step environment blocks injects values securely while GitHub's log scrubber automatically masks the values in console output.",
    tags: ["Secret Masking", "Secret Masking", "Dr Failover"]
  },
  {
    id: "github-actions-fc-347",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "Encrypted Secrets and Automated Log Masking (High Load Scale)",
    hint: "Consuming repository secrets safely with built-in output redaction.",
    back: "Referencing credentials via <strong>${{ secrets.TOKEN }}</strong> in step environment blocks injects values securely while GitHub's log scrubber automatically masks the values in console output.",
    tags: ["Secret Masking", "Secret Masking", "High Load Scale"]
  },
  {
    id: "github-actions-fc-348",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "Encrypted Secrets and Automated Log Masking (Security Compliance)",
    hint: "Consuming repository secrets safely with built-in output redaction.",
    back: "Referencing credentials via <strong>${{ secrets.TOKEN }}</strong> in step environment blocks injects values securely while GitHub's log scrubber automatically masks the values in console output.",
    tags: ["Secret Masking", "Secret Masking", "Security Compliance"]
  },
  {
    id: "github-actions-fc-349",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d1",
    front: "Encrypted Secrets and Automated Log Masking (Hybrid Migration)",
    hint: "Consuming repository secrets safely with built-in output redaction.",
    back: "Referencing credentials via <strong>${{ secrets.TOKEN }}</strong> in step environment blocks injects values securely while GitHub's log scrubber automatically masks the values in console output.",
    tags: ["Secret Masking", "Secret Masking", "Hybrid Migration"]
  },
  {
    id: "github-actions-fc-350",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    front: "Encrypted Secrets and Automated Log Masking (Resilience Failure)",
    hint: "Consuming repository secrets safely with built-in output redaction.",
    back: "Referencing credentials via <strong>${{ secrets.TOKEN }}</strong> in step environment blocks injects values securely while GitHub's log scrubber automatically masks the values in console output.",
    tags: ["Secret Masking", "Secret Masking", "Resilience Failure"]
  }
];

export default GITHUB_ACTIONS_FLASHCARDS_14;
