#!/usr/bin/env python3
"""
Generator for CNCF Open Policy Agent Associate (COPAA) content:
- 500 questions (20 packs x 25)
- 500 flashcards (20 packs x 25)
"""
import os, json
from generate_content import write_question_pack, write_flashcard_pack, CONTEXTS, STAGES

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
        ("OPA Decoupled Policy Architecture", "Where Authorization Decisions Get Evaluated",
         "deciding where authorization decisions should be evaluated across a large service estate",
         "Deploy OPA as a sidecar or host daemon that queries local memory policy bundles using JSON input and returns structured authorization decisions.",
         "Run OPA as a central remote decision service that every application calls over the network, scaling the service horizontally behind a load balancer.",
         "Compile the Rego policies to WebAssembly and evaluate them inside each application process using the OPA Wasm SDK.",
         "Embed the OPA Go library directly in each service and evaluate policy in-process against the bundles it loads at startup.",
         "Running OPA next to the workload keeps evaluation in local memory, so decisions stay sub-millisecond and a policy change reaches every instance through a bundle poll rather than a redeploy. A central decision service reintroduces a network hop on the request path and makes authorization an availability dependency for every caller. The Wasm and Go-library approaches both evaluate in-process but bind the policy to each service's build and language, so a policy change means rebuilding and shipping the applications themselves.",
         ["opa", "architecture", "decoupling"]),

        ("Rego Rule Evaluation and OR Semantics", "Granting Access When Any One Condition Holds",
         "expressing several independent conditions where satisfying any one of them should grant access",
         "Define multiple rules with the same name (e.g., 'allow') so that OPA evaluates them as a logical OR, granting access if any single rule body evaluates to true.",
         "Define one 'allow' rule whose body lists every condition on its own line, since the expressions inside a single rule body are combined by OPA as a logical OR when it is evaluated.",
         "Define a partial set rule such as 'allow[msg]' for each condition and grant access whenever the resulting set is non-empty.",
         "Define a single 'allow' rule and join the individual conditions with the 'or' keyword placed between each expression in the rule body.",
         "Several complete rules sharing a name are a disjunction: OPA tries each in turn and the rule is true as soon as one body holds. Expressions inside a single body are the opposite, a conjunction, so listing the conditions together demands all of them at once. Rego has no 'or' keyword, so that policy fails to parse. A partial set rule is valid Rego but changes the shape of the decision from a boolean to a set, which the enforcement point is not reading.",
         ["rego", "syntax", "rules"]),

        ("Default Values and Safe Deny", "What Happens When No Rule Matches",
         "making sure a request that matches no rule is denied rather than left undefined",
         "Set 'default allow := false' at the top of the Rego package and write explicit allow conditions to ensure unauthorized requests fail closed.",
         "Write the allow rules with no default at all and have every enforcement point treat an undefined decision result as though it were an explicit denial.",
         "Add a catch-all rule 'allow := false' after the other allow rules so that it applies when none of them match.",
         "Set 'default allow := false' inside each allow rule body so that every rule carries its own fallback value independently.",
         "A default assignment gives the document a value whenever no rule body succeeds, so the policy itself guarantees the denial rather than delegating it. Relying on the caller to read undefined as deny works only while every caller does so, and a new integration that treats undefined as allow reopens the hole. A second unconditional 'allow := false' is a complete rule with a conflicting value and fails evaluation when another allow rule is also true, and 'default' is only legal at rule scope, not inside a body.",
         ["rego", "default", "security"]),

        ("Set and Array Comprehensions", "Building a Filtered Collection Inside a Rule",
         "deriving a filtered collection from nested input inside a single rule",
         "Use a comprehension such as '[user | some user in input.users; user.active]' to build the filtered collection declaratively in one expression.",
         "Use a partial set rule that assigns one element per matching input document and reference that rule from wherever the filtered collection is needed.",
         "Use the built-in 'filter' function with a predicate over input.users so that only the matching elements are returned.",
         "Iterate with a 'for user in input.users' loop and append each matching element to a local variable as it is found.",
         "A comprehension iterates, filters, and constructs the new collection as one expression whose value is local to the rule that needs it. A partial set rule is valid Rego and often the right choice, but it defines a document at package scope rather than a value inside the rule, so it is visible to every other rule and to the query. The other two options are not Rego at all: there is no 'filter' built-in, and the language has no imperative loop and no mutable local variable to append to.",
         ["rego", "comprehensions", "collections"]),

        ("Testing Rego with 'opa test'", "Verifying Policy Branches Before Release",
         "verifying that every branch of a policy behaves correctly before it reaches a cluster",
         "Create test rules prefixed with 'test_' in dedicated test files and execute 'opa test --coverage' using the 'with' keyword to mock 'input' and 'data'.",
         "Create test rules prefixed with 'test_' and run 'opa eval' against each policy file in turn, comparing each printed result against the expected value recorded in CI.",
         "Write the expected decisions into a JSON fixture and run 'opa check' over the whole policy directory to compare them against it.",
         "Run 'conftest verify' against the policy directory so that the Rego test rules execute as part of the Conftest tooling.",
         "'opa test' is the built-in test runner: it discovers the 'test_' rules, lets each one substitute input and data with 'with', and reports which policy lines never executed so untested branches are visible. 'opa eval' evaluates a query and prints a result but has no notion of pass or fail, so a CI job cannot gate on it without extra scripting. 'opa check' only parses and type-checks and never evaluates anything. 'conftest verify' does run Rego tests, but it reports no coverage and pulls in a second tool to do what the OPA CLI already does.",
         ["testing", "opa-test", "coverage"]),

        ("OPA Bundle API and Management", "Rolling a Policy Change Out Fleet-Wide",
         "rolling a policy change out to every running OPA instance without redeploying services",
         "Configure OPA to poll a central bundle service via the Bundle API, automatically downloading, validating, and activating signed policy tarballs in memory.",
         "Push each change to every OPA instance through the REST Policy API so that the new rules apply immediately without waiting for a bundle poll interval to elapse.",
         "Bake the policy bundle into the OPA container image and roll the deployment so that each instance restarts on the new version.",
         "Mount the policy directory from a shared volume and start OPA with the --watch flag so that it reloads the files when they change.",
         "Bundles are versioned, optionally signed, and activated atomically, and each instance reports the revision it is running through the status plugin, so a fleet-wide rollout is observable and verifiable. The REST Policy API pushes successfully but leaves no record of which revision any instance holds, and an instance that restarts loses the push entirely. Baking policy into the image ties every rule change to a container build and a rolling restart. The --watch flag reloads from local disk, which suits a developer laptop but offers no signing and no way to reach instances across a fleet.",
         ["bundles", "distribution", "operations"]),

        ("Decision Logging and Auditability", "Reconstructing Why a Request Was Denied",
         "reconstructing after the fact exactly why a particular request was denied",
         "Enable OPA Decision Logs to export structured JSON records of every query, input payload, and decision result to central security analytics.",
         "Run OPA with the --log-level debug flag so that evaluation detail for each query appears on the container's standard output.",
         "Enable OPA's status plugin so that the central service receives bundle activation and health information from every instance.",
         "Add a print() call inside each Rego rule so that the reason for a denial is written out to the OPA server log whenever that rule fires.",
         "Decision logs record the query, the full input, the result, and the bundle revision that produced it, which is exactly the set of facts needed to explain a past decision, and they can be masked and shipped to a SIEM. Debug logging prints evaluation detail but is unstructured, unmasked, and far too voluminous to leave enabled in production. The status plugin reports which bundle an instance is running and nothing about individual decisions. print() emits a line only where an author remembered to add one and carries no input or result alongside it.",
         ["decision-logs", "audit", "compliance"])
    ]

    d2_topics = [
        ("Gatekeeper ConstraintTemplates", "Making One Policy Reusable With Parameters",
         "packaging a policy so that several teams can apply it with different values",
         "Define a ConstraintTemplate containing an openAPIV3Schema specification for parameters and the embedded Rego policy logic under 'targets'.",
         "Define a ValidatingAdmissionPolicy with a CEL expression and bind it to the target namespaces through a policy binding resource.",
         "Define a ConstraintTemplate whose Rego reads its parameter values from a ConfigMap mounted into the Gatekeeper controller pod.",
         "Define a separate Constraint for each variation and place the differing values directly in the Rego source of each one.",
         "The ConstraintTemplate declares both the Rego and the openAPIV3Schema for its parameters, which generates a CRD so each Constraint supplies typed values that Gatekeeper validates. ValidatingAdmissionPolicy is a real Kubernetes feature and a genuine alternative, but it is the built-in CEL mechanism rather than Gatekeeper, so it uses none of the existing Rego or constraint tooling. Gatekeeper passes parameters through the Constraint spec and does not read them from ConfigMaps, and copying the Rego per variation abandons the reuse the template exists to provide.",
         ["gatekeeper", "constraint-template", "k8s"]),

        ("Gatekeeper Constraints and Match Criteria", "Scoping a Policy to Certain Namespaces",
         "applying an existing policy to only some namespaces and resource kinds",
         "Create a Constraint custom resource that references the ConstraintTemplate and specifies 'match' criteria (kinds, namespaces, label selectors) and parameter values.",
         "Add namespace comparisons to the Rego inside the ConstraintTemplate so that the rule simply returns no violation for any object outside the intended set of namespaces.",
         "Set a namespaceSelector on the Gatekeeper ValidatingWebhookConfiguration so that the API server only forwards matching namespaces.",
         "Label the namespaces that should be skipped and list every one of them in the Gatekeeper controller's --exempt-namespace flag at startup.",
         "The Constraint is where scope belongs: its match block filters by kind, namespace, and label selector, and changing scope is an edit to one resource that the audit runner immediately reflects. Encoding namespaces in the Rego forces a template change, and therefore a change for every other Constraint built on it, whenever scope shifts. The webhook's namespaceSelector and the --exempt-namespace flag both act on the whole Gatekeeper installation at once, so narrowing one policy would silently narrow every policy alongside it.",
         ["gatekeeper", "constraints", "admission"]),

        ("Gatekeeper Enforcement Actions", "Introducing a Policy Without Blocking Teams",
         "introducing a new policy across a busy cluster without blocking teams on day one",
         "Set 'enforcementAction: dryrun' or 'enforcementAction: warn' to evaluate and log policy violations without blocking engineering deployments.",
         "Deploy the Constraint with a match block that initially selects one pilot namespace and widen the selector as teams come into compliance.",
         "Leave enforcementAction at deny and rely on the Gatekeeper audit pod to report the violations before the webhook is switched on.",
         "Write the ConstraintTemplate's Rego so that each violation message begins with the word warning, which causes admission to allow the request.",
         "dryrun and warn keep the constraint applied cluster-wide while removing the block, so the violation list in the Constraint status is a complete picture of what deny would reject. Piloting through the match block also avoids blocking anyone, but it only reveals violations inside the pilot namespace, so the blast radius of full enforcement stays unknown. Leaving the action at deny blocks every non-compliant request the moment the webhook is reachable. The text of a violation message has no effect on enforcement, which is governed solely by enforcementAction.",
         ["gatekeeper", "enforcement-action", "rollout"]),

        ("Gatekeeper Audit Runner", "Finding Resources That Predate a Policy",
         "finding resources that were already running before a new policy was written",
         "Rely on the Gatekeeper audit pod to periodically scan all existing cluster resources and populate non-compliance violations in Constraint status fields.",
         "Use 'gator test' against a full set of manifests exported from the cluster with kubectl so that the resources already running are checked offline in the pipeline.",
         "Rely on the validating webhook, which the API server invokes for every resource that currently exists in the cluster.",
         "Set enforcementAction to deny so that resources already running are evicted automatically the next time the Gatekeeper controller reconciles them.",
         "The audit runner exists precisely for this gap: it re-evaluates live objects on an interval and writes what it finds into each Constraint's status, with no action required from the teams that own them. Exporting manifests and running gator over them does produce the same answer once, but it is a manual snapshot that goes stale immediately. The webhook is only called on create and update requests, so an object admitted before the policy existed is never re-examined. Enforcement actions apply to admission and never evict or modify workloads that are already running.",
         ["gatekeeper", "audit", "compliance"]),

        ("Gatekeeper Mutation Webhook", "Applying a Required Default Automatically",
         "applying a required default to incoming workloads without every team editing manifests",
         "Configure Gatekeeper Assign or AssignMetadata resources to inject standard security contexts or default labels into incoming pods automatically.",
         "Configure a Kubernetes MutatingAdmissionPolicy with a CEL expression that patches the missing field during the admission request.",
         "Configure a Constraint that denies any pod missing the field so that each team adds the required value to its own manifests.",
         "Configure a PodPreset resource that merges the default security context into every pod that matches a given namespace and label selector.",
         "Assign and AssignMetadata are Gatekeeper's mutation resources, applied before validation, so the default lands on the object without any manifest changing. A CEL-based MutatingAdmissionPolicy achieves the same outcome through the Kubernetes built-in path and is a reasonable alternative, though it sits outside Gatekeeper and its constraint tooling. Denying instead of mutating does eventually produce compliance, but only after every team edits every manifest, which is the work being avoided. PodPreset was removed from Kubernetes in version 1.20 and no longer exists.",
         ["gatekeeper", "mutation", "admission"]),

        ("Shift-Left Policy Testing with 'gator'", "Catching Violations Before the Cluster Sees Them",
         "catching constraint violations in a pull request rather than at admission time",
         "Use the 'gator' CLI tool in developer environments and CI pipelines to test Kubernetes manifests against ConstraintTemplates before applying to clusters.",
         "Use 'kubectl apply --dry-run=server' in the pipeline so that the API server runs the Gatekeeper admission webhook for real without ever persisting the object.",
         "Use 'conftest test' in CI with the Rego extracted out of each ConstraintTemplate to check the manifests directly.",
         "Use 'opa test' against the Rego embedded in each ConstraintTemplate so that the policy's own unit tests run on every pull request.",
         "gator evaluates a manifest against the ConstraintTemplate and its Constraints together, honouring match criteria and parameters, and it needs no cluster at all, so it runs in a pull request in seconds. Server-side dry run genuinely exercises the real webhook, but it requires a reachable cluster with the constraints already installed, which is the dependency shift-left testing is trying to remove. Extracting the Rego for conftest drops the match criteria and parameter wiring that decide whether the policy even applies. 'opa test' checks the policy's own logic rather than the manifests under review.",
         ["gator", "shift-left", "ci-cd"]),

        ("ValidatingWebhookConfiguration Failure Policy", "Behaviour When the Policy Webhook Is Unreachable",
         "deciding how admission should behave while the policy webhook is unreachable",
         "Configure 'failurePolicy: Fail' for critical security policies, or 'failurePolicy: Ignore' with strict alerting when prioritizing cluster availability.",
         "Configure 'failurePolicy: Ignore' everywhere and rely on the audit pod to report anything that was admitted while the webhook was down.",
         "Configure 'failurePolicy: Fail' everywhere and raise timeoutSeconds so that a slow webhook response is not treated as an outright failure.",
         "Configure a namespaceSelector that excludes kube-system so that a webhook outage cannot prevent control plane components from starting.",
         "failurePolicy is the availability-versus-enforcement dial, and the answer differs per policy, so critical security constraints are worth failing closed for while others should not be able to halt deployments. Setting Ignore everywhere converts every outage into a silent enforcement gap, and although the audit runner reports it afterwards the non-compliant object is already admitted. A longer timeout helps with slowness but does nothing when the webhook is genuinely unreachable. Excluding kube-system is sound practice for avoiding deadlock but leaves the question of every other namespace unanswered.",
         ["admission-webhook", "failure-policy", "k8s"])
    ]

    d3_topics = [
        ("Conftest for Infrastructure as Code", "Policy Checks on Terraform and Dockerfiles",
         "applying the same Rego guardrails to Terraform plans and Dockerfiles in CI",
         "Use Conftest in CI pipelines to execute Rego policies against parsed Terraform plan JSON and Dockerfile ASTs before merging PRs.",
         "Use 'opa eval' in CI with the Terraform plan JSON supplied as the input document so that the same Rego policies are evaluated.",
         "Use Gatekeeper's gator CLI against the Terraform plan so that the ConstraintTemplates already in the cluster apply to infrastructure code.",
         "Use 'terraform validate' together with a validation block in each module to enforce the organisation's rules at plan time.",
         "Conftest parses many configuration formats into the JSON that Rego expects, so one policy set covers Terraform plans, Dockerfiles, and Helm output, and it brings a test harness and exit codes CI can gate on. 'opa eval' does evaluate the same policy against a plan that has already been converted to JSON, but it handles only that one format and leaves the parsing and pass-fail logic to be scripted. gator understands Kubernetes manifests and constraint resources, not Terraform. A validation block only constrains a module's own input variables and cannot express organisation-wide rules.",
         ["conftest", "iac", "ci-cd"]),

        ("Microservice Authorization with Envoy and ExtAuthz", "Uniform API Authorization at the Proxy Layer",
         "enforcing consistent request-level authorization without changing every service",
         "Configure Envoy's 'envoy.filters.http.ext_authz' filter to query OPA via gRPC or HTTP, passing headers, paths, and methods for real-time access decisions.",
         "Configure Envoy's built-in RBAC filter with explicit principals and permissions so that the proxy evaluates the access rules itself without any external call.",
         "Configure Envoy's JWT authentication filter to validate each token and forward the verified claims on to the upstream service.",
         "Configure an Envoy Lua filter that calls OPA's REST API from a script executed on every inbound request before it is proxied.",
         "The ext_authz filter is the supported extension point for delegating an allow-or-deny decision, and pointing it at OPA over gRPC keeps rich Rego policy outside the proxy while adding only a local hop. The RBAC filter evaluates in-proxy with no external call but expresses far less than Rego and has to be redeployed with the Envoy configuration for every rule change. The JWT filter establishes who the caller is and stops there, leaving the authorization decision unmade. A Lua filter can reach OPA's REST API and works, but it is hand-written glue on the request path where ext_authz is purpose-built.",
         ["envoy", "ext-authz", "service-mesh"]),

        ("Kafka Topic Authorization with OPA", "Per-Topic Access Control on a Message Broker",
         "controlling which client identities may produce to or consume from each topic",
         "Deploy the OPA Kafka authorizer plugin to intercept produce and consume requests, verifying topic names, client identities, and operation types.",
         "Configure Kafka to authenticate clients with mTLS and map each certificate subject onto a topic name prefix in the broker configuration.",
         "Configure Kafka's built-in AclAuthorizer and manage the per-topic ACLs with the 'kafka-acls.sh' tool as teams request access.",
         "Deploy OPA as a sidecar beside each Kafka client and have the application check its own permission before it produces a message.",
         "The OPA authorizer plugs into the broker's authorizer interface, so every produce and consume request is checked at the broker itself against Rego that can consider the principal, the operation, and the topic together. Prefix-mapped mTLS establishes identity and a naming convention but expresses no rules about operations. The built-in AclAuthorizer does enforce at the broker and is the standard alternative, at the cost of managing ACL entries per topic per principal rather than writing one rule. Checking in a client-side sidecar leaves the broker itself unprotected against any client that skips the check.",
         ["kafka", "messaging", "authorization"]),

        ("Styra Declarative Authorization Service (DAS)", "Central Control Plane for Many OPA Deployments",
         "managing policy authoring, distribution, and reporting across many OPA deployments",
         "Deploy Styra DAS to provide centralized policy authoring, Git integration, policy distribution, decision impact analysis, and compliance reporting.",
         "Store the policies in a Git repository and build the signed bundles in CI, publishing each one to the bundle endpoint that serves its own environment.",
         "Host the policy bundles in an object storage bucket and point every OPA instance's bundle plugin at that same bucket location.",
         "Use the OPA REST API's query and decision log endpoints to assemble internal dashboards that show policy activity over time.",
         "DAS is a control plane rather than a distribution mechanism: alongside bundle delivery it provides authoring with validation, replay of recorded decisions against a proposed policy before it ships, and compliance reporting across every connected system. Git plus CI publishing is a sound GitOps pattern and covers distribution well, but impact analysis and cross-cluster reporting remain to be built. An object storage bucket covers distribution alone. The REST endpoints expose the raw data that dashboards could be built from, which is the work a control plane removes.",
         ["styra-das", "control-plane", "enterprise"]),

        ("Rego Performance and Indexing", "Keeping Evaluation Fast at High Query Rates",
         "keeping per-query evaluation latency low as the policy and query rate grow",
         "Structure policies to take advantage of OPA's trie-based rule indexing by using constant equality checks (e.g., 'input.method == \"GET\"') as the first expression.",
         "Compile the policy to WebAssembly with 'opa build -t wasm' so that each evaluation runs as compiled code inside the host process rather than interpreted Rego.",
         "Move the large lookup tables out of the policy and fetch them per query with 'http.send' so that less data is held in memory.",
         "Raise the OPA server's worker count so that a larger number of authorization queries can be evaluated in parallel across the available cores.",
         "Rule indexing is what lets OPA skip whole rules without evaluating them: a constant equality check in the first expression lets the compiler build a trie on that value, so a policy with hundreds of rules costs about what a handful would. Compiling to Wasm changes how each expression executes but still walks every rule the index would have skipped. Replacing in-memory data with an http.send per query adds a network round trip to the hot path and is the single most damaging thing a policy can do to latency. More workers raise throughput while leaving per-query latency exactly as it was.",
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
            title_prefix, challenge, scenario_core, correct_text, dist1, dist2, dist3, explanation, tags = topics_pool[topic_idx]
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
            
            scenario = f"{context_desc} The policy team is {scenario_core}. The work is scoped to {STAGES[(pack_idx - 1) % len(STAGES)]}."
            question_text = "Which policy approach best meets these requirements?"
            
            pack_questions.append({
                "id": q_id,
                "difficulty": diff,
                "certId": CERT_ID,
                "domainId": domain["id"],
                "domainName": domain["name"],
                "title": f"{challenge}: {context_title}",
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
