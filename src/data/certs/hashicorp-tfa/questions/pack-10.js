export const HASHICORP_TFA_QUESTIONS_10 = [
  {
    id: "hashicorp-tfa-226",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "fileset Function for Batch File Enumeration",
    scenario: "A developer needs to upload all `.png` image files located in a local directory `assets/` to an Amazon S3 bucket.",
    question: "Which built-in function returns a set of file paths matching a glob pattern relative to a base directory?",
    options: [
      { id: 'A', text: "glob(\"assets/*.png\")" },
      { id: 'B', text: "fileset(path.module, \"assets/*.png\")" },
      { id: 'C', text: "find(\"assets/*.png\")" },
      { id: 'D', text: "filelist(\"assets/*.png\")" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "`fileset(path, pattern)` enumerates a set of file paths matching a glob pattern within a given directory, commonly combined with `for_each` to upload fleets of files to S3 buckets.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/fileset",
    tags: ["Terraform Functions", "fileset()", "Globbing"]
  },
  {
    id: "hashicorp-tfa-227",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "path.module vs path.root vs path.cwd Filesystem References",
    scenario: "A child module reads a script located in its own module folder. If a developer uses `path.root`, Terraform looks in the calling root directory instead.",
    question: "What do path.module, path.root, and path.cwd represent respectively in Terraform?",
    options: [
      { id: 'A', text: "All three are identical aliases" },
      { id: 'B', text: "path.cwd represents the cloud provider datacenter" },
      { id: 'C', text: "path.module is the filesystem path to the current module; path.root is the path to the root module; path.cwd is the current working directory where the CLI was invoked" },
      { id: 'D', text: "path.module is the root module; path.root is the child module" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "`path.module` returns the filesystem path of the module where the expression appears (ideal for child module local assets). `path.root` is the path to the root module. `path.cwd` is the current working directory from which Terraform CLI was run.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/references#filesystem-and-workspace-info",
    tags: ["Terraform HCL", "path References", "Filesystem"]
  },
  {
    id: "hashicorp-tfa-228",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "Terraform Comments Syntax (#, //, /* */)",
    scenario: "A developer writes comments in an HCL configuration file.",
    question: "Which three comment styles are officially supported by HashiCorp Configuration Language (HCL)?",
    options: [
      { id: 'A', text: "-- (single-line), % (single-line), and <!-- -->" },
      { id: 'B', text: "# (single-line), // (single-line), and /* */ (multi-line block)" },
      { id: 'C', text: "REM and :: only" },
      { id: 'D', text: "# only" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "HCL natively supports: `#` (canonical single-line comment, recommended style), `//` (single-line comment), and `/* ... */` (multi-line block comment).",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/syntax/configuration#comments",
    tags: ["Terraform HCL", "Comments Syntax", "HCL Basics"]
  },
  {
    id: "hashicorp-tfa-229",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "HCL Heredoc Syntax: Standard vs Indented Heredoc",
    scenario: "A developer embeds a multi-line shell script into a user_data attribute. The lines inside the script are indented with spaces for readability.",
    question: "What is the difference between standard heredoc (&lt;&lt;EOT) and indented heredoc (&lt;&lt;-EOT)?",
    options: [
      { id: 'A', text: "Indented heredoc converts text to uppercase" },
      { id: 'B', text: "Indented heredoc (&lt;&lt;-EOT) strips leading indentation spaces from each line in the resulting string; standard heredoc (&lt;&lt;EOT) preserves all leading spaces literally" },
      { id: 'C', text: "Indented heredoc encrypts the text; standard heredoc leaves it in plaintext" },
      { id: 'D', text: "There is no difference between the two formats" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Standard heredoc `<<EOT` preserves all leading indentation verbatim. Indented heredoc `<<-EOT` (with a hyphen) automatically strips the leading whitespace that matches the delimiter's indentation, allowing cleanly indented HCL without polluting output files with unwanted spaces.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/strings#heredoc-strings",
    tags: ["Terraform HCL", "Heredoc Syntax", "Strings"]
  },
  {
    id: "hashicorp-tfa-230",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "String Directives: %{if} and %{for} in String Templates",
    scenario: "Inside a template string or heredoc, a developer needs to conditionally include an export line: `export ENV=prod` only when `var.is_prod` is true.",
    question: "Which HCL string directive supports conditional branching inside strings?",
    options: [
      { id: 'A', text: "%{if var.is_prod}export ENV=prod%{endif}" },
      { id: 'B', text: "${if var.is_prod : export ENV=prod}" },
      { id: 'C', text: "#{if var.is_prod}export ENV=prod#{endif}" },
      { id: 'D', text: "?(var.is_prod, export ENV=prod)" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "HCL template syntax supports `%{if &lt;cond&gt;}...%{else}...%{endif}` for conditional text and `%{for &lt;item&gt; in &lt;list&gt;}...%{endfor}` for iterating over collections directly inside multi-line strings and templates.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/strings#directives",
    tags: ["Terraform HCL", "String Directives", "Template Directives"]
  },
  {
    id: "hashicorp-tfa-231",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "String Directive Whitespace Stripping (~)",
    scenario: "When using string directives `%{for item in list}`, empty newline characters are introduced into the rendered file.",
    question: "Which character added to a directive (e.g. %{~ ... ~%}) strips leading and trailing whitespace and newlines?",
    options: [
      { id: 'A', text: "Exclamation mark (!)" },
      { id: 'B', text: "Tilde (~)" },
      { id: 'C', text: "Underscore (_)" },
      { id: 'D', text: "Hyphen (-)" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Adding a tilde `~` to the opening or closing delimiter of a directive (e.g. `%{if ... ~}` or `~%{endif}`) strips all whitespace and newlines immediately preceding or following the directive, keeping rendered output clean.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/strings#whitespace-stripping",
    tags: ["Terraform HCL", "Whitespace Stripping", "String Templates"]
  },
  {
    id: "hashicorp-tfa-232",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "Type Constraints: any Primitive vs Explicit Types",
    scenario: "A developer declares an input variable with `type = any`.",
    question: "What does the any type constraint indicate to Terraform?",
    options: [
      { id: 'A', text: "It disables type checking across the entire project" },
      { id: 'B', text: "It restricts values to numbers only" },
      { id: 'C', text: "It enforces that the value must be a boolean" },
      { id: 'D', text: "It serves as a wildcard placeholder that accepts any data type and dynamically infers the actual type from the assigned value" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "`type = any` is not a concrete type; it is a placeholder indicating that any type is acceptable. Terraform infers the concrete type from the caller's value at runtime.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/type-constraints#any-with-collection-types",
    tags: ["Terraform Types", "any Constraint", "Type System"]
  },
  {
    id: "hashicorp-tfa-233",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "Structural Types vs Collection Types in HCL",
    scenario: "A developer studies data types for complex module variable definitions.",
    question: "In Terraform's type system, what is the key difference between Collection types (list, map, set) and Structural types (object, tuple)?",
    options: [
      { id: 'A', text: "Collection types are only for numbers; Structural types are only for strings" },
      { id: 'B', text: "Collection types require all elements to be of the exact same type; Structural types allow elements to have different, heterogeneous types" },
      { id: 'C', text: "There is no difference" },
      { id: 'D', text: "Structural types cannot be nested" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "`Collection types` (`list(T)`, `map(T)`, `set(T)`) are homogeneous: all items must share the same type `T`. `Structural types` (`object({ ... })`, `tuple([T1, T2])`) are heterogeneous: each attribute or index can have a completely distinct type.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/type-constraints#collection-types",
    tags: ["Terraform Types", "Collections vs Structural", "Type System"]
  },
  {
    id: "hashicorp-tfa-234",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "Sensitive Function: Manual Sensitive Value Marking",
    scenario: "A developer retrieves an API key from an unencrypted HTTP data source that is not natively marked sensitive by the provider.",
    question: "Which built-in function explicitly marks an arbitrary string or value as sensitive to suppress it from CLI logs?",
    options: [
      { id: 'A', text: "hide(var.api_key)" },
      { id: 'B', text: "protect(var.api_key)" },
      { id: 'C', text: "encrypt(var.api_key)" },
      { id: 'D', text: "sensitive(var.api_key)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The `sensitive(value)` function takes any value and returns an identical value flagged as sensitive, instructing Terraform to obscure it from console outputs, diffs, and plans.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/sensitive",
    tags: ["Terraform Functions", "sensitive()", "Security"]
  },
  {
    id: "hashicorp-tfa-235",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "nonsensitive Function for Unmasking Values",
    scenario: "A developer uses a secret value as an input to a resource argument that does not support sensitive inputs, or needs to print a diagnostic output.",
    question: "Which function strips the sensitive flag from a value?",
    options: [
      { id: 'A', text: "nonsensitive(var.secret_val)" },
      { id: 'B', text: "unmask(var.secret_val)" },
      { id: 'C', text: "reveal(var.secret_val)" },
      { id: 'D', text: "insecure(var.secret_val)" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`nonsensitive(value)` removes the sensitive flag from a value, allowing it to be printed in terminal logs or used in contexts where sensitive values are rejected.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/nonsensitive",
    tags: ["Terraform Functions", "nonsensitive()", "Diagnostics"]
  },
  {
    id: "hashicorp-tfa-236",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "Type Conversion: tomap Function",
    scenario: "A developer has an object with string values: `{ name = \"app\", env = \"prod\" }`.",
    question: "Which function converts this object into a uniform map(string)?",
    options: [
      { id: 'A', text: "tomap({ name = \"app\", env = \"prod\" })" },
      { id: 'B', text: "map_convert({ ... })" },
      { id: 'C', text: "as_map({ ... })" },
      { id: 'D', text: "dict({ ... })" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`tomap(object)` converts an object to a map if all attribute values can be safely converted to a single common type.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/tomap",
    tags: ["Terraform Functions", "tomap()", "Type Conversions"]
  },
  {
    id: "hashicorp-tfa-237",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "Type Conversion: tolist Function",
    scenario: "A set of strings `toset([\"a\", \"b\"])` needs to be converted back into an indexed list so that elements can be accessed by numeric index `[0]`.",
    question: "Which function converts sets or tuples into indexed lists?",
    options: [
      { id: 'A', text: "list(var.my_set)" },
      { id: 'B', text: "array(var.my_set)" },
      { id: 'C', text: "as_list(var.my_set)" },
      { id: 'D', text: "tolist(var.my_set)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "`tolist(set)` converts a set or tuple into a standard indexed list, allowing indexing via `[0]` and list functions.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/tolist",
    tags: ["Terraform Functions", "tolist()", "Type Conversions"]
  },
  {
    id: "hashicorp-tfa-238",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "Numeric Functions: max, min, ceil, floor, abs",
    scenario: "A developer calculates instance counts: `min(10, var.requested_count)` and rounds fractional CPU ratios using `ceil(2.3)`.",
    question: "What does ceil(2.3) evaluate to in HCL?",
    options: [
      { id: 'A', text: "2" },
      { id: 'B', text: "3 (rounds up to the nearest integer)" },
      { id: 'C', text: "0" },
      { id: 'D', text: "2.3" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "`ceil(x)` rounds a number up to the next greatest integer (e.g. `ceil(2.3) = 3`). `floor(x)` rounds down (`floor(2.8) = 2`). `abs(x)` returns absolute value. `max()` and `min()` return extremes.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/ceil",
    tags: ["Terraform Functions", "Numeric Functions", "ceil and floor"]
  },
  {
    id: "hashicorp-tfa-239",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "String Functions: substr and replace",
    scenario: "A resource name must not exceed 8 characters in length.",
    question: "Given \"production-cluster\", which function extracts the first 8 characters?",
    options: [
      { id: 'A', text: "substr(\"production-cluster\", 0, 8)" },
      { id: 'B', text: "slice(\"production-cluster\", 0, 8)" },
      { id: 'C', text: "trim(\"production-cluster\", 8)" },
      { id: 'D', text: "truncate(\"production-cluster\", 8)" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`substr(string, offset, length)` extracts a substring from a string given a 0-indexed start offset and maximum length.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/substr",
    tags: ["Terraform Functions", "substr()", "String Manipulation"]
  },
  {
    id: "hashicorp-tfa-240",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "String Functions: replace with Regex",
    scenario: "A developer needs to replace all forward slashes (`/`) in an AMI name `\"ubuntu/22.04/lts\"` with dashes (`-`).",
    question: "Which function performs string and regular expression replacements?",
    options: [
      { id: 'A', text: "substitute(\"ubuntu/22.04/lts\", \"/\", \"-\")" },
      { id: 'B', text: "replace(\"ubuntu/22.04/lts\", \"/\", \"-\")" },
      { id: 'C', text: "regex_replace(\"ubuntu/22.04/lts\", \"/\", \"-\")" },
      { id: 'D', text: "swap(\"ubuntu/22.04/lts\", \"/\", \"-\")" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "`replace(string, search, replace)` replaces occurrences of a substring or regular expression with a replacement string, returning `\"ubuntu-22.04-lts\"`.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/replace",
    tags: ["Terraform Functions", "replace()", "String Functions"]
  },
  {
    id: "hashicorp-tfa-241",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "Hashing Functions: sha256 vs filebase64sha256",
    scenario: "An AWS Lambda function deployment package `lambda.zip` must only trigger a code update when its binary contents change.",
    question: "Which function computes the base64-encoded SHA-256 hash of a local file on disk?",
    options: [
      { id: 'A', text: "filebase64sha256(\"lambda.zip\")" },
      { id: 'B', text: "sha256(file(\"lambda.zip\"))" },
      { id: 'C', text: "md5(\"lambda.zip\")" },
      { id: 'D', text: "base64sha256(\"lambda.zip\")" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`filebase64sha256(path)` calculates the SHA-256 hash of a file's raw binary contents and encodes the result in Base64, matching the exact format required by `aws_lambda_function.source_code_hash`.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/filebase64sha256",
    tags: ["Terraform Functions", "filebase64sha256", "Lambda Deployments"]
  },
  {
    id: "hashicorp-tfa-242",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "yamlencode and yamldecode Functions",
    scenario: "A developer generates a Kubernetes manifest YAML string from an HCL object.",
    question: "Which function encodes an HCL value into a valid YAML string?",
    options: [
      { id: 'A', text: "yamlencode(local.k8s_manifest)" },
      { id: 'B', text: "toyaml(local.k8s_manifest)" },
      { id: 'C', text: "formatyaml(local.k8s_manifest)" },
      { id: 'D', text: "jsonencode(local.k8s_manifest)" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`yamlencode(value)` formats an HCL data structure into a valid YAML document string. Conversely, `yamldecode(string)` parses YAML text back into HCL objects.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/yamlencode",
    tags: ["Terraform Functions", "yamlencode()", "YAML Processing"]
  },
  {
    id: "hashicorp-tfa-243",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "keys and values Collection Functions",
    scenario: "Given a map variable `var.tags = { env = \"prod\", owner = \"alice\" }`.",
    question: "Which functions extract the list of keys `[\"env\", \"owner\"]` and list of values `[\"prod\", \"alice\"]` respectively?",
    options: [
      { id: 'A', text: "get_keys() and get_values()" },
      { id: 'B', text: "map_keys() and map_values()" },
      { id: 'C', text: "list_keys() and list_values()" },
      { id: 'D', text: "keys(var.tags) and values(var.tags)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "`keys(map)` returns a list containing all the keys in alphabetical order. `values(map)` returns a list of the corresponding values ordered to match the keys.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/keys",
    tags: ["Terraform Functions", "keys() and values()", "Map Functions"]
  },
  {
    id: "hashicorp-tfa-244",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "contains Collection Function for Membership Checks",
    scenario: "A security group rule should only be created if the current region is in an approved list: `[\"us-east-1\", \"us-west-2\", \"eu-west-1\"]`.",
    question: "Which function returns true if a given value is present in a list or set?",
    options: [
      { id: 'A', text: "in(var.region, [\"us-east-1\", ...])" },
      { id: 'B', text: "includes([\"us-east-1\", ...], var.region)" },
      { id: 'C', text: "contains([\"us-east-1\", \"us-west-2\", \"eu-west-1\"], var.region)" },
      { id: 'D', text: "has([\"us-east-1\", ...], var.region)" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "`contains(list, value)` determines whether a given scalar value exists as an element in the provided list or set, returning boolean `true` or `false`.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/contains",
    tags: ["Terraform Functions", "contains()", "Collection Checks"]
  },
  {
    id: "hashicorp-tfa-245",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "slice Function for Sub-List Extraction",
    scenario: "A developer has a list of 10 subnet CIDR blocks: `var.cidrs`. A small web tier only needs the first 3 subnets.",
    question: "Which function extracts a sub-list starting at index 0 and ending at index 3 (exclusive)?",
    options: [
      { id: 'A', text: "slice(var.cidrs, 0, 3)" },
      { id: 'B', text: "substr(var.cidrs, 0, 3)" },
      { id: 'C', text: "take(var.cidrs, 3)" },
      { id: 'D', text: "cut(var.cidrs, 0, 3)" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`slice(list, start_index, end_index)` extracts a range of elements from a list starting from `start_index` (inclusive) up to `end_index` (exclusive).",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/slice",
    tags: ["Terraform Functions", "slice()", "List Functions"]
  },
  {
    id: "hashicorp-tfa-246",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "length Function for Strings and Collections",
    scenario: "A variable `var.subnets` is a list of strings, and `var.name` is a string.",
    question: "How does the length() function behave when passed a list versus a string?",
    options: [
      { id: 'A', text: "length(var.subnets) returns the number of elements in the list; length(var.name) returns the number of unicode characters in the string" },
      { id: 'B', text: "length() returns the memory byte size" },
      { id: 'C', text: "length() returns a boolean" },
      { id: 'D', text: "length() only works on lists; it fails on strings" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`length(v)` is polymorphic: for lists, sets, and maps, it returns the number of elements; for strings, it returns the number of characters in the string.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/length",
    tags: ["Terraform Functions", "length()", "Polymorphic Functions"]
  },
  {
    id: "hashicorp-tfa-247",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "trimspace, trimprefix, and trimsuffix Functions",
    scenario: "A string variable has leading and trailing spaces: `\"  ami-12345678  \"`.",
    question: "Which function strips leading and trailing whitespace characters?",
    options: [
      { id: 'A', text: "trimspace(\"  ami-12345678  \")" },
      { id: 'B', text: "strip(\"  ami-12345678  \")" },
      { id: 'C', text: "clean(\"  ami-12345678  \")" },
      { id: 'D', text: "trim(\"  ami-12345678  \")" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`trimspace(str)` strips spaces, tabs, and newlines from the start and end of a string. `trimprefix(str, prefix)` and `trimsuffix(str, suffix)` strip specific prefixes and suffixes.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/trimspace",
    tags: ["Terraform Functions", "trimspace()", "String Trimming"]
  },
  {
    id: "hashicorp-tfa-248",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "coalesce Function for First Non-Empty String",
    scenario: "A configuration checks three variables for an environment name: `var.custom_env`, `local.default_env`, and fallback `\"dev\"`.",
    question: "Which function returns the first non-null and non-empty string among its arguments?",
    options: [
      { id: 'A', text: "coalesce(var.custom_env, local.default_env, \"dev\")" },
      { id: 'B', text: "first(var.custom_env, local.default_env, \"dev\")" },
      { id: 'C', text: "try(var.custom_env, local.default_env, \"dev\")" },
      { id: 'D', text: "coalescelist(var.custom_env, local.default_env, \"dev\")" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`coalesce(v1, v2, ...)` scans arguments from left to right and returns the first value that is not null and not an empty string (`\"\"`), providing clean cascade defaults.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/coalesce",
    tags: ["Terraform Functions", "coalesce()", "Fallback Logic"]
  },
  {
    id: "hashicorp-tfa-249",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "coalescelist Function for First Non-Empty List",
    scenario: "A module has an optional custom subnets list `var.custom_subnets`. If empty (`[]`), it should fall back to `local.default_subnets`.",
    question: "Which function returns the first non-empty list among its arguments?",
    options: [
      { id: 'A', text: "coalescelist(var.custom_subnets, local.default_subnets)" },
      { id: 'B', text: "coalesce(var.custom_subnets, local.default_subnets)" },
      { id: 'C', text: "first_list(var.custom_subnets, local.default_subnets)" },
      { id: 'D', text: "fallback_list(var.custom_subnets, local.default_subnets)" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`coalescelist(list1, list2, ...)` scans list arguments and returns the first list that is not null and contains at least one element.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/coalescelist",
    tags: ["Terraform Functions", "coalescelist()", "List Fallbacks"]
  },
  {
    id: "hashicorp-tfa-250",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    domainName: "Read, generate, and modify configuration",
    title: "fileexists Function for Conditional File Operations",
    scenario: "A configuration checks whether a custom configuration file `custom.json` exists in the local project directory before attempting to read it.",
    question: "Which function checks for the existence of a file on the local filesystem and returns a boolean?",
    options: [
      { id: 'A', text: "isfile(\"${path.module}/custom.json\")" },
      { id: 'B', text: "test_file(\"${path.module}/custom.json\")" },
      { id: 'C', text: "fileexists(\"${path.module}/custom.json\")" },
      { id: 'D', text: "exists(\"${path.module}/custom.json\")" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "`fileexists(path)` determines whether a file exists at the specified local filesystem path, returning boolean `true` if found and `false` if not, enabling conditional file reading with `templatefile`.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/fileexists",
    tags: ["Terraform Functions", "fileexists()", "Filesystem Checks"]
  }
];

export default HASHICORP_TFA_QUESTIONS_10;
