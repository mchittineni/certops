export const AZURE_AI_APPS_AGENTS_FLASHCARDS_14 = [
  {
    id: 'azure-ai-apps-agents-fc-326',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'Standard analyzer vs agentic mode in Content Understanding: when do you use each?',
    hint: 'Is the answer on the page, or must it be worked out?',
    back: 'Use a <strong>standard analyzer</strong> when values are stated in the content and just need extracting, classifying or generating: cheaper, faster and grounded. Use <strong>agentic mode</strong> when the answer must be <strong>built from evidence</strong>: multistep reasoning across sections, calculations, validation against conditions, or interpreting complex tables and charts.',
    tags: ['Content Understanding', 'Agentic mode']
  },
  {
    id: 'azure-ai-apps-agents-fc-327',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'How do you turn on agentic mode for a Content Understanding analyzer, and what does the service store?',
    hint: 'A creation-time selector under config.',
    back: 'Create a document analyzer with the <code>2026-06-01-preview</code> API and set <code>config.workflow</code> to <code>"agentic"</code> (<code>"default"</code> or omitting it lets the service pick the standard workflow). After creation the value is <strong>resolved and versioned</strong>, for example <code>agentic.2026-06-01-preview</code>, which pins the behaviour.',
    tags: ['Content Understanding', 'Agentic mode', 'Configuration']
  },
  {
    id: 'azure-ai-apps-agents-fc-328',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'What limitations apply to the initial agentic mode preview?',
    hint: 'Files, modality, one field method, one training feature.',
    back: '<strong>One input file</strong> per analysis request (it may contain several related documents); <strong>document analyzers only</strong>; fields using the <strong>extract</strong> method are not supported, so use generate or classify; and <strong>labeled samples</strong> for analyzer improvement are not supported. It is a preview without an SLA, so keep human review for high-impact decisions.',
    tags: ['Content Understanding', 'Agentic mode', 'Limitations']
  },
  {
    id: 'azure-ai-apps-agents-fc-329',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'What happened to Content Understanding pro mode?',
    hint: 'It lived in one preview API.',
    back: 'Pro mode existed only in the <strong>2025-05-01-preview</strong> API, which is <strong>retired</strong>; it was never part of the 2025-11-01 GA API. Its successor is <strong>agentic mode</strong> in the 2026-06-01-preview API. Agentic mode is not a drop-in replacement: it takes one input file per request, so pipelines that passed several files or reference data must be redesigned.',
    tags: ['Content Understanding', 'Pro mode', 'Migration']
  },
  {
    id: 'azure-ai-apps-agents-fc-330',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'What cost and capacity implications come with agentic mode?',
    hint: 'A higher rate and a big TPM number.',
    back: 'Agentic workflows bill at the <strong>advanced contextualization rate</strong>, consume <strong>many more model tokens</strong> and take longer than standard analysis. Microsoft notes a typical need of about <strong>400,000 tokens per minute</strong> per analyzer job on the Foundry deployment; configure at least that capacity to avoid 429 errors, and test with representative documents first.',
    tags: ['Content Understanding', 'Agentic mode', 'Cost']
  },
  {
    id: 'azure-ai-apps-agents-fc-331',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'How does Content Understanding handle a single file that contains several different document types?',
    hint: 'Classify, split, route.',
    back: 'A <strong>classifier</strong> analyzer with segmentation enabled splits the file into segments and assigns each to a <strong>content category</strong>. Each category can name an <code>analyzerId</code>, so every segment is routed to its own <strong>single-task analyzer</strong> with the right field schema, such as invoices to an invoice analyzer and packing lists to another.',
    tags: ['Content Understanding', 'Classification', 'Analyzer routing']
  },
  {
    id: 'azure-ai-apps-agents-fc-332',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'What is a composed prebuilt analyzer in Content Understanding? Give examples.',
    hint: 'A classifier that ships with its own specialists.',
    back: 'A prebuilt analyzer that <strong>classifies</strong> an incoming document and <strong>routes</strong> it to the right specialised prebuilt analyzer for extraction. Examples: <strong>prebuilt-procurement</strong> (invoices, receipts, purchase orders), <strong>prebuilt-tax.us</strong> (US tax forms) and <strong>prebuilt-mortgage.us</strong> (US mortgage documents).',
    tags: ['Content Understanding', 'Prebuilt analyzers']
  },
  {
    id: 'azure-ai-apps-agents-fc-333',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'Image Analysis 4.0 objects vs people vs dense captions: what location data does each return?',
    hint: 'Tags, persons, sentences.',
    back: '<strong>Objects</strong>: a tag and bounding box for each general object found. <strong>People</strong>: a bounding box and confidence for each person (not faces, no identity). <strong>Dense captions</strong>: a sentence and bounding box for up to ten regions. All three are part of an API deprecated for retirement on September 25, 2028, so plan migrations.',
    tags: ['Azure Vision', 'Object detection']
  },
  {
    id: 'azure-ai-apps-agents-fc-334',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'You need a custom object detector with bounding boxes that must be supported past 2028. What are the options?',
    hint: 'One service retires; Microsoft names the path.',
    back: 'Azure <strong>Custom Vision</strong> is supported only until <strong>September 25, 2028</strong>, and the Image Analysis 4.0 model customization preview was retired in 2025. Microsoft recommends <strong>automated ML for images in Azure Machine Learning</strong> for custom classification and object detection, or a generative solution built on Foundry models where approximate localisation is acceptable.',
    tags: ['Object detection', 'Custom models', 'Retirement']
  },
  {
    id: 'azure-ai-apps-agents-fc-335',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'Are multimodal chat models reliable for pixel-accurate bounding boxes?',
    hint: 'Great at what, weak at where.',
    back: 'No. They are strong at <strong>understanding and describing</strong> what an image shows, but spatial localisation is approximate, and coordinates they emit can be wrong even inside a valid JSON schema. For precise boxes use a <strong>trained detection model</strong>, OCR polygons for text, or face detection for faces, then let the chat model reason about the results.',
    tags: ['Multimodal models', 'Limitations']
  },
  {
    id: 'azure-ai-apps-agents-fc-336',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'How do you get the pixel location of text in an image for redaction or blurring?',
    hint: 'OCR gives more than the words.',
    back: 'Run OCR with the <strong>Read</strong> model (Document Intelligence, or Content Understanding <strong>prebuilt-read</strong>). It returns each word and line with a <strong>bounding polygon</strong> and confidence, so you can filter lines by pattern, such as number plates or account numbers, and blur or redact exactly those regions.',
    tags: ['OCR', 'Regions', 'Redaction']
  },
  {
    id: 'azure-ai-apps-agents-fc-337',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'What does Content Understanding prebuilt-layout report about figures?',
    hint: 'Types and locations, no descriptions.',
    back: 'For PDF files, prebuilt-layout detects <strong>figure types</strong> such as charts, diagrams, pictures and icons and returns their <strong>locations</strong>, alongside paragraphs, tables, sections and annotations. It needs no language model. The 2026-06-01-preview adds <strong>signature detection</strong>. For generated figure descriptions, use prebuilt-documentSearch instead.',
    tags: ['Content Understanding', 'Layout', 'Figures']
  },
  {
    id: 'azure-ai-apps-agents-fc-338',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'Face detection vs face identification in the Azure Face service: what differs?',
    hint: 'Where versus who.',
    back: '<strong>Detection</strong> locates faces and returns a face rectangle (plus optional landmarks or attributes), enough for blurring or counting. <strong>Identification and verification</strong> match a face to a known person and are <strong>Limited Access</strong> features requiring approval. Image Analysis people detection finds whole people, not faces.',
    tags: ['Face detection', 'Responsible AI']
  },
  {
    id: 'azure-ai-apps-agents-fc-339',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'Which harm categories and severity values does the Content Safety image API return?',
    hint: 'Four categories, four values.',
    back: '<strong>Hate</strong>, <strong>sexual</strong>, <strong>violence</strong> and <strong>self-harm</strong>, each with a severity on the <strong>trimmed scale: 0, 2, 4 or 6</strong>. The text model supports the full 0 to 7 scale. Choose image thresholds on the four-level scale, per category, to match your platform\'s policy.',
    tags: ['Content Safety', 'Image moderation']
  },
  {
    id: 'azure-ai-apps-agents-fc-340',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'When do you use the Content Safety multimodal API instead of Analyze Image?',
    hint: 'Memes.',
    back: 'When harm depends on <strong>image and text together</strong>, such as memes with overlaid words. The multimodal API (preview) scores an image with accompanying text, and with <code>enableOcr</code> set to true it reads text inside the image and analyses it together with the picture. OCR reads at most about 1,000 characters; the rest is truncated.',
    tags: ['Content Safety', 'Multimodal moderation']
  },
  {
    id: 'azure-ai-apps-agents-fc-341',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'Custom categories standard vs rapid in Content Safety: how do they differ?',
    hint: 'Training time and modalities.',
    back: '<strong>Standard</strong> (preview): you train a custom model on labelled examples; training can take several hours, and it works on <strong>text only</strong> (English). <strong>Rapid</strong> (preview): you define an emerging harmful pattern from a few samples and start scanning <strong>text and images</strong> quickly, which suits incident response such as a newly spreading symbol.',
    tags: ['Content Safety', 'Custom categories']
  },
  {
    id: 'azure-ai-apps-agents-fc-342',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'Do Foundry guardrails screen images sent to multimodal deployments, and how do you relax a category?',
    hint: 'Custom guardrail; turning off needs approval.',
    back: 'Yes. Harm-category controls classify <strong>text and image</strong> content at the configured intervention points. To relax one category for a legitimate use, such as clinical wound photos, create a <strong>custom guardrail</strong> with a less restrictive threshold for that category and assign it to the deployment. Turning a category <strong>off</strong> requires approval for <strong>modified guardrails</strong>.',
    tags: ['Guardrails', 'Image inputs']
  },
  {
    id: 'azure-ai-apps-agents-fc-343',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'How is Azure Face liveness detection split between your app server and the client, and what does it return?',
    hint: 'The server owns the session; the device owns the camera.',
    back: 'Your <strong>app server</strong> creates a liveness session and passes a short-lived session token to the client; only the server starts the check and reads the result. The <strong>client</strong> runs the Face SDK (iOS, Android or web) or the Microsoft-hosted Liveness Quick Link, which opens the camera and guides the user in <strong>Passive</strong> or <strong>Passive-Active</strong> mode. The result is a <strong>real or spoof</strong> decision (catching printouts, masks and screen replays), plus a session image; with verification it also matches the face to a reference image.',
    tags: ['Face', 'Liveness detection']
  },
  {
    id: 'azure-ai-apps-agents-fc-344',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'What layers of defence mitigate prompt injection carried in images?',
    hint: 'Detect, separate, limit, approve.',
    back: '<strong>Detect</strong>: extract image text with OCR and screen it with Prompt Shields for documents (or guardrails at tool response). <strong>Separate</strong>: delimit extracted text as untrusted data and instruct the model never to follow it. <strong>Limit</strong>: give tools least privilege. <strong>Approve</strong>: require human sign-off for sensitive actions such as sending files or changing accounts.',
    tags: ['Prompt injection', 'Defence in depth']
  },
  {
    id: 'azure-ai-apps-agents-fc-345',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'Which guardrail intervention points exist, and which apply only to agents?',
    hint: 'Four points; two are about tools.',
    back: '<strong>User input</strong> and <strong>output</strong> apply to models and agents. <strong>Tool call</strong> (what the agent sends to a tool) and <strong>tool response</strong> (what the tool returns) are preview points for <strong>agents only</strong>. An agent uses its own assigned guardrail, which fully overrides its model deployment\'s guardrail.',
    tags: ['Guardrails', 'Agents', 'Intervention points']
  },
  {
    id: 'azure-ai-apps-agents-fc-346',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'What is spotlighting, and where can you use it in Foundry guardrails today?',
    hint: 'Marking untrusted text; models, not agents.',
    back: 'Spotlighting transforms or marks <strong>untrusted documents</strong> in a prompt so the model can distinguish them from instructions, reducing indirect prompt injection. In Foundry it is a <strong>preview</strong> guardrail risk supported for <strong>model deployments but not agents</strong>; for agents rely on indirect-attack detection at tool response plus delimiting in your own prompts.',
    tags: ['Spotlighting', 'Prompt injection', 'Guardrails']
  },
  {
    id: 'azure-ai-apps-agents-fc-347',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'What are Content Credentials on Azure OpenAI generated images?',
    hint: 'A signed manifest, not pixels.',
    back: 'A <strong>C2PA</strong> manifest attached to every AI-generated image, <strong>cryptographically signed</strong> by a certificate tracing back to Azure OpenAI, recording that the image is AI-generated, which service produced it and when. It is invisible and tamper-evident, and can be checked with Content Authenticity Initiative tools; it can be lost if a platform strips metadata.',
    tags: ['Content Credentials', 'C2PA', 'Provenance']
  },
  {
    id: 'azure-ai-apps-agents-fc-348',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'Visible watermark vs Content Credentials: which does Azure OpenAI provide?',
    hint: 'One is automatic and invisible.',
    back: 'Azure OpenAI attaches <strong>Content Credentials</strong> (invisible, signed metadata) automatically. It does <strong>not</strong> stamp a visible watermark. If a policy or regulator requires a visible label, add it deterministically in your own post-processing before publishing, and keep the credentials for provenance.',
    tags: ['Watermarking', 'Content Credentials']
  },
  {
    id: 'azure-ai-apps-agents-fc-349',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'How do you automate brand-guideline checks on images?',
    hint: 'One field per rule.',
    back: 'Define an image analyzer (Content Understanding) or a structured-output prompt with <strong>one classify field per rule</strong>, such as logo undistorted, approved colours and clear space respected, returning pass or fail. Route failures and low-confidence results to <strong>human reviewers</strong>. Logo detection alone only proves presence, not correct usage.',
    tags: ['Visual policy', 'Brand compliance']
  },
  {
    id: 'azure-ai-apps-agents-fc-350',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'How do you layer safety controls for generated images when your policy is stricter than the platform default?',
    hint: 'Platform gate, app gate, audit trail.',
    back: 'First, assign the image deployment a <strong>custom guardrail</strong> with the most restrictive thresholds. Second, run each output through the <strong>Content Safety image API</strong> with your own stricter per-category thresholds before publishing. Third, <strong>log</strong> annotations and severity results as the decision record and send borderline cases to human review.',
    tags: ['Guardrails', 'Content Safety', 'Image generation']
  }
];

export default AZURE_AI_APPS_AGENTS_FLASHCARDS_14;
