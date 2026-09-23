export const LINUX_LFCS_FLASHCARDS_1 = [
  {
    id: 'linux-lfcs-fc-1',
    difficulty: 'easy',
    certId: 'linux-lfcs',
    domainId: 'd1',
    front: 'What is the difference between hard links and symbolic (soft) links in Linux?',
    hint: 'Inode sharing vs path reference.',
    back: 'A <strong>Hard Link</strong> points directly to the file inode; it shares the same inode number and permissions and remains valid if the original filename is deleted (cannot span filesystems). A <strong>Symbolic Link</strong> is a separate file whose content is a path string referencing another target.',
    tags: ['Links', 'Inodes', 'Filesystems']
  },
  {
    id: 'linux-lfcs-fc-2',
    difficulty: 'medium',
    certId: 'linux-lfcs',
    domainId: 'd2',
    front: 'What command reloads systemd manager configuration without restarting active services?',
    hint: 'systemctl daemon-reload.',
    back: '<code>systemctl daemon-reload</code> scans all unit directories (<code>/etc/systemd/system</code> and <code>/usr/lib/systemd/system</code>), reloads unit files and drop-in overrides into memory, and regenerates dependency trees without interrupting running services.',
    tags: ['systemd', 'Operations']
  },
  {
    id: 'linux-lfcs-fc-3',
    difficulty: 'medium',
    certId: 'linux-lfcs',
    domainId: 'd3',
    front: 'What file controls default permissions applied to newly created user files and directories?',
    hint: 'umask.',
    back: 'The <strong>umask</strong> (user file-creation mode mask). Standard base permissions are <code>666</code> for regular files and <code>777</code> for directories. A umask of <code>027</code> results in file permissions <code>640</code> (<code>rw-r-----</code>) and directory permissions <code>750</code> (<code>rwxr-x---</code>).',
    tags: ['umask', 'Permissions', 'User Management']
  },
  {
    id: 'linux-lfcs-fc-4',
    difficulty: 'medium',
    certId: 'linux-lfcs',
    domainId: 'd4',
    front: 'What command replaces netstat for inspecting listening sockets and active connections?',
    hint: 'ss command.',
    back: '<code>ss</code> (socket statistics) from <code>iproute2</code> replaces the deprecated <code>netstat</code>. Commonly: <code>ss -tulnp</code> displays TCP (<code>-t</code>), UDP (<code>-u</code>), listening sockets (<code>-l</code>), numeric ports (<code>-n</code>), and corresponding process names (<code>-p</code>).',
    tags: ['ss', 'Networking', 'iproute2']
  },
  {
    id: 'linux-lfcs-fc-5',
    difficulty: 'hard',
    certId: 'linux-lfcs',
    domainId: 'd5',
    front: 'What are the three components of Logical Volume Management (LVM)?',
    hint: 'PV, VG, LV.',
    back: '<strong>Physical Volumes (PV)</strong>: raw block devices initialized for LVM; <strong>Volume Groups (VG)</strong>: storage pools aggregating physical extents from one or more PVs; <strong>Logical Volumes (LV)</strong>: block devices allocated from a VG where filesystems are created.',
    tags: ['LVM', 'Storage', 'Volume Management']
  },
  {
    id: 'linux-lfcs-fc-6',
    difficulty: 'hard',
    certId: 'linux-lfcs',
    domainId: 'd6',
    front: 'Why cannot an XFS filesystem be shrunk after creation?',
    hint: 'One-way expansion architecture.',
    back: 'The <strong>XFS</strong> filesystem architecture only supports online expansion (using <code>xfs_growfs</code>); it does not support shrinking. In contrast, <strong>ext4</strong> filesystems support both offline shrinking (using <code>resize2fs</code>) and online expansion.',
    tags: ['Filesystems', 'XFS', 'ext4', 'Storage']
  }
];

export default LINUX_LFCS_FLASHCARDS_1;
