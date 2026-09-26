export const AZURE_AI_APPS_AGENTS_FLASHCARDS_16 = [
  {
    id: 'azure-ai-apps-agents-fc-376',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'What does Azure Speech pronunciation assessment score?',
    hint: 'Four aspects plus an overall figure, down to the phoneme.',
    back: 'It compares speech with a <strong>reference text</strong> (scripted) or assesses free speech (unscripted) and returns <strong>accuracy</strong> (how closely phonemes match a native speaker), <strong>fluency</strong> (pauses and pace), <strong>completeness</strong> (share of reference words spoken, scripted only), <strong>prosody</strong> (stress and intonation, in supported locales) and an overall <strong>pronunciation score</strong>. Results come at phoneme, word and full-text level, with error types such as mispronunciation, omission and insertion, which makes it the tool for language-learning and reading-practice apps.',
    tags: ['Pronunciation assessment', 'Speech']
  },
  {
    id: 'azure-ai-apps-agents-fc-377',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'Prompt engineering, RAG or fine-tuning: which lever for which domain-customization problem?',
    hint: 'Ask: is the gap knowledge, format, or cost?',
    back: '<strong>Prompt engineering</strong> (system message, few-shot) first: cheap, instant, easy to change. <strong>RAG</strong> when the model lacks facts that change or are private, such as current policies. <strong>Fine-tuning</strong> when the task is stable, you have hundreds or thousands of good examples, and you need consistent style or format with shorter prompts or a smaller model. Fine-tuning teaches behavior, not fresh facts.',
    tags: ['Fine-tuning', 'Prompt engineering', 'RAG']
  },
  {
    id: 'azure-ai-apps-agents-fc-378',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'SFT, DPO and reinforcement fine-tuning in Foundry: what training signal does each use?',
    hint: 'Examples, preferences, graders.',
    back: '<strong>Supervised fine-tuning (SFT)</strong>: JSONL chat examples of the ideal reply for each input. <strong>Direct preference optimization (DPO)</strong>: pairs of a preferred and a non-preferred reply to the same prompt, to shift tone or style. <strong>Reinforcement fine-tuning (RFT)</strong>: for reasoning models, a <strong>grader</strong> scores the model\'s attempts so it learns to solve tasks with checkable answers.',
    tags: ['Fine-tuning', 'DPO', 'RFT']
  },
  {
    id: 'azure-ai-apps-agents-fc-379',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'What do temperature and top_p control, and should you change both at once?',
    hint: 'Two knobs for the same thing.',
    back: '<strong>temperature</strong> scales the randomness of token sampling: low values give focused, repeatable output; high values give more varied output. <strong>top_p</strong> (nucleus sampling) restricts sampling to the smallest set of tokens whose probability mass reaches p. Both shape variety, so the usual guidance is to <strong>adjust one, not both</strong>. For extraction and compliance summaries, keep variety low.',
    tags: ['Model parameters', 'Temperature']
  },
  {
    id: 'azure-ai-apps-agents-fc-380',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'Custom NER in Azure Language vs prompting an LLM to extract domain entities: when does each win?',
    hint: 'Labeled data, volume, metrics.',
    back: '<strong>Custom NER</strong> wins when you already have labeled documents, need high-volume, low-cost span extraction, and want per-entity <strong>precision, recall and F1</strong> from a train and evaluate cycle. <strong>LLM prompting</strong> wins when there is little or no labeled data, the schema changes often, or values must be interpreted or normalized rather than copied as spans.',
    tags: ['Custom NER', 'Domain extraction']
  },
  {
    id: 'azure-ai-apps-agents-fc-381',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'Why is a few-shot example set usually better placed in the system message than repeated in every user turn of a chat?',
    hint: 'Think about role and repetition.',
    back: 'The <strong>system message</strong> defines persistent behavior for the whole conversation, so examples there act as standing guidance and are sent once per request rather than duplicated in each user turn. Putting examples in user turns can make the model treat them as content to respond to. Keep examples short, representative of edge cases, and consistent with the output format you enforce.',
    tags: ['Prompt engineering', 'Few-shot']
  },
  {
    id: 'azure-ai-apps-agents-fc-382',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'Speech to text profanity option: what do Masked, Removed and Raw do to recognized text?',
    hint: 'The default does not leave the words intact.',
    back: 'Set it on the Speech SDK config (<code>SetProfanity</code>) or as a request parameter. <strong>Masked</strong>, the default, replaces each letter of a profane word with asterisks. <strong>Removed</strong> deletes the word from the transcript. <strong>Raw</strong> returns the words as spoken, for example when a moderation pipeline downstream must see the original text. Custom display formatting can add terms that should be treated as profanity.',
    tags: ['Speech to text', 'Profanity']
  },
  {
    id: 'azure-ai-apps-agents-fc-383',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'Speech SDK continuous recognition: what is the difference between the recognizing and recognized events?',
    hint: 'Interim vs final.',
    back: '<strong>recognizing</strong> fires repeatedly while someone speaks, carrying an <strong>interim hypothesis</strong> that may change; use it for live captions or UI hints. <strong>recognized</strong> fires once per utterance with the <strong>final</strong> result; use it to trigger downstream work such as calling a model. <code>canceled</code> reports errors and <code>session_stopped</code> marks the end of the session.',
    tags: ['Speech SDK', 'Events']
  },
  {
    id: 'azure-ai-apps-agents-fc-384',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'Which SSML elements control how text is read, where pauses fall and how fast or high the voice speaks?',
    hint: 'Interpretation, silence, delivery.',
    back: '<code>say-as</code> with <code>interpret-as</code> (for example <code>characters</code>, <code>date</code>, <code>telephone</code>) controls interpretation. <code>break</code> inserts a pause by strength or time. <code>prosody</code> adjusts rate, pitch and volume. <code>mstts:express-as</code> applies a speaking style such as cheerful or empathetic on voices that support it. <code>phoneme</code> and <code>lexicon</code> fix pronunciation.',
    tags: ['SSML', 'Text to speech']
  },
  {
    id: 'azure-ai-apps-agents-fc-385',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'Visemes vs the text to speech avatar: which do you use for a character you render yourself?',
    hint: 'Data vs video.',
    back: '<strong>Viseme events</strong> give you mouth-position data (IDs, 2D SVG or 3D blend shapes) with audio offsets, so your own engine animates a custom character. The <strong>text to speech avatar</strong> returns a rendered talking-presenter video (standard or custom avatar) that you display as is. Custom avatars are a limited access feature.',
    tags: ['Visemes', 'Avatars']
  },
  {
    id: 'azure-ai-apps-agents-fc-386',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'Name three ways to lower time to first audio when an agent speaks model output through Azure text to speech.',
    hint: 'Start early, play early, stay connected.',
    back: '1. Use <strong>text streaming input</strong> so synthesis begins from the first model tokens instead of the full reply. 2. <strong>Consume audio chunks as they arrive</strong> rather than waiting for the completed result. 3. <strong>Pre-connect and reuse</strong> the synthesizer connection so each turn avoids connection setup. Compressed output formats also reduce bytes on slow networks.',
    tags: ['Text to speech', 'Latency']
  },
  {
    id: 'azure-ai-apps-agents-fc-387',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'What does the Voice Live API add compared with chaining speech to text, a model and text to speech yourself?',
    hint: 'One socket, conversational extras.',
    back: 'Voice Live is a <strong>managed speech-to-speech</strong> API over WebSocket, compatible with Azure OpenAI Realtime events. On top of recognition, model and synthesis it adds <strong>noise suppression, echo cancellation, interruption detection and advanced end-of-turn detection</strong>, optional avatars, and custom speech or custom voice, with no model deployments to manage. Pricing tier (Pro, Basic, Lite) follows the model you choose.',
    tags: ['Voice Live', 'Voice agents']
  },
  {
    id: 'azure-ai-apps-agents-fc-388',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'Real-time diarization vs batch diarization: which Speech feature labels speakers live?',
    hint: 'One is a transcriber class.',
    back: 'For live audio, use <strong>ConversationTranscriber</strong> in the Speech SDK: each transcribed event carries a speaker ID such as Guest-1 from a single audio stream. For stored recordings, enable <strong>diarization</strong> on a batch or fast transcription request. Plain <code>SpeechRecognizer</code> does not separate speakers.',
    tags: ['Diarization', 'Azure Speech']
  },
  {
    id: 'azure-ai-apps-agents-fc-389',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'Phrase list or custom speech model: how do you decide?',
    hint: 'Run time vs training time.',
    back: 'A <strong>phrase list</strong> is sent at run time, needs no training, and boosts a set of words or names for that session; ideal for lists that change often, like today\'s guests. A <strong>custom speech model</strong> is trained on text or audio and deployed to an endpoint; use it for large domain vocabularies, patterned utterances, accents or noisy environments.',
    tags: ['Phrase list', 'Custom speech']
  },
  {
    id: 'azure-ai-apps-agents-fc-390',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'Custom speech training data types: which problem does each one fix?',
    hint: 'Words, patterns, sounds, spelling, display.',
    back: '<strong>Plain text</strong>: domain vocabulary in context (trains in minutes). <strong>Structured text</strong>: patterned utterances built from lists, plus a phonetic lexicon. <strong>Audio + human-labeled transcripts</strong>: accents, speaking style, background noise. <strong>Pronunciation</strong>: spoken form of odd terms or acronyms. <strong>Display format</strong>: ITN, rewrite and profanity rules for output text.',
    tags: ['Custom speech', 'Training data']
  },
  {
    id: 'azure-ai-apps-agents-fc-391',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'What audio properties must custom speech training files with transcripts have?',
    hint: 'Format, rate, channels, length.',
    back: 'RIFF <strong>WAV</strong>, <strong>8 kHz or 16 kHz</strong>, <strong>16-bit PCM</strong>, <strong>mono</strong>, zipped (max 2 GB or 10,000 files). Each training file should be about <strong>40 seconds or less</strong>; for longer files only the transcript text is used, so the audio adds no acoustic learning. Test files can run up to two hours. Recommended training volume is 1 to 100 hours.',
    tags: ['Custom speech', 'Audio requirements']
  },
  {
    id: 'azure-ai-apps-agents-fc-392',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'How is word error rate calculated, and what data do you need to measure it?',
    hint: 'Three kinds of mistakes over a reference.',
    back: '<strong>WER = (insertions + deletions + substitutions) / words in the reference transcript</strong>. You need <strong>audio plus human-labeled transcripts</strong> as ground truth; audio alone only supports visual inspection. Custom speech tests compare WER for a base and a custom model side by side. Note that custom speech mainly reduces substitution errors.',
    tags: ['Word error rate', 'Evaluation']
  },
  {
    id: 'azure-ai-apps-agents-fc-393',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'After deploying a custom speech model, how does an app make recognition use it?',
    hint: 'One property on the config.',
    back: 'Deploy the model to a <strong>custom endpoint</strong>, then set the <strong>endpoint ID</strong> on the Speech SDK <code>SpeechConfig</code> (or use the endpoint in REST and batch requests). Without it, requests go to the base model even from the same resource. Models can be copied to another region with the models copy API if needed.',
    tags: ['Custom speech', 'Endpoints']
  },
  {
    id: 'azure-ai-apps-agents-fc-394',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'Why can training a custom speech model with audio take days instead of minutes, and how do you reduce it?',
    hint: 'Hardware and whether audio is needed.',
    back: 'Audio training is compute heavy; text-only training finishes in minutes. Audio is processed fastest in <strong>regions with dedicated training hardware</strong> (about 10 hours of audio per day, up to 100 hours used). If a base model does not support audio customization, only transcripts are used. To cut time, <strong>start with text data</strong>, remove audio you do not need, and train in a region with dedicated hardware.',
    tags: ['Custom speech', 'Training time']
  },
  {
    id: 'azure-ai-apps-agents-fc-395',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'Professional voice vs personal voice: what distinguishes the two custom voice offerings?',
    hint: 'Studio brand voice vs short sample.',
    back: '<strong>Professional voice</strong> (custom neural voice) is trained on a larger set of studio recordings from a hired voice talent to build a durable <strong>brand voice</strong>. <strong>Personal voice</strong> creates a voice from a <strong>short audio sample</strong>, typically so users hear content in their own voice. Both are <strong>limited access</strong> and require recorded speaker consent.',
    tags: ['Custom voice', 'Responsible AI']
  },
  {
    id: 'azure-ai-apps-agents-fc-396',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'What is custom keyword in Azure Speech used for?',
    hint: 'Hey, device.',
    back: '<strong>Custom keyword</strong> builds a wake-word model, such as "Hey Courier", that runs <strong>on the device</strong> through the Speech SDK keyword recognizer. The device listens locally and starts streaming to cloud recognition only after the keyword is detected, which saves bandwidth, protects privacy and works without connectivity for activation.',
    tags: ['Custom keyword', 'Wake word']
  },
  {
    id: 'azure-ai-apps-agents-fc-397',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'What can custom display text formatting rules change in speech to text output?',
    hint: '#itn, #rewrite, #profanity, #test.',
    back: 'Display format rules convert the lexical result into display text your way: <strong>#itn</strong> patterns format numbers, IDs and dates (for example PK-7421); <strong>#rewrite</strong> pairs fix capitalization or spelling; <strong>#profanity</strong> adds words to mask; <strong>#test</strong> holds unit tests. They change presentation, not what the model recognizes.',
    tags: ['Custom speech', 'Display formatting']
  },
  {
    id: 'azure-ai-apps-agents-fc-398',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'Azure neural voice with SSML vs gpt-4o-mini-tts: how do you control delivery in each?',
    hint: 'Markup vs instructions.',
    back: 'Azure <strong>neural voices</strong> are controlled with <strong>SSML</strong>: styles, prosody, pauses, pronunciation, and support for custom voice and visemes. <strong>gpt-4o-mini-tts</strong> in Foundry Models takes natural-language <strong>instructions</strong> describing tone or emotion alongside the text. Choose SSML for precise, repeatable control and brand voices.',
    tags: ['Text to speech', 'Models']
  },
  {
    id: 'azure-ai-apps-agents-fc-399',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'When customizing a voice agent\'s ears and mouth in Voice Live, what can you plug in on each side?',
    hint: 'Input customization, output customization.',
    back: '<strong>Input</strong>: a <strong>phrase list</strong> for just-in-time vocabulary or a deployed <strong>custom speech</strong> model for deeper recognition tuning. <strong>Output</strong>: a <strong>custom voice</strong> (or standard neural voices) and optionally a standard or custom <strong>avatar</strong>. Custom speech, voice and avatar training and hosting are billed separately from the Voice Live tier.',
    tags: ['Voice Live', 'Customization']
  },
  {
    id: 'azure-ai-apps-agents-fc-400',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'Why should a compliance summarization prompt log which instruction version it used?',
    hint: 'Auditors ask "why did it say that?"',
    back: 'Rules and templates change over time. Storing prompts and definitions as <strong>versioned artifacts</strong> and logging the version ID with each call (alongside traces) lets auditors reproduce what the model was told for any output. Fine-tuned weights cannot show which rule produced a result, which is one reason volatile rules belong in the prompt, not the model.',
    tags: ['Auditability', 'Compliance summarization']
  }
];

export default AZURE_AI_APPS_AGENTS_FLASHCARDS_16;
