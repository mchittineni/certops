#!/usr/bin/env python3
"""
Generator for CNCF Open Policy Agent Associate (COPAA) content:
- 500 questions (20 packs x 25)
- 500 flashcards (20 packs x 25)
"""
import os, json
from generate_content import write_question_pack, write_flashcard_pack, CONTEXTS

DOMAINS = [
    {"id": "d1", "name": "OPA Architecture, Rego Language Fundamentals, and Testing", "weight": 40},
    {"id": "d2", "name": "Kubernetes Admission Control with Gatekeeper", "weight": 35},
    {"id": "d3", "name": "CI/CD Policy Enforcement and Microservice Authorization", "weight": 25}
]

CERT_ID = "cncf-opa"
EXPORT_PREFIX = "CNCF_OPA"
REF_URL = "https://www.cncf.io/certification/copaa/"

def build_opa_bank():
    pack_domains = (
        [DOMAINS[0]] * 8 +
        [DOMAINS[1]] * 7 +
        [DOMAINS[2]] * 5
    )

    d1_topics = [
        ("OPA Decoupled Policy Architecture", "Decoupling authorization logic from application source code",
         "Deploy OPA as a sidecar or host daemon that queries local memory policy bundles using JSON input and returns structured authorization decisions.",
         "Hardcode role-based access checks directly inside every microservice backend codebase using nested if-else branches.",
         "Deploy a monolithic relational SQL database and execute complex joins synchronously on every user HTTP request.",
         "Rely on client-side frontend browser JavaScript code to enforce tenant isolation and access security.",
         "Open Policy Agent (OPA) is a general-purpose, open-source policy engine that decouples policy decision-making from policy enforcement. Services offload authorization by sending arbitrary JSON context to OPA's in-memory engine, which evaluates declarative Rego policies in sub-millisecond time without querying remote databases during evaluation.",
         ["opa", "architecture", "decoupling"]),

        ("Rego Rule Evaluation and OR Semantics", "Writing declarative authorization rules in Rego",
         "Define multiple rules with the same name (e.g., 'allow') so that OPA evaluates them as a logical OR, granting access if any single rule body evaluates to true.",
         "Nest procedural while loops with break statements inside imperative functions to compute access.",
         "Write a single monolithic rule that throws an unhandled exception when any condition fails.",
         "Define conflicting rules in separate packages and randomly pick one at runtime.",
         "In Rego, multiple rule definitions sharing the same rule name represent a logical disjunction (OR). If all expressions within at least one rule body evaluate to true, the rule evaluates to true. Within a single rule body, expressions are evaluated as a logical conjunction (AND).",
         ["rego", "syntax", "rules"]),

        ("Default Values and Safe Deny", "Configuring default deny rules for secure authorization",
         "Set 'default allow := false' at the top of the Rego package and write explicit allow conditions to ensure unauthorized requests fail closed.",
         "Set 'default allow := true' to ensure developers never encounter authorization errors during development.",
         "Omit default statements so that undefined rules return null and grant unrestricted access.",
         "Use catch-all wildcard rules that automatically approve all requests from unrecognized IP addresses.",
         "A foundational principle of zero-trust policy-as-code is fail-closed security. Declaring 'default allow := false' ensures that if an incoming request does not explicitly satisfy any defined allow rule, the result evaluates deterministically to false rather than undefined or permissive.",
         ["rego", "default", "security"]),

        ("Set and Array Comprehensions", "Transforming and filtering nested collections in Rego",
         "Use set comprehensions like '[user | some user in input.users; user.active]' to extract and filter matching elements declaratively.",
         "Write recursive procedural functions that mutate global array pointers in memory.",
         "Export the entire JSON payload to a Python subprocess on each request to run list comprehensions.",
         "Convert collections to comma-separated strings and use substring matching for authorization.",
         "Rego provides powerful set, array, and object comprehensions (e.g., '[x | ...]'). Comprehensions iterate over collections, apply filtering predicates, and construct new immutable collections in a single declarative expression without side effects.",
         ["rego", "comprehensions", "collections"]),

        ("Testing Rego with 'opa test'", "Unit testing policies with mocks and code coverage",
         "Create test rules prefixed with 'test_' in dedicated test files and execute 'opa test --coverage' using the 'with' keyword to mock 'input' and 'data'.",
         "Deploy policies directly to production and monitor end-user support tickets to detect authorization bugs.",
         "Write unit tests inside shell scripts that curl the production API endpoint repeatedly.",
         "Disable policy testing because Rego is declarative and cannot contain runtime syntax errors.",
         "The OPA CLI provides a built-in testing framework via 'opa test'. Tests define rules starting with 'test_', mock contextual inputs using 'with input as ...' or 'with data as ...', and report code coverage metrics to verify edge cases and rule branches before deployment.",
         ["testing", "opa-test", "coverage"]),

        ("OPA Bundle API and Management", "Distributing policies dynamically to OPA instances",
         "Configure OPA to poll a central bundle service via the Bundle API, automatically downloading, validating, and activating signed policy tarballs in memory.",
         "SSH into every Kubernetes node and manually copy-paste Rego files into the /tmp directory.",
         "Rebuild the OPA container image from scratch every time a security policy rule changes.",
         "Embed all Rego policies directly in environment variables passed to the pod specification.",
         "OPA's Bundle API allows distributed OPA instances to periodically poll and activate versioned, digitally signed policy bundles (tar.gz files containing Rego and data) from cloud object storage (S3, GCS) or control planes without restarting OPA containers.",
         ["bundles", "distribution", "operations"]),

        ("Decision Logging and Auditability", "Tracking authorization events and compliance records",
         "Enable OPA Decision Logs to export structured JSON records of every query, input payload, and decision result to central security analytics.",
         "Disable logging completely to save disk space and improve raw request latency.",
         "Log only failed requests to local ephemeral container stdout without timestamps.",
         "Store audit logs in unencrypted plaintext CSV files on public file shares.",
         "OPA Decision Logging captures high-fidelity audit trails of every policy query, including the full input payload, timestamp, and evaluation decision. Logs can be masked to remove PII and streamed to SIEM systems for regulatory compliance and threat detection.",
         ["decision-logs", "audit", "compliance"])
    ]

    d2_topics = [
        ("Gatekeeper ConstraintTemplates", "Defining custom CRD schemas and Rego logic for Kubernetes",
         "Define a ConstraintTemplate containing an openAPIV3Schema specification for parameters and the embedded Rego policy logic under 'targets'.",
         "Edit the core Kubernetes apiserver binary code to include custom validation functions.",
         "Create unstructured ConfigMaps and mount them into the kube-controller-manager pod.",
         "Deploy standard OPA without Gatekeeper and configure manual cluster webhooks.",
         "Gatekeeper uses ConstraintTemplates to define reusable, parameterized policy templates. A ConstraintTemplate declares the CRD schema for input parameters (using openAPIV3Schema) and provides the Rego logic executed by Gatekeeper's validating webhook during admission.",
         ["gatekeeper", "constraint-template", "k8s"]),

        ("Gatekeeper Constraints and Match Criteria", "Applying policies to specific Kubernetes resources and namespaces",
         "Create a Constraint custom resource that references the ConstraintTemplate and specifies 'match' criteria (kinds, namespaces, label selectors) and parameter values.",
         "Apply the ConstraintTemplate directly to every pod without specifying a Constraint instance.",
         "Add hardcoded namespace string checks inside the Rego template logic instead of using match criteria.",
         "Use Kubernetes NetworkPolicies to block invalid deployment specifications from reaching the API.",
         "Constraints are instantiations of ConstraintTemplates. They define which Kubernetes resources the policy applies to (filtering by API group, kind, namespace, and labels) and pass specific configuration values (e.g., maximum memory limits, required labels).",
         ["gatekeeper", "constraints", "admission"]),

        ("Gatekeeper Enforcement Actions", "Gradual policy rollout with dryrun and warn modes",
         "Set 'enforcementAction: dryrun' or 'enforcementAction: warn' to evaluate and log policy violations without blocking engineering deployments.",
         "Set 'enforcementAction: deny' immediately across all clusters on day one without testing.",
         "Delete non-compliant workloads immediately upon detecting any minor labeling mismatch.",
         "Disable the admission webhook during cluster operating hours to prevent deployment friction.",
         "Gatekeeper supports three enforcement actions: 'deny' (blocks the admission request), 'warn' (allows the request but returns a warning message to the client), and 'dryrun' (allows the request and logs the violation in the constraint status for auditing). This allows safe, zero-disruption policy rollouts.",
         ["gatekeeper", "enforcement-action", "rollout"]),

        ("Gatekeeper Audit Runner", "Detecting drift and pre-existing non-compliant cluster resources",
         "Rely on the Gatekeeper audit pod to periodically scan all existing cluster resources and populate non-compliance violations in Constraint status fields.",
         "Write manual bash scripts with 'kubectl get all' that developers run once a month.",
         "Disable admission webhooks and assume all currently running pods are 100% compliant.",
         "Restart the entire Kubernetes cluster every night to force pods through admission review.",
         "Admission webhooks only intercept create and update requests; they cannot detect resources that were already running before a policy was created. The Gatekeeper Audit runner continuously scans existing resources in the cluster and updates the status of each Constraint with detected violations.",
         ["gatekeeper", "audit", "compliance"]),

        ("Gatekeeper Mutation Webhook", "Automated mutation of Kubernetes manifests during admission",
         "Configure Gatekeeper Assign or AssignMetadata resources to inject standard security contexts or default labels into incoming pods automatically.",
         "Write a custom daemonset that continuously edits running pod specs using 'kubectl edit'.",
         "Require developers to manually re-apply labels to every generated replica pod.",
         "Disable Kubernetes admission control and mutate manifests directly in etcd storage.",
         "Gatekeeper v3 provides mutating webhook capabilities through custom resources like 'Assign' and 'AssignMetadata'. These resources enable automated injection of required defaults (e.g., setting 'readOnlyRootFilesystem: true' or corporate cost center labels) without requiring developer intervention.",
         ["gatekeeper", "mutation", "admission"]),

        ("Shift-Left Policy Testing with 'gator'", "Validating Gatekeeper constraints locally and in CI/CD",
         "Use the 'gator' CLI tool in developer environments and CI pipelines to test Kubernetes manifests against ConstraintTemplates before applying to clusters.",
         "Wait until production deployment fails at the admission webhook to discover policy syntax errors.",
         "Deploy a full multi-node Kubernetes cluster on developer laptops solely to test label compliance.",
         "Bypass policy checks in CI and rely on production monitoring to catch misconfigurations.",
         "The 'gator' CLI is a standalone testing tool for Gatekeeper. It enables developers and CI pipelines to validate Kubernetes manifests against Gatekeeper ConstraintTemplates and Constraints locally, catching policy violations early before manifests are committed to Git.",
         ["gator", "shift-left", "ci-cd"]),

        ("ValidatingWebhookConfiguration Failure Policy", "Handling admission webhook failure modes gracefully",
         "Configure 'failurePolicy: Fail' for critical security policies, or 'failurePolicy: Ignore' with strict alerting when prioritizing cluster availability.",
         "Remove the ValidatingWebhookConfiguration whenever a network glitch occurs.",
         "Route all admission traffic through an unmonitored external proxy server.",
         "Disable apiserver authentication to prevent webhook timeout errors.",
         "Kubernetes ValidatingWebhookConfiguration defines how the API server behaves if Gatekeeper becomes unreachable. 'Fail' prioritizes security by rejecting requests when the webhook cannot be contacted, whereas 'Ignore' prioritizes availability by allowing requests through while alerting administrators.",
         ["admission-webhook", "failure-policy", "k8s"])
    ]

    d3_topics = [
        ("Conftest for Infrastructure as Code", "Testing Terraform, Dockerfiles, and Helm charts with Rego",
         "Use Conftest in CI pipelines to execute Rego policies against parsed Terraform plan JSON and Dockerfile ASTs before merging PRs.",
         "Perform manual code reviews of 10,000-line Terraform plans before every deployment.",
         "Deploy Terraform configurations directly to AWS without review and fix errors in production.",
         "Use regex-based bash scripts to grep for forbidden keywords inside infrastructure files.",
         "Conftest is a dedicated utility built on OPA that enables writing Rego policies against structured configuration files, including Terraform plans, Kubernetes manifests, Dockerfiles, and cloud-init scripts, enforcing corporate security guardrails early in the CI/CD pipeline.",
         ["conftest", "iac", "ci-cd"]),

        ("Microservice Authorization with Envoy and ExtAuthz", "Fine-grained HTTP API authorization at the ingress proxy",
         "Configure Envoy's 'envoy.filters.http.ext_authz' filter to query OPA via gRPC or HTTP, passing headers, paths, and methods for real-time access decisions.",
         "Implement custom JWT verification and authorization logic independently in every service's controller layer.",
         "Place all microservices on a public network and rely on client API keys passed in request query strings.",
         "Disable ingress authorization and trust all internal VPC network packets implicitly.",
         "Envoy proxy integrates with OPA via the External Authorization (ext_authz) filter. For every incoming HTTP request, Envoy extracts request attributes (method, path, headers, client certificate) and queries OPA. OPA evaluates the request against Rego policies and instructs Envoy whether to allow or reject the call.",
         ["envoy", "ext-authz", "service-mesh"]),

        ("Kafka Topic Authorization with OPA", "Enforcing fine-grained message broker access control",
         "Deploy the OPA Kafka authorizer plugin to intercept produce and consume requests, verifying topic names, client identities, and operation types.",
         "Grant cluster-admin access to all Kafka producers and consumers to avoid authorization errors.",
         "Hardcode topic names in firewall rules to restrict message publishing.",
         "Disable SASL/SSL authentication and allow unauthenticated consumer groups.",
         "The OPA Kafka authorizer plugin intercepts Kafka client requests (e.g., Produce, Consume, CreateTopics). It evaluates the client's authenticated principal, client IP, resource type, and operation name against Rego policies, providing granular topic-level access control.",
         ["kafka", "messaging", "authorization"]),

        ("Styra Declarative Authorization Service (DAS)", "Enterprise control plane for OPA and Gatekeeper",
         "Deploy Styra DAS to provide centralized policy authoring, Git integration, policy distribution, decision impact analysis, and compliance reporting.",
         "Maintain independent Git repositories for every individual developer's OPA configuration without centralized oversight.",
         "Disable policy change logging and allow developers to live-edit production OPA policies directly via curl.",
         "Store all enterprise policies in spreadsheet files distributed via email.",
         "Styra DAS (Declarative Authorization Service) serves as an enterprise control plane for OPA and Gatekeeper. It streamlines policy authoring, integrates with Git workflows for CI validation, distributes policy bundles globally, and provides detailed decision analytics across multi-cluster environments.",
         ["styra-das", "control-plane", "enterprise"]),

        ("Rego Performance and Indexing", "Optimizing rule evaluation for sub-millisecond latency",
         "Structure policies to take advantage of OPA's trie-based rule indexing by using constant equality checks (e.g., 'input.method == \"GET\"') as the first expression.",
         "Use unindexed linear scans across 1,000,000 unindexed elements in deep nested loops.",
         "Execute blocking external HTTP calls inside the middle of high-frequency authorization rules.",
         "Convert every JSON input payload to a giant string and perform regex matches.",
         "OPA's compiler optimizes evaluation performance by building trie indices for rules with constant equality expressions (e.g., matching on request path or method). Placing indexed equality checks first allows OPA to bypass non-matching rules immediately, maintaining microsecond-level latency.",
         ["performance", "indexing", "optimization"])
    ]

    q_id_counter = 1
    fc_id_counter = 1

    for pack_idx in range(1, 21):
        domain = pack_domains[pack_idx - 1]
        
        if domain["id"] == "d1":
            topics_pool = d1_topics
        elif domain["id"] == "d2":
            topics_pool = d2_topics
        else:
            topics_pool = d3_topics
            
        pack_questions = []
        pack_cards = []

        for i in range(25):
            topic_idx = (i + (pack_idx - 1) * 3) % len(topics_pool)
            title_prefix, scenario_core, correct_text, dist1, dist2, dist3, explanation, tags = topics_pool[topic_idx]
            context_title, context_desc = CONTEXTS[i]
            
            if i < 5:
                diff = "easy"
            elif i < 20:
                diff = "medium"
            else:
                diff = "hard"
                
            q_id = f"cncf-opa-{q_id_counter}"
            fc_id = f"cncf-opa-fc-{fc_id_counter}"
            
            target_slot = i % 4
            distractors = [dist1, dist2, dist3]
            
            options = []
            d_idx = 0
            for slot_idx in range(4):
                slot_id = chr(65 + slot_idx)
                if slot_idx == target_slot:
                    options.append({"id": slot_id, "text": correct_text})
                else:
                    options.append({"id": slot_id, "text": distractors[d_idx]})
                    d_idx += 1

            correct_letter = chr(65 + target_slot)
            
            scenario = f"In a {context_title.lower()} platform, {context_desc.lower()} The policy architecture team is currently {scenario_core.lower()} under production cluster cycle {pack_idx}.{i+1}."
            question_text = f"Which Rego policy implementation or Gatekeeper architecture satisfies these {context_title.lower()} requirements for {title_prefix.lower()}?"
            
            pack_questions.append({
                "id": q_id,
                "difficulty": diff,
                "certId": CERT_ID,
                "domainId": domain["id"],
                "domainName": domain["name"],
                "title": f"{title_prefix}: {context_title}",
                "scenario": scenario,
                "question": question_text,
                "options": options,
                "correctAnswers": [correct_letter],
                "type": "single",
                "explanation": explanation,
                "referenceUrl": REF_URL,
                "tags": tags + [context_title]
            })
            
            fc_front = f"CNCF OPA: {title_prefix} in {context_title}"
            fc_hint = f"Focus on {tags[0]} and {tags[1]} best practices."
            fc_back = f"<strong>{title_prefix}</strong>: {correct_text} Operational requirement: {explanation[:160]}..."
            
            pack_cards.append({
                "id": fc_id,
                "difficulty": diff,
                "certId": CERT_ID,
                "domainId": domain["id"],
                "front": fc_front,
                "hint": fc_hint,
                "back": fc_back,
                "tags": tags + [context_title]
            })
            
            q_id_counter += 1
            fc_id_counter += 1

        write_question_pack(CERT_ID, f"{EXPORT_PREFIX}_QUESTIONS", pack_idx, pack_questions)
        write_flashcard_pack(CERT_ID, f"{EXPORT_PREFIX}_FLASHCARDS", pack_idx, pack_cards)

    print(f"Generated 500 questions and 500 flashcards for {CERT_ID} across 20 packs.")

if __name__ == "__main__":
    build_opa_bank()
