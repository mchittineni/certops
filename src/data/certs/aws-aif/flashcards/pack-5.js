export const AWS_AIF_FLASHCARDS_5 = [
  {
    id: 'aws-aif-fc-101',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'How does generative AI differ from traditional predictive ML?',
    hint: 'Create versus label.',
    back: '<strong>Traditional ML</strong> mostly predicts or classifies: it outputs a label, a score or a number for an input (fraud or not, next week\'s demand). <strong>Generative AI</strong> creates <strong>new content</strong> such as text, images, audio, video or code that resembles its training data, usually from a natural-language prompt. Generative models are typically large foundation models reused across many tasks.',
    tags: ['Generative AI', 'Terminology']
  },
  {
    id: 'aws-aif-fc-102',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'What is a token, and why do limits and prices use tokens instead of words?',
    hint: 'What the model actually reads.',
    back: 'A <strong>token</strong> is the unit a language model reads and writes: a whole word, part of a word, a punctuation mark or a space. Models process tokens, not words, so their <strong>context limits</strong>, <strong>speed</strong> and <strong>pricing</strong> (for example per 1,000 input and output tokens on Amazon Bedrock) are measured in tokens. Output tokens often cost more than input tokens.',
    tags: ['Tokens', 'Pricing']
  },
  {
    id: 'aws-aif-fc-103',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'Roughly how many tokens is English text, and what makes the count go up?',
    hint: 'A rule of thumb, not a law.',
    back: 'For English, about <strong>4 characters or 0.75 words per token</strong>, so 1,000 words is roughly 1,300 to 1,400 tokens. Counts rise for <strong>rare words, code, numbers and many non-English languages</strong>, which tokenizers split into more pieces. Each model family has its own tokenizer, so the same text can produce different counts on different models; measure with the actual model before budgeting.',
    tags: ['Tokens', 'Cost estimation']
  },
  {
    id: 'aws-aif-fc-104',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'What is a context window, and what can you do when content does not fit?',
    hint: 'Input plus output share one budget.',
    back: 'The <strong>context window</strong> is the maximum number of tokens a model can consider in one request, counting the prompt and the response together. When content exceeds it, text is rejected or truncated. Options: <strong>chunk</strong> the content and <strong>retrieve</strong> only relevant parts, <strong>summarize</strong> sections first and combine the summaries, or choose a model with a <strong>larger window</strong>, which usually costs more per request.',
    tags: ['Context window', 'Tokens']
  },
  {
    id: 'aws-aif-fc-105',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'Which chunking strategies do Amazon Bedrock Knowledge Bases offer?',
    hint: 'By size, by hierarchy, by meaning, or not at all.',
    back: '<strong>Default / fixed-size</strong>: splits text into chunks of a set token count, with optional overlap. <strong>Hierarchical</strong>: small child chunks for precise matching, linked to larger parent chunks returned for context. <strong>Semantic</strong>: splits where the meaning changes, using embeddings, so each chunk covers one idea. <strong>No chunking</strong>: each file is one chunk, for documents already split. Custom logic can also run in a Lambda function.',
    tags: ['Chunking', 'Knowledge Bases']
  },
  {
    id: 'aws-aif-fc-106',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'What goes wrong when chunks are too small or too large, and what does overlap fix?',
    hint: 'Fragments versus noise.',
    back: '<strong>Too small</strong>: sentences, tables and lists get split, and chunks lose the headings that give them meaning, so retrieved text is incomplete. <strong>Too large</strong>: each chunk mixes several topics, matching becomes less precise, and irrelevant text consumes the context window and adds cost. <strong>Overlap</strong> repeats a few tokens between neighbouring chunks so ideas that cross a boundary are not cut in half.',
    tags: ['Chunking', 'Retrieval quality']
  },
  {
    id: 'aws-aif-fc-107',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'Vector vs embedding: are they the same thing?',
    hint: 'One is the format, the other is what it means.',
    back: 'A <strong>vector</strong> is simply an ordered list of numbers, such as [0.12, -0.87, ...]. An <strong>embedding</strong> is a vector produced by a model so that its position <strong>captures meaning</strong>: similar texts or images get nearby vectors. Every embedding is a vector, but a random list of numbers is not an embedding. Semantic search, clustering and recommendations all compare embeddings.',
    tags: ['Embeddings', 'Vectors']
  },
  {
    id: 'aws-aif-fc-108',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'How is "similar meaning" measured between two embeddings?',
    hint: 'The angle between two arrows.',
    back: 'With a <strong>similarity or distance metric</strong> between the vectors. <strong>Cosine similarity</strong>, the most common for text, measures the angle between them: close to 1 means very similar meaning, near 0 means unrelated. <strong>Euclidean distance</strong> and <strong>dot product</strong> are alternatives. A search returns the <strong>k nearest neighbours</strong> of the query vector, which is why embeddings enable meaning-based rather than keyword-based matching.',
    tags: ['Vectors', 'Semantic search']
  },
  {
    id: 'aws-aif-fc-109',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'What does a vector database or vector index do that an ordinary index cannot?',
    hint: 'Nearest, not equal.',
    back: 'It stores embeddings and answers <strong>nearest-neighbour queries</strong>: given a query vector, return the stored vectors closest to it, fast, across millions of items, typically with approximate algorithms such as HNSW. An ordinary index finds exact or keyword matches. Vector stores usually keep the original text and metadata alongside each vector so results can be filtered and passed to a model.',
    tags: ['Vector databases', 'Embeddings']
  },
  {
    id: 'aws-aif-fc-110',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'Why did the transformer architecture replace recurrent networks for language models?',
    hint: 'Parallel, and able to look far back.',
    back: 'Recurrent networks read text <strong>one token at a time</strong>, which is slow to train and weak at connecting words far apart. Transformers use <strong>self-attention</strong> to relate every token to every other token and process the whole sequence <strong>in parallel</strong> on GPUs. That made it practical to train on trillions of tokens, which is why nearly every modern LLM is transformer-based.',
    tags: ['Transformers', 'LLM']
  },
  {
    id: 'aws-aif-fc-111',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'In plain terms, what does self-attention compute?',
    hint: 'Each word asks: which other words matter to me?',
    back: 'For each token, self-attention scores how relevant every other token in the context is, then builds a new representation of the token as a <strong>weighted blend</strong> of the others, heavily weighting the relevant ones. That is how "it" in "the server rejected the request because it was overloaded" takes meaning from "server". Transformers run many attention heads in parallel across many layers to capture different relationships.',
    tags: ['Self-attention', 'Transformers']
  },
  {
    id: 'aws-aif-fc-112',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'What is a foundation model? Name some available on Amazon Bedrock.',
    hint: 'Broad pre-training, many uses.',
    back: 'A <strong>foundation model (FM)</strong> is a very large model pre-trained on broad data, mostly without labels, so it can be adapted to many tasks through prompting, retrieval or fine-tuning. Amazon Bedrock offers FMs from Amazon (<strong>Amazon Nova</strong>, <strong>Amazon Titan</strong> embeddings) and from providers such as <strong>Anthropic</strong>, <strong>Meta</strong>, <strong>Mistral AI</strong>, <strong>Cohere</strong> and <strong>Stability AI</strong>, through one API.',
    tags: ['Foundation models', 'Amazon Bedrock']
  },
  {
    id: 'aws-aif-fc-113',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'Foundation model vs large language model: which term is broader?',
    hint: 'All squares are rectangles.',
    back: '<strong>Foundation model</strong> is the broader term: any large, broadly pre-trained, adaptable model, whether it handles text, images, audio, video or several of these. A <strong>large language model</strong> is a foundation model specialised in <strong>text</strong> (and often code). Image generators such as diffusion models, and multimodal and embedding models, are foundation models but not LLMs in the strict sense.',
    tags: ['Foundation models', 'LLM']
  },
  {
    id: 'aws-aif-fc-114',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'Give three examples of tasks that need a multimodal model.',
    hint: 'More than one kind of data in the same request.',
    back: 'Tasks that combine data types: <strong>describing or answering questions about an image</strong> (alt text, chart reading, damage photos); <strong>extracting information from video</strong> (summarising a recorded meeting with slides); and <strong>searching a catalogue by photo or text</strong> in one index using multimodal embeddings. On Bedrock, Amazon Nova Lite and Nova Pro accept text, image and video input; Titan Multimodal Embeddings embeds images and text together.',
    tags: ['Multimodal models', 'Use cases']
  },
  {
    id: 'aws-aif-fc-115',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'Which settings steer a text-to-image diffusion model besides the prompt?',
    hint: 'What to avoid, how strictly to follow, and repeatability.',
    back: '<strong>Negative prompt</strong>: what the image should not contain (watermarks, extra fingers). <strong>Guidance scale</strong> (CFG scale): how strictly the image follows the prompt; higher is more literal, lower is more creative. <strong>Seed</strong>: fixing it reproduces the same image for the same settings. Also resolution, number of images and, for editing, a <strong>mask</strong> for inpainting or outpainting. Amazon Nova Canvas exposes these controls.',
    tags: ['Diffusion models', 'Image generation']
  },
  {
    id: 'aws-aif-fc-116',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'What is prompt engineering, and why is it usually the first thing to try?',
    hint: 'Change the request, not the model.',
    back: 'Prompt engineering is <strong>designing the input</strong> to a generative model, including instructions, context, examples and the desired output format, to get better results. It changes behavior <strong>without changing model weights</strong>, so it is fast, cheap and reversible. Only when careful prompting cannot reach the quality needed do teams move on to retrieval, fine-tuning or other customisation.',
    tags: ['Prompt engineering', 'Generative AI']
  },
  {
    id: 'aws-aif-fc-117',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'What are the typical building blocks of a well-structured prompt?',
    hint: 'Task, background, material, shape of the answer.',
    back: '<strong>Instruction</strong>: the task to perform ("summarise for a CFO"). <strong>Context</strong>: background, role or constraints. <strong>Input data</strong>: the text, document or question to work on. <strong>Output indicator</strong>: the required format, length or structure (a table, three bullets, JSON). Optional <strong>examples</strong> show the pattern to follow. Clear delimiters between parts reduce confusion.',
    tags: ['Prompt engineering', 'Prompt structure']
  },
  {
    id: 'aws-aif-fc-118',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'List eight common business use cases for generative AI.',
    hint: 'Create, condense, converse, convert, code, find.',
    back: '<strong>Image, video and audio generation</strong> for marketing and design; <strong>summarization</strong> of documents, calls and meetings; <strong>chatbots</strong>; <strong>customer service agents</strong> that answer and take actions; <strong>translation</strong> and localisation; <strong>code generation</strong> and explanation; <strong>search</strong> that answers questions directly; and <strong>recommendation engines</strong> enriched with embeddings or generated descriptions.',
    tags: ['Use cases', 'Generative AI']
  },
  {
    id: 'aws-aif-fc-119',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'Which Amazon Nova model fits which job?',
    hint: 'Text sizes, then image, video and speech.',
    back: '<strong>Nova Micro</strong>: text-only, lowest latency and cost. <strong>Nova Lite</strong>: low-cost multimodal (text, image, video in). <strong>Nova Pro</strong>: balanced accuracy, speed and cost for multimodal tasks. <strong>Nova Premier</strong>: most capable, for complex tasks and as a teacher for distillation. <strong>Nova Canvas</strong>: image generation and editing. <strong>Nova Reel</strong>: video generation. <strong>Nova Sonic</strong>: real-time speech-to-speech conversation.',
    tags: ['Amazon Nova', 'Model selection']
  },
  {
    id: 'aws-aif-fc-120',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'What trade-off does embedding dimension involve, for example in Amazon Titan Text Embeddings V2?',
    hint: 'Detail versus storage and speed.',
    back: 'Higher-dimensional vectors can capture <strong>more nuance</strong> but cost more to <strong>store and search</strong>. Titan Text Embeddings V2 lets you choose <strong>1,024, 512 or 256</strong> dimensions: smaller vectors cut vector-store size and query latency with a modest accuracy loss. Whatever you choose, queries and documents must be embedded with the same model and dimension to be comparable.',
    tags: ['Embeddings', 'Amazon Titan']
  },
  {
    id: 'aws-aif-fc-121',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'Customer self-service vs agent assist: two ways to use generative AI in customer service.',
    hint: 'Who reads the model\'s words first?',
    back: '<strong>Self-service</strong>: customers talk directly to a generative AI assistant that answers questions and, as an agent, can take actions such as checking an order or booking a return. <strong>Agent assist</strong>: the model supports a human agent in real time by suggesting replies, summarising the conversation and surfacing knowledge articles, while the human stays in charge. Agent assist is lower risk and a common first step.',
    tags: ['Customer service', 'Use cases']
  },
  {
    id: 'aws-aif-fc-122',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'Which tasks are poor fits for generative AI even though a model could attempt them?',
    hint: 'Exactness, tabular prediction, zero tolerance.',
    back: '<strong>Exact calculations and rule lookups</strong> (tax, premiums, interest) belong in deterministic code. <strong>Numeric prediction or scoring from structured tables</strong> (demand forecasts, fraud scores) is usually cheaper, more accurate and more explainable with traditional ML. <strong>Decisions that must be fully reproducible or error-free</strong> clash with generative output that can vary and hallucinate. Use generative AI where new language, images or code are the product.',
    tags: ['Use cases', 'Generative AI vs ML']
  },
  {
    id: 'aws-aif-fc-123',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'What can code-generation models do for developers, and what is still required of them?',
    hint: 'A fast pair programmer, not an infallible one.',
    back: 'They can <strong>write functions from descriptions</strong>, <strong>complete code</strong> inline, <strong>generate unit tests</strong>, <strong>explain unfamiliar code</strong>, translate between languages and help <strong>upgrade or refactor</strong> legacy code; Amazon Q Developer is AWS\'s assistant for this. Developers must still <strong>review, test and security-scan</strong> suggestions, since generated code can be wrong, insecure or subtly different from the intent.',
    tags: ['Code generation', 'Developer productivity']
  },
  {
    id: 'aws-aif-fc-124',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'Give one business example each of image, video and audio generation.',
    hint: 'Marketing, social, voice.',
    back: '<strong>Image</strong>: product lifestyle shots, ad variants, background replacement or concept art generated from prompts (for example with Amazon Nova Canvas). <strong>Video</strong>: short promotional or social clips from a prompt and reference image (Amazon Nova Reel). <strong>Audio</strong>: natural voiceovers, narrated articles or conversational voice agents (for example Amazon Nova Sonic for speech-to-speech).',
    tags: ['Image generation', 'Use cases']
  },
  {
    id: 'aws-aif-fc-125',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'How can generative AI improve a recommendation engine?',
    hint: 'New items, better explanations.',
    back: '<strong>Embeddings</strong> of item descriptions let the system recommend brand-new items by content similarity, easing the <strong>cold-start</strong> problem that interaction-only models have. An LLM can <strong>generate personalised descriptions or explanations</strong> ("because you liked...") and power <strong>conversational recommendations</strong> where shoppers describe what they want in natural language. Classic interaction data still drives ranking at scale.',
    tags: ['Recommendation engines', 'Embeddings']
  }
];

export default AWS_AIF_FLASHCARDS_5;
