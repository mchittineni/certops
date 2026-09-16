export const K8S_CKAD_QUESTIONS_13 = [
  {
    id: "k8s-ckad-301",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Rolling Updates and Rollback Management: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates Deployment Rollbacks to revert a failed production Deployment update that introduced application runtime exceptions immediately back to the prior stable revision.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives?",
    options: [
      { id: 'A', text: "Run `kubectl rollout restart deployment/&lt;name&gt;` so every pod is recreated from the Deployment's pod template." },
      { id: 'B', text: "Run `kubectl scale deployment/&lt;name&gt; --replicas=0` and scale it back up once all the failing pods have terminated." },
      { id: 'C', text: "Run `kubectl rollout undo deployment/&lt;name&gt;`, listing the recorded revisions first with `kubectl rollout history`." },
      { id: 'D', text: "Run `kubectl set image deployment/&lt;name&gt; app=app:latest` to move the pods onto the newest published image tag." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Execute `kubectl rollout undo deployment/&lt;deployment-name&gt;` to revert to the previous revision, and inspect revisions via `kubectl rollout history`. Kubernetes Deployments track revision history in underlying ReplicaSets. Executing `kubectl rollout undo` rolls back the Deployment to the immediately preceding healthy revision (or a specific revision via `--to-revision`), restoring service without downtime.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#rolling-back-a-deployment",
    tags: ["Deployment Rollbacks","Rollback","Dr Failover"]
  },
  {
    id: "k8s-ckad-302",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Rolling Updates and Rollback Management: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates Deployment Rollbacks to revert a failed production Deployment update that introduced application runtime exceptions immediately back to the prior stable revision.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability?",
    options: [
      { id: 'A', text: "Run `kubectl scale deployment/&lt;name&gt; --replicas=0` and scale it back up once all the failing pods have terminated." },
      { id: 'B', text: "Run `kubectl set image deployment/&lt;name&gt; app=app:latest` to move the pods onto the newest published image tag." },
      { id: 'C', text: "Run `kubectl rollout undo deployment/&lt;name&gt;`, listing the recorded revisions first with `kubectl rollout history`." },
      { id: 'D', text: "Run `kubectl rollout restart deployment/&lt;name&gt;` so every pod is recreated from the Deployment's pod template." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Execute `kubectl rollout undo deployment/&lt;deployment-name&gt;` to revert to the previous revision, and inspect revisions via `kubectl rollout history`. Kubernetes Deployments track revision history in underlying ReplicaSets. Executing `kubectl rollout undo` rolls back the Deployment to the immediately preceding healthy revision (or a specific revision via `--to-revision`), restoring service without downtime.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#rolling-back-a-deployment",
    tags: ["Deployment Rollbacks","Rollback","High Load Scale"]
  },
  {
    id: "k8s-ckad-303",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Rolling Updates and Rollback Management: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates Deployment Rollbacks to revert a failed production Deployment update that introduced application runtime exceptions immediately back to the prior stable revision.",
    question: "Which solution properly implements these mandatory container and cluster security controls?",
    options: [
      { id: 'A', text: "Run `kubectl rollout undo deployment/&lt;name&gt;`, listing the recorded revisions first with `kubectl rollout history`." },
      { id: 'B', text: "Run `kubectl rollout restart deployment/&lt;name&gt;` so every pod is recreated from the Deployment's pod template." },
      { id: 'C', text: "Run `kubectl scale deployment/&lt;name&gt; --replicas=0` and scale it back up once all the failing pods have terminated." },
      { id: 'D', text: "Run `kubectl set image deployment/&lt;name&gt; app=app:latest` to move the pods onto the newest published image tag." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute `kubectl rollout undo deployment/&lt;deployment-name&gt;` to revert to the previous revision, and inspect revisions via `kubectl rollout history`. Kubernetes Deployments track revision history in underlying ReplicaSets. Executing `kubectl rollout undo` rolls back the Deployment to the immediately preceding healthy revision (or a specific revision via `--to-revision`), restoring service without downtime.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#rolling-back-a-deployment",
    tags: ["Deployment Rollbacks","Rollback","Security Compliance"]
  },
  {
    id: "k8s-ckad-304",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Rolling Updates and Rollback Management: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates Deployment Rollbacks to revert a failed production Deployment update that introduced application runtime exceptions immediately back to the prior stable revision.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction?",
    options: [
      { id: 'A', text: "Run `kubectl rollout undo deployment/&lt;name&gt;`, listing the recorded revisions first with `kubectl rollout history`." },
      { id: 'B', text: "Run `kubectl rollout restart deployment/&lt;name&gt;` so every pod is recreated from the Deployment's pod template." },
      { id: 'C', text: "Run `kubectl scale deployment/&lt;name&gt; --replicas=0` and scale it back up once all the failing pods have terminated." },
      { id: 'D', text: "Run `kubectl set image deployment/&lt;name&gt; app=app:latest` to move the pods onto the newest published image tag." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute `kubectl rollout undo deployment/&lt;deployment-name&gt;` to revert to the previous revision, and inspect revisions via `kubectl rollout history`. Kubernetes Deployments track revision history in underlying ReplicaSets. Executing `kubectl rollout undo` rolls back the Deployment to the immediately preceding healthy revision (or a specific revision via `--to-revision`), restoring service without downtime.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#rolling-back-a-deployment",
    tags: ["Deployment Rollbacks","Rollback","Hybrid Migration"]
  },
  {
    id: "k8s-ckad-305",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Rolling Updates and Rollback Management: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates Deployment Rollbacks to revert a failed production Deployment update that introduced application runtime exceptions immediately back to the prior stable revision.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability?",
    options: [
      { id: 'A', text: "Run `kubectl rollout undo deployment/&lt;name&gt;`, listing the recorded revisions first with `kubectl rollout history`." },
      { id: 'B', text: "Run `kubectl rollout restart deployment/&lt;name&gt;` so every pod is recreated from the Deployment's pod template." },
      { id: 'C', text: "Run `kubectl scale deployment/&lt;name&gt; --replicas=0` and scale it back up once all the failing pods have terminated." },
      { id: 'D', text: "Run `kubectl set image deployment/&lt;name&gt; app=app:latest` to move the pods onto the newest published image tag." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute `kubectl rollout undo deployment/&lt;deployment-name&gt;` to revert to the previous revision, and inspect revisions via `kubectl rollout history`. Kubernetes Deployments track revision history in underlying ReplicaSets. Executing `kubectl rollout undo` rolls back the Deployment to the immediately preceding healthy revision (or a specific revision via `--to-revision`), restoring service without downtime.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#rolling-back-a-deployment",
    tags: ["Deployment Rollbacks","Rollback","Resilience Failure"]
  },
  {
    id: "k8s-ckad-306",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Blue-Green Deployment Pattern: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates Blue-Green Pattern to deploy a major new application release requiring instantaneous traffic cutover and immediate zero-downtime rollback capability if issues arise.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives?",
    options: [
      { id: 'A', text: "Set the Deployment strategy to `RollingUpdate` with `maxSurge: 100%` and `maxUnavailable: 0` for the release." },
      { id: 'B', text: "Add the new version's pods to the existing Deployment and raise its replica count across the cutover window." },
      { id: 'C', text: "Create a second Service for the new version and shorten the client DNS TTL before moving traffic across." },
      { id: 'D', text: "Run the new version as a second Deployment and repoint the Service selector to it once it has been validated." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy the new version alongside the existing version in separate Deployments, test the new version, and update the Service selector to point to the new deployment. In a Blue-Green deployment, the existing environment (Blue) and new environment (Green) run simultaneously. Once Green passes validation, the Service selector is switched to Green's labels. If an unexpected defect occurs, the Service selector is instantly switched back to Blue.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/",
    tags: ["Blue-Green Pattern","Blue-Green","Dr Failover"]
  },
  {
    id: "k8s-ckad-307",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Blue-Green Deployment Pattern: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates Blue-Green Pattern to deploy a major new application release requiring instantaneous traffic cutover and immediate zero-downtime rollback capability if issues arise.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability?",
    options: [
      { id: 'A', text: "Set the Deployment strategy to `RollingUpdate` with `maxSurge: 100%` and `maxUnavailable: 0` for the release." },
      { id: 'B', text: "Run the new version as a second Deployment and repoint the Service selector to it once it has been validated." },
      { id: 'C', text: "Add the new version's pods to the existing Deployment and raise its replica count across the cutover window." },
      { id: 'D', text: "Create a second Service for the new version and shorten the client DNS TTL before moving traffic across." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy the new version alongside the existing version in separate Deployments, test the new version, and update the Service selector to point to the new deployment. In a Blue-Green deployment, the existing environment (Blue) and new environment (Green) run simultaneously. Once Green passes validation, the Service selector is switched to Green's labels. If an unexpected defect occurs, the Service selector is instantly switched back to Blue.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/",
    tags: ["Blue-Green Pattern","Blue-Green","High Load Scale"]
  },
  {
    id: "k8s-ckad-308",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Blue-Green Deployment Pattern: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates Blue-Green Pattern to deploy a major new application release requiring instantaneous traffic cutover and immediate zero-downtime rollback capability if issues arise.",
    question: "Which solution properly implements these mandatory container and cluster security controls?",
    options: [
      { id: 'A', text: "Set the Deployment strategy to `RollingUpdate` with `maxSurge: 100%` and `maxUnavailable: 0` for the release." },
      { id: 'B', text: "Add the new version's pods to the existing Deployment and raise its replica count across the cutover window." },
      { id: 'C', text: "Create a second Service for the new version and shorten the client DNS TTL before moving traffic across." },
      { id: 'D', text: "Run the new version as a second Deployment and repoint the Service selector to it once it has been validated." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy the new version alongside the existing version in separate Deployments, test the new version, and update the Service selector to point to the new deployment. In a Blue-Green deployment, the existing environment (Blue) and new environment (Green) run simultaneously. Once Green passes validation, the Service selector is switched to Green's labels. If an unexpected defect occurs, the Service selector is instantly switched back to Blue.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/",
    tags: ["Blue-Green Pattern","Blue-Green","Security Compliance"]
  },
  {
    id: "k8s-ckad-309",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Blue-Green Deployment Pattern: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates Blue-Green Pattern to deploy a major new application release requiring instantaneous traffic cutover and immediate zero-downtime rollback capability if issues arise.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction?",
    options: [
      { id: 'A', text: "Run the new version as a second Deployment and repoint the Service selector to it once it has been validated." },
      { id: 'B', text: "Create a second Service for the new version and shorten the client DNS TTL before moving traffic across." },
      { id: 'C', text: "Add the new version's pods to the existing Deployment and raise its replica count across the cutover window." },
      { id: 'D', text: "Set the Deployment strategy to `RollingUpdate` with `maxSurge: 100%` and `maxUnavailable: 0` for the release." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the new version alongside the existing version in separate Deployments, test the new version, and update the Service selector to point to the new deployment. In a Blue-Green deployment, the existing environment (Blue) and new environment (Green) run simultaneously. Once Green passes validation, the Service selector is switched to Green's labels. If an unexpected defect occurs, the Service selector is instantly switched back to Blue.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/",
    tags: ["Blue-Green Pattern","Blue-Green","Hybrid Migration"]
  },
  {
    id: "k8s-ckad-310",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Blue-Green Deployment Pattern: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates Blue-Green Pattern to deploy a major new application release requiring instantaneous traffic cutover and immediate zero-downtime rollback capability if issues arise.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability?",
    options: [
      { id: 'A', text: "Run the new version as a second Deployment and repoint the Service selector to it once it has been validated." },
      { id: 'B', text: "Create a second Service for the new version and shorten the client DNS TTL before moving traffic across." },
      { id: 'C', text: "Add the new version's pods to the existing Deployment and raise its replica count across the cutover window." },
      { id: 'D', text: "Set the Deployment strategy to `RollingUpdate` with `maxSurge: 100%` and `maxUnavailable: 0` for the release." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the new version alongside the existing version in separate Deployments, test the new version, and update the Service selector to point to the new deployment. In a Blue-Green deployment, the existing environment (Blue) and new environment (Green) run simultaneously. Once Green passes validation, the Service selector is switched to Green's labels. If an unexpected defect occurs, the Service selector is instantly switched back to Blue.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/",
    tags: ["Blue-Green Pattern","Blue-Green","Resilience Failure"]
  },
  {
    id: "k8s-ckad-311",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Canary Deployment Pattern: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates Canary Pattern to test a new version of an application with 10% of real production traffic while serving the remaining 90% from the current stable release.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives?",
    options: [
      { id: 'A', text: "Run a second Deployment of 1 replica beside the stable 9, both matched by the Service selector." },
      { id: 'B', text: "Run a second Deployment of 9 replicas and scale the stable Deployment down to a single replica." },
      { id: 'C', text: "Run the new version behind its own Service and weight it at 10% in the cluster DNS records." },
      { id: 'D', text: "Set `maxSurge: 10%` on the stable Deployment so a tenth of its pods run the new image." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a second Deployment with 1 replica alongside the stable Deployment with 9 replicas, both sharing the same Service label selector. A native Kubernetes canary deployment runs two Deployments (stable and canary) sharing the same label selector on a single Service. Traffic is distributed across pods proportionally to the replica count (e.g., 1 canary pod and 9 stable pods yields ~10% traffic to canary).",
    referenceUrl: "https://kubernetes.io/docs/concepts/cluster-administration/manage-deployment/#canary-deployments",
    tags: ["Canary Pattern","Canary","Dr Failover"]
  },
  {
    id: "k8s-ckad-312",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Canary Deployment Pattern: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates Canary Pattern to test a new version of an application with 10% of real production traffic while serving the remaining 90% from the current stable release.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability?",
    options: [
      { id: 'A', text: "Run the new version behind its own Service and weight it at 10% in the cluster DNS records." },
      { id: 'B', text: "Run a second Deployment of 9 replicas and scale the stable Deployment down to a single replica." },
      { id: 'C', text: "Set `maxSurge: 10%` on the stable Deployment so a tenth of its pods run the new image." },
      { id: 'D', text: "Run a second Deployment of 1 replica beside the stable 9, both matched by the Service selector." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy a second Deployment with 1 replica alongside the stable Deployment with 9 replicas, both sharing the same Service label selector. A native Kubernetes canary deployment runs two Deployments (stable and canary) sharing the same label selector on a single Service. Traffic is distributed across pods proportionally to the replica count (e.g., 1 canary pod and 9 stable pods yields ~10% traffic to canary).",
    referenceUrl: "https://kubernetes.io/docs/concepts/cluster-administration/manage-deployment/#canary-deployments",
    tags: ["Canary Pattern","Canary","High Load Scale"]
  },
  {
    id: "k8s-ckad-313",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Canary Deployment Pattern: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates Canary Pattern to test a new version of an application with 10% of real production traffic while serving the remaining 90% from the current stable release.",
    question: "Which solution properly implements these mandatory container and cluster security controls?",
    options: [
      { id: 'A', text: "Run a second Deployment of 9 replicas and scale the stable Deployment down to a single replica." },
      { id: 'B', text: "Set `maxSurge: 10%` on the stable Deployment so a tenth of its pods run the new image." },
      { id: 'C', text: "Run the new version behind its own Service and weight it at 10% in the cluster DNS records." },
      { id: 'D', text: "Run a second Deployment of 1 replica beside the stable 9, both matched by the Service selector." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy a second Deployment with 1 replica alongside the stable Deployment with 9 replicas, both sharing the same Service label selector. A native Kubernetes canary deployment runs two Deployments (stable and canary) sharing the same label selector on a single Service. Traffic is distributed across pods proportionally to the replica count (e.g., 1 canary pod and 9 stable pods yields ~10% traffic to canary).",
    referenceUrl: "https://kubernetes.io/docs/concepts/cluster-administration/manage-deployment/#canary-deployments",
    tags: ["Canary Pattern","Canary","Security Compliance"]
  },
  {
    id: "k8s-ckad-314",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Canary Deployment Pattern: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates Canary Pattern to test a new version of an application with 10% of real production traffic while serving the remaining 90% from the current stable release.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction?",
    options: [
      { id: 'A', text: "Set `maxSurge: 10%` on the stable Deployment so a tenth of its pods run the new image." },
      { id: 'B', text: "Run a second Deployment of 1 replica beside the stable 9, both matched by the Service selector." },
      { id: 'C', text: "Run the new version behind its own Service and weight it at 10% in the cluster DNS records." },
      { id: 'D', text: "Run a second Deployment of 9 replicas and scale the stable Deployment down to a single replica." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy a second Deployment with 1 replica alongside the stable Deployment with 9 replicas, both sharing the same Service label selector. A native Kubernetes canary deployment runs two Deployments (stable and canary) sharing the same label selector on a single Service. Traffic is distributed across pods proportionally to the replica count (e.g., 1 canary pod and 9 stable pods yields ~10% traffic to canary).",
    referenceUrl: "https://kubernetes.io/docs/concepts/cluster-administration/manage-deployment/#canary-deployments",
    tags: ["Canary Pattern","Canary","Hybrid Migration"]
  },
  {
    id: "k8s-ckad-315",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Canary Deployment Pattern: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates Canary Pattern to test a new version of an application with 10% of real production traffic while serving the remaining 90% from the current stable release.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability?",
    options: [
      { id: 'A', text: "Run a second Deployment of 1 replica beside the stable 9, both matched by the Service selector." },
      { id: 'B', text: "Set `maxSurge: 10%` on the stable Deployment so a tenth of its pods run the new image." },
      { id: 'C', text: "Run a second Deployment of 9 replicas and scale the stable Deployment down to a single replica." },
      { id: 'D', text: "Run the new version behind its own Service and weight it at 10% in the cluster DNS records." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a second Deployment with 1 replica alongside the stable Deployment with 9 replicas, both sharing the same Service label selector. A native Kubernetes canary deployment runs two Deployments (stable and canary) sharing the same label selector on a single Service. Traffic is distributed across pods proportionally to the replica count (e.g., 1 canary pod and 9 stable pods yields ~10% traffic to canary).",
    referenceUrl: "https://kubernetes.io/docs/concepts/cluster-administration/manage-deployment/#canary-deployments",
    tags: ["Canary Pattern","Canary","Resilience Failure"]
  },
  {
    id: "k8s-ckad-316",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Deployment Pause and Resume: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates Rollout Control to apply multiple configuration and resource updates to a Deployment without triggering multiple successive rollout cycles and pod recreation thrashing.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives?",
    options: [
      { id: 'A', text: "Run `kubectl rollout pause deployment/&lt;name&gt;`, apply every change, then `kubectl rollout resume deployment/&lt;name&gt;`." },
      { id: 'B', text: "Set `spec.paused: true` inside the Deployment's pod template, apply the changes, then remove the field again." },
      { id: 'C', text: "Set `spec.strategy.rollingUpdate.maxUnavailable: 0` so the separate changes are collapsed into a single rollout." },
      { id: 'D', text: "Set `spec.revisionHistoryLimit: 1` so the intermediate ReplicaSets are discarded instead of rolled out in turn." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `kubectl rollout pause deployment/&lt;name&gt;`, apply all desired pod template and configuration changes, and then run `kubectl rollout resume deployment/&lt;name&gt;`. Pausing a Deployment with `kubectl rollout pause` suspends rollout execution. An administrator can apply multiple updates (e.g., resource limits, environment variables, image tags) in sequence without triggering unnecessary intermediate pod churn, executing a single rolling update upon `resume`.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#pausing-and-resuming-a-rollout",
    tags: ["Rollout Control","Pause Resume","Dr Failover"]
  },
  {
    id: "k8s-ckad-317",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Deployment Pause and Resume: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates Rollout Control to apply multiple configuration and resource updates to a Deployment without triggering multiple successive rollout cycles and pod recreation thrashing.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability?",
    options: [
      { id: 'A', text: "Run `kubectl rollout pause deployment/&lt;name&gt;`, apply every change, then `kubectl rollout resume deployment/&lt;name&gt;`." },
      { id: 'B', text: "Set `spec.revisionHistoryLimit: 1` so the intermediate ReplicaSets are discarded instead of rolled out in turn." },
      { id: 'C', text: "Set `spec.paused: true` inside the Deployment's pod template, apply the changes, then remove the field again." },
      { id: 'D', text: "Set `spec.strategy.rollingUpdate.maxUnavailable: 0` so the separate changes are collapsed into a single rollout." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `kubectl rollout pause deployment/&lt;name&gt;`, apply all desired pod template and configuration changes, and then run `kubectl rollout resume deployment/&lt;name&gt;`. Pausing a Deployment with `kubectl rollout pause` suspends rollout execution. An administrator can apply multiple updates (e.g., resource limits, environment variables, image tags) in sequence without triggering unnecessary intermediate pod churn, executing a single rolling update upon `resume`.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#pausing-and-resuming-a-rollout",
    tags: ["Rollout Control","Pause Resume","High Load Scale"]
  },
  {
    id: "k8s-ckad-318",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Deployment Pause and Resume: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates Rollout Control to apply multiple configuration and resource updates to a Deployment without triggering multiple successive rollout cycles and pod recreation thrashing.",
    question: "Which solution properly implements these mandatory container and cluster security controls?",
    options: [
      { id: 'A', text: "Run `kubectl rollout pause deployment/&lt;name&gt;`, apply every change, then `kubectl rollout resume deployment/&lt;name&gt;`." },
      { id: 'B', text: "Set `spec.revisionHistoryLimit: 1` so the intermediate ReplicaSets are discarded instead of rolled out in turn." },
      { id: 'C', text: "Set `spec.paused: true` inside the Deployment's pod template, apply the changes, then remove the field again." },
      { id: 'D', text: "Set `spec.strategy.rollingUpdate.maxUnavailable: 0` so the separate changes are collapsed into a single rollout." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `kubectl rollout pause deployment/&lt;name&gt;`, apply all desired pod template and configuration changes, and then run `kubectl rollout resume deployment/&lt;name&gt;`. Pausing a Deployment with `kubectl rollout pause` suspends rollout execution. An administrator can apply multiple updates (e.g., resource limits, environment variables, image tags) in sequence without triggering unnecessary intermediate pod churn, executing a single rolling update upon `resume`.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#pausing-and-resuming-a-rollout",
    tags: ["Rollout Control","Pause Resume","Security Compliance"]
  },
  {
    id: "k8s-ckad-319",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Deployment Pause and Resume: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates Rollout Control to apply multiple configuration and resource updates to a Deployment without triggering multiple successive rollout cycles and pod recreation thrashing.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction?",
    options: [
      { id: 'A', text: "Set `spec.paused: true` inside the Deployment's pod template, apply the changes, then remove the field again." },
      { id: 'B', text: "Set `spec.strategy.rollingUpdate.maxUnavailable: 0` so the separate changes are collapsed into a single rollout." },
      { id: 'C', text: "Run `kubectl rollout pause deployment/&lt;name&gt;`, apply every change, then `kubectl rollout resume deployment/&lt;name&gt;`." },
      { id: 'D', text: "Set `spec.revisionHistoryLimit: 1` so the intermediate ReplicaSets are discarded instead of rolled out in turn." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Run `kubectl rollout pause deployment/&lt;name&gt;`, apply all desired pod template and configuration changes, and then run `kubectl rollout resume deployment/&lt;name&gt;`. Pausing a Deployment with `kubectl rollout pause` suspends rollout execution. An administrator can apply multiple updates (e.g., resource limits, environment variables, image tags) in sequence without triggering unnecessary intermediate pod churn, executing a single rolling update upon `resume`.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#pausing-and-resuming-a-rollout",
    tags: ["Rollout Control","Pause Resume","Hybrid Migration"]
  },
  {
    id: "k8s-ckad-320",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Deployment Pause and Resume: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates Rollout Control to apply multiple configuration and resource updates to a Deployment without triggering multiple successive rollout cycles and pod recreation thrashing.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability?",
    options: [
      { id: 'A', text: "Set `spec.revisionHistoryLimit: 1` so the intermediate ReplicaSets are discarded instead of rolled out in turn." },
      { id: 'B', text: "Set `spec.strategy.rollingUpdate.maxUnavailable: 0` so the separate changes are collapsed into a single rollout." },
      { id: 'C', text: "Set `spec.paused: true` inside the Deployment's pod template, apply the changes, then remove the field again." },
      { id: 'D', text: "Run `kubectl rollout pause deployment/&lt;name&gt;`, apply every change, then `kubectl rollout resume deployment/&lt;name&gt;`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Run `kubectl rollout pause deployment/&lt;name&gt;`, apply all desired pod template and configuration changes, and then run `kubectl rollout resume deployment/&lt;name&gt;`. Pausing a Deployment with `kubectl rollout pause` suspends rollout execution. An administrator can apply multiple updates (e.g., resource limits, environment variables, image tags) in sequence without triggering unnecessary intermediate pod churn, executing a single rolling update upon `resume`.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#pausing-and-resuming-a-rollout",
    tags: ["Rollout Control","Pause Resume","Resilience Failure"]
  },
  {
    id: "k8s-ckad-321",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Jobs and Parallelism Controls: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates Batch Jobs to process a batch queue of 100 images by running up to 5 worker pods concurrently until all 100 tasks complete successfully.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives?",
    options: [
      { id: 'A', text: "Use a StatefulSet with 100 replicas running indefinitely." },
      { id: 'B', text: "Create a single pod with 100 parallel container definitions." },
      { id: 'C', text: "Create 100 separate Deployment manifests and apply them simultaneously." },
      { id: 'D', text: "Create a `Job` with `completions: 100` and `parallelism: 5` in the Job specification." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Create a `Job` with `completions: 100` and `parallelism: 5` in the Job specification. In a Kubernetes Job, `completions` defines the total number of pods that must complete successfully for the job to succeed, while `parallelism` defines the maximum number of pods that can run simultaneously. The Job controller maintains parallel workers until reaching total completions.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/job/#parallel-execution-for-jobs",
    tags: ["Batch Jobs","Job Parallelism","Dr Failover"]
  },
  {
    id: "k8s-ckad-322",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Jobs and Parallelism Controls: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates Batch Jobs to process a batch queue of 100 images by running up to 5 worker pods concurrently until all 100 tasks complete successfully.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability?",
    options: [
      { id: 'A', text: "Create a single pod with 100 parallel container definitions." },
      { id: 'B', text: "Use a StatefulSet with 100 replicas running indefinitely." },
      { id: 'C', text: "Create a `Job` with `completions: 100` and `parallelism: 5` in the Job specification." },
      { id: 'D', text: "Create 100 separate Deployment manifests and apply them simultaneously." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create a `Job` with `completions: 100` and `parallelism: 5` in the Job specification. In a Kubernetes Job, `completions` defines the total number of pods that must complete successfully for the job to succeed, while `parallelism` defines the maximum number of pods that can run simultaneously. The Job controller maintains parallel workers until reaching total completions.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/job/#parallel-execution-for-jobs",
    tags: ["Batch Jobs","Job Parallelism","High Load Scale"]
  },
  {
    id: "k8s-ckad-323",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Jobs and Parallelism Controls: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates Batch Jobs to process a batch queue of 100 images by running up to 5 worker pods concurrently until all 100 tasks complete successfully.",
    question: "Which solution properly implements these mandatory container and cluster security controls?",
    options: [
      { id: 'A', text: "Create a single pod with 100 parallel container definitions." },
      { id: 'B', text: "Use a StatefulSet with 100 replicas running indefinitely." },
      { id: 'C', text: "Create a `Job` with `completions: 100` and `parallelism: 5` in the Job specification." },
      { id: 'D', text: "Create 100 separate Deployment manifests and apply them simultaneously." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create a `Job` with `completions: 100` and `parallelism: 5` in the Job specification. In a Kubernetes Job, `completions` defines the total number of pods that must complete successfully for the job to succeed, while `parallelism` defines the maximum number of pods that can run simultaneously. The Job controller maintains parallel workers until reaching total completions.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/job/#parallel-execution-for-jobs",
    tags: ["Batch Jobs","Job Parallelism","Security Compliance"]
  },
  {
    id: "k8s-ckad-324",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Jobs and Parallelism Controls: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates Batch Jobs to process a batch queue of 100 images by running up to 5 worker pods concurrently until all 100 tasks complete successfully.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction?",
    options: [
      { id: 'A', text: "Use a StatefulSet with 100 replicas running indefinitely." },
      { id: 'B', text: "Create a `Job` with `completions: 100` and `parallelism: 5` in the Job specification." },
      { id: 'C', text: "Create a single pod with 100 parallel container definitions." },
      { id: 'D', text: "Create 100 separate Deployment manifests and apply them simultaneously." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create a `Job` with `completions: 100` and `parallelism: 5` in the Job specification. In a Kubernetes Job, `completions` defines the total number of pods that must complete successfully for the job to succeed, while `parallelism` defines the maximum number of pods that can run simultaneously. The Job controller maintains parallel workers until reaching total completions.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/job/#parallel-execution-for-jobs",
    tags: ["Batch Jobs","Job Parallelism","Hybrid Migration"]
  },
  {
    id: "k8s-ckad-325",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Jobs and Parallelism Controls: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates Batch Jobs to process a batch queue of 100 images by running up to 5 worker pods concurrently until all 100 tasks complete successfully.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability?",
    options: [
      { id: 'A', text: "Create a `Job` with `completions: 100` and `parallelism: 5` in the Job specification." },
      { id: 'B', text: "Create 100 separate Deployment manifests and apply them simultaneously." },
      { id: 'C', text: "Create a single pod with 100 parallel container definitions." },
      { id: 'D', text: "Use a StatefulSet with 100 replicas running indefinitely." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a `Job` with `completions: 100` and `parallelism: 5` in the Job specification. In a Kubernetes Job, `completions` defines the total number of pods that must complete successfully for the job to succeed, while `parallelism` defines the maximum number of pods that can run simultaneously. The Job controller maintains parallel workers until reaching total completions.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/job/#parallel-execution-for-jobs",
    tags: ["Batch Jobs","Job Parallelism","Resilience Failure"]
  }
];

export default K8S_CKAD_QUESTIONS_13;
