export const GITHUB_ACTIONS_QUESTIONS_13 = [
  {
    id: "gh-200-301",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "GitHub Contexts and Expressions Syntax: Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer needs to dynamically label a container image with the repository name, commit SHA, and current Git reference during workflow execution.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives?",
    options: [
      { id: 'A', text: "Reference the `github` context: `${{ github.repository }}` and `${{ github.sha }}`." },
      { id: 'B', text: "Reference the `env` context after a step has written the values into it." },
      { id: 'C', text: "Reference the `runner` context, which carries the checkout's own repository metadata." },
      { id: 'D', text: "Parse `git rev-parse HEAD` output in a step and pass it on as an output." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Reference GitHub contexts in expressions: `${{ github.repository }}:${{ github.sha }}` and `${{ github.ref_name }}`. GitHub Actions provides rich context objects (`github`, `env`, `vars`, `secrets`, `steps`, `runner`, `matrix`). Expressions inside `${{ ... }}` evaluate context properties at workflow runtime, enabling dynamic parameterization of image tags, notifications, and conditional checks.",
    referenceUrl: "https://docs.github.com/en/actions/learn-github-actions/contexts",
    tags: ["Contexts & Expressions","GitHub Contexts","Dr Failover"]
  },
  {
    id: "gh-200-302",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "GitHub Contexts and Expressions Syntax: High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer needs to dynamically label a container image with the repository name, commit SHA, and current Git reference during workflow execution.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency?",
    options: [
      { id: 'A', text: "Reference the `github` context: `${{ github.repository }}` and `${{ github.sha }}`." },
      { id: 'B', text: "Reference the `runner` context, which carries the checkout's own repository metadata." },
      { id: 'C', text: "Parse `git rev-parse HEAD` output in a step and pass it on as an output." },
      { id: 'D', text: "Reference the `env` context after a step has written the values into it." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Reference GitHub contexts in expressions: `${{ github.repository }}:${{ github.sha }}` and `${{ github.ref_name }}`. GitHub Actions provides rich context objects (`github`, `env`, `vars`, `secrets`, `steps`, `runner`, `matrix`). Expressions inside `${{ ... }}` evaluate context properties at workflow runtime, enabling dynamic parameterization of image tags, notifications, and conditional checks.",
    referenceUrl: "https://docs.github.com/en/actions/learn-github-actions/contexts",
    tags: ["Contexts & Expressions","GitHub Contexts","High Load Scale"]
  },
  {
    id: "gh-200-303",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "GitHub Contexts and Expressions Syntax: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer needs to dynamically label a container image with the repository name, commit SHA, and current Git reference during workflow execution.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls?",
    options: [
      { id: 'A', text: "Reference the `runner` context, which carries the checkout's own repository metadata." },
      { id: 'B', text: "Parse `git rev-parse HEAD` output in a step and pass it on as an output." },
      { id: 'C', text: "Reference the `github` context: `${{ github.repository }}` and `${{ github.sha }}`." },
      { id: 'D', text: "Reference the `env` context after a step has written the values into it." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Reference GitHub contexts in expressions: `${{ github.repository }}:${{ github.sha }}` and `${{ github.ref_name }}`. GitHub Actions provides rich context objects (`github`, `env`, `vars`, `secrets`, `steps`, `runner`, `matrix`). Expressions inside `${{ ... }}` evaluate context properties at workflow runtime, enabling dynamic parameterization of image tags, notifications, and conditional checks.",
    referenceUrl: "https://docs.github.com/en/actions/learn-github-actions/contexts",
    tags: ["Contexts & Expressions","GitHub Contexts","Security Compliance"]
  },
  {
    id: "gh-200-304",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "GitHub Contexts and Expressions Syntax: Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer needs to dynamically label a container image with the repository name, commit SHA, and current Git reference during workflow execution.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction?",
    options: [
      { id: 'A', text: "Reference the `github` context: `${{ github.repository }}` and `${{ github.sha }}`." },
      { id: 'B', text: "Parse `git rev-parse HEAD` output in a step and pass it on as an output." },
      { id: 'C', text: "Reference the `env` context after a step has written the values into it." },
      { id: 'D', text: "Reference the `runner` context, which carries the checkout's own repository metadata." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Reference GitHub contexts in expressions: `${{ github.repository }}:${{ github.sha }}` and `${{ github.ref_name }}`. GitHub Actions provides rich context objects (`github`, `env`, `vars`, `secrets`, `steps`, `runner`, `matrix`). Expressions inside `${{ ... }}` evaluate context properties at workflow runtime, enabling dynamic parameterization of image tags, notifications, and conditional checks.",
    referenceUrl: "https://docs.github.com/en/actions/learn-github-actions/contexts",
    tags: ["Contexts & Expressions","GitHub Contexts","Hybrid Migration"]
  },
  {
    id: "gh-200-305",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "GitHub Contexts and Expressions Syntax: Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer needs to dynamically label a container image with the repository name, commit SHA, and current Git reference during workflow execution.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability?",
    options: [
      { id: 'A', text: "Reference the `github` context: `${{ github.repository }}` and `${{ github.sha }}`." },
      { id: 'B', text: "Parse `git rev-parse HEAD` output in a step and pass it on as an output." },
      { id: 'C', text: "Reference the `env` context after a step has written the values into it." },
      { id: 'D', text: "Reference the `runner` context, which carries the checkout's own repository metadata." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Reference GitHub contexts in expressions: `${{ github.repository }}:${{ github.sha }}` and `${{ github.ref_name }}`. GitHub Actions provides rich context objects (`github`, `env`, `vars`, `secrets`, `steps`, `runner`, `matrix`). Expressions inside `${{ ... }}` evaluate context properties at workflow runtime, enabling dynamic parameterization of image tags, notifications, and conditional checks.",
    referenceUrl: "https://docs.github.com/en/actions/learn-github-actions/contexts",
    tags: ["Contexts & Expressions","GitHub Contexts","Resilience Failure"]
  },
  {
    id: "gh-200-306",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Environment Variables in Workflows (env:): Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer needs to pass an environment variable to all steps within a job while overriding it with a specialized value for one specific step.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives?",
    options: [
      { id: 'A', text: "Set the variable in the job's `env:` and override it in the step's own `env:`." },
      { id: 'B', text: "Set the variable at workflow level only, and read it from every step." },
      { id: 'C', text: "Export the variable in an earlier shell step without writing it to `$GITHUB_ENV`." },
      { id: 'D', text: "Write the value into each command string wherever the step needs it." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define the variable under `env:` at the job level, and define an overriding `env:` block on the specific step. Environment variables in GitHub Actions can be defined at the workflow, job, or step level. Variables declared in narrower scopes override values defined in broader parent scopes, allowing clean default configurations with localized step overrides.",
    referenceUrl: "https://docs.github.com/en/actions/learn-github-actions/variables#defining-environment-variables-in-a-workflow",
    tags: ["Environment Variables","Environment Variables","Dr Failover"]
  },
  {
    id: "gh-200-307",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Environment Variables in Workflows (env:): High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer needs to pass an environment variable to all steps within a job while overriding it with a specialized value for one specific step.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency?",
    options: [
      { id: 'A', text: "Set the variable in the job's `env:` and override it in the step's own `env:`." },
      { id: 'B', text: "Set the variable at workflow level only, and read it from every step." },
      { id: 'C', text: "Export the variable in an earlier shell step without writing it to `$GITHUB_ENV`." },
      { id: 'D', text: "Write the value into each command string wherever the step needs it." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define the variable under `env:` at the job level, and define an overriding `env:` block on the specific step. Environment variables in GitHub Actions can be defined at the workflow, job, or step level. Variables declared in narrower scopes override values defined in broader parent scopes, allowing clean default configurations with localized step overrides.",
    referenceUrl: "https://docs.github.com/en/actions/learn-github-actions/variables#defining-environment-variables-in-a-workflow",
    tags: ["Environment Variables","Environment Variables","High Load Scale"]
  },
  {
    id: "gh-200-308",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Environment Variables in Workflows (env:): Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer needs to pass an environment variable to all steps within a job while overriding it with a specialized value for one specific step.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls?",
    options: [
      { id: 'A', text: "Export the variable in an earlier shell step without writing it to `$GITHUB_ENV`." },
      { id: 'B', text: "Write the value into each command string wherever the step needs it." },
      { id: 'C', text: "Set the variable in the job's `env:` and override it in the step's own `env:`." },
      { id: 'D', text: "Set the variable at workflow level only, and read it from every step." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Define the variable under `env:` at the job level, and define an overriding `env:` block on the specific step. Environment variables in GitHub Actions can be defined at the workflow, job, or step level. Variables declared in narrower scopes override values defined in broader parent scopes, allowing clean default configurations with localized step overrides.",
    referenceUrl: "https://docs.github.com/en/actions/learn-github-actions/variables#defining-environment-variables-in-a-workflow",
    tags: ["Environment Variables","Environment Variables","Security Compliance"]
  },
  {
    id: "gh-200-309",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Environment Variables in Workflows (env:): Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer needs to pass an environment variable to all steps within a job while overriding it with a specialized value for one specific step.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction?",
    options: [
      { id: 'A', text: "Set the variable in the job's `env:` and override it in the step's own `env:`." },
      { id: 'B', text: "Set the variable at workflow level only, and read it from every step." },
      { id: 'C', text: "Export the variable in an earlier shell step without writing it to `$GITHUB_ENV`." },
      { id: 'D', text: "Write the value into each command string wherever the step needs it." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define the variable under `env:` at the job level, and define an overriding `env:` block on the specific step. Environment variables in GitHub Actions can be defined at the workflow, job, or step level. Variables declared in narrower scopes override values defined in broader parent scopes, allowing clean default configurations with localized step overrides.",
    referenceUrl: "https://docs.github.com/en/actions/learn-github-actions/variables#defining-environment-variables-in-a-workflow",
    tags: ["Environment Variables","Environment Variables","Hybrid Migration"]
  },
  {
    id: "gh-200-310",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Environment Variables in Workflows (env:): Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer needs to pass an environment variable to all steps within a job while overriding it with a specialized value for one specific step.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability?",
    options: [
      { id: 'A', text: "Set the variable in the job's `env:` and override it in the step's own `env:`." },
      { id: 'B', text: "Set the variable at workflow level only, and read it from every step." },
      { id: 'C', text: "Export the variable in an earlier shell step without writing it to `$GITHUB_ENV`." },
      { id: 'D', text: "Write the value into each command string wherever the step needs it." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define the variable under `env:` at the job level, and define an overriding `env:` block on the specific step. Environment variables in GitHub Actions can be defined at the workflow, job, or step level. Variables declared in narrower scopes override values defined in broader parent scopes, allowing clean default configurations with localized step overrides.",
    referenceUrl: "https://docs.github.com/en/actions/learn-github-actions/variables#defining-environment-variables-in-a-workflow",
    tags: ["Environment Variables","Environment Variables","Resilience Failure"]
  },
  {
    id: "gh-200-311",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Dynamic Step Outputs and Environment Files ($GITHUB_ENV, $GITHUB_OUTPUT): Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer needs to pass a dynamically calculated version string generated in one step to subsequent steps within the same job.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives?",
    options: [
      { id: 'A', text: "Write it to `$GITHUB_OUTPUT` and read `steps.&lt;id&gt;.outputs.version` downstream." },
      { id: 'B', text: "Write it with the `::set-output` workflow command and read it downstream." },
      { id: 'C', text: "Export it as a shell variable so later steps in the job inherit the value." },
      { id: 'D', text: "Write it to `$GITHUB_ENV` and read it back as an ordinary environment variable downstream." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Write the value to the GITHUB_OUTPUT environment file: `echo \"version=$VER\" &gt;&gt; \"$GITHUB_OUTPUT\"` and reference `steps.&lt;id&gt;.outputs.version`. GitHub Actions uses environment files to exchange state between steps. Appending key-value pairs to `$GITHUB_OUTPUT` makes them available as step outputs (`${{ steps.&lt;id&gt;.outputs.&lt;key&gt; }}`), while writing to `$GITHUB_ENV` exports environment variables to all subsequent steps in the job.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#setting-an-output-parameter",
    tags: ["Environment Files","GITHUB_OUTPUT","Dr Failover"]
  },
  {
    id: "gh-200-312",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Dynamic Step Outputs and Environment Files ($GITHUB_ENV, $GITHUB_OUTPUT): High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer needs to pass a dynamically calculated version string generated in one step to subsequent steps within the same job.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency?",
    options: [
      { id: 'A', text: "Export it as a shell variable so later steps in the job inherit the value." },
      { id: 'B', text: "Write it to `$GITHUB_ENV` and read it back as an ordinary environment variable downstream." },
      { id: 'C', text: "Write it to `$GITHUB_OUTPUT` and read `steps.&lt;id&gt;.outputs.version` downstream." },
      { id: 'D', text: "Write it with the `::set-output` workflow command and read it downstream." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Write the value to the GITHUB_OUTPUT environment file: `echo \"version=$VER\" &gt;&gt; \"$GITHUB_OUTPUT\"` and reference `steps.&lt;id&gt;.outputs.version`. GitHub Actions uses environment files to exchange state between steps. Appending key-value pairs to `$GITHUB_OUTPUT` makes them available as step outputs (`${{ steps.&lt;id&gt;.outputs.&lt;key&gt; }}`), while writing to `$GITHUB_ENV` exports environment variables to all subsequent steps in the job.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#setting-an-output-parameter",
    tags: ["Environment Files","GITHUB_OUTPUT","High Load Scale"]
  },
  {
    id: "gh-200-313",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Dynamic Step Outputs and Environment Files ($GITHUB_ENV, $GITHUB_OUTPUT): Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer needs to pass a dynamically calculated version string generated in one step to subsequent steps within the same job.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls?",
    options: [
      { id: 'A', text: "Export it as a shell variable so later steps in the job inherit the value." },
      { id: 'B', text: "Write it to `$GITHUB_OUTPUT` and read `steps.&lt;id&gt;.outputs.version` downstream." },
      { id: 'C', text: "Write it with the `::set-output` workflow command and read it downstream." },
      { id: 'D', text: "Write it to `$GITHUB_ENV` and read it back as an ordinary environment variable downstream." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Write the value to the GITHUB_OUTPUT environment file: `echo \"version=$VER\" &gt;&gt; \"$GITHUB_OUTPUT\"` and reference `steps.&lt;id&gt;.outputs.version`. GitHub Actions uses environment files to exchange state between steps. Appending key-value pairs to `$GITHUB_OUTPUT` makes them available as step outputs (`${{ steps.&lt;id&gt;.outputs.&lt;key&gt; }}`), while writing to `$GITHUB_ENV` exports environment variables to all subsequent steps in the job.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#setting-an-output-parameter",
    tags: ["Environment Files","GITHUB_OUTPUT","Security Compliance"]
  },
  {
    id: "gh-200-314",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Dynamic Step Outputs and Environment Files ($GITHUB_ENV, $GITHUB_OUTPUT): Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer needs to pass a dynamically calculated version string generated in one step to subsequent steps within the same job.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction?",
    options: [
      { id: 'A', text: "Export it as a shell variable so later steps in the job inherit the value." },
      { id: 'B', text: "Write it to `$GITHUB_ENV` and read it back as an ordinary environment variable downstream." },
      { id: 'C', text: "Write it to `$GITHUB_OUTPUT` and read `steps.&lt;id&gt;.outputs.version` downstream." },
      { id: 'D', text: "Write it with the `::set-output` workflow command and read it downstream." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Write the value to the GITHUB_OUTPUT environment file: `echo \"version=$VER\" &gt;&gt; \"$GITHUB_OUTPUT\"` and reference `steps.&lt;id&gt;.outputs.version`. GitHub Actions uses environment files to exchange state between steps. Appending key-value pairs to `$GITHUB_OUTPUT` makes them available as step outputs (`${{ steps.&lt;id&gt;.outputs.&lt;key&gt; }}`), while writing to `$GITHUB_ENV` exports environment variables to all subsequent steps in the job.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#setting-an-output-parameter",
    tags: ["Environment Files","GITHUB_OUTPUT","Hybrid Migration"]
  },
  {
    id: "gh-200-315",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Dynamic Step Outputs and Environment Files ($GITHUB_ENV, $GITHUB_OUTPUT): Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer needs to pass a dynamically calculated version string generated in one step to subsequent steps within the same job.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability?",
    options: [
      { id: 'A', text: "Write it with the `::set-output` workflow command and read it downstream." },
      { id: 'B', text: "Export it as a shell variable so later steps in the job inherit the value." },
      { id: 'C', text: "Write it to `$GITHUB_OUTPUT` and read `steps.&lt;id&gt;.outputs.version` downstream." },
      { id: 'D', text: "Write it to `$GITHUB_ENV` and read it back as an ordinary environment variable downstream." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Write the value to the GITHUB_OUTPUT environment file: `echo \"version=$VER\" &gt;&gt; \"$GITHUB_OUTPUT\"` and reference `steps.&lt;id&gt;.outputs.version`. GitHub Actions uses environment files to exchange state between steps. Appending key-value pairs to `$GITHUB_OUTPUT` makes them available as step outputs (`${{ steps.&lt;id&gt;.outputs.&lt;key&gt; }}`), while writing to `$GITHUB_ENV` exports environment variables to all subsequent steps in the job.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#setting-an-output-parameter",
    tags: ["Environment Files","GITHUB_OUTPUT","Resilience Failure"]
  },
  {
    id: "gh-200-316",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Customizing Workflow Summary ($GITHUB_STEP_SUMMARY): Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer needs to generate a formatted Markdown table of test coverage and benchmark results visible directly on the GitHub Actions run summary page.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives?",
    options: [
      { id: 'A', text: "Append the Markdown to `$GITHUB_STEP_SUMMARY`, which renders on the run's page." },
      { id: 'B', text: "Append the Markdown to `$GITHUB_ENV`, which each of the following steps then renders." },
      { id: 'C', text: "Post the Markdown as a pull request comment from the workflow's own token." },
      { id: 'D', text: "Upload the Markdown with `actions/upload-artifact` for reviewers to open." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Append Markdown text directly to the `$GITHUB_STEP_SUMMARY` environment file: `echo \"| Metric | Value |\" &gt;&gt; \"$GITHUB_STEP_SUMMARY\"`. The `$GITHUB_STEP_SUMMARY` environment file enables steps to publish rich Markdown content directly to the GitHub Actions workflow run summary page. Teams use it to render test result tables, code coverage summaries, and deployment links without cluttering build logs.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#adding-a-job-summary",
    tags: ["Step Summaries","Step Summaries","Dr Failover"]
  },
  {
    id: "gh-200-317",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Customizing Workflow Summary ($GITHUB_STEP_SUMMARY): High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer needs to generate a formatted Markdown table of test coverage and benchmark results visible directly on the GitHub Actions run summary page.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency?",
    options: [
      { id: 'A', text: "Upload the Markdown with `actions/upload-artifact` for reviewers to open." },
      { id: 'B', text: "Append the Markdown to `$GITHUB_STEP_SUMMARY`, which renders on the run's page." },
      { id: 'C', text: "Post the Markdown as a pull request comment from the workflow's own token." },
      { id: 'D', text: "Append the Markdown to `$GITHUB_ENV`, which each of the following steps then renders." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Append Markdown text directly to the `$GITHUB_STEP_SUMMARY` environment file: `echo \"| Metric | Value |\" &gt;&gt; \"$GITHUB_STEP_SUMMARY\"`. The `$GITHUB_STEP_SUMMARY` environment file enables steps to publish rich Markdown content directly to the GitHub Actions workflow run summary page. Teams use it to render test result tables, code coverage summaries, and deployment links without cluttering build logs.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#adding-a-job-summary",
    tags: ["Step Summaries","Step Summaries","High Load Scale"]
  },
  {
    id: "gh-200-318",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Customizing Workflow Summary ($GITHUB_STEP_SUMMARY): Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer needs to generate a formatted Markdown table of test coverage and benchmark results visible directly on the GitHub Actions run summary page.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls?",
    options: [
      { id: 'A', text: "Upload the Markdown with `actions/upload-artifact` for reviewers to open." },
      { id: 'B', text: "Post the Markdown as a pull request comment from the workflow's own token." },
      { id: 'C', text: "Append the Markdown to `$GITHUB_ENV`, which each of the following steps then renders." },
      { id: 'D', text: "Append the Markdown to `$GITHUB_STEP_SUMMARY`, which renders on the run's page." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Append Markdown text directly to the `$GITHUB_STEP_SUMMARY` environment file: `echo \"| Metric | Value |\" &gt;&gt; \"$GITHUB_STEP_SUMMARY\"`. The `$GITHUB_STEP_SUMMARY` environment file enables steps to publish rich Markdown content directly to the GitHub Actions workflow run summary page. Teams use it to render test result tables, code coverage summaries, and deployment links without cluttering build logs.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#adding-a-job-summary",
    tags: ["Step Summaries","Step Summaries","Security Compliance"]
  },
  {
    id: "gh-200-319",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Customizing Workflow Summary ($GITHUB_STEP_SUMMARY): Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer needs to generate a formatted Markdown table of test coverage and benchmark results visible directly on the GitHub Actions run summary page.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction?",
    options: [
      { id: 'A', text: "Append the Markdown to `$GITHUB_STEP_SUMMARY`, which renders on the run's page." },
      { id: 'B', text: "Append the Markdown to `$GITHUB_ENV`, which each of the following steps then renders." },
      { id: 'C', text: "Post the Markdown as a pull request comment from the workflow's own token." },
      { id: 'D', text: "Upload the Markdown with `actions/upload-artifact` for reviewers to open." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Append Markdown text directly to the `$GITHUB_STEP_SUMMARY` environment file: `echo \"| Metric | Value |\" &gt;&gt; \"$GITHUB_STEP_SUMMARY\"`. The `$GITHUB_STEP_SUMMARY` environment file enables steps to publish rich Markdown content directly to the GitHub Actions workflow run summary page. Teams use it to render test result tables, code coverage summaries, and deployment links without cluttering build logs.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#adding-a-job-summary",
    tags: ["Step Summaries","Step Summaries","Hybrid Migration"]
  },
  {
    id: "gh-200-320",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Customizing Workflow Summary ($GITHUB_STEP_SUMMARY): Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer needs to generate a formatted Markdown table of test coverage and benchmark results visible directly on the GitHub Actions run summary page.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability?",
    options: [
      { id: 'A', text: "Post the Markdown as a pull request comment from the workflow's own token." },
      { id: 'B', text: "Append the Markdown to `$GITHUB_STEP_SUMMARY`, which renders on the run's page." },
      { id: 'C', text: "Append the Markdown to `$GITHUB_ENV`, which each of the following steps then renders." },
      { id: 'D', text: "Upload the Markdown with `actions/upload-artifact` for reviewers to open." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Append Markdown text directly to the `$GITHUB_STEP_SUMMARY` environment file: `echo \"| Metric | Value |\" &gt;&gt; \"$GITHUB_STEP_SUMMARY\"`. The `$GITHUB_STEP_SUMMARY` environment file enables steps to publish rich Markdown content directly to the GitHub Actions workflow run summary page. Teams use it to render test result tables, code coverage summaries, and deployment links without cluttering build logs.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#adding-a-job-summary",
    tags: ["Step Summaries","Step Summaries","Resilience Failure"]
  },
  {
    id: "gh-200-321",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Job Timeouts and Step Timeouts (timeout-minutes): Dr Failover",
    scenario: "A devops automation engineering team is establishing high-availability pipeline standards, runner recovery procedures, and operational resilience baselines for GitHub Actions. The GitHub Actions engineer needs to prevent an integration test step that hangs on a network socket from consuming an organization's entire runner quota for hours.",
    question: "Which architectural approach or configuration satisfies these CI/CD disaster recovery and operational continuity objectives?",
    options: [
      { id: 'A', text: "Rely on the default 6-hour job execution timeout." },
      { id: 'B', text: "Configure `timeout-minutes: 15` on the job or specific step." },
      { id: 'C', text: "Kill runner processes manually using Task Manager on host servers." },
      { id: 'D', text: "Disable network timeouts in application test code." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure `timeout-minutes: 15` on the job or specific step. By default, a GitHub Actions job will run for up to 6 hours (360 minutes) before being cancelled. Configuring `timeout-minutes` on jobs or individual steps prevents hung processes or deadlocks from draining organization billing quotas and blocking other pending pipeline jobs.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idtimeout-minutes",
    tags: ["Timeout Management","Job Timeouts","Dr Failover"]
  },
  {
    id: "gh-200-322",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Job Timeouts and Step Timeouts (timeout-minutes): High Load Scale",
    scenario: "A high-throughput software engineering organization experiences massive surges in concurrent build and test requests across thousands of enterprise repositories. The GitHub Actions engineer needs to prevent an integration test step that hangs on a network socket from consuming an organization's entire runner quota for hours.",
    question: "Which workflow architecture or runner configuration manages this execution volume effectively while preventing queue congestion and latency?",
    options: [
      { id: 'A', text: "Disable network timeouts in application test code." },
      { id: 'B', text: "Kill runner processes manually using Task Manager on host servers." },
      { id: 'C', text: "Configure `timeout-minutes: 15` on the job or specific step." },
      { id: 'D', text: "Rely on the default 6-hour job execution timeout." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure `timeout-minutes: 15` on the job or specific step. By default, a GitHub Actions job will run for up to 6 hours (360 minutes) before being cancelled. Configuring `timeout-minutes` on jobs or individual steps prevents hung processes or deadlocks from draining organization billing quotas and blocking other pending pipeline jobs.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idtimeout-minutes",
    tags: ["Timeout Management","Job Timeouts","High Load Scale"]
  },
  {
    id: "gh-200-323",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Job Timeouts and Step Timeouts (timeout-minutes): Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, keyless cloud authentication, and automated governance across all GitHub Actions workflows. The GitHub Actions engineer needs to prevent an integration test step that hangs on a network socket from consuming an organization's entire runner quota for hours.",
    question: "Which solution implements these mandatory CI/CD security and compliance controls?",
    options: [
      { id: 'A', text: "Configure `timeout-minutes: 15` on the job or specific step." },
      { id: 'B', text: "Rely on the default 6-hour job execution timeout." },
      { id: 'C', text: "Disable network timeouts in application test code." },
      { id: 'D', text: "Kill runner processes manually using Task Manager on host servers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `timeout-minutes: 15` on the job or specific step. By default, a GitHub Actions job will run for up to 6 hours (360 minutes) before being cancelled. Configuring `timeout-minutes` on jobs or individual steps prevents hung processes or deadlocks from draining organization billing quotas and blocking other pending pipeline jobs.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idtimeout-minutes",
    tags: ["Timeout Management","Job Timeouts","Security Compliance"]
  },
  {
    id: "gh-200-324",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Job Timeouts and Step Timeouts (timeout-minutes): Hybrid Migration",
    scenario: "An enterprise is modernizing legacy on-premises CI/CD infrastructure and migrating automated delivery workflows to GitHub Actions. The GitHub Actions engineer needs to prevent an integration test step that hangs on a network socket from consuming an organization's entire runner quota for hours.",
    question: "Which practice or platform feature enables the engineering team to modernize automated delivery with minimal operational friction?",
    options: [
      { id: 'A', text: "Disable network timeouts in application test code." },
      { id: 'B', text: "Rely on the default 6-hour job execution timeout." },
      { id: 'C', text: "Kill runner processes manually using Task Manager on host servers." },
      { id: 'D', text: "Configure `timeout-minutes: 15` on the job or specific step." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure `timeout-minutes: 15` on the job or specific step. By default, a GitHub Actions job will run for up to 6 hours (360 minutes) before being cancelled. Configuring `timeout-minutes` on jobs or individual steps prevents hung processes or deadlocks from draining organization billing quotas and blocking other pending pipeline jobs.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idtimeout-minutes",
    tags: ["Timeout Management","Job Timeouts","Hybrid Migration"]
  },
  {
    id: "gh-200-325",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d1",
    domainName: "Author and manage workflows",
    title: "Job Timeouts and Step Timeouts (timeout-minutes): Resilience Failure",
    scenario: "A platform operations team is optimizing system reliability to eliminate single points of failure, accelerate build caching, and ensure secure failure handling. The GitHub Actions engineer needs to prevent an integration test step that hangs on a network socket from consuming an organization's entire runner quota for hours.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees pipeline availability?",
    options: [
      { id: 'A', text: "Disable network timeouts in application test code." },
      { id: 'B', text: "Rely on the default 6-hour job execution timeout." },
      { id: 'C', text: "Kill runner processes manually using Task Manager on host servers." },
      { id: 'D', text: "Configure `timeout-minutes: 15` on the job or specific step." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure `timeout-minutes: 15` on the job or specific step. By default, a GitHub Actions job will run for up to 6 hours (360 minutes) before being cancelled. Configuring `timeout-minutes` on jobs or individual steps prevents hung processes or deadlocks from draining organization billing quotas and blocking other pending pipeline jobs.",
    referenceUrl: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idtimeout-minutes",
    tags: ["Timeout Management","Job Timeouts","Resilience Failure"]
  }
];

export default GITHUB_ACTIONS_QUESTIONS_13;
