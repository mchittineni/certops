export const AZURE_AI_APPS_AGENTS_FLASHCARDS_15 = [
  {
    id: 'azure-ai-apps-agents-fc-351',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'Which Azure Language features are core (recommended for new work) and which are legacy?',
    hint: 'Core is about entities and personal data.',
    back: '<strong>Core</strong>: PII detection, language detection, named entity recognition (prebuilt and custom) and text analytics for health. <strong>Legacy</strong> (supported for existing workloads): CLU, custom text classification, entity linking, key phrase extraction, orchestration workflow, question answering, sentiment and opinion mining, and summarization. For new designs, many legacy tasks move to generative prompting.',
    tags: ['Azure Language', 'Feature selection']
  },
  {
    id: 'azure-ai-apps-agents-fc-352',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'Prebuilt NER vs custom NER in Azure Language: when do you use each?',
    hint: 'Standard categories or your own labels.',
    back: '<strong>Prebuilt NER</strong>: standard categories such as person, organisation, location, date-time and quantity, with no training. <strong>Custom NER</strong>: entity types specific to your domain, such as clause types or part numbers, trained on your own labelled text. Start with prebuilt; build custom only when your categories are not covered.',
    tags: ['Azure Language', 'Named entity recognition']
  },
  {
    id: 'azure-ai-apps-agents-fc-353',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'Generative prompting vs an Azure Language feature for text extraction: how do you choose?',
    hint: 'Standard and cheap, or flexible and new.',
    back: 'Choose an <strong>Azure Language feature</strong> when the task matches a prebuilt capability (standard entities, PII, health entities) and you want low cost, consistency and no prompt maintenance. Choose a <strong>chat model with structured outputs</strong> when fields, topics or rules are bespoke, change often or need reasoning, and no labelled data exists. Validate model output in code either way.',
    tags: ['Extraction', 'Generative prompting']
  },
  {
    id: 'azure-ai-apps-agents-fc-354',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'How do you represent an optional field in a strict structured outputs schema?',
    hint: 'Everything is required, so something else must be allowed.',
    back: 'Strict mode requires <strong>every property to be listed as required</strong> and <code>additionalProperties</code> set to false. Express optional values with a <strong>union type including null</strong>, for example string or null, and instruct the model to return null when the text does not state the value. This stops the model inventing values to fill a mandatory field.',
    tags: ['Structured outputs', 'JSON schema']
  },
  {
    id: 'azure-ai-apps-agents-fc-355',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'Extractive vs abstractive summarization: what is the difference?',
    hint: 'Quote versus rewrite.',
    back: '<strong>Extractive</strong> selects the most important sentences from the source and keeps them verbatim, in their original positions: safe when wording must not change, such as legal text. <strong>Abstractive</strong> generates new, concise sentences that capture the main ideas: more readable, but it paraphrases and can introduce errors.',
    tags: ['Summarization', 'Azure Language']
  },
  {
    id: 'azure-ai-apps-agents-fc-356',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'What does text analytics for health return beyond medical entities?',
    hint: 'Links, relations, certainty, and a healthcare standard.',
    back: '<strong>Relations</strong> between entities (such as a dosage of a medication), <strong>assertion detection</strong> (certainty such as negated, conditionality, and who the finding is associated with), <strong>entity linking</strong> to medical knowledge bases such as UMLS, and optional structured output as <strong>FHIR</strong> resources. Assertions stop "no history of diabetes" being counted as a diagnosis.',
    tags: ['Text analytics for health', 'Healthcare']
  },
  {
    id: 'azure-ai-apps-agents-fc-357',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'What does Azure Language language detection return, and how do you help it with short or ambiguous text?',
    hint: 'A hint about where the text came from.',
    back: 'For each document it returns the detected <strong>language name</strong>, its <strong>ISO 639-1 code</strong> and a <strong>confidence score</strong>. For short or ambiguous strings, pass a <strong>countryHint</strong> so detection favours the likely region. It replaces the Detect method that Translator removed in API version 2026-06-06.',
    tags: ['Language detection', 'Azure Language']
  },
  {
    id: 'azure-ai-apps-agents-fc-358',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'Key phrase extraction vs named entity recognition: what does each give you?',
    hint: 'Talking points versus typed things.',
    back: '<strong>Key phrase extraction</strong> returns the main concepts or talking points in a text, such as "slow check-in" or "rooftop pool", as an untyped list. <strong>NER</strong> returns specific entities with a <strong>category</strong>, such as a person, organisation or date. Use key phrases for themes and word clouds; use NER when you need to know what kind of thing was mentioned.',
    tags: ['Key phrase extraction', 'Named entity recognition']
  },
  {
    id: 'azure-ai-apps-agents-fc-359',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'What sentiment labels does Azure Language return, and at which levels?',
    hint: 'Four labels, two levels.',
    back: 'Labels are <strong>positive</strong>, <strong>negative</strong>, <strong>neutral</strong> and, at document level, <strong>mixed</strong>, each with confidence scores. Results come at <strong>document</strong> and <strong>sentence</strong> level. Mixed means the document holds both positive and negative sentences, so drill into sentence results to find the actionable part.',
    tags: ['Sentiment analysis']
  },
  {
    id: 'azure-ai-apps-agents-fc-360',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'What does opinion mining add to sentiment analysis?',
    hint: 'Targets and assessments.',
    back: 'Enabled as an option on the sentiment request, opinion mining returns <strong>targets</strong> (aspects such as "food" or "service") and the <strong>assessments</strong> made about them (such as "delicious" or "slow"), each with its own sentiment. This is aspect-based sentiment: it shows what customers liked or disliked, not just the overall mood.',
    tags: ['Opinion mining', 'Sentiment analysis']
  },
  {
    id: 'azure-ai-apps-agents-fc-361',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'How do you detect tone, such as sarcastic, curt or condescending, which sentiment polarity misses?',
    hint: 'Define the labels and let a model judge.',
    back: 'Prompt a chat model with <strong>definitions and short examples</strong> of each tone label and require a <strong>structured output enum</strong> of the allowed labels, optionally with a brief reason. Evaluate on a labelled sample and refine definitions where the model and human reviewers disagree. Positive or negative sentiment scores alone cannot separate courteous from condescending.',
    tags: ['Tone detection', 'Generative prompting']
  },
  {
    id: 'azure-ai-apps-agents-fc-362',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'Text PII vs conversation PII vs document PII in Azure Language: when do you use each?',
    hint: 'Strings, turns, files.',
    back: '<strong>Text PII</strong>: unstructured strings such as comments or notes, synchronous. <strong>Conversation PII</strong>: chats and call transcripts made of speaker turns. <strong>Document PII</strong>: native files such as PDF, Word and text documents, run as an <strong>asynchronous job</strong> that reads from and writes redacted documents to Blob Storage, preserving the document format.',
    tags: ['PII detection', 'Azure Language']
  },
  {
    id: 'azure-ai-apps-agents-fc-363',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'Which redaction policies can Azure Language PII detection apply, and what does each output?',
    hint: 'Leave it, star it, label it, fake it.',
    back: '<strong>noMask</strong>: returns detected entities but leaves the text unchanged. <strong>characterMask</strong>: replaces values with a chosen character, preserving length and offsets. <strong>entityMask</strong>: replaces values with their entity type, such as [PERSON_1]. <strong>syntheticReplacement</strong> (preview): substitutes realistic fake values so text stays natural for downstream use.',
    tags: ['PII detection', 'Redaction policy']
  },
  {
    id: 'azure-ai-apps-agents-fc-364',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'How do you narrow or widen what Azure Language PII detection finds?',
    hint: 'A category list and a domain.',
    back: 'Use <code>piiCategories</code> to name exactly which entity categories to detect, for example only credit card and phone number, which also enables categories not on by default for a language. Set the <code>domain</code> parameter to <strong>phi</strong> to extend detection to protected health information such as medical record and health plan numbers.',
    tags: ['PII detection', 'PHI']
  },
  {
    id: 'azure-ai-apps-agents-fc-365',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'What does the Content Safety Analyze Text API return, and how do you add custom terms?',
    hint: 'Four categories, a scale, and lists.',
    back: 'It scores <strong>hate</strong>, <strong>sexual</strong>, <strong>violence</strong> and <strong>self-harm</strong> on a <strong>0 to 7</strong> severity scale (or the trimmed 0, 2, 4, 6 on request), up to 10,000 characters per call by default. Add <strong>custom blocklists</strong> of exact terms, such as community-specific slurs or scam phrases, which the classifiers would not otherwise catch.',
    tags: ['Content Safety', 'Text moderation']
  },
  {
    id: 'azure-ai-apps-agents-fc-366',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'How can the platform stop a model deployment from returning personal data, with no code changes?',
    hint: 'A guardrail risk at a specific intervention point.',
    back: 'Add the <strong>personally identifiable information</strong> risk (preview) to the deployment\'s or agent\'s <strong>guardrail</strong> at the <strong>output</strong> intervention point, with the annotate-and-block action. Completions containing personal data are then blocked by the platform. Redacting user prompts alone cannot stop a model repeating personal data it retrieved from tools or grounding data.',
    tags: ['Guardrails', 'PII']
  },
  {
    id: 'azure-ai-apps-agents-fc-367',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'Name the key optional parameters of the Translator v3 translate method.',
    hint: 'Where to, from where, what format, how clean, which model.',
    back: '<code>to</code> (repeatable for several target languages in one call), <code>from</code> (source language, otherwise auto-detected), <code>textType</code> (plain or html), <code>profanityAction</code> (NoAction, Marked or Deleted), <code>category</code> (a Custom Translator model) and <code>includeAlignment</code> (source-to-target alignment information).',
    tags: ['Translator', 'Text translation']
  },
  {
    id: 'azure-ai-apps-agents-fc-368',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'notranslate vs dynamic dictionary in Translator: what does each do?',
    hint: 'Keep it as is, or translate it my way.',
    back: '<strong>notranslate</strong> (a <code>notranslate</code> class or <code>translate="no"</code> in HTML) leaves marked text <strong>untranslated</strong>, such as a brand name kept in English. The <strong>dynamic dictionary</strong> (<code>mstrans:dictionary</code> markup) supplies a <strong>specific translation</strong> for a phrase; it is meant for compound nouns such as product or personal names and needs English as source or target.',
    tags: ['Translator', 'Terminology']
  },
  {
    id: 'azure-ai-apps-agents-fc-369',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'What does Translator text translation API version 2026-06-06 add over v3?',
    hint: 'Model choice, customisation, register.',
    back: 'Per request, a choice between standard <strong>NMT</strong> and a supported <strong>LLM</strong> such as GPT-5.1 (LLM translation needs a Microsoft Foundry resource); <strong>adaptive custom translation</strong> through up to five reference pairs or an adaptive dataset index ID; and <strong>tone</strong> (formal, informal, neutral) and <strong>gender</strong> (male, female, neutral) controls for LLM translation. Targets move into a <code>targets</code> array.',
    tags: ['Translator', 'LLM translation']
  },
  {
    id: 'azure-ai-apps-agents-fc-370',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'Which v3 methods did Translator 2026-06-06 drop, and what replaces them?',
    hint: 'Three gone, two kept.',
    back: '<strong>Detect</strong>: use Azure Language language detection. <strong>BreakSentence</strong>: use a sentence splitter or NLP library. <strong>Dictionary Lookup</strong> and <strong>Dictionary Examples</strong>: consider adaptive custom translation for domain terms. Translate, Transliterate and Languages remain. The version is not backward compatible, so payloads and response parsing must change.',
    tags: ['Translator', 'Migration']
  },
  {
    id: 'azure-ai-apps-agents-fc-371',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'Adaptive custom translation vs Custom Translator: how do they differ?',
    hint: 'Minutes and LLMs versus training and NMT.',
    back: '<strong>Adaptive custom translation</strong>: upload 5 to 10,000 prealigned segment pairs (up to 500 characters each); the service builds a bilingual index in <strong>minutes</strong> that guides supported <strong>LLMs</strong> at request time. <strong>Custom Translator</strong>: train a customised <strong>NMT model</strong> on parallel documents and dictionaries, which takes a training cycle, then call it by category ID.',
    tags: ['Translator', 'Adaptive custom translation', 'Custom Translator']
  },
  {
    id: 'azure-ai-apps-agents-fc-372',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'Synchronous vs asynchronous document translation: when do you use each?',
    hint: 'One file now, or many files via storage.',
    back: '<strong>Synchronous</strong>: translate a <strong>single file</strong> (optionally with a glossary) and get the translated document straight back in the response, with no Blob Storage. <strong>Asynchronous batch</strong>: translate many or large files while preserving format, reading from a source container and writing to a target container in <strong>Azure Blob Storage</strong>, authorised by SAS or managed identity.',
    tags: ['Translator', 'Document translation']
  },
  {
    id: 'azure-ai-apps-agents-fc-373',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'How does a v3 translate call use a Custom Translator model, and what if it cannot be found?',
    hint: 'Category ID and a fallback flag.',
    back: 'Pass the project\'s <strong>category ID</strong> in the <code>category</code> parameter (default is <code>general</code>). With <code>allowFallback</code> true (the default), the service falls back to the general system when the custom system does not exist for the language pair; set it to <strong>false</strong> if you would rather fail than silently lose domain terminology.',
    tags: ['Translator', 'Custom Translator']
  },
  {
    id: 'azure-ai-apps-agents-fc-374',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'When is an LLM-powered translation flow a better choice than a Translator call?',
    hint: 'Adapting, not just converting.',
    back: 'When the job is <strong>transcreation</strong> or combined work: adapting slogans to local idiom, enforcing a brand voice and banned words, producing several alternatives, or translating and extracting information in one pass. Use Translator for high-volume, faithful translation with predictable cost; use its LLM option when you need tone or gender control within the service.',
    tags: ['LLM translation', 'Transcreation']
  },
  {
    id: 'azure-ai-apps-agents-fc-375',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd4',
    front: 'Transliteration vs translation in Azure Translator?',
    hint: 'Same language, different alphabet.',
    back: '<strong>Translation</strong> changes the language, for example Japanese to English. <strong>Transliteration</strong> keeps the language but converts the <strong>script</strong>, for example Japanese written in Kanji to Latin characters, or Hindi from Devanagari to Latin. Use transliteration for name matching, search or readers who speak a language but cannot read its script.',
    tags: ['Translator', 'Transliteration']
  }
];

export default AZURE_AI_APPS_AGENTS_FLASHCARDS_15;
