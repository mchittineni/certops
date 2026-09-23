export const LINUX_LFCS_QUESTIONS_1 = [
  {
    id: "linux-lfcs-1",
    difficulty: "easy",
    certId: "linux-lfcs",
    domainId: "d1",
    domainName: "Essential Commands",
    title: "Filtering and Transforming Text Streams with awk",
    scenario: "A Linux system administrator needs to extract the username and login shell (fields 1 and 7) from the colon-delimited /etc/passwd file for all users whose login shell is /bin/bash.",
    question: "Which command correctly produces this output?",
    options: [
      { id: 'A', text: "awk -F: '$7 == \"/bin/bash\" {print $1, $7}' /etc/passwd" },
      { id: 'B', text: "grep \"/bin/bash\" /etc/passwd | cut -d: -f2,6" },
      { id: 'C', text: "sed -n 's/:/ /g; /bash/p' /etc/passwd" },
      { id: 'D', text: "tr ':' ' ' < /etc/passwd | awk '{print $1, $6}'" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "awk with the -F: flag sets the field separator to a colon. The pattern '$7 == \"/bin/bash\"' specifically checks the seventh field (the shell), and '{print $1, $7}' outputs the username and shell separated by the output field separator. A simple grep could match usernames or comments containing 'bash' erroneously.",
    referenceUrl: "https://www.gnu.org/software/gawk/manual/gawk.html",
    tags: ["awk", "Text Processing", "CLI"]
  },
  {
    id: "linux-lfcs-2",
    difficulty: "medium",
    certId: "linux-lfcs",
    domainId: "d2",
    domainName: "Operation of Running Systems",
    title: "Inspecting System Logs with journalctl",
    scenario: "A newly deployed systemd service named payment-gateway.service is failing intermittently. An SRE needs to inspect all log output from this specific unit produced during the current boot cycle with priority warning or higher.",
    question: "Which journalctl command fulfills these filtering criteria?",
    options: [
      { id: 'A', text: "journalctl -u payment-gateway.service -b -p warning" },
      { id: 'B', text: "journalctl --follow --system payment-gateway.service" },
      { id: 'C', text: "tail -f /var/log/messages | grep payment-gateway" },
      { id: 'D', text: "systemctl status payment-gateway.service -l --lines=1000" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "journalctl flags: -u scopes to a specific systemd unit (payment-gateway.service), -b filters logs produced during the current boot session only, and -p warning filters log levels to warning (priority 4) and more severe messages (err, crit, alert, emerg).",
    referenceUrl: "https://www.freedesktop.org/software/systemd/man/journalctl.html",
    tags: ["systemd", "journalctl", "Operations"]
  },
  {
    id: "linux-lfcs-3",
    difficulty: "medium",
    certId: "linux-lfcs",
    domainId: "d3",
    domainName: "User and Group Management",
    title: "Securing Password Expiration Policies with chage",
    scenario: "A corporate compliance policy requires that contractor accounts have their password expire every 60 days, with a warning issued 7 days before expiration, and account deactivation 14 days after password expiry.",
    question: "Which command configures this aging policy for user contractor1?",
    options: [
      { id: 'A', text: "chage -M 60 -W 7 -I 14 contractor1" },
      { id: 'B', text: "usermod -e 60 -f 7 contractor1" },
      { id: 'C', text: "passwd -x 60 -w 7 -n 14 contractor1" },
      { id: 'D', text: "chage -d 60 -m 7 -E 14 contractor1" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "chage manages password expiration. -M sets the maximum number of days a password is valid (60), -W sets the warning days before password expiry (7), and -I sets the inactivity period (number of days of inactivity after a password has expired before the account is locked, 14).",
    referenceUrl: "https://man7.org/linux/man-pages/man1/chage.1.html",
    tags: ["chage", "User Security", "PAM"]
  },
  {
    id: "linux-lfcs-4",
    difficulty: "medium",
    certId: "linux-lfcs",
    domainId: "d4",
    domainName: "Networking",
    title: "Configuring Network Interfaces with nmcli",
    scenario: "An administrator needs to assign a static IPv4 address of 192.168.10.50/24 with default gateway 192.168.10.1 and DNS 8.8.8.8 to connection eth0 using NetworkManager CLI.",
    question: "Which sequence of nmcli commands configures and applies these settings?",
    options: [
      { id: 'A', text: "nmcli con mod eth0 ipv4.addresses 192.168.10.50/24 ipv4.gateway 192.168.10.1 ipv4.dns 8.8.8.8 ipv4.method manual && nmcli con up eth0" },
      { id: 'B', text: "ifconfig eth0 192.168.10.50 netmask 255.255.255.0 up" },
      { id: 'C', text: "ip addr add 192.168.10.50/24 dev eth0 && route add default gw 192.168.10.1" },
      { id: 'D', text: "nmcli dev connect eth0 --address 192.168.10.50/24 --gateway 192.168.10.1" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In modern enterprise Linux distributions (RHEL, Debian, Ubuntu), NetworkManager manages network configuration files. Using 'nmcli connection modify eth0' with 'ipv4.method manual' writes persistent configuration, and 'nmcli connection up eth0' reloads and applies the state to the active interface.",
    referenceUrl: "https://networkmanager.dev/docs/api/latest/nmcli.html",
    tags: ["nmcli", "Networking", "NetworkManager"]
  },
  {
    id: "linux-lfcs-5",
    difficulty: "hard",
    certId: "linux-lfcs",
    domainId: "d5",
    domainName: "Service Configuration",
    title: "Configuring systemd Service Overrides",
    scenario: "An engineer needs to adjust the maximum number of open files (LimitNOFILE) for a packaged service nginx.service without modifying the upstream package file in /usr/lib/systemd/system/.",
    question: "What is the standard, upgrade-safe method to customize systemd service unit parameters?",
    options: [
      { id: 'A', text: "Run systemctl edit nginx.service to create a drop-in file in /etc/systemd/system/nginx.service.d/override.conf" },
      { id: 'B', text: "Directly edit /usr/lib/systemd/system/nginx.service and reload" },
      { id: 'C', text: "Add ulimit -n 65535 to /etc/profile.d/nginx.sh" },
      { id: 'D', text: "Modify /etc/security/limits.conf with wildcard domain directives" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Running 'systemctl edit service-name' creates a drop-in override configuration directory in /etc/systemd/system/service-name.d/override.conf. Systemd automatically merges this snippet with the package-installed unit in /usr/lib/systemd/system/, ensuring updates to the RPM or DEB package will not overwrite custom operational parameters.",
    referenceUrl: "https://www.freedesktop.org/software/systemd/man/systemd.unit.html",
    tags: ["systemd", "Service Overrides", "Configuration"]
  },
  {
    id: "linux-lfcs-6",
    difficulty: "hard",
    certId: "linux-lfcs",
    domainId: "d6",
    domainName: "Storage Management",
    title: "Expanding LVM Logical Volumes and Filesystems Online",
    scenario: "A database partition mounted on /var/lib/mysql is running low on disk space. The volume resides on a Logical Volume named lv_mysql in Volume Group vg_data, which has 50 GB of unallocated free extents. The filesystem is ext4.",
    question: "Which command expands the logical volume by 30 GB and resizes the ext4 filesystem in a single online operation?",
    options: [
      { id: 'A', text: "lvextend -r -L +30G /dev/vg_data/lv_mysql" },
      { id: 'B', text: "resize2fs /dev/vg_data/lv_mysql +30G" },
      { id: 'C', text: "lvresize -L 30G /dev/vg_data/lv_mysql && mkfs.ext4 /dev/vg_data/lv_mysql" },
      { id: 'D', text: "vgextend vg_data /dev/sdb1 && xfs_growfs /var/lib/mysql" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The 'lvextend' command with the '-r' (--resizefs) flag expands both the underlying LVM logical volume and resizes the resident filesystem (calling resize2fs for ext4 or xfs_growfs for XFS) in one atomic command while the filesystem remains mounted and actively serving I/O.",
    referenceUrl: "https://man7.org/linux/man-pages/man8/lvextend.8.html",
    tags: ["LVM", "Storage", "Filesystems"]
  }
];

export default LINUX_LFCS_QUESTIONS_1;
