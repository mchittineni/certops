export const K8S_CKAD_QUESTIONS_13 = [
  {
    id: "k8s-ckad-301",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Rolling Updates and Rollback Management: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates Deployment Rollbacks to revert a failed production Deployment update that introduced application runtime exceptions immediately back to the prior stable revision.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Checking rollout history and rolling back failed deployments with kubectl rollout is under consideration.",
    options: [
      { id: 'A', text: "Execute `kubectl rollout undo deployment/&lt;deployment-name&gt;` to revert to the previous revision, and inspect revisions via `kubectl rollout history`." },
      { id: 'B', text: "Delete the Deployment and re-author the manifest from memory." },
      { id: 'C', text: "Restart the worker node operating systems to reset pod memory." },
      { id: 'D', text: "Manually edit pod container image tags one by one using kubectl edit pod." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute `kubectl rollout undo deployment/&lt;deployment-name&gt;` to revert to the previous revision, and inspect revisions via `kubectl rollout history`. Kubernetes Deployments track revision history in underlying ReplicaSets. Executing `kubectl rollout undo` rolls back the Deployment to the immediately preceding healthy revision (or a specific revision via `--to-revision`), restoring service without downtime.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#rolling-back-a-deployment",
    tags: ["Deployment Rollbacks", "Rollback", "Dr Failover"]
  },
  {
    id: "k8s-ckad-302",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Rolling Updates and Rollback Management: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates Deployment Rollbacks to revert a failed production Deployment update that introduced application runtime exceptions immediately back to the prior stable revision.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability? Checking rollout history and rolling back failed deployments with kubectl rollout is under consideration.",
    options: [
      { id: 'A', text: "Execute `kubectl rollout undo deployment/&lt;deployment-name&gt;` to revert to the previous revision, and inspect revisions via `kubectl rollout history`." },
      { id: 'B', text: "Delete the Deployment and re-author the manifest from memory." },
      { id: 'C', text: "Restart the worker node operating systems to reset pod memory." },
      { id: 'D', text: "Manually edit pod container image tags one by one using kubectl edit pod." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute `kubectl rollout undo deployment/&lt;deployment-name&gt;` to revert to the previous revision, and inspect revisions via `kubectl rollout history`. Kubernetes Deployments track revision history in underlying ReplicaSets. Executing `kubectl rollout undo` rolls back the Deployment to the immediately preceding healthy revision (or a specific revision via `--to-revision`), restoring service without downtime.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#rolling-back-a-deployment",
    tags: ["Deployment Rollbacks", "Rollback", "High Load Scale"]
  },
  {
    id: "k8s-ckad-303",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Rolling Updates and Rollback Management: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates Deployment Rollbacks to revert a failed production Deployment update that introduced application runtime exceptions immediately back to the prior stable revision.",
    question: "Which solution properly implements these mandatory container and cluster security controls? Checking rollout history and rolling back failed deployments with kubectl rollout is under consideration.",
    options: [
      { id: 'A', text: "Execute `kubectl rollout undo deployment/&lt;deployment-name&gt;` to revert to the previous revision, and inspect revisions via `kubectl rollout history`." },
      { id: 'B', text: "Delete the Deployment and re-author the manifest from memory." },
      { id: 'C', text: "Restart the worker node operating systems to reset pod memory." },
      { id: 'D', text: "Manually edit pod container image tags one by one using kubectl edit pod." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute `kubectl rollout undo deployment/&lt;deployment-name&gt;` to revert to the previous revision, and inspect revisions via `kubectl rollout history`. Kubernetes Deployments track revision history in underlying ReplicaSets. Executing `kubectl rollout undo` rolls back the Deployment to the immediately preceding healthy revision (or a specific revision via `--to-revision`), restoring service without downtime.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#rolling-back-a-deployment",
    tags: ["Deployment Rollbacks", "Rollback", "Security Compliance"]
  },
  {
    id: "k8s-ckad-304",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Rolling Updates and Rollback Management: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates Deployment Rollbacks to revert a failed production Deployment update that introduced application runtime exceptions immediately back to the prior stable revision.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction? Checking rollout history and rolling back failed deployments with kubectl rollout is under consideration.",
    options: [
      { id: 'A', text: "Execute `kubectl rollout undo deployment/&lt;deployment-name&gt;` to revert to the previous revision, and inspect revisions via `kubectl rollout history`." },
      { id: 'B', text: "Delete the Deployment and re-author the manifest from memory." },
      { id: 'C', text: "Restart the worker node operating systems to reset pod memory." },
      { id: 'D', text: "Manually edit pod container image tags one by one using kubectl edit pod." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute `kubectl rollout undo deployment/&lt;deployment-name&gt;` to revert to the previous revision, and inspect revisions via `kubectl rollout history`. Kubernetes Deployments track revision history in underlying ReplicaSets. Executing `kubectl rollout undo` rolls back the Deployment to the immediately preceding healthy revision (or a specific revision via `--to-revision`), restoring service without downtime.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#rolling-back-a-deployment",
    tags: ["Deployment Rollbacks", "Rollback", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-305",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Rolling Updates and Rollback Management: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates Deployment Rollbacks to revert a failed production Deployment update that introduced application runtime exceptions immediately back to the prior stable revision.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability? Checking rollout history and rolling back failed deployments with kubectl rollout is under consideration.",
    options: [
      { id: 'A', text: "Execute `kubectl rollout undo deployment/&lt;deployment-name&gt;` to revert to the previous revision, and inspect revisions via `kubectl rollout history`." },
      { id: 'B', text: "Delete the Deployment and re-author the manifest from memory." },
      { id: 'C', text: "Restart the worker node operating systems to reset pod memory." },
      { id: 'D', text: "Manually edit pod container image tags one by one using kubectl edit pod." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute `kubectl rollout undo deployment/&lt;deployment-name&gt;` to revert to the previous revision, and inspect revisions via `kubectl rollout history`. Kubernetes Deployments track revision history in underlying ReplicaSets. Executing `kubectl rollout undo` rolls back the Deployment to the immediately preceding healthy revision (or a specific revision via `--to-revision`), restoring service without downtime.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#rolling-back-a-deployment",
    tags: ["Deployment Rollbacks", "Rollback", "Resilience Failure"]
  },
  {
    id: "k8s-ckad-306",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Blue-Green Deployment Pattern: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates Blue-Green Pattern to deploy a major new application release requiring instantaneous traffic cutover and immediate zero-downtime rollback capability if issues arise.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Zero-downtime traffic switching between isolated blue and green deployments is under consideration.",
    options: [
      { id: 'A', text: "Deploy the new version alongside the existing version in separate Deployments, test the new version, and update the Service selector to point to the new deployment." },
      { id: 'B', text: "Update the existing deployment in-place during peak customer business hours." },
      { id: 'C', text: "Delete the old deployment and wait 10 minutes before creating the new deployment." },
      { id: 'D', text: "Deploy the new version directly on the master node." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the new version alongside the existing version in separate Deployments, test the new version, and update the Service selector to point to the new deployment. In a Blue-Green deployment, the existing environment (Blue) and new environment (Green) run simultaneously. Once Green passes validation, the Service selector is switched to Green's labels. If an unexpected defect occurs, the Service selector is instantly switched back to Blue.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/",
    tags: ["Blue-Green Pattern", "Blue-Green", "Dr Failover"]
  },
  {
    id: "k8s-ckad-307",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Blue-Green Deployment Pattern: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates Blue-Green Pattern to deploy a major new application release requiring instantaneous traffic cutover and immediate zero-downtime rollback capability if issues arise.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability? Zero-downtime traffic switching between isolated blue and green deployments is under consideration.",
    options: [
      { id: 'A', text: "Deploy the new version alongside the existing version in separate Deployments, test the new version, and update the Service selector to point to the new deployment." },
      { id: 'B', text: "Update the existing deployment in-place during peak customer business hours." },
      { id: 'C', text: "Delete the old deployment and wait 10 minutes before creating the new deployment." },
      { id: 'D', text: "Deploy the new version directly on the master node." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the new version alongside the existing version in separate Deployments, test the new version, and update the Service selector to point to the new deployment. In a Blue-Green deployment, the existing environment (Blue) and new environment (Green) run simultaneously. Once Green passes validation, the Service selector is switched to Green's labels. If an unexpected defect occurs, the Service selector is instantly switched back to Blue.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/",
    tags: ["Blue-Green Pattern", "Blue-Green", "High Load Scale"]
  },
  {
    id: "k8s-ckad-308",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Blue-Green Deployment Pattern: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates Blue-Green Pattern to deploy a major new application release requiring instantaneous traffic cutover and immediate zero-downtime rollback capability if issues arise.",
    question: "Which solution properly implements these mandatory container and cluster security controls? Zero-downtime traffic switching between isolated blue and green deployments is under consideration.",
    options: [
      { id: 'A', text: "Deploy the new version alongside the existing version in separate Deployments, test the new version, and update the Service selector to point to the new deployment." },
      { id: 'B', text: "Update the existing deployment in-place during peak customer business hours." },
      { id: 'C', text: "Delete the old deployment and wait 10 minutes before creating the new deployment." },
      { id: 'D', text: "Deploy the new version directly on the master node." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the new version alongside the existing version in separate Deployments, test the new version, and update the Service selector to point to the new deployment. In a Blue-Green deployment, the existing environment (Blue) and new environment (Green) run simultaneously. Once Green passes validation, the Service selector is switched to Green's labels. If an unexpected defect occurs, the Service selector is instantly switched back to Blue.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/",
    tags: ["Blue-Green Pattern", "Blue-Green", "Security Compliance"]
  },
  {
    id: "k8s-ckad-309",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Blue-Green Deployment Pattern: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates Blue-Green Pattern to deploy a major new application release requiring instantaneous traffic cutover and immediate zero-downtime rollback capability if issues arise.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction? Zero-downtime traffic switching between isolated blue and green deployments is under consideration.",
    options: [
      { id: 'A', text: "Deploy the new version alongside the existing version in separate Deployments, test the new version, and update the Service selector to point to the new deployment." },
      { id: 'B', text: "Update the existing deployment in-place during peak customer business hours." },
      { id: 'C', text: "Delete the old deployment and wait 10 minutes before creating the new deployment." },
      { id: 'D', text: "Deploy the new version directly on the master node." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the new version alongside the existing version in separate Deployments, test the new version, and update the Service selector to point to the new deployment. In a Blue-Green deployment, the existing environment (Blue) and new environment (Green) run simultaneously. Once Green passes validation, the Service selector is switched to Green's labels. If an unexpected defect occurs, the Service selector is instantly switched back to Blue.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/",
    tags: ["Blue-Green Pattern", "Blue-Green", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-310",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Blue-Green Deployment Pattern: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates Blue-Green Pattern to deploy a major new application release requiring instantaneous traffic cutover and immediate zero-downtime rollback capability if issues arise.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability? Zero-downtime traffic switching between isolated blue and green deployments is under consideration.",
    options: [
      { id: 'A', text: "Deploy the new version alongside the existing version in separate Deployments, test the new version, and update the Service selector to point to the new deployment." },
      { id: 'B', text: "Update the existing deployment in-place during peak customer business hours." },
      { id: 'C', text: "Delete the old deployment and wait 10 minutes before creating the new deployment." },
      { id: 'D', text: "Deploy the new version directly on the master node." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the new version alongside the existing version in separate Deployments, test the new version, and update the Service selector to point to the new deployment. In a Blue-Green deployment, the existing environment (Blue) and new environment (Green) run simultaneously. Once Green passes validation, the Service selector is switched to Green's labels. If an unexpected defect occurs, the Service selector is instantly switched back to Blue.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/",
    tags: ["Blue-Green Pattern", "Blue-Green", "Resilience Failure"]
  },
  {
    id: "k8s-ckad-311",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Canary Deployment Pattern: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates Canary Pattern to test a new version of an application with 10% of real production traffic while serving the remaining 90% from the current stable release.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Routing a small percentage of user traffic to new versions to validate stability is under consideration.",
    options: [
      { id: 'A', text: "Deploy a second Deployment with 1 replica alongside the stable Deployment with 9 replicas, both sharing the same Service label selector." },
      { id: 'B', text: "Deploy the new version on a staging cluster and expose it to all production users." },
      { id: 'C', text: "Switch 100% of traffic to the new version and observe whether error rates rise." },
      { id: 'D', text: "Configure a round-robin DNS server outside the cluster pointing to arbitrary pods." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a second Deployment with 1 replica alongside the stable Deployment with 9 replicas, both sharing the same Service label selector. A native Kubernetes canary deployment runs two Deployments (stable and canary) sharing the same label selector on a single Service. Traffic is distributed across pods proportionally to the replica count (e.g., 1 canary pod and 9 stable pods yields ~10% traffic to canary).",
    referenceUrl: "https://kubernetes.io/docs/concepts/cluster-administration/manage-deployment/#canary-deployments",
    tags: ["Canary Pattern", "Canary", "Dr Failover"]
  },
  {
    id: "k8s-ckad-312",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Canary Deployment Pattern: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates Canary Pattern to test a new version of an application with 10% of real production traffic while serving the remaining 90% from the current stable release.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability? Routing a small percentage of user traffic to new versions to validate stability is under consideration.",
    options: [
      { id: 'A', text: "Deploy a second Deployment with 1 replica alongside the stable Deployment with 9 replicas, both sharing the same Service label selector." },
      { id: 'B', text: "Deploy the new version on a staging cluster and expose it to all production users." },
      { id: 'C', text: "Switch 100% of traffic to the new version and observe whether error rates rise." },
      { id: 'D', text: "Configure a round-robin DNS server outside the cluster pointing to arbitrary pods." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a second Deployment with 1 replica alongside the stable Deployment with 9 replicas, both sharing the same Service label selector. A native Kubernetes canary deployment runs two Deployments (stable and canary) sharing the same label selector on a single Service. Traffic is distributed across pods proportionally to the replica count (e.g., 1 canary pod and 9 stable pods yields ~10% traffic to canary).",
    referenceUrl: "https://kubernetes.io/docs/concepts/cluster-administration/manage-deployment/#canary-deployments",
    tags: ["Canary Pattern", "Canary", "High Load Scale"]
  },
  {
    id: "k8s-ckad-313",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Canary Deployment Pattern: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates Canary Pattern to test a new version of an application with 10% of real production traffic while serving the remaining 90% from the current stable release.",
    question: "Which solution properly implements these mandatory container and cluster security controls? Routing a small percentage of user traffic to new versions to validate stability is under consideration.",
    options: [
      { id: 'A', text: "Deploy a second Deployment with 1 replica alongside the stable Deployment with 9 replicas, both sharing the same Service label selector." },
      { id: 'B', text: "Deploy the new version on a staging cluster and expose it to all production users." },
      { id: 'C', text: "Switch 100% of traffic to the new version and observe whether error rates rise." },
      { id: 'D', text: "Configure a round-robin DNS server outside the cluster pointing to arbitrary pods." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a second Deployment with 1 replica alongside the stable Deployment with 9 replicas, both sharing the same Service label selector. A native Kubernetes canary deployment runs two Deployments (stable and canary) sharing the same label selector on a single Service. Traffic is distributed across pods proportionally to the replica count (e.g., 1 canary pod and 9 stable pods yields ~10% traffic to canary).",
    referenceUrl: "https://kubernetes.io/docs/concepts/cluster-administration/manage-deployment/#canary-deployments",
    tags: ["Canary Pattern", "Canary", "Security Compliance"]
  },
  {
    id: "k8s-ckad-314",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Canary Deployment Pattern: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates Canary Pattern to test a new version of an application with 10% of real production traffic while serving the remaining 90% from the current stable release.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction? Routing a small percentage of user traffic to new versions to validate stability is under consideration.",
    options: [
      { id: 'A', text: "Deploy a second Deployment with 1 replica alongside the stable Deployment with 9 replicas, both sharing the same Service label selector." },
      { id: 'B', text: "Deploy the new version on a staging cluster and expose it to all production users." },
      { id: 'C', text: "Switch 100% of traffic to the new version and observe whether error rates rise." },
      { id: 'D', text: "Configure a round-robin DNS server outside the cluster pointing to arbitrary pods." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a second Deployment with 1 replica alongside the stable Deployment with 9 replicas, both sharing the same Service label selector. A native Kubernetes canary deployment runs two Deployments (stable and canary) sharing the same label selector on a single Service. Traffic is distributed across pods proportionally to the replica count (e.g., 1 canary pod and 9 stable pods yields ~10% traffic to canary).",
    referenceUrl: "https://kubernetes.io/docs/concepts/cluster-administration/manage-deployment/#canary-deployments",
    tags: ["Canary Pattern", "Canary", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-315",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Canary Deployment Pattern: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates Canary Pattern to test a new version of an application with 10% of real production traffic while serving the remaining 90% from the current stable release.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability? Routing a small percentage of user traffic to new versions to validate stability is under consideration.",
    options: [
      { id: 'A', text: "Deploy a second Deployment with 1 replica alongside the stable Deployment with 9 replicas, both sharing the same Service label selector." },
      { id: 'B', text: "Deploy the new version on a staging cluster and expose it to all production users." },
      { id: 'C', text: "Switch 100% of traffic to the new version and observe whether error rates rise." },
      { id: 'D', text: "Configure a round-robin DNS server outside the cluster pointing to arbitrary pods." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a second Deployment with 1 replica alongside the stable Deployment with 9 replicas, both sharing the same Service label selector. A native Kubernetes canary deployment runs two Deployments (stable and canary) sharing the same label selector on a single Service. Traffic is distributed across pods proportionally to the replica count (e.g., 1 canary pod and 9 stable pods yields ~10% traffic to canary).",
    referenceUrl: "https://kubernetes.io/docs/concepts/cluster-administration/manage-deployment/#canary-deployments",
    tags: ["Canary Pattern", "Canary", "Resilience Failure"]
  },
  {
    id: "k8s-ckad-316",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Deployment Pause and Resume: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates Rollout Control to apply multiple configuration and resource updates to a Deployment without triggering multiple successive rollout cycles and pod recreation thrashing.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Pausing rollouts during multi-step updates with kubectl rollout pause and resume is under consideration.",
    options: [
      { id: 'A', text: "Run `kubectl rollout pause deployment/&lt;name&gt;`, apply all desired pod template and configuration changes, and then run `kubectl rollout resume deployment/&lt;name&gt;`." },
      { id: 'B', text: "Delete the Deployment before making changes and re-apply the updated manifest." },
      { id: 'C', text: "Apply each individual change separately and let the cluster trigger five rolling updates in a row." },
      { id: 'D', text: "Scale the deployment down to zero replicas before applying each configuration change." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `kubectl rollout pause deployment/&lt;name&gt;`, apply all desired pod template and configuration changes, and then run `kubectl rollout resume deployment/&lt;name&gt;`. Pausing a Deployment with `kubectl rollout pause` suspends rollout execution. An administrator can apply multiple updates (e.g., resource limits, environment variables, image tags) in sequence without triggering unnecessary intermediate pod churn, executing a single rolling update upon `resume`.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#pausing-and-resuming-a-rollout",
    tags: ["Rollout Control", "Pause Resume", "Dr Failover"]
  },
  {
    id: "k8s-ckad-317",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Deployment Pause and Resume: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates Rollout Control to apply multiple configuration and resource updates to a Deployment without triggering multiple successive rollout cycles and pod recreation thrashing.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability? Pausing rollouts during multi-step updates with kubectl rollout pause and resume is under consideration.",
    options: [
      { id: 'A', text: "Run `kubectl rollout pause deployment/&lt;name&gt;`, apply all desired pod template and configuration changes, and then run `kubectl rollout resume deployment/&lt;name&gt;`." },
      { id: 'B', text: "Delete the Deployment before making changes and re-apply the updated manifest." },
      { id: 'C', text: "Apply each individual change separately and let the cluster trigger five rolling updates in a row." },
      { id: 'D', text: "Scale the deployment down to zero replicas before applying each configuration change." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `kubectl rollout pause deployment/&lt;name&gt;`, apply all desired pod template and configuration changes, and then run `kubectl rollout resume deployment/&lt;name&gt;`. Pausing a Deployment with `kubectl rollout pause` suspends rollout execution. An administrator can apply multiple updates (e.g., resource limits, environment variables, image tags) in sequence without triggering unnecessary intermediate pod churn, executing a single rolling update upon `resume`.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#pausing-and-resuming-a-rollout",
    tags: ["Rollout Control", "Pause Resume", "High Load Scale"]
  },
  {
    id: "k8s-ckad-318",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Deployment Pause and Resume: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates Rollout Control to apply multiple configuration and resource updates to a Deployment without triggering multiple successive rollout cycles and pod recreation thrashing.",
    question: "Which solution properly implements these mandatory container and cluster security controls? Pausing rollouts during multi-step updates with kubectl rollout pause and resume is under consideration.",
    options: [
      { id: 'A', text: "Run `kubectl rollout pause deployment/&lt;name&gt;`, apply all desired pod template and configuration changes, and then run `kubectl rollout resume deployment/&lt;name&gt;`." },
      { id: 'B', text: "Delete the Deployment before making changes and re-apply the updated manifest." },
      { id: 'C', text: "Apply each individual change separately and let the cluster trigger five rolling updates in a row." },
      { id: 'D', text: "Scale the deployment down to zero replicas before applying each configuration change." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `kubectl rollout pause deployment/&lt;name&gt;`, apply all desired pod template and configuration changes, and then run `kubectl rollout resume deployment/&lt;name&gt;`. Pausing a Deployment with `kubectl rollout pause` suspends rollout execution. An administrator can apply multiple updates (e.g., resource limits, environment variables, image tags) in sequence without triggering unnecessary intermediate pod churn, executing a single rolling update upon `resume`.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#pausing-and-resuming-a-rollout",
    tags: ["Rollout Control", "Pause Resume", "Security Compliance"]
  },
  {
    id: "k8s-ckad-319",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Deployment Pause and Resume: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates Rollout Control to apply multiple configuration and resource updates to a Deployment without triggering multiple successive rollout cycles and pod recreation thrashing.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction? Pausing rollouts during multi-step updates with kubectl rollout pause and resume is under consideration.",
    options: [
      { id: 'A', text: "Run `kubectl rollout pause deployment/&lt;name&gt;`, apply all desired pod template and configuration changes, and then run `kubectl rollout resume deployment/&lt;name&gt;`." },
      { id: 'B', text: "Delete the Deployment before making changes and re-apply the updated manifest." },
      { id: 'C', text: "Apply each individual change separately and let the cluster trigger five rolling updates in a row." },
      { id: 'D', text: "Scale the deployment down to zero replicas before applying each configuration change." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `kubectl rollout pause deployment/&lt;name&gt;`, apply all desired pod template and configuration changes, and then run `kubectl rollout resume deployment/&lt;name&gt;`. Pausing a Deployment with `kubectl rollout pause` suspends rollout execution. An administrator can apply multiple updates (e.g., resource limits, environment variables, image tags) in sequence without triggering unnecessary intermediate pod churn, executing a single rolling update upon `resume`.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#pausing-and-resuming-a-rollout",
    tags: ["Rollout Control", "Pause Resume", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-320",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Deployment Pause and Resume: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates Rollout Control to apply multiple configuration and resource updates to a Deployment without triggering multiple successive rollout cycles and pod recreation thrashing.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability? Pausing rollouts during multi-step updates with kubectl rollout pause and resume is under consideration.",
    options: [
      { id: 'A', text: "Run `kubectl rollout pause deployment/&lt;name&gt;`, apply all desired pod template and configuration changes, and then run `kubectl rollout resume deployment/&lt;name&gt;`." },
      { id: 'B', text: "Delete the Deployment before making changes and re-apply the updated manifest." },
      { id: 'C', text: "Apply each individual change separately and let the cluster trigger five rolling updates in a row." },
      { id: 'D', text: "Scale the deployment down to zero replicas before applying each configuration change." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `kubectl rollout pause deployment/&lt;name&gt;`, apply all desired pod template and configuration changes, and then run `kubectl rollout resume deployment/&lt;name&gt;`. Pausing a Deployment with `kubectl rollout pause` suspends rollout execution. An administrator can apply multiple updates (e.g., resource limits, environment variables, image tags) in sequence without triggering unnecessary intermediate pod churn, executing a single rolling update upon `resume`.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#pausing-and-resuming-a-rollout",
    tags: ["Rollout Control", "Pause Resume", "Resilience Failure"]
  },
  {
    id: "k8s-ckad-321",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Jobs and Parallelism Controls: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates Batch Jobs to process a batch queue of 100 images by running up to 5 worker pods concurrently until all 100 tasks complete successfully.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Configuring completions and parallelism for distributed worker batch jobs is under consideration.",
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
    tags: ["Batch Jobs", "Job Parallelism", "Dr Failover"]
  },
  {
    id: "k8s-ckad-322",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Jobs and Parallelism Controls: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates Batch Jobs to process a batch queue of 100 images by running up to 5 worker pods concurrently until all 100 tasks complete successfully.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability? Configuring completions and parallelism for distributed worker batch jobs is under consideration.",
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
    tags: ["Batch Jobs", "Job Parallelism", "High Load Scale"]
  },
  {
    id: "k8s-ckad-323",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Jobs and Parallelism Controls: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates Batch Jobs to process a batch queue of 100 images by running up to 5 worker pods concurrently until all 100 tasks complete successfully.",
    question: "Which solution properly implements these mandatory container and cluster security controls? Configuring completions and parallelism for distributed worker batch jobs is under consideration.",
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
    tags: ["Batch Jobs", "Job Parallelism", "Security Compliance"]
  },
  {
    id: "k8s-ckad-324",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Jobs and Parallelism Controls: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates Batch Jobs to process a batch queue of 100 images by running up to 5 worker pods concurrently until all 100 tasks complete successfully.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction? Configuring completions and parallelism for distributed worker batch jobs is under consideration.",
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
    tags: ["Batch Jobs", "Job Parallelism", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-325",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Jobs and Parallelism Controls: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates Batch Jobs to process a batch queue of 100 images by running up to 5 worker pods concurrently until all 100 tasks complete successfully.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability? Configuring completions and parallelism for distributed worker batch jobs is under consideration.",
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
    tags: ["Batch Jobs", "Job Parallelism", "Resilience Failure"]
  }
];

export default K8S_CKAD_QUESTIONS_13;
