#!/usr/bin/env python3
"""
Master runner to author questions and flashcards for all 5 certifications:
1. hashicorp-vault
2. cncf-opa
3. azure-ai102
4. aws-mla
5. finops-focus
"""
import sys, os

# Add scripts directory to path
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))
sys.path.insert(0, os.path.abspath(os.path.dirname(__file__)))

import vault
import opa
import azure_ai
import aws_mla
import finops_focus

print("--- 1/5: Generating HashiCorp Vault Associate (500 Qs / 500 FCs) ---")
vault.build_vault_bank()

print("--- 2/5: Generating CNCF OPA Associate (500 Qs / 500 FCs) ---")
opa.build_opa_bank()

print("--- 3/5: Generating Azure AI-102 (500 Qs / 500 FCs) ---")
azure_ai.build_azure_ai_bank()

print("--- 4/5: Generating AWS MLA-C01 (500 Qs / 500 FCs) ---")
aws_mla.build_aws_mla_bank()

print("--- 5/5: Generating FinOps FOCUS Analyst (500 Qs / 500 FCs) ---")
finops_focus.build_finops_focus_bank()

print("\n=== ALL 5 CERTIFICATIONS GENERATED (2,500 Questions + 2,500 Flashcards) ===")
