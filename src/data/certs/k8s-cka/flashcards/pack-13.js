export const K8S_CKA_FLASHCARDS_13 = [
  {
    id: "k8s-cka-fc-276",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d2",
    front: "CrashLoopBackOff Diagnostics (Dr Failover)",
    hint: "Inspecting previous container logs and exit codes.",
    back: "Diagnosing <strong>CrashLoopBackOff</strong> begins with <code>kubectl logs --previous</code> to read the terminating process logs and <code>kubectl describe pod</code> to inspect the container exit code.",
    tags: ["Pod Diagnostics", "Pod Debugging", "Dr Failover"]
  },
  {
    id: "k8s-cka-fc-277",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    front: "CrashLoopBackOff Diagnostics (High Load Scale)",
    hint: "Inspecting previous container logs and exit codes.",
    back: "Diagnosing <strong>CrashLoopBackOff</strong> begins with <code>kubectl logs --previous</code> to read the terminating process logs and <code>kubectl describe pod</code> to inspect the container exit code.",
    tags: ["Pod Diagnostics", "Pod Debugging", "High Load Scale"]
  },
  {
    id: "k8s-cka-fc-278",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    front: "CrashLoopBackOff Diagnostics (Security Compliance)",
    hint: "Inspecting previous container logs and exit codes.",
    back: "Diagnosing <strong>CrashLoopBackOff</strong> begins with <code>kubectl logs --previous</code> to read the terminating process logs and <code>kubectl describe pod</code> to inspect the container exit code.",
    tags: ["Pod Diagnostics", "Pod Debugging", "Security Compliance"]
  },
  {
    id: "k8s-cka-fc-279",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d2",
    front: "CrashLoopBackOff Diagnostics (Hybrid Migration)",
    hint: "Inspecting previous container logs and exit codes.",
    back: "Diagnosing <strong>CrashLoopBackOff</strong> begins with <code>kubectl logs --previous</code> to read the terminating process logs and <code>kubectl describe pod</code> to inspect the container exit code.",
    tags: ["Pod Diagnostics", "Pod Debugging", "Hybrid Migration"]
  },
  {
    id: "k8s-cka-fc-280",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    front: "CrashLoopBackOff Diagnostics (Resilience Failure)",
    hint: "Inspecting previous container logs and exit codes.",
    back: "Diagnosing <strong>CrashLoopBackOff</strong> begins with <code>kubectl logs --previous</code> to read the terminating process logs and <code>kubectl describe pod</code> to inspect the container exit code.",
    tags: ["Pod Diagnostics", "Pod Debugging", "Resilience Failure"]
  },
  {
    id: "k8s-cka-fc-281",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d2",
    front: "OOMKilled Exit Code 137 (Dr Failover)",
    hint: "Kernel memory termination when containers exceed configured memory limits.",
    back: "An exit code of <strong>137 (OOMKilled)</strong> indicates the container exceeded its specified memory limit, prompting the Linux kernel OOM killer to terminate the process; remediation requires adjusting limits or heap sizing.",
    tags: ["Memory Limits", "Resource Limits", "Dr Failover"]
  },
  {
    id: "k8s-cka-fc-282",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    front: "OOMKilled Exit Code 137 (High Load Scale)",
    hint: "Kernel memory termination when containers exceed configured memory limits.",
    back: "An exit code of <strong>137 (OOMKilled)</strong> indicates the container exceeded its specified memory limit, prompting the Linux kernel OOM killer to terminate the process; remediation requires adjusting limits or heap sizing.",
    tags: ["Memory Limits", "Resource Limits", "High Load Scale"]
  },
  {
    id: "k8s-cka-fc-283",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    front: "OOMKilled Exit Code 137 (Security Compliance)",
    hint: "Kernel memory termination when containers exceed configured memory limits.",
    back: "An exit code of <strong>137 (OOMKilled)</strong> indicates the container exceeded its specified memory limit, prompting the Linux kernel OOM killer to terminate the process; remediation requires adjusting limits or heap sizing.",
    tags: ["Memory Limits", "Resource Limits", "Security Compliance"]
  },
  {
    id: "k8s-cka-fc-284",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d2",
    front: "OOMKilled Exit Code 137 (Hybrid Migration)",
    hint: "Kernel memory termination when containers exceed configured memory limits.",
    back: "An exit code of <strong>137 (OOMKilled)</strong> indicates the container exceeded its specified memory limit, prompting the Linux kernel OOM killer to terminate the process; remediation requires adjusting limits or heap sizing.",
    tags: ["Memory Limits", "Resource Limits", "Hybrid Migration"]
  },
  {
    id: "k8s-cka-fc-285",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    front: "OOMKilled Exit Code 137 (Resilience Failure)",
    hint: "Kernel memory termination when containers exceed configured memory limits.",
    back: "An exit code of <strong>137 (OOMKilled)</strong> indicates the container exceeded its specified memory limit, prompting the Linux kernel OOM killer to terminate the process; remediation requires adjusting limits or heap sizing.",
    tags: ["Memory Limits", "Resource Limits", "Resilience Failure"]
  },
  {
    id: "k8s-cka-fc-286",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d2",
    front: "ImagePullBackOff Resolution (Dr Failover)",
    hint: "Verifying image tags, repository names, and imagePullSecrets.",
    back: "<strong>ImagePullBackOff</strong> indicates failed container image retrieval; resolution involves checking for repository typos, tag accuracy, network reachability, and valid <code>imagePullSecrets</code> authentication.",
    tags: ["Image Pull Errors", "Image Pull", "Dr Failover"]
  },
  {
    id: "k8s-cka-fc-287",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    front: "ImagePullBackOff Resolution (High Load Scale)",
    hint: "Verifying image tags, repository names, and imagePullSecrets.",
    back: "<strong>ImagePullBackOff</strong> indicates failed container image retrieval; resolution involves checking for repository typos, tag accuracy, network reachability, and valid <code>imagePullSecrets</code> authentication.",
    tags: ["Image Pull Errors", "Image Pull", "High Load Scale"]
  },
  {
    id: "k8s-cka-fc-288",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    front: "ImagePullBackOff Resolution (Security Compliance)",
    hint: "Verifying image tags, repository names, and imagePullSecrets.",
    back: "<strong>ImagePullBackOff</strong> indicates failed container image retrieval; resolution involves checking for repository typos, tag accuracy, network reachability, and valid <code>imagePullSecrets</code> authentication.",
    tags: ["Image Pull Errors", "Image Pull", "Security Compliance"]
  },
  {
    id: "k8s-cka-fc-289",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d2",
    front: "ImagePullBackOff Resolution (Hybrid Migration)",
    hint: "Verifying image tags, repository names, and imagePullSecrets.",
    back: "<strong>ImagePullBackOff</strong> indicates failed container image retrieval; resolution involves checking for repository typos, tag accuracy, network reachability, and valid <code>imagePullSecrets</code> authentication.",
    tags: ["Image Pull Errors", "Image Pull", "Hybrid Migration"]
  },
  {
    id: "k8s-cka-fc-290",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    front: "ImagePullBackOff Resolution (Resilience Failure)",
    hint: "Verifying image tags, repository names, and imagePullSecrets.",
    back: "<strong>ImagePullBackOff</strong> indicates failed container image retrieval; resolution involves checking for repository typos, tag accuracy, network reachability, and valid <code>imagePullSecrets</code> authentication.",
    tags: ["Image Pull Errors", "Image Pull", "Resilience Failure"]
  },
  {
    id: "k8s-cka-fc-291",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d2",
    front: "Troubleshooting NotReady Nodes and Kubelet (Dr Failover)",
    hint: "Inspecting systemd service status and journalctl logs.",
    back: "When a worker node is <strong>NotReady</strong>, inspect the local host using <code>systemctl status kubelet</code> and <code>journalctl -u kubelet -e</code> to diagnose runtime errors or certificate misconfigurations.",
    tags: ["Node Maintenance", "Node Diagnostics", "Dr Failover"]
  },
  {
    id: "k8s-cka-fc-292",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    front: "Troubleshooting NotReady Nodes and Kubelet (High Load Scale)",
    hint: "Inspecting systemd service status and journalctl logs.",
    back: "When a worker node is <strong>NotReady</strong>, inspect the local host using <code>systemctl status kubelet</code> and <code>journalctl -u kubelet -e</code> to diagnose runtime errors or certificate misconfigurations.",
    tags: ["Node Maintenance", "Node Diagnostics", "High Load Scale"]
  },
  {
    id: "k8s-cka-fc-293",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    front: "Troubleshooting NotReady Nodes and Kubelet (Security Compliance)",
    hint: "Inspecting systemd service status and journalctl logs.",
    back: "When a worker node is <strong>NotReady</strong>, inspect the local host using <code>systemctl status kubelet</code> and <code>journalctl -u kubelet -e</code> to diagnose runtime errors or certificate misconfigurations.",
    tags: ["Node Maintenance", "Node Diagnostics", "Security Compliance"]
  },
  {
    id: "k8s-cka-fc-294",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d2",
    front: "Troubleshooting NotReady Nodes and Kubelet (Hybrid Migration)",
    hint: "Inspecting systemd service status and journalctl logs.",
    back: "When a worker node is <strong>NotReady</strong>, inspect the local host using <code>systemctl status kubelet</code> and <code>journalctl -u kubelet -e</code> to diagnose runtime errors or certificate misconfigurations.",
    tags: ["Node Maintenance", "Node Diagnostics", "Hybrid Migration"]
  },
  {
    id: "k8s-cka-fc-295",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    front: "Troubleshooting NotReady Nodes and Kubelet (Resilience Failure)",
    hint: "Inspecting systemd service status and journalctl logs.",
    back: "When a worker node is <strong>NotReady</strong>, inspect the local host using <code>systemctl status kubelet</code> and <code>journalctl -u kubelet -e</code> to diagnose runtime errors or certificate misconfigurations.",
    tags: ["Node Maintenance", "Node Diagnostics", "Resilience Failure"]
  },
  {
    id: "k8s-cka-fc-296",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d2",
    front: "DiskPressure Eviction Handling (Dr Failover)",
    hint: "Managing kubelet disk thresholds and container garbage collection.",
    back: "<strong>DiskPressure</strong> triggers automated pod evictions when node storage drops below thresholds; resolving it requires cleaning unused images, pruning log files, or expanding the underlying filesystem.",
    tags: ["Node Eviction", "Node Pressure", "Dr Failover"]
  },
  {
    id: "k8s-cka-fc-297",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    front: "DiskPressure Eviction Handling (High Load Scale)",
    hint: "Managing kubelet disk thresholds and container garbage collection.",
    back: "<strong>DiskPressure</strong> triggers automated pod evictions when node storage drops below thresholds; resolving it requires cleaning unused images, pruning log files, or expanding the underlying filesystem.",
    tags: ["Node Eviction", "Node Pressure", "High Load Scale"]
  },
  {
    id: "k8s-cka-fc-298",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    front: "DiskPressure Eviction Handling (Security Compliance)",
    hint: "Managing kubelet disk thresholds and container garbage collection.",
    back: "<strong>DiskPressure</strong> triggers automated pod evictions when node storage drops below thresholds; resolving it requires cleaning unused images, pruning log files, or expanding the underlying filesystem.",
    tags: ["Node Eviction", "Node Pressure", "Security Compliance"]
  },
  {
    id: "k8s-cka-fc-299",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d2",
    front: "DiskPressure Eviction Handling (Hybrid Migration)",
    hint: "Managing kubelet disk thresholds and container garbage collection.",
    back: "<strong>DiskPressure</strong> triggers automated pod evictions when node storage drops below thresholds; resolving it requires cleaning unused images, pruning log files, or expanding the underlying filesystem.",
    tags: ["Node Eviction", "Node Pressure", "Hybrid Migration"]
  },
  {
    id: "k8s-cka-fc-300",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    front: "DiskPressure Eviction Handling (Resilience Failure)",
    hint: "Managing kubelet disk thresholds and container garbage collection.",
    back: "<strong>DiskPressure</strong> triggers automated pod evictions when node storage drops below thresholds; resolving it requires cleaning unused images, pruning log files, or expanding the underlying filesystem.",
    tags: ["Node Eviction", "Node Pressure", "Resilience Failure"]
  }
];

export default K8S_CKA_FLASHCARDS_13;
