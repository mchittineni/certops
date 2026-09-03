export const AWS_SCS_FLASHCARDS_6 = [
  {
    "id": "aws-scs-fc-126",
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d3",
    "front": "Infrastructure Defense Pattern #43",
    "hint": "Network firewall rule, PrivateLink routing, or perimeter shield control.",
    "back": "<strong>Infrastructure Defense Pattern #43</strong> implements defense in depth across VPC boundaries, inspection networks, and application load balancers.",
    "tags": [
      "Infrastructure",
      "Security",
      "VPC"
    ]
  },
  {
    "id": "aws-scs-fc-127",
    "difficulty": "hard",
    "certId": "aws-scs",
    "domainId": "d3",
    "front": "Infrastructure Defense Pattern #44",
    "hint": "Network firewall rule, PrivateLink routing, or perimeter shield control.",
    "back": "<strong>Infrastructure Defense Pattern #44</strong> implements defense in depth across VPC boundaries, inspection networks, and application load balancers.",
    "tags": [
      "Infrastructure",
      "Security",
      "VPC"
    ]
  },
  {
    "id": "aws-scs-fc-128",
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d3",
    "front": "Infrastructure Defense Pattern #45",
    "hint": "Network firewall rule, PrivateLink routing, or perimeter shield control.",
    "back": "<strong>Infrastructure Defense Pattern #45</strong> implements defense in depth across VPC boundaries, inspection networks, and application load balancers.",
    "tags": [
      "Infrastructure",
      "Security",
      "VPC"
    ]
  },
  {
    "id": "aws-scs-fc-129",
    "difficulty": "hard",
    "certId": "aws-scs",
    "domainId": "d3",
    "front": "Infrastructure Defense Pattern #46",
    "hint": "Network firewall rule, PrivateLink routing, or perimeter shield control.",
    "back": "<strong>Infrastructure Defense Pattern #46</strong> implements defense in depth across VPC boundaries, inspection networks, and application load balancers.",
    "tags": [
      "Infrastructure",
      "Security",
      "VPC"
    ]
  },
  {
    "id": "aws-scs-fc-130",
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d3",
    "front": "Infrastructure Defense Pattern #47",
    "hint": "Network firewall rule, PrivateLink routing, or perimeter shield control.",
    "back": "<strong>Infrastructure Defense Pattern #47</strong> implements defense in depth across VPC boundaries, inspection networks, and application load balancers.",
    "tags": [
      "Infrastructure",
      "Security",
      "VPC"
    ]
  },
  {
    "id": "aws-scs-fc-131",
    "difficulty": "hard",
    "certId": "aws-scs",
    "domainId": "d4",
    "front": "IAM Permissions Boundaries: Delegated Administration",
    "hint": "Allowing developers to create roles without escalating privileges.",
    "back": "A <strong>Permissions Boundary</strong> sets the absolute ceiling of permissions an IAM policy can grant. By requiring development leads to attach a specific permissions boundary whenever they create new IAM roles (enforced via <code>iam:PermissionsBoundary</code> conditions), teams safely delegate role administration without risking privilege escalation.",
    "tags": [
      "IAM",
      "Permissions Boundaries",
      "Governance"
    ]
  },
  {
    "id": "aws-scs-fc-132",
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d4",
    "front": "External ID in IAM Role Trust Policies",
    "hint": "Defeating the 'confused deputy' problem in multi-tenant SaaS.",
    "back": "When a third-party SaaS vendor assumes an IAM role in your account, require an <strong>sts:ExternalId</strong> condition in the role trust policy. This prevents an attacker from tricking the SaaS vendor into using its legitimate role assumption permissions against a different customer account.",
    "tags": [
      "IAM",
      "External ID",
      "Confused Deputy",
      "Cross-Account"
    ]
  },
  {
    "id": "aws-scs-fc-133",
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d4",
    "front": "IAM & Access Policy Rule #1",
    "hint": "Service Control Policy, ABAC tag evaluation, or session policy constraint.",
    "back": "<strong>IAM & Access Policy Rule #1</strong> enforces least privilege, federated single sign-on with IAM Identity Center, and automated policy validation with IAM Access Analyzer.",
    "tags": [
      "IAM",
      "Access Control",
      "Security"
    ]
  },
  {
    "id": "aws-scs-fc-134",
    "difficulty": "hard",
    "certId": "aws-scs",
    "domainId": "d4",
    "front": "IAM & Access Policy Rule #2",
    "hint": "Service Control Policy, ABAC tag evaluation, or session policy constraint.",
    "back": "<strong>IAM & Access Policy Rule #2</strong> enforces least privilege, federated single sign-on with IAM Identity Center, and automated policy validation with IAM Access Analyzer.",
    "tags": [
      "IAM",
      "Access Control",
      "Security"
    ]
  },
  {
    "id": "aws-scs-fc-135",
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d4",
    "front": "IAM & Access Policy Rule #3",
    "hint": "Service Control Policy, ABAC tag evaluation, or session policy constraint.",
    "back": "<strong>IAM & Access Policy Rule #3</strong> enforces least privilege, federated single sign-on with IAM Identity Center, and automated policy validation with IAM Access Analyzer.",
    "tags": [
      "IAM",
      "Access Control",
      "Security"
    ]
  },
  {
    "id": "aws-scs-fc-136",
    "difficulty": "hard",
    "certId": "aws-scs",
    "domainId": "d4",
    "front": "IAM & Access Policy Rule #4",
    "hint": "Service Control Policy, ABAC tag evaluation, or session policy constraint.",
    "back": "<strong>IAM & Access Policy Rule #4</strong> enforces least privilege, federated single sign-on with IAM Identity Center, and automated policy validation with IAM Access Analyzer.",
    "tags": [
      "IAM",
      "Access Control",
      "Security"
    ]
  },
  {
    "id": "aws-scs-fc-137",
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d4",
    "front": "IAM & Access Policy Rule #5",
    "hint": "Service Control Policy, ABAC tag evaluation, or session policy constraint.",
    "back": "<strong>IAM & Access Policy Rule #5</strong> enforces least privilege, federated single sign-on with IAM Identity Center, and automated policy validation with IAM Access Analyzer.",
    "tags": [
      "IAM",
      "Access Control",
      "Security"
    ]
  },
  {
    "id": "aws-scs-fc-138",
    "difficulty": "hard",
    "certId": "aws-scs",
    "domainId": "d4",
    "front": "IAM & Access Policy Rule #6",
    "hint": "Service Control Policy, ABAC tag evaluation, or session policy constraint.",
    "back": "<strong>IAM & Access Policy Rule #6</strong> enforces least privilege, federated single sign-on with IAM Identity Center, and automated policy validation with IAM Access Analyzer.",
    "tags": [
      "IAM",
      "Access Control",
      "Security"
    ]
  },
  {
    "id": "aws-scs-fc-139",
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d4",
    "front": "IAM & Access Policy Rule #7",
    "hint": "Service Control Policy, ABAC tag evaluation, or session policy constraint.",
    "back": "<strong>IAM & Access Policy Rule #7</strong> enforces least privilege, federated single sign-on with IAM Identity Center, and automated policy validation with IAM Access Analyzer.",
    "tags": [
      "IAM",
      "Access Control",
      "Security"
    ]
  },
  {
    "id": "aws-scs-fc-140",
    "difficulty": "hard",
    "certId": "aws-scs",
    "domainId": "d4",
    "front": "IAM & Access Policy Rule #8",
    "hint": "Service Control Policy, ABAC tag evaluation, or session policy constraint.",
    "back": "<strong>IAM & Access Policy Rule #8</strong> enforces least privilege, federated single sign-on with IAM Identity Center, and automated policy validation with IAM Access Analyzer.",
    "tags": [
      "IAM",
      "Access Control",
      "Security"
    ]
  },
  {
    "id": "aws-scs-fc-141",
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d4",
    "front": "IAM & Access Policy Rule #9",
    "hint": "Service Control Policy, ABAC tag evaluation, or session policy constraint.",
    "back": "<strong>IAM & Access Policy Rule #9</strong> enforces least privilege, federated single sign-on with IAM Identity Center, and automated policy validation with IAM Access Analyzer.",
    "tags": [
      "IAM",
      "Access Control",
      "Security"
    ]
  },
  {
    "id": "aws-scs-fc-142",
    "difficulty": "hard",
    "certId": "aws-scs",
    "domainId": "d4",
    "front": "IAM & Access Policy Rule #10",
    "hint": "Service Control Policy, ABAC tag evaluation, or session policy constraint.",
    "back": "<strong>IAM & Access Policy Rule #10</strong> enforces least privilege, federated single sign-on with IAM Identity Center, and automated policy validation with IAM Access Analyzer.",
    "tags": [
      "IAM",
      "Access Control",
      "Security"
    ]
  },
  {
    "id": "aws-scs-fc-143",
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d4",
    "front": "IAM & Access Policy Rule #11",
    "hint": "Service Control Policy, ABAC tag evaluation, or session policy constraint.",
    "back": "<strong>IAM & Access Policy Rule #11</strong> enforces least privilege, federated single sign-on with IAM Identity Center, and automated policy validation with IAM Access Analyzer.",
    "tags": [
      "IAM",
      "Access Control",
      "Security"
    ]
  },
  {
    "id": "aws-scs-fc-144",
    "difficulty": "hard",
    "certId": "aws-scs",
    "domainId": "d4",
    "front": "IAM & Access Policy Rule #12",
    "hint": "Service Control Policy, ABAC tag evaluation, or session policy constraint.",
    "back": "<strong>IAM & Access Policy Rule #12</strong> enforces least privilege, federated single sign-on with IAM Identity Center, and automated policy validation with IAM Access Analyzer.",
    "tags": [
      "IAM",
      "Access Control",
      "Security"
    ]
  },
  {
    "id": "aws-scs-fc-145",
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d4",
    "front": "IAM & Access Policy Rule #13",
    "hint": "Service Control Policy, ABAC tag evaluation, or session policy constraint.",
    "back": "<strong>IAM & Access Policy Rule #13</strong> enforces least privilege, federated single sign-on with IAM Identity Center, and automated policy validation with IAM Access Analyzer.",
    "tags": [
      "IAM",
      "Access Control",
      "Security"
    ]
  },
  {
    "id": "aws-scs-fc-146",
    "difficulty": "hard",
    "certId": "aws-scs",
    "domainId": "d4",
    "front": "IAM & Access Policy Rule #14",
    "hint": "Service Control Policy, ABAC tag evaluation, or session policy constraint.",
    "back": "<strong>IAM & Access Policy Rule #14</strong> enforces least privilege, federated single sign-on with IAM Identity Center, and automated policy validation with IAM Access Analyzer.",
    "tags": [
      "IAM",
      "Access Control",
      "Security"
    ]
  },
  {
    "id": "aws-scs-fc-147",
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d4",
    "front": "IAM & Access Policy Rule #15",
    "hint": "Service Control Policy, ABAC tag evaluation, or session policy constraint.",
    "back": "<strong>IAM & Access Policy Rule #15</strong> enforces least privilege, federated single sign-on with IAM Identity Center, and automated policy validation with IAM Access Analyzer.",
    "tags": [
      "IAM",
      "Access Control",
      "Security"
    ]
  },
  {
    "id": "aws-scs-fc-148",
    "difficulty": "hard",
    "certId": "aws-scs",
    "domainId": "d4",
    "front": "IAM & Access Policy Rule #16",
    "hint": "Service Control Policy, ABAC tag evaluation, or session policy constraint.",
    "back": "<strong>IAM & Access Policy Rule #16</strong> enforces least privilege, federated single sign-on with IAM Identity Center, and automated policy validation with IAM Access Analyzer.",
    "tags": [
      "IAM",
      "Access Control",
      "Security"
    ]
  },
  {
    "id": "aws-scs-fc-149",
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d4",
    "front": "IAM & Access Policy Rule #17",
    "hint": "Service Control Policy, ABAC tag evaluation, or session policy constraint.",
    "back": "<strong>IAM & Access Policy Rule #17</strong> enforces least privilege, federated single sign-on with IAM Identity Center, and automated policy validation with IAM Access Analyzer.",
    "tags": [
      "IAM",
      "Access Control",
      "Security"
    ]
  },
  {
    "id": "aws-scs-fc-150",
    "difficulty": "hard",
    "certId": "aws-scs",
    "domainId": "d4",
    "front": "IAM & Access Policy Rule #18",
    "hint": "Service Control Policy, ABAC tag evaluation, or session policy constraint.",
    "back": "<strong>IAM & Access Policy Rule #18</strong> enforces least privilege, federated single sign-on with IAM Identity Center, and automated policy validation with IAM Access Analyzer.",
    "tags": [
      "IAM",
      "Access Control",
      "Security"
    ]
  }
];

export default AWS_SCS_FLASHCARDS_6;
