#!/usr/bin/env python3
"""
Generator script to author 500 scenario-based questions and 500 flashcards across 20 packs
for 5 certifications:
1. hashicorp-vault (VAULT-003)
2. cncf-opa (COPAA)
3. azure-ai102 (AI-102)
4. aws-mla (MLA-C01)
5. finops-focus (FOCUS)

Adheres strictly to CertOps content standards:
- 0 option-letter references in explanations
- Detailed explanations explaining right choice and distractor failures
- Perfectly balanced answer key distribution (25% A, 25% B, 25% C, 25% D)
- Accurate domain weights and domainId/domainName matching
- Semantic HTML tags on flashcard backs
"""
import os, json

CONTEXTS = [
    ("High-Frequency FinTech Trading", "A quantitative trading desk requires microsecond secrets delivery, zero packet loss, and deterministic authentication guarantees."),
    ("Healthcare Patient Records & HIPAA", "A national hospital network requires strict cryptographic privacy, auditable access controls, and HIPAA compliance."),
    ("Global E-Commerce Black Friday Scale", "An international retail marketplace prepares for 100x traffic surges with zero downtime and instant failover."),
    ("Autonomous Vehicle Telemetry", "A self-driving automotive fleet streams terabytes of sensor telemetry requiring real-time distributed ingestion and anomaly detection."),
    ("Multi-Tenant B2B SaaS Platform", "An enterprise cloud SaaS architecture mandates strict logical tenant isolation, data masking, and per-tenant resource quotas."),
    ("Media Streaming & Global CDN", "A global video streaming service distributes high-bitrate live media with distributed edge caching and tokenized DRM protection."),
    ("Aerospace Satellite Ground Systems", "An aerospace telemetry platform processes orbital downlinks with fault-tolerant queuing and asynchronous edge processing."),
    ("Telecommunications 5G Core Network", "A national telecom operator manages high-density network slices with automated scaling and sub-millisecond service mesh routing."),
    ("Renewable Energy Smart Grid IoT", "A smart electrical grid platform monitors millions of smart meters with low-latency time-series analysis and automated load shedding."),
    ("Supply Chain Cold-Chain Logistics", "A pharmaceutical distribution network tracks temperature-sensitive cargo with cryptographic provenance and automated breach alerts."),
    ("Banking Core Ledger & Payments", "A central banking consortium enforces ACID consistency, immutable transaction audit trails, and automated reconciliation."),
    ("Genomic Sequencing & Biotech Pipeline", "A genomics laboratory processes petabyte-scale FASTQ files with distributed batch computing and high-throughput POSIX storage."),
    ("Defense-Grade Zero-Trust Network", "A defense intelligence system enforces continuous mutual TLS authentication, strict least privilege, and non-repudiation."),
    ("Online Multiplayer Gaming Engine", "A real-time competitive gaming cluster orchestrates match sessions with regional matchmaking and anti-cheat validation."),
    ("Insurance Risk & Actuarial Modeling", "An actuarial underwriting platform executes Monte Carlo simulations across millions of policy holder records with parallel workers."),
    ("Pharmaceutical Clinical Trial Platform", "A global pharmaceutical research group manages double-blind clinical trial records with strict regulatory reporting and audit trails."),
    ("Smart City Traffic & Mobility Sensor Hub", "A metropolitan transit authority optimizes urban traffic signals with real-time video analytics and edge inference."),
    ("Digital Identity & Biometric Verification", "A cross-border passport control gateway validates identity credentials with zero-knowledge cryptographic proofs."),
    ("Legal Discovery & Semantic Document Search", "A global law firm conducts regulatory discovery across millions of scanned legal filings with vector-enhanced semantic retrieval."),
    ("AdTech Real-Time Bidding Exchange", "An advertising exchange processes 500,000 bids per second with a strict 20-millisecond SLA and distributed caching."),
    ("Precision Agriculture & Drone Scouting", "An agricultural drone fleet captures multispectral crop imagery with automated computer vision defect classification."),
    ("Industrial Robotics Predictive Maintenance", "A semiconductor fabrication facility detects vibration harmonics on manufacturing robots to prevent unplanned downtime."),
    ("Educational Remote Proctoring Platform", "An online university platform enforces anti-plagiarism and biometric proctoring for high-stakes certification exams."),
    ("Real Estate Valuation & Geo-Spatial Analytics", "A property appraisal engine fuses GIS parcel maps with real-time market transactions for automated valuation."),
    ("Disaster Emergency Dispatch & Operations", "A municipal 911 emergency response platform guarantees 99.999% uptime with multi-region hot-standby active failover.")
]

# Helper to format JS files
def write_question_pack(cert_id, export_name, pack_num, questions):
    dir_path = f"src/data/certs/{cert_id}/questions"
    os.makedirs(dir_path, exist_ok=True)
    file_path = f"{dir_path}/pack-{pack_num}.js"
    
    js = f"export const {export_name}_{pack_num} = [\n"
    items_js = []
    for q in questions:
        opt_js = "[\n" + ",\n".join([f"      {{ id: '{o['id']}', text: {json.dumps(o['text'])} }}" for o in q['options']]) + "\n    ]"
        ans_js = "[" + ", ".join([f"'{a}'" for a in q['correctAnswers']]) + "]"
        tags_js = json.dumps(q.get('tags', []))
        item = f"""  {{
    id: {json.dumps(q['id'])},
    difficulty: {json.dumps(q['difficulty'])},
    certId: {json.dumps(q['certId'])},
    domainId: {json.dumps(q['domainId'])},
    domainName: {json.dumps(q['domainName'])},
    title: {json.dumps(q['title'])},
    scenario: {json.dumps(q['scenario'])},
    question: {json.dumps(q['question'])},
    options: {opt_js},
    correctAnswers: {ans_js},
    type: {json.dumps(q['type'])},
    explanation: {json.dumps(q['explanation'])},
    referenceUrl: {json.dumps(q['referenceUrl'])},
    tags: {tags_js}
  }}"""
        items_js.append(item)
    js += ",\n".join(items_js) + f"\n];\n\nexport default {export_name}_{pack_num};\n"
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(js)

def write_flashcard_pack(cert_id, export_name, pack_num, cards):
    dir_path = f"src/data/certs/{cert_id}/flashcards"
    os.makedirs(dir_path, exist_ok=True)
    file_path = f"{dir_path}/pack-{pack_num}.js"
    
    js = f"export const {export_name}_{pack_num} = [\n"
    items_js = []
    for c in cards:
        tags_js = json.dumps(c.get('tags', []))
        item = f"""  {{
    id: {json.dumps(c['id'])},
    difficulty: {json.dumps(c['difficulty'])},
    certId: {json.dumps(c['certId'])},
    domainId: {json.dumps(c['domainId'])},
    front: {json.dumps(c['front'])},
    hint: {json.dumps(c['hint'])},
    back: {json.dumps(c['back'])},
    tags: {tags_js}
  }}"""
        items_js.append(item)
    js += ",\n".join(items_js) + f"\n];\n\nexport default {export_name}_{pack_num};\n"
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(js)

print("Base file generator ready.")
