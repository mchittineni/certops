export const AZURE_AI_APPS_AGENTS_FLASHCARDS_20 = [
  {
    id: 'azure-ai-apps-agents-fc-476',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'prebuilt-read, prebuilt-layout or prebuilt-digitalParse: how do you pick a Content Understanding extraction analyzer?',
    hint: 'Scanned or born digital, text or structure.',
    back: '<strong>prebuilt-read</strong>: basic OCR text (words, paragraphs, formulas, barcodes) from scans. <strong>prebuilt-layout</strong>: OCR plus structure (tables, sections, figures, hyperlinks, annotations). <strong>prebuilt-digitalParse</strong>: reads <strong>born-digital</strong> files straight from their internal structure, and returns document metadata. None of the three needs a model deployment.',
    tags: ['Content Understanding', 'Content extraction']
  },
  {
    id: 'azure-ai-apps-agents-fc-477',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'What does prebuilt-documentSearch return that makes it the default choice for RAG ingestion?',
    hint: 'Markdown and more.',
    back: 'Layout-aware <strong>Markdown</strong> of paragraphs, tables and figures; <strong>figure descriptions</strong>; charts as <strong>Chart.js</strong> and diagrams as <strong>Mermaid</strong> syntax; captured <strong>handwritten annotations</strong>; a one-paragraph <strong>summary</strong>; and <strong>chunked output</strong> ready for embedding, with fixed-size or layout-aware chunking. It uses your connected model deployments.',
    tags: ['Content Understanding', 'RAG analyzers']
  },
  {
    id: 'azure-ai-apps-agents-fc-478',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'tableFormat html vs markdown in a Content Understanding document analyzer?',
    hint: 'Default and alternative.',
    back: '<strong>html</strong> (default) preserves complex structures such as merged cells and suits rendering. <strong>markdown</strong> writes simple pipe tables that text parsers and LLM prompts handle easily. Pick based on the consumer: a Markdown table parser needs <code>markdown</code>; complex financial tables may need <code>html</code>.',
    tags: ['Content Understanding', 'Analyzer configuration']
  },
  {
    id: 'azure-ai-apps-agents-fc-479',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'enableFigureDescription vs enableFigureAnalysis?',
    hint: 'Words about a figure vs data from it.',
    back: '<strong>enableFigureDescription</strong> generates natural-language descriptions of figures, diagrams and images, useful for alt text and search. <strong>enableFigureAnalysis</strong> goes deeper: extracts chart data (Chart.js), identifies diagram components and classifies figures. Both default to <strong>false</strong> on custom document analyzers and add generative cost.',
    tags: ['Content Understanding', 'Figure analysis']
  },
  {
    id: 'azure-ai-apps-agents-fc-480',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'How do analyzer-level and field-level source and confidence settings interact?',
    hint: 'One default, one override, one requirement.',
    back: '<code>estimateFieldSourceAndConfidence</code> in <code>config</code> sets the default for all fields: each value gets a <strong>0 to 1 confidence</strong> and its <strong>page and bounding region</strong>. A field\'s own <code>estimateSourceAndConfidence</code> <strong>overrides</strong> it, and it <strong>must be true for extract-method fields</strong>. Supported for document analyzers across extract, classify and generate.',
    tags: ['Content Understanding', 'Confidence scores']
  },
  {
    id: 'azure-ai-apps-agents-fc-481',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'How do you design straight-through processing with Content Understanding confidence scores?',
    hint: 'Threshold, route, show evidence.',
    back: 'Enable source and confidence estimation, pick a <strong>threshold per field</strong> from a labeled validation set, <strong>auto-accept</strong> documents whose critical fields all clear it, and <strong>route the rest to human review</strong> with the grounded source region highlighted. Log confidences and reviewer corrections to retune thresholds and improve the analyzer.',
    tags: ['Content Understanding', 'Human review']
  },
  {
    id: 'azure-ai-apps-agents-fc-482',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'Which field types can a Content Understanding schema use, and why prefer typed fields over strings?',
    hint: 'Normalization.',
    back: 'Types: <code>string</code>, <code>number</code>, <code>boolean</code>, <code>date</code>, <code>object</code>, <code>array</code>. Typed fields are <strong>normalized automatically</strong>: a date printed as 03/04/2026 or 4 March 2026 comes back in one canonical format, and numbers come back as numbers, so downstream code does not need fragile parsing.',
    tags: ['Content Understanding', 'Field types']
  },
  {
    id: 'azure-ai-apps-agents-fc-483',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'How deep should a Content Understanding field schema nest?',
    hint: 'A small number of levels.',
    back: 'Keep nesting to <strong>two or three levels</strong> at most. Deeper hierarchies reduce performance and extraction accuracy, with values landing under the wrong parent. Model line items as an <code>array</code> of <code>object</code> rows and carry parent identifiers as fields rather than nesting every level.',
    tags: ['Content Understanding', 'Field schema']
  },
  {
    id: 'azure-ai-apps-agents-fc-484',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'Why do analyzer and field descriptions matter so much in Content Understanding?',
    hint: 'They are prompts.',
    back: 'The analyzer <code>description</code> is used as <strong>context</strong> during extraction, and each field <code>description</code> acts as a <strong>mini-prompt</strong>. Say exactly which value you want, how it is usually labeled and where it appears, and what it includes or excludes (for example, the final amount due including taxes, not the subtotal). Vague descriptions produce the wrong value.',
    tags: ['Content Understanding', 'Field descriptions']
  },
  {
    id: 'azure-ai-apps-agents-fc-485',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'Why copy a prebuilt analyzer into a custom analyzer for production?',
    hint: 'Definitions move between API versions.',
    back: 'Prebuilt analyzer definitions <strong>can change across API versions</strong>. <code>GET</code> the prebuilt definition, adjust it if needed, and <code>PUT</code> it under your own analyzer ID. Your copy keeps its schema until you choose to change it, so parsers and agents downstream do not break on an upgrade.',
    tags: ['Content Understanding', 'Versioning']
  },
  {
    id: 'azure-ai-apps-agents-fc-486',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'Describe the request flow for analyzing a file with Content Understanding over REST.',
    hint: 'Accepted, then poll.',
    back: '<code>POST {endpoint}/contentunderstanding/analyzers/{id}:analyze</code> with the input URL or bytes returns <strong>202 Accepted</strong> and an <strong>Operation-Location</strong> header. Poll that <code>analyzerResults/{id}</code> URL until the status is <strong>Succeeded</strong>, then read the content and fields from the result. Creating an analyzer is also asynchronous.',
    tags: ['Content Understanding', 'REST API']
  },
  {
    id: 'azure-ai-apps-agents-fc-487',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'When do you set omitContent to true on a Content Understanding analyzer?',
    hint: 'Fields only.',
    back: 'When consumers need <strong>only structured fields</strong>, or only the results of sub-analyzers in a classification chain. It drops the original content object (Markdown and layout) from the response, shrinking payloads. Leave it off when an agent or RAG index needs the Markdown representation too.',
    tags: ['Content Understanding', 'Payload size']
  },
  {
    id: 'azure-ai-apps-agents-fc-488',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'segmentPerPage vs logical segmentation in a document analyzer?',
    hint: 'Page boundaries vs content boundaries.',
    back: 'With <code>enableSegment</code> on, the service normally splits by <strong>logical boundaries</strong> guided by category descriptions and document structure. <code>segmentPerPage: true</code> forces <strong>one segment per page</strong>, ideal when every page is an independent form (a stack of delivery notes) or for parallel page-level extraction. It replaces older per-page split modes.',
    tags: ['Content Understanding', 'Segmentation']
  },
  {
    id: 'azure-ai-apps-agents-fc-489',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'What does returnDetails add to a Content Understanding response?',
    hint: 'Where everything came from.',
    back: '<strong>Bounding boxes, text spans, confidence scores and extra metadata</strong> for the extracted content, used for review screens that highlight source text, debugging extraction, and quality assurance. It significantly increases response size, so enable it only where those details are consumed.',
    tags: ['Content Understanding', 'Grounding']
  },
  {
    id: 'azure-ai-apps-agents-fc-490',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'Which document extraction options default to on, and when should you turn them off?',
    hint: 'OCR, layout, formulas, barcodes.',
    back: '<code>enableOcr</code>, <code>enableLayout</code>, <code>enableFormula</code> and <code>enableBarcode</code> all default to <strong>true</strong>. Turn <strong>OCR</strong> off for native digital PDFs, <strong>formulas</strong> off for ordinary business documents, and <strong>barcodes</strong> off when none are present, to improve performance. Keep <strong>layout</strong> on whenever structure matters.',
    tags: ['Content Understanding', 'Performance']
  },
  {
    id: 'azure-ai-apps-agents-fc-491',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'How does Content Understanding preserve tracked edits such as strikethroughs in its output?',
    hint: 'Annotations in Markdown.',
    back: 'Document analyzers can capture <strong>annotations</strong>, such as highlights, underlines, strikethroughs and handwritten markup, and return them in Markdown (<code>annotationFormat: markdown</code>). prebuilt-layout captures them in digital PDFs, and prebuilt-documentSearch captures handwritten annotations, so agents can tell deleted text from agreed text.',
    tags: ['Content Understanding', 'Annotations']
  },
  {
    id: 'azure-ai-apps-agents-fc-492',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'In an analyzer definition, what goes in models.completion and models.embedding, and what is a common mistake?',
    hint: 'Catalog names, not deployment names.',
    back: 'They take <strong>Foundry catalog model names</strong> (for example gpt-5.2 and text-embedding-3-large) that must appear in the base analyzer\'s <code>supportedModels</code>. At run time the service maps them to the deployments configured at the resource level. Putting a <strong>deployment name</strong> such as contoso-extract there causes the create request to be rejected.',
    tags: ['Content Understanding', 'Model configuration']
  },
  {
    id: 'azure-ai-apps-agents-fc-493',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'What is the embedding model used for in Content Understanding?',
    hint: 'Examples and knowledge.',
    back: 'Generative <strong>completion</strong> models do field extraction, segmentation and figure analysis. The <strong>embedding</strong> model supports <strong>labeled training examples</strong> and knowledge-base style reference data used to improve custom analyzers. If no embedding model is configured, labeled examples cannot contribute.',
    tags: ['Content Understanding', 'Training examples']
  },
  {
    id: 'azure-ai-apps-agents-fc-494',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'What are contextualization charges in Content Understanding, and what makes the rate higher?',
    hint: 'Standard vs advanced workflow families.',
    back: '<strong>Contextualization</strong> covers the service\'s own work around model calls: output normalization, source grounding, confidence computation and context engineering. The analyzer\'s resolved <code>config.workflow</code> family sets the rate: <strong>standard</strong> families bill at the standard rate; <strong>advanced</strong> and <strong>agentic</strong> families (for example, preview analyzers with labeled data) bill at the advanced rate. Model tokens are billed separately.',
    tags: ['Content Understanding', 'Pricing']
  },
  {
    id: 'azure-ai-apps-agents-fc-495',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'prebuilt-documentFieldSchema vs prebuilt-documentFields?',
    hint: 'Propose a schema vs pull key-value pairs.',
    back: '<strong>prebuilt-documentFieldSchema</strong> analyzes sample documents and <strong>proposes a field schema</strong>, a starting point for a new custom analyzer. <strong>prebuilt-documentFields</strong> <strong>extracts key-value pairs</strong> generically; domain analyzers such as prebuilt-idDocument fall back to it when a document matches none of their schemas.',
    tags: ['Content Understanding', 'Utility analyzers']
  },
  {
    id: 'azure-ai-apps-agents-fc-496',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'Which file formats get figure description and chart analysis in prebuilt-documentSearch?',
    hint: 'Not every supported format.',
    back: 'Figure analysis runs only for <strong>PDF and image</strong> files. Word, PowerPoint and other supported formats still get Markdown text and layout but no figure descriptions or Chart.js and Mermaid output. Convert Office files to PDF, or render slides as images, when figures carry important information.',
    tags: ['Content Understanding', 'File formats']
  },
  {
    id: 'azure-ai-apps-agents-fc-497',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'Markdown content or structured JSON fields: which Content Understanding output serves which consumer?',
    hint: 'Reasoning vs automation.',
    back: '<strong>Markdown</strong> gives agents and RAG indexes a clean, structure-preserving representation to read and quote. <strong>Schema fields</strong> with confidence and grounding feed automation such as ERP posting or filters. One analyzer call returns both, unless <code>omitContent</code> is set.',
    tags: ['Content Understanding', 'Structured output']
  },
  {
    id: 'azure-ai-apps-agents-fc-498',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'How do you create a custom Content Understanding analyzer, and what naming rules apply?',
    hint: 'PUT with an ID.',
    back: '<code>PUT {endpoint}/contentunderstanding/analyzers/{analyzerId}</code> with a definition naming a <code>baseAnalyzerId</code> (prebuilt-document, -audio, -video or -image), <code>config</code>, <code>fieldSchema</code> and <code>models</code>. It returns <strong>201 Created</strong> with an Operation-Location to track creation. IDs use letters, numbers, dots or underscores and must not clash with prebuilt names.',
    tags: ['Content Understanding', 'Custom analyzers']
  },
  {
    id: 'azure-ai-apps-agents-fc-499',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'Content Understanding in the Foundry portal vs Content Understanding Studio?',
    hint: 'Agent workflows vs analyzer tuning.',
    back: 'The <strong>Foundry portal</strong> is where you use Content Understanding inside agentic workflows through the Content Understanding tool. <strong>Content Understanding Studio</strong> focuses on analyzer performance: <strong>labeling data</strong> to improve custom analyzers, building classification-based analyzers, and easing migration from Document Intelligence. Both need a Microsoft Foundry resource.',
    tags: ['Content Understanding', 'Portals']
  },
  {
    id: 'azure-ai-apps-agents-fc-500',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'Which Content Understanding API version should production use, and what does the preview add?',
    hint: 'GA from late 2025, preview from the Build 2026 wave.',
    back: 'Use <strong>2025-11-01 (GA)</strong> for production: stable document, image, audio and video extraction, standard classification and segmentation, labeled training examples. <strong>2026-06-01-preview</strong> adds <strong>agentic mode</strong>, in-page segmentation, signature detection, document metadata from read and layout, and improved analyzer training. Preview features carry no SLA.',
    tags: ['Content Understanding', 'API versions']
  }
];

export default AZURE_AI_APPS_AGENTS_FLASHCARDS_20;
