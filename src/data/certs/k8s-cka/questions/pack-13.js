export const K8S_CKA_QUESTIONS_13 = [
  {
    id: "k8s-cka-276",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Diagnosing CrashLoopBackOff Pod Failures: Dr Failover",
    scenario: "A platform engineering team is establishing high-availability standards and operational disaster recovery procedures for enterprise Kubernetes clusters. The Kubernetes administrator needs to diagnose why a container in a production pod crashes immediately upon startup and enters CrashLoopBackOff.",
    question: "Which architectural approach or configuration satisfies these cluster reliability and recovery requirements?",
    options: [
      { id: 'A', text: "Run `kubectl logs &lt;pod&gt; --previous` and read the exit code from `describe`." },
      { id: 'B', text: "Run `kubectl logs &lt;pod&gt; -f` and wait for the next crash to observe the failure live." },
      { id: 'C', text: "Run `kubectl describe pod` and raise the memory limit until the container stops restarting." },
      { id: 'D', text: "Run `kubectl get events -A` and correlate the restarts with the node's own health events." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute `kubectl logs &lt;pod-name&gt; --previous` to inspect stdout/stderr before termination and review container exit codes via `kubectl describe pod`. When a container enters CrashLoopBackOff, it has repeatedly failed and restarted. Running `kubectl logs &lt;pod&gt; --previous` retrieves logs from the terminated container instance, while `kubectl describe pod` reveals exit codes (e.g., 1 for generic error, 137 for OOMKilled), pinpointing the failure.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-application/debug-pods/",
    tags: ["Pod Diagnostics","Pod Debugging","Dr Failover"]
  },
  {
    id: "k8s-cka-277",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Diagnosing CrashLoopBackOff Pod Failures: High Load Scale",
    scenario: "A production Kubernetes cluster experiences massive surges in application traffic and high scheduling demands across large worker node pools. The Kubernetes administrator needs to diagnose why a container in a production pod crashes immediately upon startup and enters CrashLoopBackOff.",
    question: "Which architectural approach should the administrator select to manage this demand efficiently without cluster instability?",
    options: [
      { id: 'A', text: "Run `kubectl logs &lt;pod&gt; --previous` and read the exit code from `describe`." },
      { id: 'B', text: "Run `kubectl logs &lt;pod&gt; -f` and wait for the next crash to observe the failure live." },
      { id: 'C', text: "Run `kubectl describe pod` and raise the memory limit until the container stops restarting." },
      { id: 'D', text: "Run `kubectl get events -A` and correlate the restarts with the node's own health events." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute `kubectl logs &lt;pod-name&gt; --previous` to inspect stdout/stderr before termination and review container exit codes via `kubectl describe pod`. When a container enters CrashLoopBackOff, it has repeatedly failed and restarted. Running `kubectl logs &lt;pod&gt; --previous` retrieves logs from the terminated container instance, while `kubectl describe pod` reveals exit codes (e.g., 1 for generic error, 137 for OOMKilled), pinpointing the failure.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-application/debug-pods/",
    tags: ["Pod Diagnostics","Pod Debugging","High Load Scale"]
  },
  {
    id: "k8s-cka-278",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Diagnosing CrashLoopBackOff Pod Failures: Security Compliance",
    scenario: "A compliance auditor requires strict isolation of cluster resources, least-privilege administrative access, and secure network traffic policies across all namespaces. The Kubernetes administrator needs to diagnose why a container in a production pod crashes immediately upon startup and enters CrashLoopBackOff.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls?",
    options: [
      { id: 'A', text: "Run `kubectl logs &lt;pod&gt; --previous` and read the exit code from `describe`." },
      { id: 'B', text: "Run `kubectl logs &lt;pod&gt; -f` and wait for the next crash to observe the failure live." },
      { id: 'C', text: "Run `kubectl describe pod` and raise the memory limit until the container stops restarting." },
      { id: 'D', text: "Run `kubectl get events -A` and correlate the restarts with the node's own health events." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute `kubectl logs &lt;pod-name&gt; --previous` to inspect stdout/stderr before termination and review container exit codes via `kubectl describe pod`. When a container enters CrashLoopBackOff, it has repeatedly failed and restarted. Running `kubectl logs &lt;pod&gt; --previous` retrieves logs from the terminated container instance, while `kubectl describe pod` reveals exit codes (e.g., 1 for generic error, 137 for OOMKilled), pinpointing the failure.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-application/debug-pods/",
    tags: ["Pod Diagnostics","Pod Debugging","Security Compliance"]
  },
  {
    id: "k8s-cka-279",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Diagnosing CrashLoopBackOff Pod Failures: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises virtualized infrastructure and migrating core enterprise workloads into production Kubernetes clusters. The Kubernetes administrator needs to diagnose why a container in a production pod crashes immediately upon startup and enters CrashLoopBackOff.",
    question: "Which operational pattern or feature enables the engineering team to achieve seamless workload execution with minimal complexity?",
    options: [
      { id: 'A', text: "Run `kubectl logs &lt;pod&gt; --previous` and read the exit code from `describe`." },
      { id: 'B', text: "Run `kubectl logs &lt;pod&gt; -f` and wait for the next crash to observe the failure live." },
      { id: 'C', text: "Run `kubectl describe pod` and raise the memory limit until the container stops restarting." },
      { id: 'D', text: "Run `kubectl get events -A` and correlate the restarts with the node's own health events." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute `kubectl logs &lt;pod-name&gt; --previous` to inspect stdout/stderr before termination and review container exit codes via `kubectl describe pod`. When a container enters CrashLoopBackOff, it has repeatedly failed and restarted. Running `kubectl logs &lt;pod&gt; --previous` retrieves logs from the terminated container instance, while `kubectl describe pod` reveals exit codes (e.g., 1 for generic error, 137 for OOMKilled), pinpointing the failure.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-application/debug-pods/",
    tags: ["Pod Diagnostics","Pod Debugging","Hybrid Migration"]
  },
  {
    id: "k8s-cka-280",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Diagnosing CrashLoopBackOff Pod Failures: Resilience Failure",
    scenario: "A cluster operations team is hardening infrastructure to eliminate single points of failure, streamline node maintenance, and automate self-healing. The Kubernetes administrator needs to diagnose why a container in a production pod crashes immediately upon startup and enters CrashLoopBackOff.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster stability?",
    options: [
      { id: 'A', text: "Run `kubectl logs &lt;pod&gt; --previous` and read the exit code from `describe`." },
      { id: 'B', text: "Run `kubectl describe pod` and raise the memory limit until the container stops restarting." },
      { id: 'C', text: "Run `kubectl get events -A` and correlate the restarts with the node's own health events." },
      { id: 'D', text: "Run `kubectl logs &lt;pod&gt; -f` and wait for the next crash to observe the failure live." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute `kubectl logs &lt;pod-name&gt; --previous` to inspect stdout/stderr before termination and review container exit codes via `kubectl describe pod`. When a container enters CrashLoopBackOff, it has repeatedly failed and restarted. Running `kubectl logs &lt;pod&gt; --previous` retrieves logs from the terminated container instance, while `kubectl describe pod` reveals exit codes (e.g., 1 for generic error, 137 for OOMKilled), pinpointing the failure.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-application/debug-pods/",
    tags: ["Pod Diagnostics","Pod Debugging","Resilience Failure"]
  },
  {
    id: "k8s-cka-281",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Investigating OOMKilled Containers: Dr Failover",
    scenario: "A platform engineering team is establishing high-availability standards and operational disaster recovery procedures for enterprise Kubernetes clusters. The Kubernetes administrator needs to determine why a high-throughput Java microservice container was killed unexpectedly with exit code 137.",
    question: "Which architectural approach or configuration satisfies these cluster reliability and recovery requirements?",
    options: [
      { id: 'A', text: "Read the container's own logs for a stack trace and set `restartPolicy: Never` to preserve it." },
      { id: 'B', text: "Read `kubectl top pod` for the CPU figure and raise the container's CPU limit to match." },
      { id: 'C', text: "Read `kubectl describe pod` for `OOMKilled` and exit code 137, then adjust the memory limit." },
      { id: 'D', text: "Read the node's disk pressure condition, since eviction also shows as a restart loop." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Inspect `kubectl describe pod` for `OOMKilled: true` (exit code 137) and adjust the container memory limit or JVM heap settings. Exit code 137 occurs when a container process is terminated by the Linux kernel Out-Of-Memory (OOM) killer because its memory usage exceeded the configured container `limits.memory`. Examining pod details confirms `OOMKilled: true`, indicating the memory limit must be increased or memory leaks resolved.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/",
    tags: ["Memory Limits","Resource Limits","Dr Failover"]
  },
  {
    id: "k8s-cka-282",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Investigating OOMKilled Containers: High Load Scale",
    scenario: "A production Kubernetes cluster experiences massive surges in application traffic and high scheduling demands across large worker node pools. The Kubernetes administrator needs to determine why a high-throughput Java microservice container was killed unexpectedly with exit code 137.",
    question: "Which architectural approach should the administrator select to manage this demand efficiently without cluster instability?",
    options: [
      { id: 'A', text: "Read `kubectl describe pod` for `OOMKilled` and exit code 137, then adjust the memory limit." },
      { id: 'B', text: "Read the node's disk pressure condition, since eviction also shows as a restart loop." },
      { id: 'C', text: "Read the container's own logs for a stack trace and set `restartPolicy: Never` to preserve it." },
      { id: 'D', text: "Read `kubectl top pod` for the CPU figure and raise the container's CPU limit to match." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Inspect `kubectl describe pod` for `OOMKilled: true` (exit code 137) and adjust the container memory limit or JVM heap settings. Exit code 137 occurs when a container process is terminated by the Linux kernel Out-Of-Memory (OOM) killer because its memory usage exceeded the configured container `limits.memory`. Examining pod details confirms `OOMKilled: true`, indicating the memory limit must be increased or memory leaks resolved.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/",
    tags: ["Memory Limits","Resource Limits","High Load Scale"]
  },
  {
    id: "k8s-cka-283",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Investigating OOMKilled Containers: Security Compliance",
    scenario: "A compliance auditor requires strict isolation of cluster resources, least-privilege administrative access, and secure network traffic policies across all namespaces. The Kubernetes administrator needs to determine why a high-throughput Java microservice container was killed unexpectedly with exit code 137.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls?",
    options: [
      { id: 'A', text: "Read `kubectl describe pod` for `OOMKilled` and exit code 137, then adjust the memory limit." },
      { id: 'B', text: "Read the node's disk pressure condition, since eviction also shows as a restart loop." },
      { id: 'C', text: "Read the container's own logs for a stack trace and set `restartPolicy: Never` to preserve it." },
      { id: 'D', text: "Read `kubectl top pod` for the CPU figure and raise the container's CPU limit to match." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Inspect `kubectl describe pod` for `OOMKilled: true` (exit code 137) and adjust the container memory limit or JVM heap settings. Exit code 137 occurs when a container process is terminated by the Linux kernel Out-Of-Memory (OOM) killer because its memory usage exceeded the configured container `limits.memory`. Examining pod details confirms `OOMKilled: true`, indicating the memory limit must be increased or memory leaks resolved.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/",
    tags: ["Memory Limits","Resource Limits","Security Compliance"]
  },
  {
    id: "k8s-cka-284",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Investigating OOMKilled Containers: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises virtualized infrastructure and migrating core enterprise workloads into production Kubernetes clusters. The Kubernetes administrator needs to determine why a high-throughput Java microservice container was killed unexpectedly with exit code 137.",
    question: "Which operational pattern or feature enables the engineering team to achieve seamless workload execution with minimal complexity?",
    options: [
      { id: 'A', text: "Read the node's disk pressure condition, since eviction also shows as a restart loop." },
      { id: 'B', text: "Read `kubectl top pod` for the CPU figure and raise the container's CPU limit to match." },
      { id: 'C', text: "Read the container's own logs for a stack trace and set `restartPolicy: Never` to preserve it." },
      { id: 'D', text: "Read `kubectl describe pod` for `OOMKilled` and exit code 137, then adjust the memory limit." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Inspect `kubectl describe pod` for `OOMKilled: true` (exit code 137) and adjust the container memory limit or JVM heap settings. Exit code 137 occurs when a container process is terminated by the Linux kernel Out-Of-Memory (OOM) killer because its memory usage exceeded the configured container `limits.memory`. Examining pod details confirms `OOMKilled: true`, indicating the memory limit must be increased or memory leaks resolved.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/",
    tags: ["Memory Limits","Resource Limits","Hybrid Migration"]
  },
  {
    id: "k8s-cka-285",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Investigating OOMKilled Containers: Resilience Failure",
    scenario: "A cluster operations team is hardening infrastructure to eliminate single points of failure, streamline node maintenance, and automate self-healing. The Kubernetes administrator needs to determine why a high-throughput Java microservice container was killed unexpectedly with exit code 137.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster stability?",
    options: [
      { id: 'A', text: "Read the container's own logs for a stack trace and set `restartPolicy: Never` to preserve it." },
      { id: 'B', text: "Read the node's disk pressure condition, since eviction also shows as a restart loop." },
      { id: 'C', text: "Read `kubectl top pod` for the CPU figure and raise the container's CPU limit to match." },
      { id: 'D', text: "Read `kubectl describe pod` for `OOMKilled` and exit code 137, then adjust the memory limit." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Inspect `kubectl describe pod` for `OOMKilled: true` (exit code 137) and adjust the container memory limit or JVM heap settings. Exit code 137 occurs when a container process is terminated by the Linux kernel Out-Of-Memory (OOM) killer because its memory usage exceeded the configured container `limits.memory`. Examining pod details confirms `OOMKilled: true`, indicating the memory limit must be increased or memory leaks resolved.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/",
    tags: ["Memory Limits","Resource Limits","Resilience Failure"]
  },
  {
    id: "k8s-cka-286",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Resolving ImagePullBackOff and ErrImagePull: Dr Failover",
    scenario: "A platform engineering team is establishing high-availability standards and operational disaster recovery procedures for enterprise Kubernetes clusters. The Kubernetes administrator needs to resolve an `ImagePullBackOff` error on a newly deployed pod attempting to pull an image from a private container registry.",
    question: "Which architectural approach or configuration satisfies these cluster reliability and recovery requirements?",
    options: [
      { id: 'A', text: "Check the node's disk pressure condition, since a full node cannot unpack the image layers." },
      { id: 'B', text: "Check the `imagePullPolicy` and set it to `IfNotPresent` so the node uses its cached layer." },
      { id: 'C', text: "Check the image repository and tag, and confirm the pod names an `imagePullSecrets` entry." },
      { id: 'D', text: "Check the ServiceAccount's own `imagePullSecrets`, which the pod inherits when it has none." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Verify the container image repository name and tag, and confirm that the pod references a valid `imagePullSecrets` containing registry credentials. `ImagePullBackOff` occurs when the kubelet fails to retrieve the specified container image. Common causes include typos in the image name or tag, non-existent images, network connectivity issues, or missing authentication credentials via `imagePullSecrets` for private registries.",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/images/#specifying-imagepullsecrets-on-a-pod",
    tags: ["Image Pull Errors","Image Pull","Dr Failover"]
  },
  {
    id: "k8s-cka-287",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Resolving ImagePullBackOff and ErrImagePull: High Load Scale",
    scenario: "A production Kubernetes cluster experiences massive surges in application traffic and high scheduling demands across large worker node pools. The Kubernetes administrator needs to resolve an `ImagePullBackOff` error on a newly deployed pod attempting to pull an image from a private container registry.",
    question: "Which architectural approach should the administrator select to manage this demand efficiently without cluster instability?",
    options: [
      { id: 'A', text: "Check the image repository and tag, and confirm the pod names an `imagePullSecrets` entry." },
      { id: 'B', text: "Check the node's disk pressure condition, since a full node cannot unpack the image layers." },
      { id: 'C', text: "Check the `imagePullPolicy` and set it to `IfNotPresent` so the node uses its cached layer." },
      { id: 'D', text: "Check the ServiceAccount's own `imagePullSecrets`, which the pod inherits when it has none." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Verify the container image repository name and tag, and confirm that the pod references a valid `imagePullSecrets` containing registry credentials. `ImagePullBackOff` occurs when the kubelet fails to retrieve the specified container image. Common causes include typos in the image name or tag, non-existent images, network connectivity issues, or missing authentication credentials via `imagePullSecrets` for private registries.",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/images/#specifying-imagepullsecrets-on-a-pod",
    tags: ["Image Pull Errors","Image Pull","High Load Scale"]
  },
  {
    id: "k8s-cka-288",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Resolving ImagePullBackOff and ErrImagePull: Security Compliance",
    scenario: "A compliance auditor requires strict isolation of cluster resources, least-privilege administrative access, and secure network traffic policies across all namespaces. The Kubernetes administrator needs to resolve an `ImagePullBackOff` error on a newly deployed pod attempting to pull an image from a private container registry.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls?",
    options: [
      { id: 'A', text: "Check the image repository and tag, and confirm the pod names an `imagePullSecrets` entry." },
      { id: 'B', text: "Check the ServiceAccount's own `imagePullSecrets`, which the pod inherits when it has none." },
      { id: 'C', text: "Check the node's disk pressure condition, since a full node cannot unpack the image layers." },
      { id: 'D', text: "Check the `imagePullPolicy` and set it to `IfNotPresent` so the node uses its cached layer." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Verify the container image repository name and tag, and confirm that the pod references a valid `imagePullSecrets` containing registry credentials. `ImagePullBackOff` occurs when the kubelet fails to retrieve the specified container image. Common causes include typos in the image name or tag, non-existent images, network connectivity issues, or missing authentication credentials via `imagePullSecrets` for private registries.",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/images/#specifying-imagepullsecrets-on-a-pod",
    tags: ["Image Pull Errors","Image Pull","Security Compliance"]
  },
  {
    id: "k8s-cka-289",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Resolving ImagePullBackOff and ErrImagePull: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises virtualized infrastructure and migrating core enterprise workloads into production Kubernetes clusters. The Kubernetes administrator needs to resolve an `ImagePullBackOff` error on a newly deployed pod attempting to pull an image from a private container registry.",
    question: "Which operational pattern or feature enables the engineering team to achieve seamless workload execution with minimal complexity?",
    options: [
      { id: 'A', text: "Check the node's disk pressure condition, since a full node cannot unpack the image layers." },
      { id: 'B', text: "Check the `imagePullPolicy` and set it to `IfNotPresent` so the node uses its cached layer." },
      { id: 'C', text: "Check the image repository and tag, and confirm the pod names an `imagePullSecrets` entry." },
      { id: 'D', text: "Check the ServiceAccount's own `imagePullSecrets`, which the pod inherits when it has none." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Verify the container image repository name and tag, and confirm that the pod references a valid `imagePullSecrets` containing registry credentials. `ImagePullBackOff` occurs when the kubelet fails to retrieve the specified container image. Common causes include typos in the image name or tag, non-existent images, network connectivity issues, or missing authentication credentials via `imagePullSecrets` for private registries.",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/images/#specifying-imagepullsecrets-on-a-pod",
    tags: ["Image Pull Errors","Image Pull","Hybrid Migration"]
  },
  {
    id: "k8s-cka-290",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Resolving ImagePullBackOff and ErrImagePull: Resilience Failure",
    scenario: "A cluster operations team is hardening infrastructure to eliminate single points of failure, streamline node maintenance, and automate self-healing. The Kubernetes administrator needs to resolve an `ImagePullBackOff` error on a newly deployed pod attempting to pull an image from a private container registry.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster stability?",
    options: [
      { id: 'A', text: "Check the ServiceAccount's own `imagePullSecrets`, which the pod inherits when it has none." },
      { id: 'B', text: "Check the image repository and tag, and confirm the pod names an `imagePullSecrets` entry." },
      { id: 'C', text: "Check the `imagePullPolicy` and set it to `IfNotPresent` so the node uses its cached layer." },
      { id: 'D', text: "Check the node's disk pressure condition, since a full node cannot unpack the image layers." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Verify the container image repository name and tag, and confirm that the pod references a valid `imagePullSecrets` containing registry credentials. `ImagePullBackOff` occurs when the kubelet fails to retrieve the specified container image. Common causes include typos in the image name or tag, non-existent images, network connectivity issues, or missing authentication credentials via `imagePullSecrets` for private registries.",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/images/#specifying-imagepullsecrets-on-a-pod",
    tags: ["Image Pull Errors","Image Pull","Resilience Failure"]
  },
  {
    id: "k8s-cka-291",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Kubelet Service Failures on Worker Nodes: Dr Failover",
    scenario: "A platform engineering team is establishing high-availability standards and operational disaster recovery procedures for enterprise Kubernetes clusters. The Kubernetes administrator needs to troubleshoot a Kubernetes worker node that transitioned to `NotReady` status following a host operating system upgrade.",
    question: "Which architectural approach or configuration satisfies these cluster reliability and recovery requirements?",
    options: [
      { id: 'A', text: "Check `kubectl describe node` for the conditions the kubelet last reported." },
      { id: 'B', text: "Check the container runtime with `crictl info` and restart it if it is wedged." },
      { id: 'C', text: "Check `systemctl status kubelet` on the node and read `journalctl -u kubelet -e`." },
      { id: 'D', text: "Check the CNI plugin's DaemonSet pod on that node and restart it if it is failing." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "SSH into the worker node, check `systemctl status kubelet`, and inspect recent journal logs using `journalctl -u kubelet -e`. When a worker node shows `NotReady`, the kubelet daemon has stopped reporting heartbeats to the API server. Logging into the node and examining `systemctl status kubelet` and `journalctl -u kubelet -e` reveals certificate expiration, configuration syntax errors, or container runtime socket disconnects.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-cluster/monitor-node-health/",
    tags: ["Node Maintenance","Node Diagnostics","Dr Failover"]
  },
  {
    id: "k8s-cka-292",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Kubelet Service Failures on Worker Nodes: High Load Scale",
    scenario: "A production Kubernetes cluster experiences massive surges in application traffic and high scheduling demands across large worker node pools. The Kubernetes administrator needs to troubleshoot a Kubernetes worker node that transitioned to `NotReady` status following a host operating system upgrade.",
    question: "Which architectural approach should the administrator select to manage this demand efficiently without cluster instability?",
    options: [
      { id: 'A', text: "Check the container runtime with `crictl info` and restart it if it is wedged." },
      { id: 'B', text: "Check `systemctl status kubelet` on the node and read `journalctl -u kubelet -e`." },
      { id: 'C', text: "Check `kubectl describe node` for the conditions the kubelet last reported." },
      { id: 'D', text: "Check the CNI plugin's DaemonSet pod on that node and restart it if it is failing." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "SSH into the worker node, check `systemctl status kubelet`, and inspect recent journal logs using `journalctl -u kubelet -e`. When a worker node shows `NotReady`, the kubelet daemon has stopped reporting heartbeats to the API server. Logging into the node and examining `systemctl status kubelet` and `journalctl -u kubelet -e` reveals certificate expiration, configuration syntax errors, or container runtime socket disconnects.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-cluster/monitor-node-health/",
    tags: ["Node Maintenance","Node Diagnostics","High Load Scale"]
  },
  {
    id: "k8s-cka-293",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Kubelet Service Failures on Worker Nodes: Security Compliance",
    scenario: "A compliance auditor requires strict isolation of cluster resources, least-privilege administrative access, and secure network traffic policies across all namespaces. The Kubernetes administrator needs to troubleshoot a Kubernetes worker node that transitioned to `NotReady` status following a host operating system upgrade.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls?",
    options: [
      { id: 'A', text: "Check the container runtime with `crictl info` and restart it if it is wedged." },
      { id: 'B', text: "Check `systemctl status kubelet` on the node and read `journalctl -u kubelet -e`." },
      { id: 'C', text: "Check `kubectl describe node` for the conditions the kubelet last reported." },
      { id: 'D', text: "Check the CNI plugin's DaemonSet pod on that node and restart it if it is failing." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "SSH into the worker node, check `systemctl status kubelet`, and inspect recent journal logs using `journalctl -u kubelet -e`. When a worker node shows `NotReady`, the kubelet daemon has stopped reporting heartbeats to the API server. Logging into the node and examining `systemctl status kubelet` and `journalctl -u kubelet -e` reveals certificate expiration, configuration syntax errors, or container runtime socket disconnects.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-cluster/monitor-node-health/",
    tags: ["Node Maintenance","Node Diagnostics","Security Compliance"]
  },
  {
    id: "k8s-cka-294",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Kubelet Service Failures on Worker Nodes: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises virtualized infrastructure and migrating core enterprise workloads into production Kubernetes clusters. The Kubernetes administrator needs to troubleshoot a Kubernetes worker node that transitioned to `NotReady` status following a host operating system upgrade.",
    question: "Which operational pattern or feature enables the engineering team to achieve seamless workload execution with minimal complexity?",
    options: [
      { id: 'A', text: "Check `systemctl status kubelet` on the node and read `journalctl -u kubelet -e`." },
      { id: 'B', text: "Check the container runtime with `crictl info` and restart it if it is wedged." },
      { id: 'C', text: "Check the CNI plugin's DaemonSet pod on that node and restart it if it is failing." },
      { id: 'D', text: "Check `kubectl describe node` for the conditions the kubelet last reported." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "SSH into the worker node, check `systemctl status kubelet`, and inspect recent journal logs using `journalctl -u kubelet -e`. When a worker node shows `NotReady`, the kubelet daemon has stopped reporting heartbeats to the API server. Logging into the node and examining `systemctl status kubelet` and `journalctl -u kubelet -e` reveals certificate expiration, configuration syntax errors, or container runtime socket disconnects.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-cluster/monitor-node-health/",
    tags: ["Node Maintenance","Node Diagnostics","Hybrid Migration"]
  },
  {
    id: "k8s-cka-295",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Kubelet Service Failures on Worker Nodes: Resilience Failure",
    scenario: "A cluster operations team is hardening infrastructure to eliminate single points of failure, streamline node maintenance, and automate self-healing. The Kubernetes administrator needs to troubleshoot a Kubernetes worker node that transitioned to `NotReady` status following a host operating system upgrade.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster stability?",
    options: [
      { id: 'A', text: "Check `systemctl status kubelet` on the node and read `journalctl -u kubelet -e`." },
      { id: 'B', text: "Check the container runtime with `crictl info` and restart it if it is wedged." },
      { id: 'C', text: "Check the CNI plugin's DaemonSet pod on that node and restart it if it is failing." },
      { id: 'D', text: "Check `kubectl describe node` for the conditions the kubelet last reported." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "SSH into the worker node, check `systemctl status kubelet`, and inspect recent journal logs using `journalctl -u kubelet -e`. When a worker node shows `NotReady`, the kubelet daemon has stopped reporting heartbeats to the API server. Logging into the node and examining `systemctl status kubelet` and `journalctl -u kubelet -e` reveals certificate expiration, configuration syntax errors, or container runtime socket disconnects.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-cluster/monitor-node-health/",
    tags: ["Node Maintenance","Node Diagnostics","Resilience Failure"]
  },
  {
    id: "k8s-cka-296",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Worker Node Disk Pressure and Eviction: Dr Failover",
    scenario: "A platform engineering team is establishing high-availability standards and operational disaster recovery procedures for enterprise Kubernetes clusters. The Kubernetes administrator needs to resolve an issue where pods on a worker node are evicted with reason `Evicted` and condition `DiskPressure: True`.",
    question: "Which architectural approach or configuration satisfies these cluster reliability and recovery requirements?",
    options: [
      { id: 'A', text: "Check the node's disk usage, prune unreferenced images with `crictl`, and grow the filesystem." },
      { id: 'B', text: "Raise the pods' memory requests so that the kubelet ranks them all above the eviction threshold." },
      { id: 'C', text: "Raise the kubelet's `evictionHard` thresholds so the node tolerates the fuller disk." },
      { id: 'D', text: "Add an `emptyDir` `sizeLimit` to each pod so no workload can fill the node's disk." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Inspect disk utilization on the node, clean up unreferenced container images via crictl, and increase the node root/data filesystem capacity. The kubelet continuously monitors node filesystem thresholds. When available disk space falls below eviction thresholds (e.g., `imagefs.available &lt; 15%`), the kubelet sets `DiskPressure: True` and evicts pods according to QoS classes to protect node stability.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/",
    tags: ["Node Eviction","Node Pressure","Dr Failover"]
  },
  {
    id: "k8s-cka-297",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Worker Node Disk Pressure and Eviction: High Load Scale",
    scenario: "A production Kubernetes cluster experiences massive surges in application traffic and high scheduling demands across large worker node pools. The Kubernetes administrator needs to resolve an issue where pods on a worker node are evicted with reason `Evicted` and condition `DiskPressure: True`.",
    question: "Which architectural approach should the administrator select to manage this demand efficiently without cluster instability?",
    options: [
      { id: 'A', text: "Check the node's disk usage, prune unreferenced images with `crictl`, and grow the filesystem." },
      { id: 'B', text: "Raise the pods' memory requests so that the kubelet ranks them all above the eviction threshold." },
      { id: 'C', text: "Raise the kubelet's `evictionHard` thresholds so the node tolerates the fuller disk." },
      { id: 'D', text: "Add an `emptyDir` `sizeLimit` to each pod so no workload can fill the node's disk." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Inspect disk utilization on the node, clean up unreferenced container images via crictl, and increase the node root/data filesystem capacity. The kubelet continuously monitors node filesystem thresholds. When available disk space falls below eviction thresholds (e.g., `imagefs.available &lt; 15%`), the kubelet sets `DiskPressure: True` and evicts pods according to QoS classes to protect node stability.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/",
    tags: ["Node Eviction","Node Pressure","High Load Scale"]
  },
  {
    id: "k8s-cka-298",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Worker Node Disk Pressure and Eviction: Security Compliance",
    scenario: "A compliance auditor requires strict isolation of cluster resources, least-privilege administrative access, and secure network traffic policies across all namespaces. The Kubernetes administrator needs to resolve an issue where pods on a worker node are evicted with reason `Evicted` and condition `DiskPressure: True`.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls?",
    options: [
      { id: 'A', text: "Raise the pods' memory requests so that the kubelet ranks them all above the eviction threshold." },
      { id: 'B', text: "Raise the kubelet's `evictionHard` thresholds so the node tolerates the fuller disk." },
      { id: 'C', text: "Check the node's disk usage, prune unreferenced images with `crictl`, and grow the filesystem." },
      { id: 'D', text: "Add an `emptyDir` `sizeLimit` to each pod so no workload can fill the node's disk." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Inspect disk utilization on the node, clean up unreferenced container images via crictl, and increase the node root/data filesystem capacity. The kubelet continuously monitors node filesystem thresholds. When available disk space falls below eviction thresholds (e.g., `imagefs.available &lt; 15%`), the kubelet sets `DiskPressure: True` and evicts pods according to QoS classes to protect node stability.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/",
    tags: ["Node Eviction","Node Pressure","Security Compliance"]
  },
  {
    id: "k8s-cka-299",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Worker Node Disk Pressure and Eviction: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises virtualized infrastructure and migrating core enterprise workloads into production Kubernetes clusters. The Kubernetes administrator needs to resolve an issue where pods on a worker node are evicted with reason `Evicted` and condition `DiskPressure: True`.",
    question: "Which operational pattern or feature enables the engineering team to achieve seamless workload execution with minimal complexity?",
    options: [
      { id: 'A', text: "Raise the kubelet's `evictionHard` thresholds so the node tolerates the fuller disk." },
      { id: 'B', text: "Add an `emptyDir` `sizeLimit` to each pod so no workload can fill the node's disk." },
      { id: 'C', text: "Check the node's disk usage, prune unreferenced images with `crictl`, and grow the filesystem." },
      { id: 'D', text: "Raise the pods' memory requests so that the kubelet ranks them all above the eviction threshold." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Inspect disk utilization on the node, clean up unreferenced container images via crictl, and increase the node root/data filesystem capacity. The kubelet continuously monitors node filesystem thresholds. When available disk space falls below eviction thresholds (e.g., `imagefs.available &lt; 15%`), the kubelet sets `DiskPressure: True` and evicts pods according to QoS classes to protect node stability.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/",
    tags: ["Node Eviction","Node Pressure","Hybrid Migration"]
  },
  {
    id: "k8s-cka-300",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Worker Node Disk Pressure and Eviction: Resilience Failure",
    scenario: "A cluster operations team is hardening infrastructure to eliminate single points of failure, streamline node maintenance, and automate self-healing. The Kubernetes administrator needs to resolve an issue where pods on a worker node are evicted with reason `Evicted` and condition `DiskPressure: True`.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster stability?",
    options: [
      { id: 'A', text: "Raise the pods' memory requests so that the kubelet ranks them all above the eviction threshold." },
      { id: 'B', text: "Add an `emptyDir` `sizeLimit` to each pod so no workload can fill the node's disk." },
      { id: 'C', text: "Raise the kubelet's `evictionHard` thresholds so the node tolerates the fuller disk." },
      { id: 'D', text: "Check the node's disk usage, prune unreferenced images with `crictl`, and grow the filesystem." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Inspect disk utilization on the node, clean up unreferenced container images via crictl, and increase the node root/data filesystem capacity. The kubelet continuously monitors node filesystem thresholds. When available disk space falls below eviction thresholds (e.g., `imagefs.available &lt; 15%`), the kubelet sets `DiskPressure: True` and evicts pods according to QoS classes to protect node stability.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/",
    tags: ["Node Eviction","Node Pressure","Resilience Failure"]
  }
];

export default K8S_CKA_QUESTIONS_13;
