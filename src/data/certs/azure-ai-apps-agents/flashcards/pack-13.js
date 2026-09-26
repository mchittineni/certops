export const AZURE_AI_APPS_AGENTS_FLASHCARDS_13 = [
  {
    id: 'azure-ai-apps-agents-fc-301',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'How do you get a multimodal chat model to answer questions about a video?',
    hint: 'The chat API sees pictures and text, not a video file.',
    back: 'Chat models take images, not video files, so <strong>sample frames</strong> (for example one per second, or at scene changes), send them as a sequence of images with their timestamps, and add a <strong>transcript</strong> of the audio as text. Keep frame count and detail level down to control tokens. For long or many videos, a Content Understanding video analyzer handles segmentation, key frames and transcription for you.',
    tags: ['Video', 'Multimodal']
  },
  {
    id: 'azure-ai-apps-agents-fc-302',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'What drives the input token cost of an image at high detail, and how do you reduce it?',
    hint: 'Count the tiles.',
    back: 'At high detail the image is scaled and divided into tiles, and <strong>each tile adds input tokens</strong> on top of a base amount. Cost therefore grows with image dimensions, not file format. Reduce it by <strong>downscaling</strong> to the resolution the task actually needs, <strong>cropping</strong> to the region of interest, or using low detail when fine detail is irrelevant.',
    tags: ['Multimodal models', 'Token cost']
  },
  {
    id: 'azure-ai-apps-agents-fc-303',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'How do you ask a vision-enabled model to reason over several images at once?',
    hint: 'One message, several parts.',
    back: 'Put several <strong>image content parts</strong> in one <strong>user message</strong>, each preceded by a short text part that labels it (for example "Before" and "After"), then state the task. The model compares the actual pixels in one pass, which beats describing each image separately and comparing the descriptions.',
    tags: ['Multimodal models', 'Multiple images']
  },
  {
    id: 'azure-ai-apps-agents-fc-304',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'Multimodal chat model vs Image Analysis captions: which do you choose for image descriptions?',
    hint: 'Control versus a fixed sentence.',
    back: 'Choose a <strong>multimodal chat model</strong> when captions must follow rules (length, tone, language, required details), describe several images together, answer questions or return structured JSON. <strong>Image Analysis</strong> captions return a generic sentence (plus region captions with boxes) with no style control, and the 4.0 service is deprecated, so treat it as a legacy option for existing apps.',
    tags: ['Captioning', 'Multimodal models', 'Azure Vision']
  },
  {
    id: 'azure-ai-apps-agents-fc-305',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'What is the lifecycle status of Image Analysis 4.0, and what did it offer?',
    hint: 'A retirement date in 2028.',
    back: 'Image Analysis 4.0 in Azure Vision in Foundry Tools is <strong>deprecated and retires on September 25, 2028</strong>. Its features are read (OCR), captions, dense captions, tags, object detection, people detection, smart crops and multimodal embeddings. Its preview custom models, product recognition and background removal were already retired in March 2025.',
    tags: ['Azure Vision', 'Image Analysis', 'Retirement']
  },
  {
    id: 'azure-ai-apps-agents-fc-306',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'What does the dense captions feature return?',
    hint: 'Sentences with boxes.',
    back: 'One-sentence captions for <strong>up to ten regions</strong> of an image, one of which is the <strong>whole image</strong>, each with a <strong>bounding box in pixels</strong> and a confidence score. Use it when an app needs to draw boxes on specific parts of a photo and label them in words, which object detection (tags only) cannot do.',
    tags: ['Captioning', 'Dense captions']
  },
  {
    id: 'azure-ai-apps-agents-fc-307',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'Why might Image Analysis 4.0 captions fail on a Vision resource that handles tags and OCR fine?',
    hint: 'Where the resource lives.',
    back: 'Image Analysis 4.0 <strong>captions and dense captions are available only in certain regions</strong>, such as East US, West US, France Central, North Europe, West Europe, Southeast Asia, East Asia and Korea Central, while other 4.0 features work more widely. Create the resource in a supported region, fall back to the version 3.2 description feature, or move captioning to a multimodal model.',
    tags: ['Azure Vision', 'Captioning', 'Regions']
  },
  {
    id: 'azure-ai-apps-agents-fc-308',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'How do you get concise or detailed captions from the same multimodal model?',
    hint: 'Tell it, precisely.',
    back: 'State the target in the instructions: a <strong>word or sentence limit</strong>, the <strong>audience</strong>, what to include (subject, action, setting, colours) and what to leave out. For both at once, request a JSON schema with a short caption field and a detailed description field through structured outputs, so one call returns both reliably.',
    tags: ['Captioning', 'Prompt engineering']
  },
  {
    id: 'azure-ai-apps-agents-fc-309',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'What makes visual question answering grounded rather than guesswork?',
    hint: 'Permission to say "I cannot tell" plus receipts.',
    back: 'Instruct the model to answer <strong>only from what is visible</strong>, give it an explicit way to <strong>abstain</strong> when the image is unclear, and ask it to <strong>cite evidence</strong>, such as quoted text it read and where in the image it appears. Supply enough resolution (crop, high detail) so the evidence is actually legible.',
    tags: ['Visual QA', 'Grounding']
  },
  {
    id: 'azure-ai-apps-agents-fc-310',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'What are the basic rules for good alt text?',
    hint: 'Short, purposeful, no preamble.',
    back: 'Convey the image\'s <strong>content and purpose</strong> in its context, keep it <strong>concise</strong>, and skip phrases like "image of" because screen readers already announce images. Do not repeat nearby text word for word. <strong>Decorative</strong> images get an <strong>empty alt</strong> attribute so assistive technology ignores them.',
    tags: ['Alt text', 'Accessibility']
  },
  {
    id: 'azure-ai-apps-agents-fc-311',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'Decorative, informative, functional and complex images: what text alternative does each need?',
    hint: 'Four types, four treatments.',
    back: '<strong>Decorative</strong>: empty alt. <strong>Informative</strong>: a short phrase or sentence conveying its meaning. <strong>Functional</strong> (a linked image or icon button): describe the <strong>action</strong> or destination, not the picture. <strong>Complex</strong> (charts, diagrams): short alt naming it and its key message, plus an <strong>extended description</strong> with the data elsewhere on the page.',
    tags: ['Alt text', 'Accessibility']
  },
  {
    id: 'azure-ai-apps-agents-fc-312',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'Where should an extended description of a complex image live?',
    hint: 'Not in the alt attribute.',
    back: 'Keep alt short and put the long description in <strong>visible text near the image</strong>, a <strong>linked section or page</strong>, or content referenced with <code>aria-describedby</code>. For charts, a data table is often the best extended description. A multimodal model can draft the long text, but a subject-matter reviewer should verify numbers.',
    tags: ['Extended descriptions', 'Accessibility']
  },
  {
    id: 'azure-ai-apps-agents-fc-313',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'Why should an alt text pipeline send page context along with the image?',
    hint: 'The same photo can mean different things.',
    back: 'Alt text should convey <strong>why the image is on that page</strong>. The same photo can illustrate a donation appeal, a job advert or a news story, so the model needs the surrounding heading and text to describe the relevant aspect. Store alt text <strong>per placement</strong>, not once per image file.',
    tags: ['Alt text', 'Context']
  },
  {
    id: 'azure-ai-apps-agents-fc-314',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'Which base analyzers can a Content Understanding custom analyzer inherit from?',
    hint: 'One per modality.',
    back: 'Only four, set through <code>baseAnalyzerId</code>: <strong>prebuilt-document</strong>, <strong>prebuilt-image</strong>, <strong>prebuilt-audio</strong> and <strong>prebuilt-video</strong>. The custom analyzer adds a field schema and configuration on top. Content extraction analyzers such as prebuilt-read or prebuilt-layout and the RAG analyzers are not valid bases.',
    tags: ['Content Understanding', 'Custom analyzers']
  },
  {
    id: 'azure-ai-apps-agents-fc-315',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'Content Understanding field methods extract, classify and generate: what does each do and where can it be used?',
    hint: 'One of them is documents-only.',
    back: '<strong>Extract</strong>: returns the value exactly as it appears in the content, with source grounding; <strong>documents only</strong>. <strong>Classify</strong>: picks from a predefined set of categories (an enum), for routing or rules. <strong>Generate</strong>: produces a free-form value such as a scene description or summary. Image, audio and video analyzers use classify and generate.',
    tags: ['Content Understanding', 'Field schema']
  },
  {
    id: 'azure-ai-apps-agents-fc-316',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'Name the Content Understanding RAG analyzer for each modality.',
    hint: 'All end in Search.',
    back: '<strong>prebuilt-documentSearch</strong> (Markdown with layout, figure descriptions, summary, chunking), <strong>prebuilt-imageSearch</strong> (one-paragraph image description), <strong>prebuilt-audioSearch</strong> (transcript and conversation summary) and <strong>prebuilt-videoSearch</strong> (segments with descriptions, transcripts and key frames). All produce retrieval-ready output without a custom schema.',
    tags: ['Content Understanding', 'RAG']
  },
  {
    id: 'azure-ai-apps-agents-fc-317',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'Which Content Understanding analyzers work without any model deployment, and what do the rest need?',
    hint: 'OCR and layout are self-contained.',
    back: '<strong>prebuilt-read</strong>, <strong>prebuilt-layout</strong> and <strong>prebuilt-digitalParse</strong> need no language or embedding model. Everything generative, including RAG analyzers, domain analyzers and custom fields, needs your own Foundry deployments of a supported <strong>chat completion model</strong> and an <strong>embedding model</strong>, and you pay for their tokens on top of Content Understanding meters.',
    tags: ['Content Understanding', 'Model deployments']
  },
  {
    id: 'azure-ai-apps-agents-fc-318',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'How are model deployments mapped for Content Understanding, and which setting wins?',
    hint: 'Resource defaults versus the request.',
    back: 'Set <strong>resource-level defaults</strong> with <code>PATCH /contentunderstanding/defaults</code>, mapping model names and aliases such as <code>prebuilt-analyzer-completion</code> and <code>prebuilt-analyzer-embedding</code> to deployment names, or configure them in Content Understanding Studio. A <code>modelDeployments</code> object in an <strong>analyze request</strong> overrides the defaults for that call.',
    tags: ['Content Understanding', 'Model deployments', 'Configuration']
  },
  {
    id: 'azure-ai-apps-agents-fc-319',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'What are the two stages of Content Understanding video analysis?',
    hint: 'First the backbone, then the meaning.',
    back: '<strong>Content extraction</strong> builds the metadata backbone: transcription with diarization, key frame extraction and shot detection. <strong>Field extraction</strong> then uses a generative model to fill custom fields and perform segmentation, reasoning over multiple frames and speech per segment. Segmentation consumes generative tokens even when no fields are defined.',
    tags: ['Content Understanding', 'Video analysis']
  },
  {
    id: 'azure-ai-apps-agents-fc-320',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'enableSegment false vs true in a video analyzer: when do you use each?',
    hint: 'One answer for the whole file, or one per chunk.',
    back: '<strong>false</strong>: the entire video is one segment and fields cover its full length; use it for compliance checks that look for something anywhere, or full-length summaries. <strong>true</strong>: the model creates segments from a natural-language rule in <code>contentCategories</code>, from seconds to minutes long; use it for chapters, stories or scenes that need separate results.',
    tags: ['Content Understanding', 'Video segmentation']
  },
  {
    id: 'azure-ai-apps-agents-fc-321',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'How does custom video segmentation route segments to another analyzer, and what limit applies?',
    hint: 'A description plus an analyzer ID.',
    back: 'Under <code>config.contentCategories</code>, define a category whose <strong>description</strong> tells the model how to cut the video (for example, one segment per news story, ignoring adverts) and whose <strong>analyzerId</strong> names the analyzer that processes each segment. Video currently supports <strong>only one contentCategories object</strong>, so encode the whole segmentation rule in that single description.',
    tags: ['Content Understanding', 'Video segmentation', 'Analyzer routing']
  },
  {
    id: 'azure-ai-apps-agents-fc-322',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'What extra video output appears only when returnDetails is true?',
    hint: 'Cuts and sentences.',
    back: 'Setting <code>"returnDetails": true</code> adds <strong>shot detection</strong> results as millisecond timestamps in <code>cameraShotTimesMs</code>, <strong>sentence-level transcript timestamps</strong>, and per-phrase language information for multilingual transcription. Editors use the shot times to cut on existing edits without guessing boundaries.',
    tags: ['Content Understanding', 'Video analysis', 'Shot detection']
  },
  {
    id: 'azure-ai-apps-agents-fc-323',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'Which technical limits of Content Understanding video analysis can cause missed details?',
    hint: 'Frame rate, frame size, sound.',
    back: '<strong>Frame sampling of about 1 FPS</strong> can miss rapid motion or sub-second events; <strong>frames resized to 512 x 512 pixels</strong> can lose small text and distant objects; and only <strong>spoken words</strong> are transcribed, with music, sound effects and ambient noise ignored. Use a custom higher-frame-rate, higher-resolution pipeline if those details matter.',
    tags: ['Content Understanding', 'Video analysis', 'Limitations']
  },
  {
    id: 'azure-ai-apps-agents-fc-324',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'What is the risk of automatic multilingual transcription in Content Understanding video and audio analysis?',
    hint: 'Closest is not correct.',
    back: 'With no locale set (or <code>auto</code>), language is detected per phrase. If the audio uses a locale that is <strong>not supported</strong>, the service transcribes it with the <strong>closest supported locale</strong>, which is likely wrong and poisons downstream descriptions and fields. Configure locales explicitly and check the Azure Speech language list first.',
    tags: ['Content Understanding', 'Transcription']
  },
  {
    id: 'azure-ai-apps-agents-fc-325',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'How do Foundry guardrails affect a Content Understanding analysis?',
    hint: 'Success can still come with warnings.',
    back: 'Content Understanding inherits the <strong>guardrail on the Foundry model deployment</strong> it uses. Detections can appear as <strong>warnings</strong> or <strong>errors</strong>: guardrails can restrict field generation while extracted content (Markdown, pages, paragraphs) is preserved, so an analysis may succeed with some fields missing. With approval, annotate-only behaviour keeps detections for human review instead of blocking.',
    tags: ['Content Understanding', 'Guardrails']
  }
];

export default AZURE_AI_APPS_AGENTS_FLASHCARDS_13;
