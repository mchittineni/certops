export const AZURE_AI_APPS_AGENTS_FLASHCARDS_17 = [
  {
    id: 'azure-ai-apps-agents-fc-401',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'How do you send audio to an audio-capable chat model in a chat completions request?',
    hint: 'A content part type, base64, a format.',
    back: 'Add a user content part of type <code>input_audio</code> containing the base64-encoded <code>data</code> and its <code>format</code> (for example wav or mp3), next to any text part with your instructions. Models such as <strong>gpt-4o-audio-preview</strong> then reason over the audio directly, including tone and pacing that a transcript would lose.',
    tags: ['Audio input', 'Chat completions']
  },
  {
    id: 'azure-ai-apps-agents-fc-402',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'Chat completions audio, the Realtime API, or a transcription model: which fits which audio workload?',
    hint: 'Turn-based, live, or text only.',
    back: '<strong>Chat completions with audio</strong> (gpt-4o-audio-preview): turn-based requests mixing text and audio in or out; audio input up to about 20 MB. <strong>Realtime API</strong> (gpt-realtime): live, low-latency, interruptible voice over WebSocket or WebRTC. <strong>Transcription models</strong> (gpt-4o-transcribe, Azure Speech): you only need text from the audio.',
    tags: ['Audio models', 'Realtime API']
  },
  {
    id: 'azure-ai-apps-agents-fc-403',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'Which two parameters make a chat completions call return spoken audio?',
    hint: 'What kinds of output, and how it should sound.',
    back: '<code>modalities: ["text", "audio"]</code> asks for audio output alongside text, and <code>audio: { voice, format }</code> picks the voice (for example alloy) and encoding (wav, mp3, opus and others). The response carries base64 audio plus a transcript of what was said.',
    tags: ['Audio output', 'Chat completions']
  },
  {
    id: 'azure-ai-apps-agents-fc-404',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'Realtime API turn detection: server VAD vs semantic VAD?',
    hint: 'Silence vs meaning.',
    back: '<strong>Server VAD</strong> ends a user turn after a period of silence, tuned with threshold, prefix padding and silence duration; simple but it cuts in on mid-sentence pauses. <strong>Semantic VAD</strong> judges whether the words so far form a complete utterance, so thinking pauses are tolerated while short complete answers still get a quick reply.',
    tags: ['Realtime API', 'Turn detection']
  },
  {
    id: 'azure-ai-apps-agents-fc-405',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'Walk through a function call inside a Realtime API session.',
    hint: 'Declare, emit, run, return, respond.',
    back: '1. Declare <strong>tools</strong> with JSON schemas in the session configuration. 2. The model emits a <strong>function call</strong> item with arguments and a call ID. 3. Your backend runs the function. 4. Send a <code>conversation.item.create</code> of type <strong>function_call_output</strong> with the call ID and result. 5. Send <code>response.create</code> so the model speaks the answer. The model never calls APIs itself.',
    tags: ['Realtime API', 'Function calling']
  },
  {
    id: 'azure-ai-apps-agents-fc-406',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'How should a Realtime API voice app handle the user interrupting the assistant mid-answer?',
    hint: 'Stop the speaker, then tell the server what was actually heard.',
    back: 'With server VAD, the service sends <code>input_audio_buffer.speech_started</code> when the user begins talking and cancels the in-progress response. The client must <strong>stop local playback</strong> immediately, then send <code>conversation.item.truncate</code> with the assistant item ID and <code>audio_end_ms</code>, the point playback reached. That trims the unplayed part from the conversation so the model does not believe the user heard words that were never played.',
    tags: ['Realtime API', 'Interruptions']
  },
  {
    id: 'azure-ai-apps-agents-fc-407',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'How do you get a transcript of the user\'s speech in an Azure Realtime API session, and what is Azure-specific about it?',
    hint: 'A session setting that names a model.',
    back: 'Enable <strong>input audio transcription</strong> in the session configuration; transcript events then arrive for each user turn alongside the model\'s responses. On Azure, the <code>model</code> field must be the <strong>name of your transcription deployment</strong> (for example a gpt-4o-transcribe deployment), not the OpenAI model name.',
    tags: ['Realtime API', 'Transcription']
  },
  {
    id: 'azure-ai-apps-agents-fc-408',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'Why transcribe a long recording before asking a model about it, instead of sending the audio?',
    hint: 'Size, context, attribution.',
    back: 'Chat completions audio input is capped at about <strong>20 MB</strong> per request, so hour-long recordings will not fit. Transcribing with <strong>diarization</strong> (batch or fast transcription) produces compact, speaker-labeled text that fits the context window, can be chunked or indexed, and lets answers attribute statements to speakers.',
    tags: ['Audio reasoning', 'Diarization']
  },
  {
    id: 'azure-ai-apps-agents-fc-409',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'Which small open model in Foundry accepts speech, image and text input together?',
    hint: 'Phi family, multimodal.',
    back: '<strong>Phi-4-multimodal-instruct</strong> takes speech, vision and text inputs in one small open-weight model, suited to local or edge hosting. <strong>Phi-4-mini-instruct</strong> and <strong>Phi-4-reasoning</strong> are text-only. In Voice Live, the related <code>phi4-mm-realtime</code> model is billed at the Lite rate.',
    tags: ['Small language models', 'Multimodal models']
  },
  {
    id: 'azure-ai-apps-agents-fc-410',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'How does the model you pick change Voice Live billing, and roughly how many tokens does audio consume?',
    hint: 'No tier selector.',
    back: 'The <strong>generative model</strong> sets the rate: Pro (gpt-realtime, gpt-4o, gpt-4.1, gpt-5), Basic (mini models), Lite (gpt-4.1-nano, gpt-5-nano, phi4-mm-realtime). For Azure OpenAI models, input audio is about <strong>10 tokens per second</strong> and output audio about <strong>20 tokens per second</strong>. Custom speech, voice and avatar training and hosting are billed separately.',
    tags: ['Voice Live', 'Pricing']
  },
  {
    id: 'azure-ai-apps-agents-fc-411',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'How can you improve spelling of specialist terms with a gpt-4o-transcribe or Whisper transcription call?',
    hint: 'Give it context.',
    back: 'Pass the expected vocabulary or a sample of domain text in the <strong>prompt</strong> parameter of the transcription request; the model uses it as context for spelling names and jargon. The <code>language</code> parameter only fixes the input language, and temperature does not add vocabulary. For Azure Speech models, use a phrase list or custom speech instead.',
    tags: ['Transcription', 'Prompting']
  },
  {
    id: 'azure-ai-apps-agents-fc-412',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'What is the limitation of the Whisper translation endpoint?',
    hint: 'One destination.',
    back: 'It translates speech from supported languages <strong>into English only</strong>; its language setting describes the input. For other target languages use Azure Speech <strong>speech translation</strong>, the <strong>LLM speech</strong> translate task with a target language, or transcribe first and translate the text with Translator or a chat model.',
    tags: ['Whisper', 'Speech translation']
  },
  {
    id: 'azure-ai-apps-agents-fc-413',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'What must a Speech SDK TranslationRecognizer be told before it can translate?',
    hint: 'From what, to what.',
    back: 'On the <code>SpeechTranslationConfig</code>: the <strong>speech recognition language</strong> (source locale such as en-US) and at least one <strong>target language</strong> added with add target language (for example fr, de). Each result exposes a translations map keyed by language. Add a <strong>voice name</strong> only if you also want synthesized audio.',
    tags: ['Speech translation', 'Speech SDK']
  },
  {
    id: 'azure-ai-apps-agents-fc-414',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'How do you get speech-to-speech output from standard speech translation?',
    hint: 'One property, one event.',
    back: 'Set a <strong>voice name</strong> on the translation config (the voice for the target language). The recognizer then raises <strong>synthesizing</strong> events carrying audio of the translated text, which you play or stream. No separate SpeechSynthesizer call is needed.',
    tags: ['Speech translation', 'Speech to speech']
  },
  {
    id: 'azure-ai-apps-agents-fc-415',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'What does Live Interpreter add over standard real-time speech translation?',
    hint: 'No source language, switching, your voice.',
    back: '<strong>Unspecified input language</strong> (continuous identification, no source locale set), <strong>language switching</strong> in one session, low-latency speech-to-speech in a natural voice that preserves style, and <strong>bring-your-own personal voice</strong> (limited access, with consent). Output transcription is in the target language.',
    tags: ['Live Interpreter', 'Speech translation']
  },
  {
    id: 'azure-ai-apps-agents-fc-416',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'How is speech translation billed when you need more than two target languages?',
    hint: 'Two included, then characters.',
    back: 'The speech translation hourly rate covers <strong>up to two target languages</strong>. Beyond that you need a Foundry (multi-service) resource, and each extra language is billed as <strong>text translation by character</strong>, including intermediate results, because translation is recomputed as speech is recognized in real time.',
    tags: ['Speech translation', 'Pricing']
  },
  {
    id: 'azure-ai-apps-agents-fc-417',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'When do you use Azure Speech video translation instead of real-time speech translation?',
    hint: 'Finished recordings.',
    back: '<strong>Video translation</strong> is for recorded video: it translates the speech, produces dubbed audio (prebuilt or personal voice) and subtitles, and lets a reviewer edit the translated script before the final render. <strong>Real-time translation</strong> and Live Interpreter are for live audio and have no review step.',
    tags: ['Video translation', 'Dubbing']
  },
  {
    id: 'azure-ai-apps-agents-fc-418',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'How do you make live speech translation use a Custom Translator model?',
    hint: 'An ID from the Custom Translator project.',
    back: 'Set the model\'s <strong>category ID</strong> on the <code>SpeechTranslationConfig</code> (set custom model category ID). The service then uses your trained Custom Translator model for the text translation step, so approved terminology carries over from written content. A phrase list only helps recognition of the source terms, not their translation.',
    tags: ['Custom Translator', 'Speech translation']
  },
  {
    id: 'azure-ai-apps-agents-fc-419',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'LLM speech API: what does enhanced mode add, and what are its request limits?',
    hint: 'Task, target, prompt.',
    back: 'LLM speech (preview) is the fast transcription API with <code>enhancedMode</code>: a <strong>task</strong> of <code>transcribe</code> or <code>translate</code>, a <strong>targetLanguage</strong> for translation, and a <strong>prompt</strong> (up to 20,000 characters) to steer style, such as lexical format. Files must be under <strong>five hours and 500 MB</strong>. Input language is detected automatically.',
    tags: ['LLM speech', 'Transcription']
  },
  {
    id: 'azure-ai-apps-agents-fc-420',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'You need translated output labeled by speaker from LLM speech. Why does translate plus diarization fail, and what is the workaround?',
    hint: 'One label comes back.',
    back: 'Diarization is <strong>not supported for the translate task</strong>; translated phrases all return as a single speaker. Run the <strong>transcribe</strong> task with diarization to get speaker-labeled phrases in the source language, then translate each phrase (Translator or a chat model) and keep the labels.',
    tags: ['LLM speech', 'Diarization']
  },
  {
    id: 'azure-ai-apps-agents-fc-421',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'Translating one transcript into many languages with Azure Translator: how many calls?',
    hint: 'Repeat a query parameter.',
    back: 'One per text segment: the Translator <strong>translate</strong> operation accepts several targets by repeating the <code>to</code> parameter, returning a translation for each language in the same response. Reuse the existing transcript rather than re-running speech translation on the audio.',
    tags: ['Azure Translator', 'Captions']
  },
  {
    id: 'azure-ai-apps-agents-fc-422',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'At-start vs continuous language identification in Azure Speech?',
    hint: 'Decide once or keep deciding.',
    back: '<strong>At-start</strong> identification picks the language from the first few seconds and keeps it; up to <strong>4</strong> candidate locales. <strong>Continuous</strong> identification keeps re-evaluating during the session, following speakers who switch; up to <strong>10</strong> candidates. Configure candidates with the auto-detect source language config.',
    tags: ['Language identification', 'Azure Speech']
  },
  {
    id: 'azure-ai-apps-agents-fc-423',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'Why treat transcripts of third-party audio as untrusted input for an agent?',
    hint: 'Spoken prompt injection.',
    back: 'Anyone can <strong>speak instructions</strong> into a voicemail or recording, and once transcribed they look like ordinary text to the model. That is an <strong>indirect prompt injection</strong>. Screen transcripts with <strong>Prompt Shields</strong> for document attacks, keep them in a clearly delimited data section of the prompt, and require approval for consequential tool calls.',
    tags: ['Prompt Shields', 'Security']
  },
  {
    id: 'azure-ai-apps-agents-fc-424',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'Neural machine translation (Translator) vs LLM translation: when does each win?',
    hint: 'Throughput and consistency vs tone and instructions.',
    back: '<strong>Translator</strong>: fast, cheap per character, consistent, many targets per call, Custom Translator for terminology; best for high-volume captions and documents. <strong>LLM translation</strong>: follows style guides, adapts humor and slang, can apply glossaries and reformat in the same step; costs more and needs evaluation for accuracy. Many pipelines combine both.',
    tags: ['LLM translation', 'Azure Translator']
  },
  {
    id: 'azure-ai-apps-agents-fc-425',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'What does the Content Understanding prebuilt call center analyzer return from a recording?',
    hint: 'More than a transcript.',
    back: '<code>prebuilt-callCenter</code> transcribes the call and generates structured insights such as a <strong>summary</strong>, <strong>topics</strong> and <strong>sentiment</strong>. Copy its definition into a <strong>custom analyzer</strong> based on <code>prebuilt-audio</code> to add fields, such as whether the agent offered a refund, using generate or classify methods.',
    tags: ['Content Understanding', 'Call analytics']
  }
];

export default AZURE_AI_APPS_AGENTS_FLASHCARDS_17;
