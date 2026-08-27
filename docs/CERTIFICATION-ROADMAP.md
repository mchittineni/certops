# Certification roadmap — 2026 Top 50

All 52 certifications are **scaffolded** in `src/data/certs/`, so each one already has a
folder, a blueprint stub, and a place to drop content. `status` controls visibility:

- `live` — appears in the catalogue and can be launched. Requires real content.
- `planned` — appears only in the roadmap panel. TODO placeholders allowed.

```bash
npm run build:content   # regenerate the index after any change
npm run stats           # progress toward 500 questions per certification
```

## Status

| | Certifications | Live | Questions |
| --- | --- | --- | --- |
| ☁️ Cloud Engineering | 13 | 4 | 37 |
| 🚀 DevOps & SRE | 11 | 0 | 0 |
| ☸️ Kubernetes & Cloud Native | 7 | 1 | 10 |
| 🏗️ Platform Engineering | 6 | 0 | 0 |
| 💰 FinOps | 5 | 0 | 0 |
| 🔐 DevSecOps & Security | 10 | 0 | 0 |
| **Total** | **52** | **5** | **47** |

Regenerate these numbers any time with `npm run stats`.

**Why 52 and not 50:** `aws-clf` (CLF-C02) and `azure-az900` (AZ-900) are not on the Top-50
list but already carry authored content, so they were kept as foundational entry points —
they are the natural first exam for someone with no certification yet. Delete their folders
and re-run `npm run build:content` if you want a strict 50.

**A live certification needs a verified blueprint.** The 47 `planned` entries carry
*placeholder* domains and weights with `blueprintVerified: false`. Fixing that against the
official exam guide is step 1 of
[taking one live](#taking-one-certification-from-planned-to-live), and it is a genuinely
useful contribution on its own — no question authoring required.

## Priority order

The Top-15 priority from the roadmap is recorded as `priority` in each blueprint and drives
the ordering of the roadmap panel. Work down this list.

| # | Certification | id | Category |
| --- | --- | --- | --- |
| 1 | AWS DevOps Engineer – Professional (DOP-C02) | `aws-dop` | DevOps & SRE |
| 2 | Certified Kubernetes Administrator (CKA) | `k8s-cka` | Kubernetes & Cloud Native ✅ live |
| 3 | Certified Kubernetes Security Specialist (CKS) | `k8s-cks` | DevSecOps & Security |
| 4 | HashiCorp Terraform Authoring & Operations Professional | `hashicorp-tfp` | DevOps & SRE |
| 5 | Google Professional Cloud DevOps Engineer | `gcp-pcdoe` | DevOps & SRE |
| 6 | Azure DevOps Engineer Expert (AZ-400) | `azure-az400` | DevOps & SRE |
| 7 | Certified Cloud Native Platform Engineering Associate (CNPA) | `cncf-cnpa` | Platform Engineering |
| 8 | Certified Cloud Native Platform Engineer (CNPE) | `cncf-cnpe` | Platform Engineering |
| 9 | GitOps Certified Associate (CGOA) | `cncf-cgoa` | Kubernetes & Cloud Native |
| 10 | FinOps Certified Practitioner (FOCP) | `finops-focp` | FinOps |
| 11 | AWS Security – Specialty (SCS-C02) | `aws-scs` | DevSecOps & Security |
| 12 | Certified Cloud Security Professional (CCSP) | `isc2-ccsp` | DevSecOps & Security |
| 13 | OpenTelemetry Certified Associate (OTCA) | `cncf-otca` | Kubernetes & Cloud Native |
| 14 | Certified Backstage Associate (CBA) | `cncf-cba` | Platform Engineering |
| 15 | Google Professional Machine Learning Engineer | `gcp-pmle` | Cloud Engineering |

## Full catalogue

### ☁️ Cloud Engineering
`aws-saa` SAA-C03 ✅ · `aws-sap` SAP-C02 · `aws-dva` DVA-C02 · `aws-soa` SOA-C02 ·
`aws-ans` ANS-C01 · `azure-az104` AZ-104 · `azure-az204` AZ-204 · `azure-az305` AZ-305 ·
`gcp-ace` GCP-ACE ✅ · `gcp-pca` GCP-PCA · `gcp-pmle` GCP-PMLE ·
`aws-clf` CLF-C02 ✅ *(extra)* · `azure-az900` AZ-900 ✅ *(extra)*

### 🚀 DevOps & SRE
`aws-dop` DOP-C02 · `azure-az400` AZ-400 · `gcp-pcdoe` GCP-PCDE · `hashicorp-tfa` TA-003 ·
`hashicorp-tfp` TF-PRO · `github-actions` GH-200 · `docker-dca` DCA ·
`doi-devops-foundation` DOF · `doi-devops-leader` DOL · `doi-sre-foundation` SREF ·
`doi-sre-practitioner` SREP

### ☸️ Kubernetes & Cloud Native
`k8s-cka` CKA ✅ · `k8s-ckad` CKAD · `cncf-kcna` KCNA · `cncf-capa` CAPA ·
`cncf-cgoa` CGOA · `cncf-otca` OTCA · `cncf-pca` PCA

### 🏗️ Platform Engineering
`cncf-cnpa` CNPA · `cncf-cnpe` CNPE · `cncf-cba` CBA · `cncf-cca` CCA ·
`cncf-ica` ICA · `cncf-kca` KCA

### 💰 FinOps
`finops-focp` FOCP · `finops-professional` FOC-PRO · `finops-engineer` FOCE ·
`finops-csp` FOC-CSP · `cloud-economics` CLOUD-ECON

### 🔐 DevSecOps & Security
`aws-scs` SCS-C02 · `gcp-pcse` GCP-PCSE · `github-ghas` GH-500 · `k8s-cks` CKS ·
`cncf-kcsa` KCSA · `doi-devsecops-foundation` DSOF · `doi-devsecops-practitioner` DSOP ·
`isc2-cissp` CISSP · `isc2-ccsp` CCSP · `offsec-oscp` OSCP

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
