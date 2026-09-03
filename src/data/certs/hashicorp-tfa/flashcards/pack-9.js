export const HASHICORP_TFA_FLASHCARDS_9 = [
  {
    id: "hashicorp-tfa-fc-201",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d6",
    front: "Terraform HCL: Local Values (locals)",
    hint: "Encapsulating repeated expressions and naming prefixes.",
    back: "Use <strong>locals { ... }</strong> to define internal computed values and shared expressions across resources without repeating logic.",
    tags: ["Terraform HCL", "locals", "DRY Principles"]
  },
  {
    id: "hashicorp-tfa-fc-202",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    front: "Terraform HCL: Data Sources (data Blocks)",
    hint: "Querying read-only external cloud information.",
    back: "Use <strong>data \"type\" \"name\" { ... }</strong> blocks to query external cloud APIs for read-only information like latest AMI IDs.",
    tags: ["Terraform HCL", "Data Sources", "data Blocks"]
  },
  {
    id: "hashicorp-tfa-fc-203",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d6",
    front: "Terraform HCL: dynamic Blocks",
    hint: "Generating repeated nested blocks programmatically.",
    back: "Use <strong>dynamic \"block_name\" { for_each = ... content { ... } }</strong> to construct repeated nested configuration blocks inside resources.",
    tags: ["Terraform HCL", "Dynamic Blocks", "Nested Blocks"]
  },
  {
    id: "hashicorp-tfa-fc-204",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    front: "Dynamic Blocks: iterator Argument",
    hint: "Customizing iteration variable names.",
    back: "Specify <strong>iterator = &lt;name&gt;</strong> in a dynamic block to rename the iteration variable from the default block name.",
    tags: ["Terraform HCL", "Dynamic Blocks", "iterator Argument"]
  },
  {
    id: "hashicorp-tfa-fc-205",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d6",
    front: "Terraform HCL: List For Expressions",
    hint: "[for item in list : expression].",
    back: "Use <strong>[for x in list : expr]</strong> to transform and project collections into new lists.",
    tags: ["Terraform HCL", "For Expressions", "Lists"]
  },
  {
    id: "hashicorp-tfa-fc-206",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    front: "Terraform HCL: Map For Expressions",
    hint: "{for x in list : key =&gt; value}.",
    back: "Use <strong>{for x in list : key =&gt; value}</strong> to construct maps from lists or other collections.",
    tags: ["Terraform HCL", "For Expressions", "Maps"]
  },
  {
    id: "hashicorp-tfa-fc-207",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d6",
    front: "Terraform HCL: For Expressions with if Filtering",
    hint: "Filtering collections during projection.",
    back: "Append an <strong>if &lt;condition&gt;</strong> clause to a for expression to filter out unwanted items during projection.",
    tags: ["Terraform HCL", "For Expressions", "if Filtering"]
  },
  {
    id: "hashicorp-tfa-fc-208",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    front: "Terraform HCL: Splat Expressions ([*])",
    hint: "Extracting attribute lists from count resources.",
    back: "Use <strong>resource[*].attribute</strong> to extract a list of specific attributes from all instances of a resource.",
    tags: ["Terraform HCL", "Splat Expressions", "Attribute Projection"]
  },
  {
    id: "hashicorp-tfa-fc-209",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d6",
    front: "Terraform HCL: Ternary Conditionals",
    hint: "condition ? true_val : false_val.",
    back: "Use <strong>condition ? true_val : false_val</strong> to branch logic dynamically based on variable values.",
    tags: ["Terraform HCL", "Conditionals", "Ternary Expressions"]
  },
  {
    id: "hashicorp-tfa-fc-210",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    front: "Terraform Functions: templatefile()",
    hint: "Rendering external template files with variable maps.",
    back: "Use <strong>templatefile(path, vars_map)</strong> to load external scripts and render variables dynamically into configuration files.",
    tags: ["Terraform Functions", "templatefile", "Templates"]
  },
  {
    id: "hashicorp-tfa-fc-211",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d6",
    front: "Terraform Functions: file() vs. templatefile()",
    hint: "Reading raw static file contents.",
    back: "Use <strong>file(path)</strong> to read raw, unparsed file contents; use <strong>templatefile()</strong> when variable interpolation is needed.",
    tags: ["Terraform Functions", "file()", "File Reading"]
  },
  {
    id: "hashicorp-tfa-fc-212",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    front: "Terraform Functions: jsonencode()",
    hint: "Serializing HCL objects to valid JSON strings.",
    back: "Use <strong>jsonencode(hcl_object)</strong> to safely serialize HCL maps and objects into valid JSON strings without string concatenation.",
    tags: ["Terraform Functions", "jsonencode", "JSON Processing"]
  },
  {
    id: "hashicorp-tfa-fc-213",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d6",
    front: "Terraform Functions: flatten()",
    hint: "Transforming nested lists into a single flat list.",
    back: "Use <strong>flatten(nested_list)</strong> to collapse multi-dimensional lists into a single flat array.",
    tags: ["Terraform Functions", "flatten()", "Collection Processing"]
  },
  {
    id: "hashicorp-tfa-fc-214",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    front: "Terraform Functions: merge()",
    hint: "Combining multiple maps and overriding duplicates.",
    back: "Use <strong>merge(map1, map2)</strong> to combine maps; keys in right-hand maps overwrite matching keys in left-hand maps.",
    tags: ["Terraform Functions", "merge()", "Map Combination"]
  },
  {
    id: "hashicorp-tfa-fc-215",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d6",
    front: "Terraform Functions: concat() vs. merge()",
    hint: "Combining lists vs combining maps.",
    back: "Use <strong>concat(list1, list2)</strong> to combine multiple lists into a single list; use <strong>merge()</strong> for maps.",
    tags: ["Terraform Functions", "concat()", "List Processing"]
  },
  {
    id: "hashicorp-tfa-fc-216",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    front: "Terraform Functions: lookup()",
    hint: "Safe map lookups with default fallbacks.",
    back: "Use <strong>lookup(map, key, default)</strong> to retrieve map elements with safe fallback defaults when keys are missing.",
    tags: ["Terraform Functions", "lookup()", "Map Access"]
  },
  {
    id: "hashicorp-tfa-fc-217",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d6",
    front: "Terraform Functions: element()",
    hint: "Automatic modulo wrapping for cyclic distribution.",
    back: "Use <strong>element(list, index)</strong> to access list elements; out-of-bounds indices wrap around automatically via modulo arithmetic.",
    tags: ["Terraform Functions", "element()", "Modulo Indexing"]
  },
  {
    id: "hashicorp-tfa-fc-218",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    front: "Terraform Functions: distinct() & compact()",
    hint: "Deduplication and empty string removal.",
    back: "<strong>distinct(list)</strong> strips duplicates; <strong>compact(list)</strong> strips empty string elements from lists.",
    tags: ["Terraform Functions", "compact() and distinct()", "Data Cleaning"]
  },
  {
    id: "hashicorp-tfa-fc-219",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d6",
    front: "Terraform Functions: split() & join()",
    hint: "Converting between strings and lists.",
    back: "Use <strong>split(sep, str)</strong> to split strings into lists; use <strong>join(sep, list)</strong> to merge lists into strings.",
    tags: ["Terraform Functions", "split() and join()", "String Manipulation"]
  },
  {
    id: "hashicorp-tfa-fc-220",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    front: "Terraform Functions: toset()",
    hint: "Converting string lists into sets for for_each.",
    back: "Wrap lists in <strong>toset(list)</strong> to convert them into sets for use in <code>for_each</code> resource blocks.",
    tags: ["Terraform Functions", "toset()", "Type Conversion"]
  },
  {
    id: "hashicorp-tfa-fc-221",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d6",
    front: "Terraform Functions: try()",
    hint: "Graceful fallback across multiple expressions.",
    back: "Use <strong>try(expr1, expr2, default)</strong> to evaluate expressions in order, returning the first valid result without crashing on missing keys.",
    tags: ["Terraform Functions", "try()", "Error Handling"]
  },
  {
    id: "hashicorp-tfa-fc-222",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    front: "Terraform Functions: can() vs. try()",
    hint: "Boolean testing vs value extraction.",
    back: "<strong>can()</strong> returns a boolean (true/false) for validation; <strong>try()</strong> returns the actual evaluated value or fallback.",
    tags: ["Terraform Functions", "can() vs. try()", "Functions"]
  },
  {
    id: "hashicorp-tfa-fc-223",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d6",
    front: "Terraform Functions: format()",
    hint: "C-style printf formatting in HCL.",
    back: "Use <strong>format(\"%02d\", number)</strong> to generate zero-padded numbers and structured strings using printf syntax.",
    tags: ["Terraform Functions", "format()", "String Formatting"]
  },
  {
    id: "hashicorp-tfa-fc-224",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d6",
    front: "Terraform Functions: formatdate()",
    hint: "Formatting timestamp strings into custom dates.",
    back: "Use <strong>formatdate(\"YYYY-MM-DD\", timestamp())</strong> to convert ISO timestamps into custom formatted date strings.",
    tags: ["Terraform Functions", "formatdate()", "Date and Time"]
  },
  {
    id: "hashicorp-tfa-fc-225",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d6",
    front: "Terraform Functions: timestamp() Drift Caveat",
    hint: "Non-deterministic functions trigger endless updates.",
    back: "Using <strong>timestamp()</strong> in resource tags causes perpetual plan drift because the clock changes on every run; ignore changes or use <code>time_static</code>.",
    tags: ["Terraform Functions", "timestamp() Drift Caveat", "Best Practices"]
  }
];

export default HASHICORP_TFA_FLASHCARDS_9;
