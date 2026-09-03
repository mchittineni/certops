export const K8S_CKS_FLASHCARDS_2 = [
  {
    "id": "k8s-cks-fc-26",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d1",
    "front": "Localhost Binding: Why should kube-controller-manager and kube-scheduler bind to 127.0.0.1?",
    "hint": "Prevent unauthorized network probing of control plane helper metrics.",
    "back": "Setting <strong>--bind-address=127.0.0.1</strong> ensures non-public helper components do not expose metrics or health endpoints across the wider internal network.",
    "tags": [
      "CKS",
      "Cluster"
    ]
  },
  {
    "id": "k8s-cks-fc-27",
    "difficulty": "hard",
    "certId": "k8s-cks",
    "domainId": "d1",
    "front": "Egress Restriction: How can a pod be permitted to access external HTTPS while blocking private LAN IPs?",
    "hint": "Combine 0.0.0.0/0 with RFC 1918 except blocks on port 443.",
    "back": "Define an egress rule on port <strong>443</strong> with <code>ipBlock: { cidr: '0.0.0.0/0', except: ['10.0.0.0/8', '172.16.0.0/12', '192.168.0.0/16'] }</code>.",
    "tags": [
      "CKS",
      "Cluster"
    ]
  },
  {
    "id": "k8s-cks-fc-28",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d1",
    "front": "RBAC Bypass via Exec: How does pod exec privilege allow users to read secrets they cannot query via RBAC?",
    "hint": "Mounting secrets into pods and executing interactive shells.",
    "back": "If a user can create pods and execute commands (<code>pods/exec</code>), they can mount secrets into a pod and print them, bypassing <code>get secrets</code> RBAC restrictions. Restrict <code>pods/exec</code> to mitigate this.",
    "tags": [
      "CKS",
      "Cluster"
    ]
  },
  {
    "id": "k8s-cks-fc-29",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d1",
    "front": "Kubelet config.yaml Permissions: What ownership and mode must /var/lib/kubelet/config.yaml have?",
    "hint": "Think root ownership and 0600 or 0644 mode.",
    "back": "It must be owned by <strong>root:root</strong> with permissions set to <strong>0600</strong> (or <strong>0644</strong>). This prevents unprivileged host users from altering worker node security parameters.",
    "tags": [
      "CKS",
      "Cluster"
    ]
  },
  {
    "id": "k8s-cks-fc-30",
    "difficulty": "easy",
    "certId": "k8s-cks",
    "domainId": "d1",
    "front": "Kubelet Anonymous Access: What setting disables anonymous requests on kubelet port 10250?",
    "hint": "Recall the authentication anonymous block in config.yaml.",
    "back": "Set <strong>authentication.anonymous.enabled: false</strong> in <code>/var/lib/kubelet/config.yaml</code>. Unauthenticated requests will be rejected with <code>401 Unauthorized</code>.",
    "tags": [
      "CKS",
      "Cluster"
    ]
  },
  {
    "id": "k8s-cks-fc-31",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d1",
    "front": "Control Plane Profiling: Why does CIS recommend setting --profiling=false on control plane components?",
    "hint": "Prevents memory exposure and DoS via pprof handlers.",
    "back": "Setting <strong>--profiling=false</strong> disables <code>/debug/pprof/</code> endpoints, preventing attackers from triggering intensive memory dumps or exposing sensitive internal memory layouts.",
    "tags": [
      "CKS",
      "Cluster"
    ]
  },
  {
    "id": "k8s-cks-fc-32",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d1",
    "front": "NodeRestriction Admission Plugin: Can a compromised node delete pods running on other nodes?",
    "hint": "Recall how NodeRestriction enforces node identity.",
    "back": "<strong>No.</strong> <code>NodeRestriction</code> verifies the kubelet credential and blocks any attempt to modify or delete pods whose <code>spec.nodeName</code> does not match the calling node.",
    "tags": [
      "CKS",
      "Cluster"
    ]
  },
  {
    "id": "k8s-cks-fc-33",
    "difficulty": "hard",
    "certId": "k8s-cks",
    "domainId": "d1",
    "front": "etcd Peer Authentication: What port does etcd use for peer communication and how is it secured?",
    "hint": "Port 2380 with peer mTLS.",
    "back": "etcd peers communicate on <strong>port 2380</strong>. It is secured using <strong>--peer-client-cert-auth=true</strong> along with peer certificate, key, and trusted CA files.",
    "tags": [
      "CKS",
      "Cluster"
    ]
  },
  {
    "id": "k8s-cks-fc-34",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d1",
    "front": "Default ServiceAccount Hardening: What is the primary recommendation for the default ServiceAccount in tenant namespaces?",
    "hint": "Disable token auto-mounting.",
    "back": "Patch the default ServiceAccount with <strong>automountServiceAccountToken: false</strong>. This prevents default token injection into pods that do not declare a dedicated ServiceAccount.",
    "tags": [
      "CKS",
      "Cluster"
    ]
  },
  {
    "id": "k8s-cks-fc-35",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d1",
    "front": "Kubelet Authorization Mode: What is the difference between AlwaysAllow and Webhook on the kubelet?",
    "hint": "Webhook checks RBAC via API server; AlwaysAllow skips authorization.",
    "back": "<code>AlwaysAllow</code> permits any authenticated client to perform any kubelet action. <strong>authorization.mode: Webhook</strong> delegates authorization to the API server via <code>SubjectAccessReview</code>, enforcing RBAC.",
    "tags": [
      "CKS",
      "Cluster"
    ]
  },
  {
    "id": "k8s-cks-fc-36",
    "difficulty": "easy",
    "certId": "k8s-cks",
    "domainId": "d1",
    "front": "Targeted Namespace Egress: How do you allow pod traffic to only one specific service in another namespace?",
    "hint": "Combine namespaceSelector, podSelector, and ports.",
    "back": "In the egress rule, specify both <strong>namespaceSelector</strong> (matching target namespace) and <strong>podSelector</strong> (matching target service pods) with the exact destination <strong>port</strong>.",
    "tags": [
      "CKS",
      "Cluster"
    ]
  },
  {
    "id": "k8s-cks-fc-37",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d1",
    "front": "Proxy Kubeconfig Permissions: What ownership and mode must /etc/kubernetes/proxy.conf have?",
    "hint": "Root ownership and 0600 or 0644 mode.",
    "back": "Ownership must be <strong>root:root</strong> with permissions set to <strong>0600</strong> (or <strong>0644</strong>). This protects the kube-proxy client credentials on worker nodes.",
    "tags": [
      "CKS",
      "Cluster"
    ]
  },
  {
    "id": "k8s-cks-fc-38",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d1",
    "front": "system:authenticated Risk: Why is binding roles to the system:authenticated group dangerous?",
    "hint": "It includes all service accounts and nodes across the cluster.",
    "back": "<code>system:authenticated</code> includes <strong>every authenticated entity</strong>\u2014every node, human user, and internal application ServiceAccount. Binding permissions to it destroys least-privilege boundaries.",
    "tags": [
      "CKS",
      "Cluster"
    ]
  },
  {
    "id": "k8s-cks-fc-39",
    "difficulty": "hard",
    "certId": "k8s-cks",
    "domainId": "d2",
    "front": "AppArmor Profile Enforcement: How do you load an AppArmor profile onto worker nodes and apply it to a pod?",
    "hint": "Load on the host via parser, reference via securityContext.",
    "back": "Load the profile on <strong>every worker node</strong> using <code>apparmor_parser -q /path/to/profile</code>. In the Pod specification, set <strong>securityContext.appArmorProfile.type: Localhost</strong> and specify <strong>localhostProfile: &lt;profile-name&gt;</strong>.",
    "tags": [
      "CKS",
      "System"
    ]
  },
  {
    "id": "k8s-cks-fc-40",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d2",
    "front": "Seccomp RuntimeDefault: What does setting seccompProfile.type to RuntimeDefault accomplish?",
    "hint": "Applies container runtime's built-in syscall whitelist.",
    "back": "It instructs containerd/CRI-O to apply its <strong>built-in hardened seccomp filter</strong>, which blocks dozens of dangerous and rarely used Linux system calls (e.g., <code>ptrace</code>, <code>reboot</code>) without requiring custom JSON files.",
    "tags": [
      "CKS",
      "System"
    ]
  },
  {
    "id": "k8s-cks-fc-41",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d2",
    "front": "Custom Seccomp Storage: Where must custom seccomp JSON files be placed on worker nodes?",
    "hint": "Kubelet's root seccomp directory path.",
    "back": "Under <strong>/var/lib/kubelet/seccomp/</strong>. When a pod specifies <code>type: Localhost</code> and <code>localhostProfile: profile.json</code>, kubelet resolves the file relative to that directory.",
    "tags": [
      "CKS",
      "System"
    ]
  },
  {
    "id": "k8s-cks-fc-42",
    "difficulty": "easy",
    "certId": "k8s-cks",
    "domainId": "d2",
    "front": "gVisor RuntimeClass: How is gVisor registered and applied to a pod for kernel sandboxing?",
    "hint": "Define a RuntimeClass with runsc handler and reference it in the pod.",
    "back": "Install <code>runsc</code>, create a <strong>RuntimeClass</strong> with <code>handler: runsc</code>, and specify <strong>runtimeClassName: gvisor</strong> in the pod's <code>spec</code>. This routes system calls through gVisor's user-space kernel sandbox.",
    "tags": [
      "CKS",
      "System"
    ]
  },
  {
    "id": "k8s-cks-fc-43",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d2",
    "front": "Linux Capabilities Best Practice: What is the recommended approach for configuring container capabilities?",
    "hint": "Drop everything first, add only what is strictly necessary.",
    "back": "Drop all default capabilities using <strong>drop: ['ALL']</strong> and selectively add only the exact required capability (e.g., <strong>add: ['NET_BIND_SERVICE']</strong>) under <code>securityContext.capabilities</code>.",
    "tags": [
      "CKS",
      "System"
    ]
  },
  {
    "id": "k8s-cks-fc-44",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d2",
    "front": "Preventing Privilege Escalation: What does allowPrivilegeEscalation: false do in Linux terms?",
    "hint": "Sets the no_new_privs kernel process flag.",
    "back": "It sets the Linux <strong>PR_SET_NO_NEW_PRIVS</strong> flag. This ensures that the process and its children cannot gain new privileges through setuid/setgid binaries or file capabilities.",
    "tags": [
      "CKS",
      "System"
    ]
  },
  {
    "id": "k8s-cks-fc-45",
    "difficulty": "hard",
    "certId": "k8s-cks",
    "domainId": "d2",
    "front": "readOnlyRootFilesystem: How do you support applications requiring temporary write space with a read-only root?",
    "hint": "Combine read-only root with emptyDir mounts.",
    "back": "Set <strong>securityContext.readOnlyRootFilesystem: true</strong> and mount an <strong>emptyDir</strong> volume to specific writable paths (such as <code>/tmp</code> or <code>/var/log</code>).",
    "tags": [
      "CKS",
      "System"
    ]
  },
  {
    "id": "k8s-cks-fc-46",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d2",
    "front": "Host Service Minimization: How do you permanently disable and stop an unnecessary service on Ubuntu?",
    "hint": "systemctl stop and disable/mask commands.",
    "back": "Run <strong>systemctl disable --now &lt;service&gt;</strong> (or <strong>systemctl mask &lt;service&gt;</strong>) to stop the running daemon and prevent it from ever starting upon reboot.",
    "tags": [
      "CKS",
      "System"
    ]
  },
  {
    "id": "k8s-cks-fc-47",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d2",
    "front": "Identifying Listening Sockets: What command lists all listening TCP/UDP sockets with process names?",
    "hint": "Think ss with numeric and process flags.",
    "back": "Run <strong>ss -tulpn</strong>. This displays all listening (<code>-l</code>) TCP (<code>-t</code>) and UDP (<code>-u</code>) ports with numeric addresses (<code>-n</code>) and associated process IDs and names (<code>-p</code>).",
    "tags": [
      "CKS",
      "System"
    ]
  },
  {
    "id": "k8s-cks-fc-48",
    "difficulty": "easy",
    "certId": "k8s-cks",
    "domainId": "d2",
    "front": "Unsafe Sysctls: How do you enable an unsafe sysctl like net.core.somaxconn on a pod?",
    "hint": "Requires both kubelet flag and pod securityContext entry.",
    "back": "1. Whitelist the sysctl on the kubelet using <strong>--allowed-unsafe-sysctls=net.core.somaxconn</strong>.<br>2. Declare it in the pod under <strong>securityContext.sysctls</strong>.",
    "tags": [
      "CKS",
      "System"
    ]
  },
  {
    "id": "k8s-cks-fc-49",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d2",
    "front": "crictl Debugging: When kubectl is unavailable, what tool inspects containers directly on a worker node?",
    "hint": "Container Runtime Interface command-line tool.",
    "back": "Use <strong>crictl</strong> (e.g., <code>crictl ps</code>, <code>crictl logs &lt;id&gt;</code>, <code>crictl inspect &lt;id&gt;</code>) to interact directly with containerd or CRI-O.",
    "tags": [
      "CKS",
      "System"
    ]
  },
  {
    "id": "k8s-cks-fc-50",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d2",
    "front": "Kernel Hardening via sysctl: What does kernel.dmesg_restrict = 1 prevent?",
    "hint": "Restricts dmesg buffer access to privileged users.",
    "back": "It prevents unprivileged users from reading the kernel log buffer via <code>dmesg</code>, protecting sensitive kernel memory addresses and debugging telemetry from attackers.",
    "tags": [
      "CKS",
      "System"
    ]
  }
];

export default K8S_CKS_FLASHCARDS_2;
