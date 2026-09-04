export const AWS_SCS_FLASHCARDS_18 = [
  {
    id: "aws-scs-fc-426",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d5",
    front: "Separation of Duties in AWS KMS Key Policies (Enterprise Governance)",
    hint: "Isolating key administrative permissions from cryptographic decryption operations using key policies.",
    back: "KMS key policies enforce <strong>separation of duties</strong> by separating <strong>key administration (PutKeyPolicy) from cryptographic use (Decrypt)</strong>, restricting operations via kms:ViaService.",
    tags: ["KMS Key Policies", "KMS Separation of Duties", "Enterprise Governance"]
  },
  {
    id: "aws-scs-fc-427",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d5",
    front: "Separation of Duties in AWS KMS Key Policies (Incident Containment)",
    hint: "Isolating key administrative permissions from cryptographic decryption operations using key policies.",
    back: "KMS key policies enforce <strong>separation of duties</strong> by separating <strong>key administration (PutKeyPolicy) from cryptographic use (Decrypt)</strong>, restricting operations via kms:ViaService.",
    tags: ["KMS Key Policies", "KMS Separation of Duties", "Incident Containment"]
  },
  {
    id: "aws-scs-fc-428",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d5",
    front: "Separation of Duties in AWS KMS Key Policies (Zero Trust Iam)",
    hint: "Isolating key administrative permissions from cryptographic decryption operations using key policies.",
    back: "KMS key policies enforce <strong>separation of duties</strong> by separating <strong>key administration (PutKeyPolicy) from cryptographic use (Decrypt)</strong>, restricting operations via kms:ViaService.",
    tags: ["KMS Key Policies", "KMS Separation of Duties", "Zero Trust Iam"]
  },
  {
    id: "aws-scs-fc-429",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d5",
    front: "Separation of Duties in AWS KMS Key Policies (Data Protection)",
    hint: "Isolating key administrative permissions from cryptographic decryption operations using key policies.",
    back: "KMS key policies enforce <strong>separation of duties</strong> by separating <strong>key administration (PutKeyPolicy) from cryptographic use (Decrypt)</strong>, restricting operations via kms:ViaService.",
    tags: ["KMS Key Policies", "KMS Separation of Duties", "Data Protection"]
  },
  {
    id: "aws-scs-fc-430",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d5",
    front: "Separation of Duties in AWS KMS Key Policies (Infrastructure Defense)",
    hint: "Isolating key administrative permissions from cryptographic decryption operations using key policies.",
    back: "KMS key policies enforce <strong>separation of duties</strong> by separating <strong>key administration (PutKeyPolicy) from cryptographic use (Decrypt)</strong>, restricting operations via kms:ViaService.",
    tags: ["KMS Key Policies", "KMS Separation of Duties", "Infrastructure Defense"]
  },
  {
    id: "aws-scs-fc-431",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d5",
    front: "Envelope Encryption and GenerateDataKey (Enterprise Governance)",
    hint: "Encrypting large payloads locally using ephemeral data keys protected by root KMS keys.",
    back: "<strong>Envelope encryption</strong> encrypts large payloads locally using a <strong>plaintext data key from GenerateDataKey</strong>, storing only the encrypted data key alongside the ciphertext.",
    tags: ["Envelope Encryption", "Envelope Encryption", "Enterprise Governance"]
  },
  {
    id: "aws-scs-fc-432",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d5",
    front: "Envelope Encryption and GenerateDataKey (Incident Containment)",
    hint: "Encrypting large payloads locally using ephemeral data keys protected by root KMS keys.",
    back: "<strong>Envelope encryption</strong> encrypts large payloads locally using a <strong>plaintext data key from GenerateDataKey</strong>, storing only the encrypted data key alongside the ciphertext.",
    tags: ["Envelope Encryption", "Envelope Encryption", "Incident Containment"]
  },
  {
    id: "aws-scs-fc-433",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d5",
    front: "Envelope Encryption and GenerateDataKey (Zero Trust Iam)",
    hint: "Encrypting large payloads locally using ephemeral data keys protected by root KMS keys.",
    back: "<strong>Envelope encryption</strong> encrypts large payloads locally using a <strong>plaintext data key from GenerateDataKey</strong>, storing only the encrypted data key alongside the ciphertext.",
    tags: ["Envelope Encryption", "Envelope Encryption", "Zero Trust Iam"]
  },
  {
    id: "aws-scs-fc-434",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d5",
    front: "Envelope Encryption and GenerateDataKey (Data Protection)",
    hint: "Encrypting large payloads locally using ephemeral data keys protected by root KMS keys.",
    back: "<strong>Envelope encryption</strong> encrypts large payloads locally using a <strong>plaintext data key from GenerateDataKey</strong>, storing only the encrypted data key alongside the ciphertext.",
    tags: ["Envelope Encryption", "Envelope Encryption", "Data Protection"]
  },
  {
    id: "aws-scs-fc-435",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d5",
    front: "Envelope Encryption and GenerateDataKey (Infrastructure Defense)",
    hint: "Encrypting large payloads locally using ephemeral data keys protected by root KMS keys.",
    back: "<strong>Envelope encryption</strong> encrypts large payloads locally using a <strong>plaintext data key from GenerateDataKey</strong>, storing only the encrypted data key alongside the ciphertext.",
    tags: ["Envelope Encryption", "Envelope Encryption", "Infrastructure Defense"]
  },
  {
    id: "aws-scs-fc-436",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d5",
    front: "Zero-Downtime Secret Rotation (Multi-User Strategy) (Enterprise Governance)",
    hint: "Automating database password rotation via Lambda using alternating user credentials without application downtime.",
    back: "AWS Secrets Manager <strong>multi-user rotation strategy</strong> uses AWS Lambda to update alternating database credentials, enabling <strong>zero-downtime automated password rotation</strong>.",
    tags: ["Secrets Manager Rotation", "Secrets Manager Rotation", "Enterprise Governance"]
  },
  {
    id: "aws-scs-fc-437",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d5",
    front: "Zero-Downtime Secret Rotation (Multi-User Strategy) (Incident Containment)",
    hint: "Automating database password rotation via Lambda using alternating user credentials without application downtime.",
    back: "AWS Secrets Manager <strong>multi-user rotation strategy</strong> uses AWS Lambda to update alternating database credentials, enabling <strong>zero-downtime automated password rotation</strong>.",
    tags: ["Secrets Manager Rotation", "Secrets Manager Rotation", "Incident Containment"]
  },
  {
    id: "aws-scs-fc-438",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d5",
    front: "Zero-Downtime Secret Rotation (Multi-User Strategy) (Zero Trust Iam)",
    hint: "Automating database password rotation via Lambda using alternating user credentials without application downtime.",
    back: "AWS Secrets Manager <strong>multi-user rotation strategy</strong> uses AWS Lambda to update alternating database credentials, enabling <strong>zero-downtime automated password rotation</strong>.",
    tags: ["Secrets Manager Rotation", "Secrets Manager Rotation", "Zero Trust Iam"]
  },
  {
    id: "aws-scs-fc-439",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d5",
    front: "Zero-Downtime Secret Rotation (Multi-User Strategy) (Data Protection)",
    hint: "Automating database password rotation via Lambda using alternating user credentials without application downtime.",
    back: "AWS Secrets Manager <strong>multi-user rotation strategy</strong> uses AWS Lambda to update alternating database credentials, enabling <strong>zero-downtime automated password rotation</strong>.",
    tags: ["Secrets Manager Rotation", "Secrets Manager Rotation", "Data Protection"]
  },
  {
    id: "aws-scs-fc-440",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d5",
    front: "Zero-Downtime Secret Rotation (Multi-User Strategy) (Infrastructure Defense)",
    hint: "Automating database password rotation via Lambda using alternating user credentials without application downtime.",
    back: "AWS Secrets Manager <strong>multi-user rotation strategy</strong> uses AWS Lambda to update alternating database credentials, enabling <strong>zero-downtime automated password rotation</strong>.",
    tags: ["Secrets Manager Rotation", "Secrets Manager Rotation", "Infrastructure Defense"]
  },
  {
    id: "aws-scs-fc-441",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d5",
    front: "Automated TLS Management via ACM and Private CA (Enterprise Governance)",
    hint: "Automating public certificate renewal with ACM and managing internal PKI with AWS Private CA.",
    back: "<strong>AWS Certificate Manager (ACM)</strong> automates public TLS certificate renewal, while <strong>AWS Private CA</strong> manages internal private certificates for microservice encryption.",
    tags: ["AWS ACM & Private CA", "ACM & Private CA", "Enterprise Governance"]
  },
  {
    id: "aws-scs-fc-442",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d5",
    front: "Automated TLS Management via ACM and Private CA (Incident Containment)",
    hint: "Automating public certificate renewal with ACM and managing internal PKI with AWS Private CA.",
    back: "<strong>AWS Certificate Manager (ACM)</strong> automates public TLS certificate renewal, while <strong>AWS Private CA</strong> manages internal private certificates for microservice encryption.",
    tags: ["AWS ACM & Private CA", "ACM & Private CA", "Incident Containment"]
  },
  {
    id: "aws-scs-fc-443",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d5",
    front: "Automated TLS Management via ACM and Private CA (Zero Trust Iam)",
    hint: "Automating public certificate renewal with ACM and managing internal PKI with AWS Private CA.",
    back: "<strong>AWS Certificate Manager (ACM)</strong> automates public TLS certificate renewal, while <strong>AWS Private CA</strong> manages internal private certificates for microservice encryption.",
    tags: ["AWS ACM & Private CA", "ACM & Private CA", "Zero Trust Iam"]
  },
  {
    id: "aws-scs-fc-444",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d5",
    front: "Automated TLS Management via ACM and Private CA (Data Protection)",
    hint: "Automating public certificate renewal with ACM and managing internal PKI with AWS Private CA.",
    back: "<strong>AWS Certificate Manager (ACM)</strong> automates public TLS certificate renewal, while <strong>AWS Private CA</strong> manages internal private certificates for microservice encryption.",
    tags: ["AWS ACM & Private CA", "ACM & Private CA", "Data Protection"]
  },
  {
    id: "aws-scs-fc-445",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d5",
    front: "Automated TLS Management via ACM and Private CA (Infrastructure Defense)",
    hint: "Automating public certificate renewal with ACM and managing internal PKI with AWS Private CA.",
    back: "<strong>AWS Certificate Manager (ACM)</strong> automates public TLS certificate renewal, while <strong>AWS Private CA</strong> manages internal private certificates for microservice encryption.",
    tags: ["AWS ACM & Private CA", "ACM & Private CA", "Infrastructure Defense"]
  },
  {
    id: "aws-scs-fc-446",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d5",
    front: "Comprehensive Amazon S3 Security Hardening (Enterprise Governance)",
    hint: "Enforcing in-transit TLS encryption via aws:SecureTransport and at-rest KMS encryption by default.",
    back: "Hardening Amazon S3 requires enforcing <strong>aws:SecureTransport: false Deny policies</strong> for TLS in transit, default <strong>SSE-KMS encryption</strong>, and account-level Block Public Access.",
    tags: ["S3 Hardening", "S3 Hardening", "Enterprise Governance"]
  },
  {
    id: "aws-scs-fc-447",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d5",
    front: "Comprehensive Amazon S3 Security Hardening (Incident Containment)",
    hint: "Enforcing in-transit TLS encryption via aws:SecureTransport and at-rest KMS encryption by default.",
    back: "Hardening Amazon S3 requires enforcing <strong>aws:SecureTransport: false Deny policies</strong> for TLS in transit, default <strong>SSE-KMS encryption</strong>, and account-level Block Public Access.",
    tags: ["S3 Hardening", "S3 Hardening", "Incident Containment"]
  },
  {
    id: "aws-scs-fc-448",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d5",
    front: "Comprehensive Amazon S3 Security Hardening (Zero Trust Iam)",
    hint: "Enforcing in-transit TLS encryption via aws:SecureTransport and at-rest KMS encryption by default.",
    back: "Hardening Amazon S3 requires enforcing <strong>aws:SecureTransport: false Deny policies</strong> for TLS in transit, default <strong>SSE-KMS encryption</strong>, and account-level Block Public Access.",
    tags: ["S3 Hardening", "S3 Hardening", "Zero Trust Iam"]
  },
  {
    id: "aws-scs-fc-449",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d5",
    front: "Comprehensive Amazon S3 Security Hardening (Data Protection)",
    hint: "Enforcing in-transit TLS encryption via aws:SecureTransport and at-rest KMS encryption by default.",
    back: "Hardening Amazon S3 requires enforcing <strong>aws:SecureTransport: false Deny policies</strong> for TLS in transit, default <strong>SSE-KMS encryption</strong>, and account-level Block Public Access.",
    tags: ["S3 Hardening", "S3 Hardening", "Data Protection"]
  },
  {
    id: "aws-scs-fc-450",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d5",
    front: "Comprehensive Amazon S3 Security Hardening (Infrastructure Defense)",
    hint: "Enforcing in-transit TLS encryption via aws:SecureTransport and at-rest KMS encryption by default.",
    back: "Hardening Amazon S3 requires enforcing <strong>aws:SecureTransport: false Deny policies</strong> for TLS in transit, default <strong>SSE-KMS encryption</strong>, and account-level Block Public Access.",
    tags: ["S3 Hardening", "S3 Hardening", "Infrastructure Defense"]
  }
];

export default AWS_SCS_FLASHCARDS_18;
