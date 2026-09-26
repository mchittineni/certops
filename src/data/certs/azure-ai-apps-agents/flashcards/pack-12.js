export const AZURE_AI_APPS_AGENTS_FLASHCARDS_12 = [
  {
    id: 'azure-ai-apps-agents-fc-276',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'Which output sizes does the gpt-image-1 series accept?',
    hint: 'One square, one portrait, one landscape.',
    back: '<strong>1024x1024</strong> (square), <strong>1024x1536</strong> (portrait) and <strong>1536x1024</strong> (landscape). Older dall-e-3 sizes such as 1792x1024 are rejected. For custom or higher resolutions, use gpt-image-2, which accepts arbitrary WIDTHxHEIGHT values within its constraints.',
    tags: ['Image generation', 'gpt-image-1']
  },
  {
    id: 'azure-ai-apps-agents-fc-277',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'What quality values do gpt-image models take, and which old values no longer apply?',
    hint: 'Three levels instead of two labels.',
    back: 'gpt-image-1 series and gpt-image-2 accept <strong>low</strong>, <strong>medium</strong> and <strong>high</strong> (gpt-image-1 defaults to high, gpt-image-1-mini to medium). The dall-e-3 values <strong>standard</strong> and <strong>hd</strong>, and its <strong>style</strong> parameter (vivid or natural), do not apply; put stylistic direction in the prompt instead.',
    tags: ['Image generation', 'Quality']
  },
  {
    id: 'azure-ai-apps-agents-fc-278',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'What does an image edits request contain, and how is it sent?',
    hint: 'Not JSON.',
    back: 'It is sent as <strong>multipart/form-data</strong> to the deployment\'s <code>images/edits</code> endpoint and contains the <strong>image</strong> file or files to edit, a <strong>prompt</strong> describing the change and, optionally, a <strong>mask</strong> PNG marking the editable region. Generation parameters such as size, quality, n and input_fidelity can be added as form fields.',
    tags: ['Image editing', 'Edits API']
  },
  {
    id: 'azure-ai-apps-agents-fc-279',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'What does input_fidelity control, and which model does not support it?',
    hint: 'Faces are the usual reason to raise it.',
    back: '<code>input_fidelity</code> sets how much effort the model spends matching the <strong>style and features</strong>, especially <strong>facial features</strong>, of the input images in an edit. Set it to high for subtle edits such as clothing or background changes where people must stay recognisable. It is <strong>not supported by gpt-image-1-mini</strong>, so a likeness-sensitive feature needs gpt-image-1 or a newer model.',
    tags: ['Image editing', 'Input fidelity']
  },
  {
    id: 'azure-ai-apps-agents-fc-280',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'How do you get a transparent background from gpt-image-1?',
    hint: 'A parameter plus the right format.',
    back: 'Set <code>background</code> to <strong>transparent</strong> (the alternative is auto) and keep <code>output_format</code> as <strong>png</strong>, because JPEG cannot store an alpha channel. Asking for transparency only in the prompt does not guarantee it. Useful for stickers, icons and product cut-outs that sit on varied backgrounds.',
    tags: ['Image generation', 'Transparency']
  },
  {
    id: 'azure-ai-apps-agents-fc-281',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'Which output formats can gpt-image models return, and what does output_compression affect?',
    hint: 'Two formats; compression only matters for one.',
    back: '<strong>PNG</strong> (the default, lossless, supports transparency) and <strong>JPEG</strong> (lossy, much smaller). <code>output_compression</code>, from 0 to 100, applies <strong>only to JPEG</strong> and trades file size against fidelity. WebP is not supported, so convert elsewhere if a WebP asset is essential.',
    tags: ['Image generation', 'Output format']
  },
  {
    id: 'azure-ai-apps-agents-fc-282',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'How can an app show an image taking shape instead of a spinner?',
    hint: 'Stream it.',
    back: 'Set <code>stream</code> to true and <code>partial_images</code> to a value from <strong>1 to 3</strong>. The service returns that many intermediate renders before the final image, so the UI can display progress during a 10 to 30 second generation. Supported by the gpt-image-1 series and gpt-image-2.',
    tags: ['Image generation', 'Streaming']
  },
  {
    id: 'azure-ai-apps-agents-fc-283',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'Does a gpt-image response include a hosted URL for the picture?',
    hint: 'Look for base64.',
    back: 'No. gpt-image models always return <strong>base64 data in <code>b64_json</code></strong> and do not support <code>response_format</code>. Decode the bytes and store them yourself, for example in Blob Storage behind a CDN, then hand that URL to clients. Code written for dall-e-3 that read <code>data[0].url</code> must be updated.',
    tags: ['Image generation', 'Response format']
  },
  {
    id: 'azure-ai-apps-agents-fc-284',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'How many images can one generation request return, and how is image-model quota measured?',
    hint: 'n has a ceiling; quota counts pictures.',
    back: 'The <strong>n</strong> parameter returns <strong>1 to 10</strong> images per request. Image-model quota is measured in <strong>images per minute</strong> (a low default, for example 5 for gpt-image-1), and each image returned by n counts separately. Quota is per model, per region, per subscription, so pace bulk jobs with backoff or request an increase.',
    tags: ['Image generation', 'Quotas']
  },
  {
    id: 'azure-ai-apps-agents-fc-285',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'What size constraints apply to custom resolutions on gpt-image-2?',
    hint: 'Multiples, a maximum edge, an aspect band and a pixel range.',
    back: 'Both edges must be <strong>multiples of 16</strong> pixels, the long edge can be at most <strong>3,840</strong> pixels, the aspect ratio must fall between <strong>1:3 and 3:1</strong>, and total pixels must be between <strong>655,360 and 8,294,400</strong>. Sizes above 2560x1440 are experimental. 2560x1440, for example, is valid and generated natively.',
    tags: ['Image generation', 'gpt-image-2', 'Resolution']
  },
  {
    id: 'azure-ai-apps-agents-fc-286',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'Which current image models can a new subscription deploy without a limited-access application?',
    hint: 'Newer ones are GA; older gpt-image models are gated.',
    back: '<strong>gpt-image-2</strong> and the gpt-image-2.5 variants are generally available to all customers. <strong>gpt-image-1</strong>, <strong>gpt-image-1-mini</strong> and <strong>gpt-image-1.5</strong> are limited-access previews that need an approved application first. <strong>dall-e-3</strong> was retired on March 4, 2026, and cannot be deployed at all.',
    tags: ['Image generation', 'Model selection', 'Limited access']
  },
  {
    id: 'azure-ai-apps-agents-fc-287',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'Migrating from dall-e-3 to a gpt-image model: how do the old parameters map?',
    hint: 'Size, quality, style, response format.',
    back: '<strong>Size</strong>: 1792x1024 or 1024x1792 become 1536x1024 or 1024x1536. <strong>Quality</strong>: standard or hd become low, medium or high. <strong>Style</strong> (vivid or natural) disappears; describe the look in the prompt. <strong>Response</strong>: URLs are gone; read <code>b64_json</code>. Also, n can now exceed 1 (up to 10).',
    tags: ['Image generation', 'Migration']
  },
  {
    id: 'azure-ai-apps-agents-fc-288',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'What limits apply to the input images of a gpt-image edit request?',
    hint: 'A count, a file size and two formats.',
    back: 'Up to <strong>16 input images</strong> per request, each <strong>under 50 MB</strong>, in <strong>PNG or JPG</strong> format. Multiple inputs let the model compose real products or people into one new scene. A mask, if supplied, must be a PNG with the same dimensions as the image it applies to.',
    tags: ['Image editing', 'Reference images']
  },
  {
    id: 'azure-ai-apps-agents-fc-289',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'Image generations endpoint vs edits endpoint: which do you call when?',
    hint: 'Does the result have to start from existing pixels?',
    back: '<strong>Generations</strong>: create a brand-new image from a text prompt alone. <strong>Edits</strong>: change or build on existing images, whether masked inpainting of one region, a prompt-driven change to the whole picture, or composing several reference images into a scene. If a real photo or product must appear, use edits.',
    tags: ['Image generation', 'Image editing']
  },
  {
    id: 'azure-ai-apps-agents-fc-290',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'What input modalities does Sora 2 support, and what does its output include?',
    hint: 'Three routes in, picture and sound out.',
    back: 'Inputs: <strong>text to video</strong>, <strong>image to video</strong> (an image anchors the first frame) and <strong>generated video to video</strong> through remix. Outputs are video clips that include <strong>generated audio</strong>. Sora 2 is used through the Azure OpenAI v1 videos API, with billing per second of video.',
    tags: ['Video generation', 'Sora 2']
  },
  {
    id: 'azure-ai-apps-agents-fc-291',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'Which size and seconds values does a Sora 2 create request accept?',
    hint: 'Two orientations, three durations.',
    back: '<code>size</code>: <strong>720x1280</strong> (portrait, the default) or <strong>1280x720</strong> (landscape). <code>seconds</code>: <strong>4</strong> (default), <strong>8</strong> or <strong>12</strong>. Anything else is rejected, so pick the nearest duration and trim in editing if a campaign needs another length.',
    tags: ['Video generation', 'Sora 2', 'Generation controls']
  },
  {
    id: 'azure-ai-apps-agents-fc-292',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'What rules apply to the input_reference image for Sora 2?',
    hint: 'One image, three formats, exact size.',
    back: 'A <strong>single</strong> image that anchors the <strong>first frame</strong>, in <strong>JPEG, PNG or WebP</strong>, whose resolution must <strong>exactly match</strong> the requested output size (720x1280 or 1280x720). Crop or resize first; a 1024x1024 photo sent with a 1280x720 request is rejected. Video files are not accepted as a reference.',
    tags: ['Video generation', 'Sora 2', 'Reference images']
  },
  {
    id: 'azure-ai-apps-agents-fc-293',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'What does Sora 2 remix preserve, what does it need, and how should prompts be scoped?',
    hint: 'One ID, one change.',
    back: 'Remix takes the <strong>ID of a completed Sora 2 video</strong> and a new prompt, and keeps the original\'s structure, <strong>motion, framing and scene transitions</strong> while applying the change. Microsoft advises <strong>one clearly articulated adjustment per remix</strong>; chain several remixes for several changes, because overloaded prompts cause defects and dropped edits.',
    tags: ['Video editing', 'Remix', 'Sora 2']
  },
  {
    id: 'azure-ai-apps-agents-fc-294',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'Walk through the lifecycle of a Sora 2 video job.',
    hint: 'Create, poll, download, before it expires.',
    back: '<strong>Create</strong> returns a video object with an ID and status <code>queued</code>. <strong>Poll</strong> by ID as it moves to <code>in_progress</code> and then <code>completed</code>, <code>failed</code> or <code>cancelled</code>. <strong>Download</strong> the content once completed. Jobs are available for about <strong>24 hours</strong> (see <code>expires_at</code>), so copy clips to your own storage promptly.',
    tags: ['Video generation', 'Asynchronous jobs']
  },
  {
    id: 'azure-ai-apps-agents-fc-295',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'Original Sora jobs API vs Sora 2 videos API: what differs for a developer?',
    hint: 'Parameter names, image handling, sound, editing.',
    back: '<strong>Original Sora</strong>: <code>/video/generations/jobs</code> with <code>width</code>, <code>height</code>, <code>n_seconds</code> and <code>n_variants</code>, image input through <code>inpaint_items</code> with <code>frame_index</code> and <code>crop_bounds</code>, and silent output. <strong>Sora 2</strong>: the v1 <code>videos</code> API with <code>size</code> and <code>seconds</code>, a single <code>input_reference</code> image, a <strong>remix</strong> operation for targeted edits, and <strong>audio</strong> in the output.',
    tags: ['Video generation', 'Sora', 'Sora 2']
  },
  {
    id: 'azure-ai-apps-agents-fc-296',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'What content does Sora 2 refuse to generate by design, regardless of guardrail settings?',
    hint: 'Other people\'s characters and lifelike scenes.',
    back: 'Sora 2 <strong>blocks intellectual-property content</strong>, such as recognisable copyrighted characters, and <strong>photorealistic content</strong>. On top of that, Azure applies input and output moderation, configurable content filtering and abuse monitoring. Plan campaigns around original, stylised characters rather than trying to reword prompts.',
    tags: ['Video generation', 'Responsible AI']
  },
  {
    id: 'azure-ai-apps-agents-fc-297',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'What makes a strong prompt for generated video?',
    hint: 'Think like a director writing a shot list.',
    back: 'Describe one shot concretely: the <strong>subject and action</strong>, the <strong>setting</strong>, the <strong>camera</strong> (framing, movement such as a slow push-in or pan), <strong>lighting and mood</strong>, and the visual <strong>style</strong>. Keep each clip to a single clear idea; complex multi-scene stories produce more defects than a sequence of focused clips.',
    tags: ['Video generation', 'Prompt engineering']
  },
  {
    id: 'azure-ai-apps-agents-fc-298',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'What does an app receive when an image-generation prompt is blocked by the safety system?',
    hint: 'An error object rather than image data.',
    back: 'Instead of a <code>data</code> array, the response carries an <strong>error</strong> with code <code>contentFilter</code> and a message that the task failed because of the safety system. The app should log the event as a safety signal, show the user a clear message and invite a revised prompt; retrying the same prompt unchanged will fail again.',
    tags: ['Image generation', 'Content filtering']
  },
  {
    id: 'azure-ai-apps-agents-fc-299',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'When is gpt-image-1-mini the right choice, and what do you give up?',
    hint: 'Cheaper and faster, with one missing control.',
    back: 'Choose <strong>gpt-image-1-mini</strong> for high-volume, cost-sensitive generation such as drafts, thumbnails or casual illustrations; it defaults to medium quality. You give up some fidelity and the <strong>input_fidelity</strong> control, so edits that must preserve faces or fine product detail belong on gpt-image-1 or a newer model.',
    tags: ['Image generation', 'Model selection']
  },
  {
    id: 'azure-ai-apps-agents-fc-300',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd3',
    front: 'Masked inpainting vs a mask-free edit: which suits which change?',
    hint: 'Local repair or global restyle.',
    back: '<strong>Masked inpainting</strong>: the change is local, such as removing an object or replacing a sky, so a PNG mask with the target region fully transparent confines the edit. <strong>Mask-free, prompt-driven edit</strong>: the change is global, such as turning summer into winter or restyling the whole image, while the photo still guides layout and viewpoint.',
    tags: ['Image editing', 'Inpainting']
  }
];

export default AZURE_AI_APPS_AGENTS_FLASHCARDS_12;
