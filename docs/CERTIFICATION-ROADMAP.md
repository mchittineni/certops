# Certification roadmap — 2026 Top 50

All 95 certifications are **scaffolded** in `src/data/certs/`, so each one already has a
folder, a blueprint stub, and a place to drop content. `status` controls visibility:

- `live` — appears in the catalogue and can be launched. Requires real content.
- `planned` — appears only in the roadmap panel. TODO placeholders allowed.
- `retired` — the vendor withdrew the exam. Hidden everywhere; the bank is kept but not grown.

```bash
npm run build:content   # regenerate the index after any change
npm run stats           # progress toward 500 questions per certification
```

## Status

| | Certifications | Live | Retired | Questions |
| --- | --- | --- | --- | --- |
| ☁️ Cloud Engineering | 41 | 10 | 2 | 6,088 |
| 🚀 DevOps & SRE | 16 | 6 | 0 | 3,006 |
| ☸️ Kubernetes & Cloud Native | 8 | 4 | 0 | 2,000 |
| 🏗️ Platform Engineering | 6 | 3 | 0 | 1,500 |
| 💰 FinOps | 8 | 2 | 0 | 1,000 |
| 🔐 DevSecOps & Security | 16 | 5 | 1 | 3,004 |
| **Total** | **95** | **30** | **3** | **16,598** |

Regenerate these numbers any time with `npm run stats`.

**Authored vs. generated.** All 30 live certifications hold 500 questions and 500 flashcards
(30,000 items repo-wide) with comprehensive explanations and zero option-letter references.
How many of those items are *exam-ready* is a separate question with a measured answer:
2,000 questions and 2,000 flashcards across 8 banks are templated placeholders and 29 of the 30
banks reissue the same item under several framings. Every live blueprint now matches its
published exam guide. See [EXAM-READINESS.md](EXAM-READINESS.md) for the numbers and the
nine banks that need re-authoring.

