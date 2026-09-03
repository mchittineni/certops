export const HASHICORP_TFA_FLASHCARDS_10 = [
  {
    id: "hashicorp-tfa-fc-226",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    front: "Terraform Functions: fileset()",
    hint: "Enumerating files via glob patterns.",
    back: "Use <strong>fileset(path, pattern)</strong> to discover and iterate over files matching glob patterns for batch uploads.",
    tags: ["Terraform Functions", "fileset()", "Globbing"]
  },
  {
    id: "hashicorp-tfa-fc-227",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d6",
    front: "Terraform HCL: path.module vs. path.root vs. path.cwd",
    hint: "Filesystem path reference tokens.",
    back: "<strong>path.module</strong> references the current module's directory; <strong>path.root</strong> is the root project directory; <strong>path.cwd</strong> is the terminal working directory.",
    tags: ["Terraform HCL", "path References", "Filesystem"]
  },
  {
    id: "hashicorp-tfa-fc-228",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    front: "Terraform HCL: Comments Syntax",
    hint: "#, //, and /* */.",
    back: "HCL supports <strong>#</strong> (canonical single line), <strong>//</strong> (single line), and <strong>/* ... */</strong> (multi-line block) comments.",
    tags: ["Terraform HCL", "Comments Syntax", "HCL Basics"]
  },
  {
    id: "hashicorp-tfa-fc-229",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d6",
    front: "Terraform HCL: Heredoc Syntax (&lt;&lt;-EOT)",
    hint: "Stripping leading indentation with &lt;&lt;-.",
    back: "Use <strong>&lt;&lt;-EOT</strong> (indented heredoc) to allow indented code in HCL while stripping leading whitespace from the resulting output string.",
    tags: ["Terraform HCL", "Heredoc Syntax", "Strings"]
  },
  {
    id: "hashicorp-tfa-fc-230",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    front: "HCL String Directives: %{if} and %{for}",
    hint: "Control flow inside template strings.",
    back: "Use <strong>%{if condition}...%{endif}</strong> and <strong>%{for x in list}...%{endfor}</strong> for control flow inside string templates.",
    tags: ["Terraform HCL", "String Directives", "Template Directives"]
  },
  {
    id: "hashicorp-tfa-fc-231",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d6",
    front: "HCL Directives: Whitespace Stripping (~)",
    hint: "Trimming whitespace with tilde symbols.",
    back: "Include a <strong>tilde (~%{ ... }~%)</strong> in template directives to strip adjacent whitespace and blank newlines.",
    tags: ["Terraform HCL", "Whitespace Stripping", "String Templates"]
  },
  {
    id: "hashicorp-tfa-fc-232",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    front: "Terraform Types: type = any",
    hint: "Wildcard placeholder for dynamic type inference.",
    back: "Setting <strong>type = any</strong> allows a variable to accept any data type, dynamically inferring the concrete type at runtime.",
    tags: ["Terraform Types", "any Constraint", "Type System"]
  },
  {
    id: "hashicorp-tfa-fc-233",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d6",
    front: "Terraform Types: Collections vs. Structural Types",
    hint: "Homogeneous vs heterogeneous data structures.",
    back: "<strong>Collection types</strong> (list, map, set) require identical element types; <strong>Structural types</strong> (object, tuple) support mixed, heterogeneous types.",
    tags: ["Terraform Types", "Collections vs Structural", "Type System"]
  },
  {
    id: "hashicorp-tfa-fc-234",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    front: "Terraform Functions: sensitive()",
    hint: "Manually redacting values from CLI output.",
    back: "Wrap expressions in <strong>sensitive(val)</strong> to manually prevent values from displaying in CLI logs and plan summaries.",
    tags: ["Terraform Functions", "sensitive()", "Security"]
  },
  {
    id: "hashicorp-tfa-fc-235",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d6",
    front: "Terraform Functions: nonsensitive()",
    hint: "Stripping sensitivity flags for diagnostics.",
    back: "Use <strong>nonsensitive(val)</strong> to strip the sensitivity flag when debugging or when arguments reject sensitive inputs.",
    tags: ["Terraform Functions", "nonsensitive()", "Diagnostics"]
  },
  {
    id: "hashicorp-tfa-fc-236",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    front: "Terraform Functions: tomap()",
    hint: "Converting objects into uniform maps.",
    back: "Use <strong>tomap(object)</strong> to cast objects with compatible attribute values into typed maps.",
    tags: ["Terraform Functions", "tomap()", "Type Conversions"]
  },
  {
    id: "hashicorp-tfa-fc-237",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d6",
    front: "Terraform Functions: tolist()",
    hint: "Casting sets and tuples into indexed lists.",
    back: "Use <strong>tolist(set)</strong> to convert sets into indexed lists for numeric bracket access.",
    tags: ["Terraform Functions", "tolist()", "Type Conversions"]
  },
  {
    id: "hashicorp-tfa-fc-238",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    front: "Terraform Functions: ceil() & floor()",
    hint: "Rounding numeric values in HCL.",
    back: "<strong>ceil(2.3)</strong> evaluates to <strong>3</strong> (rounds up); <strong>floor(2.8)</strong> evaluates to <strong>2</strong> (rounds down).",
    tags: ["Terraform Functions", "Numeric Functions", "ceil and floor"]
  },
  {
    id: "hashicorp-tfa-fc-239",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d6",
    front: "Terraform Functions: substr()",
    hint: "Extracting substrings with offset and length.",
    back: "Use <strong>substr(str, offset, length)</strong> to extract fixed-length substrings from strings.",
    tags: ["Terraform Functions", "substr()", "String Manipulation"]
  },
  {
    id: "hashicorp-tfa-fc-240",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    front: "Terraform Functions: replace()",
    hint: "Substrings and regex replacements.",
    back: "Use <strong>replace(str, search, replacement)</strong> to swap substrings or regex patterns.",
    tags: ["Terraform Functions", "replace()", "String Functions"]
  },
  {
    id: "hashicorp-tfa-fc-241",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d6",
    front: "Terraform Functions: filebase64sha256()",
    hint: "Binary hash computation for Lambda deployments.",
    back: "Use <strong>filebase64sha256(path)</strong> to compute base64-encoded SHA-256 hashes for Lambda source code triggers.",
    tags: ["Terraform Functions", "filebase64sha256", "Lambda Deployments"]
  },
  {
    id: "hashicorp-tfa-fc-242",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    front: "Terraform Functions: yamlencode()",
    hint: "Serializing HCL objects into YAML strings.",
    back: "Use <strong>yamlencode(obj)</strong> to convert HCL data structures into standard YAML strings for Kubernetes or Cloud-Init configs.",
    tags: ["Terraform Functions", "yamlencode()", "YAML Processing"]
  },
  {
    id: "hashicorp-tfa-fc-243",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d6",
    front: "Terraform Functions: keys() & values()",
    hint: "Extracting keys and values from maps.",
    back: "Use <strong>keys(map)</strong> to extract sorted key names and <strong>values(map)</strong> to extract value lists.",
    tags: ["Terraform Functions", "keys() and values()", "Map Functions"]
  },
  {
    id: "hashicorp-tfa-fc-244",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    front: "Terraform Functions: contains()",
    hint: "Checking collection membership.",
    back: "Use <strong>contains(list, value)</strong> to verify whether a list or set contains a specified item.",
    tags: ["Terraform Functions", "contains()", "Collection Checks"]
  },
  {
    id: "hashicorp-tfa-fc-245",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d6",
    front: "Terraform Functions: slice()",
    hint: "Extracting sub-ranges from lists.",
    back: "Use <strong>slice(list, start, end)</strong> to extract a sub-list by start (inclusive) and end (exclusive) indices.",
    tags: ["Terraform Functions", "slice()", "List Functions"]
  },
  {
    id: "hashicorp-tfa-fc-246",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    front: "Terraform Functions: length()",
    hint: "Counting elements in collections and characters in strings.",
    back: "<strong>length()</strong> returns element count for lists/maps and character count for strings.",
    tags: ["Terraform Functions", "length()", "Polymorphic Functions"]
  },
  {
    id: "hashicorp-tfa-fc-247",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d6",
    front: "Terraform Functions: trimspace()",
    hint: "Stripping whitespace from strings.",
    back: "Use <strong>trimspace(str)</strong> to strip leading and trailing whitespace from strings.",
    tags: ["Terraform Functions", "trimspace()", "String Trimming"]
  },
  {
    id: "hashicorp-tfa-fc-248",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    front: "Terraform Functions: coalesce()",
    hint: "Returning the first non-null, non-empty string.",
    back: "Use <strong>coalesce(v1, v2, default)</strong> to select the first non-null, non-empty string from a list of options.",
    tags: ["Terraform Functions", "coalesce()", "Fallback Logic"]
  },
  {
    id: "hashicorp-tfa-fc-249",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d6",
    front: "Terraform Functions: coalescelist()",
    hint: "Selecting the first non-empty list.",
    back: "Use <strong>coalescelist(list1, list2)</strong> to pick the first non-empty list from candidate arguments.",
    tags: ["Terraform Functions", "coalescelist()", "List Fallbacks"]
  },
  {
    id: "hashicorp-tfa-fc-250",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    front: "Terraform Functions: fileexists()",
    hint: "Testing local file presence before reading.",
    back: "Use <strong>fileexists(path)</strong> to test whether a file exists on local disk before loading it in HCL expressions.",
    tags: ["Terraform Functions", "fileexists()", "Filesystem Checks"]
  }
];

export default HASHICORP_TFA_FLASHCARDS_10;
