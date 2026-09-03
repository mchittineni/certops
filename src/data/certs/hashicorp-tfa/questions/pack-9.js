export const HASHICORP_TFA_QUESTIONS_9 = [
  {
    id: "hashicorp-tfa-201",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "Local Values (locals) for DRY Expressions",
    scenario: "A developer uses the expression `\"${var.project}-${var.environment}-${var.region}\"` repeatedly across 25 different resource blocks.",
    question: "Which Terraform feature assigns a reusable local name to a computed expression to adhere to the DRY (Don't Repeat Yourself) principle?",
    options: [
      { id: 'A', text: "data \"local_expression\"" },
      { id: 'B', text: "Computed variables block" },
      { id: 'C', text: "locals block (e.g. locals { name_prefix = \"${var.project}-${var.environment}-${var.region}\" })" },
      { id: 'D', text: "Global variables block" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "`locals` blocks define local values. Unlike input variables which accept external values, locals hold internal intermediate values and expressions, reducing duplication and making complex code easier to maintain.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/values/locals",
    tags: ["Terraform HCL", "locals", "DRY Principles"]
  },
  {
    id: "hashicorp-tfa-202",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "Data Sources: Querying Existing Infrastructure (data Blocks)",
    scenario: "A configuration needs to find the latest official Ubuntu 22.04 LTS AMI ID in the current AWS region without hardcoding static AMI IDs in code.",
    question: "Which Terraform construct queries external APIs for read-only infrastructure information?",
    options: [
      { id: 'A', text: "import block" },
      { id: 'B', text: "resource block" },
      { id: 'C', text: "variable block" },
      { id: 'D', text: "data block (e.g. data \"aws_ami\" \"ubuntu\" { ... })" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "`data` blocks declare data sources. Data sources allow Terraform to query external APIs or cloud providers for read-only information (e.g. latest AMIs, existing VPC IDs, AZ names) and make those attributes available to other resources.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/data-sources",
    tags: ["Terraform HCL", "Data Sources", "data Blocks"]
  },
  {
    id: "hashicorp-tfa-203",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "Dynamic Blocks for Nested Argument Generation (dynamic)",
    scenario: "A security group requires 10 distinct `ingress` rule blocks generated dynamically from a list of port numbers.",
    question: "Which HCL feature generates repeated nested configuration blocks inside a resource?",
    options: [
      { id: 'A', text: "count on the nested block" },
      { id: 'B', text: "while loop block" },
      { id: 'C', text: "dynamic block (e.g. dynamic \"ingress\" { for_each = var.ports content { ... } })" },
      { id: 'D', text: "for_each directly on the resource block alone" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "`dynamic` blocks allow generating repeated nested blocks inside a resource (such as `ingress` in security groups, or `tag` blocks). The `for_each` argument iterates over a collection, rendering a nested block for each item.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/dynamic-blocks",
    tags: ["Terraform HCL", "Dynamic Blocks", "Nested Blocks"]
  },
  {
    id: "hashicorp-tfa-204",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "Dynamic Block Custom Iterator Name",
    scenario: "A developer uses a dynamic block to construct complex nested rules. By default, the element value is accessed via `ingress.value`.",
    question: "Which argument inside a dynamic block customizes the iterator label from the default block name?",
    options: [
      { id: 'A', text: "iterator (e.g. iterator = port_rule, allowing port_rule.value)" },
      { id: 'B', text: "variable = port_rule" },
      { id: 'C', text: "alias = port_rule" },
      { id: 'D', text: "as = port_rule" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The `iterator` argument in a `dynamic` block renames the temporary variable representing the current iteration item (e.g. `iterator = port_rule`), improving readability when nesting dynamic blocks.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/dynamic-blocks#iterator",
    tags: ["Terraform HCL", "Dynamic Blocks", "iterator Argument"]
  },
  {
    id: "hashicorp-tfa-205",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "List For Expressions ([for x in list : expr])",
    scenario: "A variable `var.subnets` contains a list of lowercase subnet names: `[\"subnet-a\", \"subnet-b\"]`.",
    question: "Which HCL for expression transforms this list into uppercase strings: `[\"SUBNET-A\", \"SUBNET-B\"]`?",
    options: [
      { id: 'A', text: "{for s in var.subnets : upper(s)}" },
      { id: 'B', text: "[for s in var.subnets : upper(s)]" },
      { id: 'C', text: "map(upper, var.subnets)" },
      { id: 'D', text: "var.subnets.map(s => upper(s))" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A `for expression` enclosed in square brackets `[for x in list : expr]` transforms an input collection into a new `tuple/list`. Here, `[for s in var.subnets : upper(s)]` iterates over each item and returns an uppercase list.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/for",
    tags: ["Terraform HCL", "For Expressions", "Lists"]
  },
  {
    id: "hashicorp-tfa-206",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "Map For Expressions ({for k, v in map : k => v})",
    scenario: "A developer transforms a list of usernames `[\"alice\", \"bob\"]` into a map where the key is the username and value is a default department `\"engineering\"`.",
    question: "Which HCL for expression produces this map: `{\"alice\" = \"engineering\", \"bob\" = \"engineering\"}`?",
    options: [
      { id: 'A', text: "map(\"alice\", \"bob\", \"engineering\")" },
      { id: 'B', text: "dict(name, \"engineering\")" },
      { id: 'C', text: "[for name in [\"alice\", \"bob\"] : name => \"engineering\"]" },
      { id: 'D', text: "{for name in [\"alice\", \"bob\"] : name => \"engineering\"}" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A `for expression` enclosed in curly braces `{for x in list : key => value}` produces a `map/object`. The `=>` operator separates the computed key from the computed value for each entry.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/for",
    tags: ["Terraform HCL", "For Expressions", "Maps"]
  },
  {
    id: "hashicorp-tfa-207",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "For Expression Filtering with if Clause",
    scenario: "A list of numbers `[10, 15, 20, 25, 30]` needs to be filtered to include only numbers greater than 18.",
    question: "Which HCL expression applies conditional filtering during iteration?",
    options: [
      { id: 'A', text: "[for n in [10, 15, 20, 25, 30] where n > 18]" },
      { id: 'B', text: "[for n in [10, 15, 20, 25, 30] : n ? n > 18]" },
      { id: 'C', text: "[for n in [10, 15, 20, 25, 30] : n if n > 18]" },
      { id: 'D', text: "filter([10, 15, 20, 25, 30], n > 18)" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "HCL `for expressions` support an optional trailing `if` clause: `[for x in list : expr if condition]`. Elements that evaluate to `false` in the condition are omitted from the resulting collection.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/for#filtering-elements",
    tags: ["Terraform HCL", "For Expressions", "if Filtering"]
  },
  {
    id: "hashicorp-tfa-208",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "Splat Expressions for Attribute Extraction ([*])",
    scenario: "A resource `aws_instance.web` is declared with `count = 3`.",
    question: "Which concise HCL splat expression returns a list of all three EC2 instance IDs?",
    options: [
      { id: 'A', text: "aws_instance.web[*].id" },
      { id: 'B', text: "aws_instance.web[all].id" },
      { id: 'C', text: "aws_instance.web.*.id" },
      { id: 'D', text: "aws_instance.web.id[*]" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The modern splat operator `[*]` extracts a specific attribute from all elements of a list or resource with `count`: `aws_instance.web[*].id` is equivalent to `[for i in aws_instance.web : i.id]`.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/splat",
    tags: ["Terraform HCL", "Splat Expressions", "Attribute Projection"]
  },
  {
    id: "hashicorp-tfa-209",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "Conditional (Ternary) Expressions (condition ? true : false)",
    scenario: "An enterprise uses a variable `var.environment` set to either `\"prod\"` or `\"dev\"`. Virtual machines in prod must use `m5.large`, while dev uses `t3.micro`.",
    question: "Which HCL ternary expression assigns the appropriate instance type?",
    options: [
      { id: 'A', text: "var.environment == \"prod\" ? \"m5.large\" : \"t3.micro\"" },
      { id: 'B', text: "switch(var.environment, \"prod\" => \"m5.large\", \"t3.micro\")" },
      { id: 'C', text: "case(var.environment, \"prod\", \"m5.large\", \"t3.micro\")" },
      { id: 'D', text: "if var.environment == \"prod\" then \"m5.large\" else \"t3.micro\"" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Terraform supports standard ternary conditional expressions: `condition ? true_val : false_val`. Both branch expressions must evaluate to compatible types.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/conditionals",
    tags: ["Terraform HCL", "Conditionals", "Ternary Expressions"]
  },
  {
    id: "hashicorp-tfa-210",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "Templatefile Function for External Template Rendering",
    scenario: "A user_data bash script requires injecting a database host URL and port dynamically from Terraform.",
    question: "Which built-in function reads an external file on disk and renders it with template variables?",
    options: [
      { id: 'A', text: "template(\"scripts/init.sh.tftpl\", { ... })" },
      { id: 'B', text: "templatefile(\"scripts/init.sh.tftpl\", { db_host = aws_db_instance.db.address, port = 5432 })" },
      { id: 'C', text: "render(\"scripts/init.sh.tftpl\", { ... })" },
      { id: 'D', text: "file(\"scripts/init.sh.tftpl\", { ... })" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "`templatefile(path, vars)` reads a template file from disk, evaluates any string interpolations or directives (`${...}`, `%{if...}`, `%{for...}`) using the provided variables map, and returns the rendered string.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/templatefile",
    tags: ["Terraform Functions", "templatefile", "Templates"]
  },
  {
    id: "hashicorp-tfa-211",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "file Function vs templatefile Function",
    scenario: "A developer needs to read a static public SSH key file from disk without performing any variable interpolations.",
    question: "Which built-in function reads the raw contents of a local file as an unparsed string?",
    options: [
      { id: 'A', text: "templatefile(\"~/.ssh/id_rsa.pub\")" },
      { id: 'B', text: "file(\"~/.ssh/id_rsa.pub\")" },
      { id: 'C', text: "cat(\"~/.ssh/id_rsa.pub\")" },
      { id: 'D', text: "read(\"~/.ssh/id_rsa.pub\")" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The `file(path)` function reads the exact, raw contents of a file as a string without parsing or evaluating any interpolations. In contrast, `templatefile` evaluates variables within the template.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/file",
    tags: ["Terraform Functions", "file()", "File Reading"]
  },
  {
    id: "hashicorp-tfa-212",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "jsonencode and jsondecode Functions",
    scenario: "An IAM policy document must be passed to an AWS resource argument as a valid JSON string. A developer defines the policy as a native HCL map/object.",
    question: "Which built-in function converts an HCL object into a valid JSON-formatted string?",
    options: [
      { id: 'A', text: "tojson({ ... })" },
      { id: 'B', text: "stringify({ ... })" },
      { id: 'C', text: "jsonencode({ Version = \"2012-10-17\", Statement = [...] })" },
      { id: 'D', text: "formatjson({ ... })" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "`jsonencode(value)` translates an HCL structure (maps, lists, strings, booleans) into a valid JSON-encoded string. Conversely, `jsondecode(string)` parses a JSON string back into an HCL structure.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/jsonencode",
    tags: ["Terraform Functions", "jsonencode", "JSON Processing"]
  },
  {
    id: "hashicorp-tfa-213",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "flatten Function for Nested Lists",
    scenario: "A developer has a nested list of lists: `[[1, 2], [3, 4], [5]]`.",
    question: "Which function flattens the hierarchy into a single one-dimensional list `[1, 2, 3, 4, 5]`?",
    options: [
      { id: 'A', text: "collapse([[1, 2], [3, 4], [5]])" },
      { id: 'B', text: "merge([[1, 2], [3, 4], [5]])" },
      { id: 'C', text: "distinct([[1, 2], [3, 4], [5]])" },
      { id: 'D', text: "flatten([[1, 2], [3, 4], [5]])" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "`flatten(list)` eliminates all nested list layers, returning a single flat list containing all scalar elements, commonly used to process nested subnet or firewall definitions.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/flatten",
    tags: ["Terraform Functions", "flatten()", "Collection Processing"]
  },
  {
    id: "hashicorp-tfa-214",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "merge Function for Combining Maps",
    scenario: "A module has common default tags `locals { common_tags = { ManagedBy = \"Terraform\", Project = \"Ops\" } }` and resource-specific tags `var.custom_tags = { Tier = \"Web\" }`.",
    question: "Which function combines these two maps into a single unified map of tags?",
    options: [
      { id: 'A', text: "merge(local.common_tags, var.custom_tags)" },
      { id: 'B', text: "concat(local.common_tags, var.custom_tags)" },
      { id: 'C', text: "local.common_tags + var.custom_tags" },
      { id: 'D', text: "combine(local.common_tags, var.custom_tags)" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`merge(map1, map2, ...)` takes one or more maps or objects and returns a single map containing the union of keys. If duplicate keys exist, values from later arguments override earlier ones.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/merge",
    tags: ["Terraform Functions", "merge()", "Map Combination"]
  },
  {
    id: "hashicorp-tfa-215",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "concat Function for Combining Lists",
    scenario: "A developer has two separate lists of security group IDs: `local.app_sgs = [\"sg-1\"]` and `local.db_sgs = [\"sg-2\", \"sg-3\"]`.",
    question: "Which function joins these two lists into a single concatenated list `[\"sg-1\", \"sg-2\", \"sg-3\"]`?",
    options: [
      { id: 'A', text: "join(local.app_sgs, local.db_sgs)" },
      { id: 'B', text: "merge(local.app_sgs, local.db_sgs)" },
      { id: 'C', text: "append(local.app_sgs, local.db_sgs)" },
      { id: 'D', text: "concat(local.app_sgs, local.db_sgs)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "`concat(list1, list2, ...)` combines two or more lists into a single list. (In contrast, `merge` is used for maps, while `concat` is used for lists).",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/concat",
    tags: ["Terraform Functions", "concat()", "List Processing"]
  },
  {
    id: "hashicorp-tfa-216",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "lookup Function with Default Fallbacks",
    scenario: "A map variable `var.ami_map` contains mappings for regions `us-east-1` and `us-west-2`. If a user passes `eu-central-1`, Terraform should return a fallback AMI `\"ami-default\"`.",
    question: "Which function retrieves a map value by key while safely supplying a fallback default value if the key is missing?",
    options: [
      { id: 'A', text: "var.ami_map[\"eu-central-1\"] || \"ami-default\"" },
      { id: 'B', text: "find(var.ami_map, \"eu-central-1\", \"ami-default\")" },
      { id: 'C', text: "lookup(var.ami_map, \"eu-central-1\", \"ami-default\")" },
      { id: 'D', text: "get(var.ami_map, \"eu-central-1\", \"ami-default\")" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "`lookup(map, key, default)` retrieves the value of a single element from a map. If the key does not exist, it returns the provided default fallback value instead of failing with an error.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/lookup",
    tags: ["Terraform Functions", "lookup()", "Map Access"]
  },
  {
    id: "hashicorp-tfa-217",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "element Function and Safe Modulo Wrapping",
    scenario: "A cluster provisions 5 virtual machines across 2 availability zones `[\"zone-a\", \"zone-b\"]`. As the instance index increments from 0 to 4, zones should wrap around sequentially (`zone-a`, `zone-b`, `zone-a`, `zone-b`, `zone-a`).",
    question: "Which function retrieves elements by index with automatic modulo wrapping?",
    options: [
      { id: 'A', text: "slice([\"zone-a\", \"zone-b\"], count.index)" },
      { id: 'B', text: "get([\"zone-a\", \"zone-b\"], count.index)" },
      { id: 'C', text: "element([\"zone-a\", \"zone-b\"], count.index)" },
      { id: 'D', text: "lookup([\"zone-a\", \"zone-b\"], count.index)" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "`element(list, index)` retrieves the value at the specified index. Crucially, if the index exceeds the list length, it performs a modulo operation (`index % length`), wrapping around safely without out-of-bounds errors.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/element",
    tags: ["Terraform Functions", "element()", "Modulo Indexing"]
  },
  {
    id: "hashicorp-tfa-218",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "distinct and compact Functions for List Sanitization",
    scenario: "A list of IP addresses contains duplicates and empty strings: `[\"10.0.0.1\", \"\", \"10.0.0.2\", \"10.0.0.1\", \"\"]`.",
    question: "Which two functions remove duplicate elements and strip empty string entries respectively?",
    options: [
      { id: 'A', text: "distinct() removes duplicates; compact() removes empty string elements" },
      { id: 'B', text: "sanitize() and dedupe()" },
      { id: 'C', text: "unique() and clean()" },
      { id: 'D', text: "compact() removes duplicates; distinct() removes empty strings" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`distinct(list)` removes duplicate entries from a list, preserving first-seen order. `compact(list)` removes all empty string (`\"\"`) elements from a list of strings.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/compact",
    tags: ["Terraform Functions", "compact() and distinct()", "Data Cleaning"]
  },
  {
    id: "hashicorp-tfa-219",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "join and split Functions for String/List Conversion",
    scenario: "A comma-separated string `\"10.0.1.0/24,10.0.2.0/24,10.0.3.0/24\"` needs to be converted into a list of strings.",
    question: "Which function splits a string into a list using a delimiter character?",
    options: [
      { id: 'A', text: "explode(\",\", ...)" },
      { id: 'B', text: "tolist(\",\", ...)" },
      { id: 'C', text: "tokenize(\",\", ...)" },
      { id: 'D', text: "split(\",\", \"10.0.1.0/24,10.0.2.0/24,10.0.3.0/24\")" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "`split(separator, string)` divides a string into a list of substrings using a delimiter. Conversely, `join(separator, list)` concatenates a list of strings into a single string separated by the delimiter.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/split",
    tags: ["Terraform Functions", "split() and join()", "String Manipulation"]
  },
  {
    id: "hashicorp-tfa-220",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "toset Function: Converting Lists to Sets for for_each",
    scenario: "A developer attempts to pass a list of strings `[\"web\", \"api\", \"db\"]` directly to `for_each` on a resource block. Terraform errors because `for_each` requires a map or set.",
    question: "Which function converts the list of strings into an unordered set with unique elements?",
    options: [
      { id: 'A', text: "as_set([\"web\", \"api\", \"db\"])" },
      { id: 'B', text: "set([\"web\", \"api\", \"db\"])" },
      { id: 'C', text: "tomap([\"web\", \"api\", \"db\"])" },
      { id: 'D', text: "toset([\"web\", \"api\", \"db\"])" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "`toset(list)` converts a list to a `set` of values, stripping duplicates. Because `for_each` on resources requires a map or set of strings, wrapping lists in `toset()` is standard practice.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/toset",
    tags: ["Terraform Functions", "toset()", "Type Conversion"]
  },
  {
    id: "hashicorp-tfa-221",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "try Function for Graceful Error Handling",
    scenario: "A developer parses an input object that may or may not have a nested attribute `spec.database.credentials.port`.",
    question: "Which function evaluates multiple expressions in order and returns the first one that does not result in an error?",
    options: [
      { id: 'A', text: "fallback(var.config.spec.database.credentials.port, 5432)" },
      { id: 'B', text: "try(var.config.spec.database.credentials.port, 5432)" },
      { id: 'C', text: "catch(var.config.spec.database.credentials.port, 5432)" },
      { id: 'D', text: "can(var.config.spec.database.credentials.port, 5432)" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "`try(expr1, expr2, ...)` evaluates expressions in sequence and returns the result of the first expression that succeeds without errors, commonly used to provide defaults for optional nested object structures.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/try",
    tags: ["Terraform Functions", "try()", "Error Handling"]
  },
  {
    id: "hashicorp-tfa-222",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "can Function vs try Function",
    scenario: "A developer evaluates error-handling strategies in HashiCorp Configuration Language.",
    question: "What is the difference in return types between the can() function and the try() function in HCL?",
    options: [
      { id: 'A', text: "There is no difference; they are aliases" },
      { id: 'B', text: "can() is only used in provisioners; try() is used in variables" },
      { id: 'C', text: "can() returns a boolean (true if the expression evaluates without error, false otherwise); try() returns the actual evaluated value of the first succeeding expression" },
      { id: 'D', text: "can() returns a string; try() returns an integer" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "`can(expr)` returns a boolean `true` or `false` indicating whether an expression produces an error (used in `validation` blocks). `try(...)` returns the actual computed value of the first non-failing expression.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/can",
    tags: ["Terraform Functions", "can() vs. try()", "Functions"]
  },
  {
    id: "hashicorp-tfa-223",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "format and formatdate Functions",
    scenario: "A developer needs to format a server hostname string with zero-padded numbers: `web-server-01`, `web-server-02`.",
    question: "Which function formats strings according to standard C-style sprintf specification strings?",
    options: [
      { id: 'A', text: "format(\"web-server-%02d\", count.index + 1)" },
      { id: 'B', text: "template(\"web-server-%02d\", count.index + 1)" },
      { id: 'C', text: "sprintf(\"web-server-%02d\", count.index + 1)" },
      { id: 'D', text: "concat(\"web-server-\", count.index + 1)" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`format(spec, values...)` formats a string according to standard `printf` format specifications (e.g. `%02d` for zero-padded two-digit integers, `%s` for strings).",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/format",
    tags: ["Terraform Functions", "format()", "String Formatting"]
  },
  {
    id: "hashicorp-tfa-224",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "formatdate Function for Human-Readable Timestamps",
    scenario: "An engineer needs to tag a snapshot with the current creation date in `YYYY-MM-DD` format using the `timestamp()` function.",
    question: "Which function formats a timestamp string into custom date/time layouts?",
    options: [
      { id: 'A', text: "dateformat(\"YYYY-MM-DD\", timestamp())" },
      { id: 'B', text: "strftime(\"YYYY-MM-DD\", timestamp())" },
      { id: 'C', text: "formatdate(\"YYYY-MM-DD\", timestamp())" },
      { id: 'D', text: "time_format(\"YYYY-MM-DD\", timestamp())" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "`formatdate(spec, timestamp)` converts an RFC 3339 timestamp into a custom human-readable date string according to specified format symbols (`YYYY`, `MM`, `DD`, `hh`, `mm`).",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/formatdate",
    tags: ["Terraform Functions", "formatdate()", "Date and Time"]
  },
  {
    id: "hashicorp-tfa-225",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "Caveat: timestamp() and uuid() Cause Permanent Drift",
    scenario: "A developer tags a cloud resource with `CreatedAt = timestamp()` directly in the resource's `tags` map.",
    question: "Why does using the timestamp() or uuid() function directly in resource attributes cause continuous configuration drift on every terraform plan?",
    options: [
      { id: 'A', text: "Cloud providers reject timestamps in tags" },
      { id: 'B', text: "timestamp() returns the current real-time clock on every execution, causing Terraform to detect a changed attribute and propose an update on every single run" },
      { id: 'C', text: "timestamp() causes the API server to crash" },
      { id: 'D', text: "timestamp() is only supported on Linux machines" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Because `timestamp()` and `uuid()` are non-deterministic (returning new values every second), Terraform interprets the new timestamp as configuration drift on every single `plan`, proposing non-stop updates. Use `lifecycle { ignore_changes = [tags[\"CreatedAt\"]] }` or `time_static` resources to lock initial values.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/timestamp",
    tags: ["Terraform Functions", "timestamp() Drift Caveat", "Best Practices"]
  }
];

export default HASHICORP_TFA_QUESTIONS_9;