**A live certification needs a verified blueprint.** The `planned` entries carry
*placeholder* domains and weights with `blueprintVerified: false`. Fixing that against the
official exam guide is step 1 of
[taking one live](#taking-one-certification-from-planned-to-live), and it is a genuinely
useful contribution on its own — no question authoring required. Every current AWS, Azure,
Google Cloud, GitHub, HashiCorp, and CNCF exam now has its blueprint verified, so those need
only content; `azure-az305` is the furthest along, with the first 125 items written. See
[EXAM-READINESS.md](EXAM-READINESS.md#blueprints) for the sources.

## Priority order

18 of the Top-20 priority certifications from the 2026 roadmap are **live and available** with complete 500-question banks and 500-card flashcard decks. #17 does not exist, and #18 is now AI-103, which replaced the retired AI-102 and has no bank yet:

| # | Certification | id | Category | Status |
| --- | --- | --- | --- | --- |
| 1 | AWS DevOps Engineer – Professional (DOP-C02) | `aws-dop` | DevOps & SRE | ✅ live |
| 2 | Certified Kubernetes Administrator (CKA) | `k8s-cka` | Kubernetes & Cloud Native | ✅ live |
| 3 | Certified Kubernetes Security Specialist (CKS) | `k8s-cks` | DevSecOps & Security | ✅ live |
| 4 | HashiCorp Terraform Authoring and Operations Advanced | `hashicorp-tfp` | DevOps & SRE | ✅ live |
| 5 | Google Professional Cloud DevOps Engineer | `gcp-pcdoe` | DevOps & SRE | ✅ live |
| 6 | Azure DevOps Engineer Expert (AZ-400) | `azure-az400` | DevOps & SRE | ✅ live |
| 7 | Certified Cloud Native Platform Engineering Associate (CNPA) | `cncf-cnpa` | Platform Engineering | ✅ live |
| 8 | Certified Cloud Native Platform Engineer (CNPE) | `cncf-cnpe` | Platform Engineering | ✅ live |
| 9 | Certified GitOps Associate (CGOA) | `cncf-cgoa` | Kubernetes & Cloud Native | ✅ live |
| 10 | FinOps Certified Practitioner (FOCP) | `finops-focp` | FinOps | ✅ live |
| 11 | AWS Security – Specialty (SCS-C03) | `aws-scs` | DevSecOps & Security | ✅ live |
| 12 | Certified Cloud Security Professional (CCSP) | `isc2-ccsp` | DevSecOps & Security | ✅ live |
| 13 | OpenTelemetry Certified Associate (OTCA) | `cncf-otca` | Kubernetes & Cloud Native | ✅ live |
| 14 | Certified Backstage Associate (CBA) | `cncf-cba` | Platform Engineering | ✅ live |
| 15 | Google Professional Machine Learning Engineer | `gcp-pmle` | Cloud Engineering | ✅ live |
| 16 | HashiCorp Certified: Vault Associate (VAULT-003) | `hashicorp-vault` | DevSecOps & Security | ✅ live |
| 17 | ~~Certified Open Policy Agent Associate (COPAA)~~ — no such exam exists; unpublished | `cncf-opa` | DevSecOps & Security | withdrawn |
| 18 | Microsoft Certified: Azure AI Apps and Agents Developer Associate (AI-103), which replaced the retired AI-102 | `azure-ai-apps-agents` | Cloud Engineering | planned |
| 19 | AWS Certified Machine Learning Engineer – Associate (MLA-C02) | `aws-mla` | Cloud Engineering | ✅ live |
| 20 | FinOps Certified FOCUS Analyst (FOCUS) | `finops-focus` | FinOps | ✅ live |

## Full catalogue

### ☁️ Cloud Engineering
`aws-saa` SAA-C03 ✅ · `aws-dva` DVA-C02 ✅ · `aws-clf` CLF-C02 ✅ · `aws-mla` MLA-C02 ✅ ·
`aws-sap` SAP-C02 · `aws-soa` SOA-C03 · `aws-ans` ANS-C01 · `aws-aip` AIP-C01 · `aws-aib` AIB-C01 ·
`aws-aif` AIF-C01 · `aws-dea` DEA-C01 ·
`azure-az104` AZ-104 ✅ · `azure-az900` AZ-900 ✅ · `azure-az305` AZ-305 ·
`azure-ai-apps-agents` AI-103 · `azure-ai200` AI-200 · `azure-ai300` AI-300 · `azure-ai500` AI-500 ·
`azure-ai901` AI-901 · `azure-dp900` DP-900 · `azure-az700` AZ-700 · `azure-az140` AZ-140 ·
`azure-az120` AZ-120 · `azure-dp300` DP-300 · `azure-dp420` DP-420 · `azure-dp750` DP-750 ·
`azure-dp800` DP-800 ·
`gcp-ace` GCP-ACE ✅ · `gcp-pca` GCP-PCA ✅ · `gcp-pmle` GCP-PMLE ✅ · `gcp-cdl` GCP-CDL ·
`gcp-gail` GCP-GAIL · `gcp-adp` GCP-ADP · `gcp-pcd` GCP-PCD · `gcp-pde` GCP-PDE ·
`gcp-pcne` GCP-PCNE · `gcp-pcdbe` GCP-PCDBE · `gcp-paa` GCP-PAA · `databricks-genai` Databricks-GenAI

### 🚀 DevOps & SRE
`aws-dop` DOP-C02 ✅ · `azure-az400` AZ-400 ✅ · `gcp-pcdoe` GCP-PCDE ✅ · `hashicorp-tfa` TA-004 ✅ ·
`hashicorp-tfp` TF-ADV ✅ · `github-actions` GH-200 ✅ · `docker-dca` DCA ·
`doi-devops-foundation` DOF · `doi-devops-leader` DOL · `doi-sre-foundation` SREF ·
`doi-sre-practitioner` SREP · `github-foundations` GH-900 · `github-admin` GH-100 ·
`github-copilot` GH-300 · `github-agentic-ai` GH-600 · `linux-lfcs` LFCS

### ☸️ Kubernetes & Cloud Native
`k8s-cka` CKA ✅ · `k8s-ckad` CKAD ✅ · `cncf-cgoa` CGOA ✅ · `cncf-otca` OTCA ✅ ·
`cncf-kcna` KCNA · `cncf-capa` CAPA · `cncf-pca` PCA · `cncf-ckne` CKNE

### 🏗️ Platform Engineering
`cncf-cnpa` CNPA ✅ · `cncf-cnpe` CNPE ✅ · `cncf-cba` CBA ✅ · `cncf-cca` CCA ·
`cncf-ica` ICA · `cncf-kca` KCA

### 💰 FinOps
`finops-focp` FOCP ✅ · `finops-focus` FOCUS ✅ · `finops-professional` FOC-PRO · `finops-engineer` FOCE ·
`finops-csp` FOC-CSP · `cloud-economics` CLOUD-ECON · `finops-ai-value` AIAV · `finops-tech-value` TV

### 🔐 DevSecOps & Security
`aws-scs` SCS-C03 ✅ · `github-ghas` GH-500 ✅ · `k8s-cks` CKS ✅ · `isc2-ccsp` CCSP ✅ ·
`hashicorp-vault` VAULT-003 ✅ · `gcp-pcse` GCP-PCSE · `gcp-psoe` GCP-PSOE · `cncf-kcsa` KCSA ·
`doi-devsecops-foundation` DSOF · `doi-devsecops-practitioner` DSOP · `isc2-cissp` CISSP ·
`offsec-oscp` OSCP · `azure-sc500` SC-500 · `hashicorp-vault-ops` VAULT-ADV

### 🗄️ Retired
Microsoft retired these in 2026. They are hidden from the catalogue and their banks are kept.
`azure-az204` AZ-204 (replaced by AI-200) · `azure-ai102` AI-102 (replaced by AI-103) ·
`azure-az500` AZ-500 (replaced by SC-500)

## Taking one certification from planned to live

```bash
# 1. Fill in the real blueprint. Domains and weights come from the official exam guide;
#    the seeded values are PLACEHOLDERS and weights must sum to 100.
$EDITOR src/data/certs/aws-dop/cert.js
#    → replace domains, fix passingScore / maxScore / defaultTimeMinutes,
#      set blueprintSource, then blueprintVerified: true

# 2. Scaffold content packs — one per authoring session, ≤150 items each.
npm run new:pack -- --cert aws-dop --kind questions --count 50 --difficulty medium --domain d1
npm run new:pack -- --cert aws-dop --kind flashcards --count 25

# 3. Author. Aim for a 30 / 45 / 25 split across easy / medium / hard.

# 4. Flip status to 'live' in cert.js, then:
npm run check      # backup → regenerate index → validate → test
```

The validator refuses to let a `live` certification ship TODO placeholders or zero
questions, so step 4 fails loudly if step 3 is incomplete.

## Adding a certification that is not on this list

```bash
npm run new:cert -- --id aws-mls --provider AWS --code MLA-C01 \
  --title "AWS Certified Machine Learning Engineer - Associate" \
  --category "Cloud Engineering" --tier associate
npm run build:content
```

To re-seed after editing the Top-50 list itself, edit the `ROADMAP` table in
`scripts/seed-catalog.mjs` and run `npm run seed:catalog` — it is idempotent and never
touches an existing folder.
