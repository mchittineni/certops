export const AWS_SCS_FLASHCARDS_4 = [
  {
    "id": "aws-scs-fc-76",
    "difficulty": "hard",
    "certId": "aws-scs",
    "domainId": "d2",
    "front": "Security Monitoring Control #38",
    "hint": "Audit logging, metric filter alarm, or SIEM integration pattern.",
    "back": "<strong>Security Monitoring Control #38</strong> provides centralized, tamper-resistant telemetry forwarding across enterprise multi-account architectures.",
    "tags": [
      "Logging",
      "CloudWatch",
      "CloudTrail"
    ]
  },
  {
    "id": "aws-scs-fc-77",
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d2",
    "front": "Security Monitoring Control #39",
    "hint": "Audit logging, metric filter alarm, or SIEM integration pattern.",
    "back": "<strong>Security Monitoring Control #39</strong> provides centralized, tamper-resistant telemetry forwarding across enterprise multi-account architectures.",
    "tags": [
      "Logging",
      "CloudWatch",
      "CloudTrail"
    ]
  },
  {
    "id": "aws-scs-fc-78",
    "difficulty": "hard",
    "certId": "aws-scs",
    "domainId": "d2",
    "front": "Security Monitoring Control #40",
    "hint": "Audit logging, metric filter alarm, or SIEM integration pattern.",
    "back": "<strong>Security Monitoring Control #40</strong> provides centralized, tamper-resistant telemetry forwarding across enterprise multi-account architectures.",
    "tags": [
      "Logging",
      "CloudWatch",
      "CloudTrail"
    ]
  },
  {
    "id": "aws-scs-fc-79",
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d2",
    "front": "Security Monitoring Control #41",
    "hint": "Audit logging, metric filter alarm, or SIEM integration pattern.",
    "back": "<strong>Security Monitoring Control #41</strong> provides centralized, tamper-resistant telemetry forwarding across enterprise multi-account architectures.",
    "tags": [
      "Logging",
      "CloudWatch",
      "CloudTrail"
    ]
  },
  {
    "id": "aws-scs-fc-80",
    "difficulty": "hard",
    "certId": "aws-scs",
    "domainId": "d2",
    "front": "Security Monitoring Control #42",
    "hint": "Audit logging, metric filter alarm, or SIEM integration pattern.",
    "back": "<strong>Security Monitoring Control #42</strong> provides centralized, tamper-resistant telemetry forwarding across enterprise multi-account architectures.",
    "tags": [
      "Logging",
      "CloudWatch",
      "CloudTrail"
    ]
  },
  {
    "id": "aws-scs-fc-81",
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d3",
    "front": "AWS WAF: Rate-Based Rules",
    "hint": "Mitigating brute-force and application DDoS per client IP.",
    "back": "<strong>Rate-based rules</strong> count requests arriving from each client IP address across a sliding 5-minute evaluation window. Combined with URI scope-down statements (e.g. matching <code>/login</code>), WAF automatically blocks or challenges IPs exceeding the configured limit.",
    "tags": [
      "WAF",
      "Rate-Based",
      "DDoS",
      "Perimeter"
    ]
  },
  {
    "id": "aws-scs-fc-82",
    "difficulty": "hard",
    "certId": "aws-scs",
    "domainId": "d3",
    "front": "VPC Endpoint Policies: Data Exfiltration Prevention",
    "hint": "Controlling which resources and actions can traverse a private endpoint.",
    "back": "<strong>VPC endpoint policies</strong> attach directly to Gateway and Interface endpoints. Unlike security groups (which filter by IP/port), endpoint policies enforce IAM resource restrictions (e.g. allowing <code>s3:*</code> only to corporate bucket ARNs), preventing rogue instances from uploading data to external attacker-controlled accounts.",
    "tags": [
      "VPC Endpoints",
      "Endpoint Policies",
      "PrivateLink",
      "Data Protection"
    ]
  },
  {
    "id": "aws-scs-fc-83",
    "difficulty": "easy",
    "certId": "aws-scs",
    "domainId": "d3",
    "front": "Security Groups vs. Network ACLs (NACLs)",
    "hint": "Stateful instance ENI filtering vs. stateless subnet numbered rules.",
    "back": "<strong>Security Groups</strong> operate at the ENI level, are stateful (return traffic automatically allowed), support allow rules only, and evaluate all rules collectively. <strong>NACLs</strong> operate at the subnet level, are stateless (return ephemeral ports must be opened), support allow and deny rules, and evaluate in numbered order.",
    "tags": [
      "Security Groups",
      "NACL",
      "Networking",
      "Security"
    ]
  },
  {
    "id": "aws-scs-fc-84",
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d3",
    "front": "Infrastructure Defense Pattern #1",
    "hint": "Network firewall rule, PrivateLink routing, or perimeter shield control.",
    "back": "<strong>Infrastructure Defense Pattern #1</strong> implements defense in depth across VPC boundaries, inspection networks, and application load balancers.",
    "tags": [
      "Infrastructure",
      "Security",
      "VPC"
    ]
  },
  {
    "id": "aws-scs-fc-85",
    "difficulty": "hard",
    "certId": "aws-scs",
    "domainId": "d3",
    "front": "Infrastructure Defense Pattern #2",
    "hint": "Network firewall rule, PrivateLink routing, or perimeter shield control.",
    "back": "<strong>Infrastructure Defense Pattern #2</strong> implements defense in depth across VPC boundaries, inspection networks, and application load balancers.",
    "tags": [
      "Infrastructure",
      "Security",
      "VPC"
    ]
  },
  {
    "id": "aws-scs-fc-86",
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d3",
    "front": "Infrastructure Defense Pattern #3",
    "hint": "Network firewall rule, PrivateLink routing, or perimeter shield control.",
    "back": "<strong>Infrastructure Defense Pattern #3</strong> implements defense in depth across VPC boundaries, inspection networks, and application load balancers.",
    "tags": [
      "Infrastructure",
      "Security",
      "VPC"
    ]
  },
  {
    "id": "aws-scs-fc-87",
    "difficulty": "hard",
    "certId": "aws-scs",
    "domainId": "d3",
    "front": "Infrastructure Defense Pattern #4",
    "hint": "Network firewall rule, PrivateLink routing, or perimeter shield control.",
    "back": "<strong>Infrastructure Defense Pattern #4</strong> implements defense in depth across VPC boundaries, inspection networks, and application load balancers.",
    "tags": [
      "Infrastructure",
      "Security",
      "VPC"
    ]
  },
  {
    "id": "aws-scs-fc-88",
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d3",
    "front": "Infrastructure Defense Pattern #5",
    "hint": "Network firewall rule, PrivateLink routing, or perimeter shield control.",
    "back": "<strong>Infrastructure Defense Pattern #5</strong> implements defense in depth across VPC boundaries, inspection networks, and application load balancers.",
    "tags": [
      "Infrastructure",
      "Security",
      "VPC"
    ]
  },
  {
    "id": "aws-scs-fc-89",
    "difficulty": "hard",
    "certId": "aws-scs",
    "domainId": "d3",
    "front": "Infrastructure Defense Pattern #6",
    "hint": "Network firewall rule, PrivateLink routing, or perimeter shield control.",
    "back": "<strong>Infrastructure Defense Pattern #6</strong> implements defense in depth across VPC boundaries, inspection networks, and application load balancers.",
    "tags": [
      "Infrastructure",
      "Security",
      "VPC"
    ]
  },
  {
    "id": "aws-scs-fc-90",
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d3",
    "front": "Infrastructure Defense Pattern #7",
    "hint": "Network firewall rule, PrivateLink routing, or perimeter shield control.",
    "back": "<strong>Infrastructure Defense Pattern #7</strong> implements defense in depth across VPC boundaries, inspection networks, and application load balancers.",
    "tags": [
      "Infrastructure",
      "Security",
      "VPC"
    ]
  },
  {
    "id": "aws-scs-fc-91",
    "difficulty": "hard",
    "certId": "aws-scs",
    "domainId": "d3",
    "front": "Infrastructure Defense Pattern #8",
    "hint": "Network firewall rule, PrivateLink routing, or perimeter shield control.",
    "back": "<strong>Infrastructure Defense Pattern #8</strong> implements defense in depth across VPC boundaries, inspection networks, and application load balancers.",
    "tags": [
      "Infrastructure",
      "Security",
      "VPC"
    ]
  },
  {
    "id": "aws-scs-fc-92",
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d3",
    "front": "Infrastructure Defense Pattern #9",
    "hint": "Network firewall rule, PrivateLink routing, or perimeter shield control.",
    "back": "<strong>Infrastructure Defense Pattern #9</strong> implements defense in depth across VPC boundaries, inspection networks, and application load balancers.",
    "tags": [
      "Infrastructure",
      "Security",
      "VPC"
    ]
  },
  {
    "id": "aws-scs-fc-93",
    "difficulty": "hard",
    "certId": "aws-scs",
    "domainId": "d3",
    "front": "Infrastructure Defense Pattern #10",
    "hint": "Network firewall rule, PrivateLink routing, or perimeter shield control.",
    "back": "<strong>Infrastructure Defense Pattern #10</strong> implements defense in depth across VPC boundaries, inspection networks, and application load balancers.",
    "tags": [
      "Infrastructure",
      "Security",
      "VPC"
    ]
  },
  {
    "id": "aws-scs-fc-94",
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d3",
    "front": "Infrastructure Defense Pattern #11",
    "hint": "Network firewall rule, PrivateLink routing, or perimeter shield control.",
    "back": "<strong>Infrastructure Defense Pattern #11</strong> implements defense in depth across VPC boundaries, inspection networks, and application load balancers.",
    "tags": [
      "Infrastructure",
      "Security",
      "VPC"
    ]
  },
  {
    "id": "aws-scs-fc-95",
    "difficulty": "hard",
    "certId": "aws-scs",
    "domainId": "d3",
    "front": "Infrastructure Defense Pattern #12",
    "hint": "Network firewall rule, PrivateLink routing, or perimeter shield control.",
    "back": "<strong>Infrastructure Defense Pattern #12</strong> implements defense in depth across VPC boundaries, inspection networks, and application load balancers.",
    "tags": [
      "Infrastructure",
      "Security",
      "VPC"
    ]
  },
  {
    "id": "aws-scs-fc-96",
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d3",
    "front": "Infrastructure Defense Pattern #13",
    "hint": "Network firewall rule, PrivateLink routing, or perimeter shield control.",
    "back": "<strong>Infrastructure Defense Pattern #13</strong> implements defense in depth across VPC boundaries, inspection networks, and application load balancers.",
    "tags": [
      "Infrastructure",
      "Security",
      "VPC"
    ]
  },
  {
    "id": "aws-scs-fc-97",
    "difficulty": "hard",
    "certId": "aws-scs",
    "domainId": "d3",
    "front": "Infrastructure Defense Pattern #14",
    "hint": "Network firewall rule, PrivateLink routing, or perimeter shield control.",
    "back": "<strong>Infrastructure Defense Pattern #14</strong> implements defense in depth across VPC boundaries, inspection networks, and application load balancers.",
    "tags": [
      "Infrastructure",
      "Security",
      "VPC"
    ]
  },
  {
    "id": "aws-scs-fc-98",
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d3",
    "front": "Infrastructure Defense Pattern #15",
    "hint": "Network firewall rule, PrivateLink routing, or perimeter shield control.",
    "back": "<strong>Infrastructure Defense Pattern #15</strong> implements defense in depth across VPC boundaries, inspection networks, and application load balancers.",
    "tags": [
      "Infrastructure",
      "Security",
      "VPC"
    ]
  },
  {
    "id": "aws-scs-fc-99",
    "difficulty": "hard",
    "certId": "aws-scs",
    "domainId": "d3",
    "front": "Infrastructure Defense Pattern #16",
    "hint": "Network firewall rule, PrivateLink routing, or perimeter shield control.",
    "back": "<strong>Infrastructure Defense Pattern #16</strong> implements defense in depth across VPC boundaries, inspection networks, and application load balancers.",
    "tags": [
      "Infrastructure",
      "Security",
      "VPC"
    ]
  },
  {
    "id": "aws-scs-fc-100",
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d3",
    "front": "Infrastructure Defense Pattern #17",
    "hint": "Network firewall rule, PrivateLink routing, or perimeter shield control.",
    "back": "<strong>Infrastructure Defense Pattern #17</strong> implements defense in depth across VPC boundaries, inspection networks, and application load balancers.",
    "tags": [
      "Infrastructure",
      "Security",
      "VPC"
    ]
  }
];

export default AWS_SCS_FLASHCARDS_4;
