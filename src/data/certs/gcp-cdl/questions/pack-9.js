export const GCP_CDL_QUESTIONS_9 = [
  {
    id: "gcp-cdl-201",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "A board member asks what counts as AI",
    scenario: "A hotel group's board is reviewing a proposal full of AI terminology. One board member asks for a plain definition of artificial intelligence that covers systems which understand guest reviews, recognise faces at check-in kiosks and recommend room upgrades.",
    question: "Which definition best fits?",
    options: [
      { id: 'A', text: "Business intelligence reports that summarise past bookings so managers can review how each hotel did." },
      { id: 'B', text: "Scripts that run on a fixed schedule to copy booking records between the hotel's various systems." },
      { id: 'C', text: "Computer systems able to perform tasks that normally need human intelligence, such as perception." },
      { id: 'D', text: "Any software that stores guest data in a cloud database instead of on servers inside the hotel." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Artificial intelligence is the broad field of building computer systems that can perform tasks normally requiring human intelligence, such as understanding language, recognising images, reasoning and making decisions, which covers all three examples. Storing data in the cloud is a hosting choice, not intelligence. Dashboards summarising past bookings are business intelligence. Scheduled copy scripts are data integration automation that follows fixed instructions without any perception or judgement.",
    referenceUrl: "https://cloud.google.com/learn/artificial-intelligence-vs-machine-learning",
    tags: ["Artificial intelligence", "AI concepts"]
  },
  {
    id: "gcp-cdl-202",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "Drafting ten thousand product descriptions",
    scenario: "An online homeware store adds thousands of new products each season, and copywriters cannot keep up with writing descriptions. The marketing director wants a system that writes a first draft of each description from the product's attributes and photos, which a copywriter then edits.",
    question: "Which category of AI does this use case belong to?",
    options: [
      { id: 'A', text: "Data analytics, which explores past data to explain why certain products sold better than others." },
      { id: 'B', text: "Business intelligence, which reports on historical sales so managers can compare product lines." },
      { id: 'C', text: "Predictive ML, which estimates a number or category, such as next month's sales for each product." },
      { id: 'D', text: "Generative AI, which creates new content such as text or images from patterns it learned." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Generative AI produces new content, such as text, images, audio or code, by learning patterns from large amounts of training data, so drafting original descriptions from attributes and photos is a textbook generative use case. Business intelligence reports on what already happened. Predictive machine learning outputs a value or class, such as a sales forecast, rather than new prose. Data analytics investigates data to answer questions; it does not write marketing copy.",
    referenceUrl: "https://cloud.google.com/use-cases/generative-ai",
    tags: ["Generative AI", "AI concepts"]
  },
  {
    id: "gcp-cdl-203",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "The Monday sales review dashboard",
    scenario: "Every Monday, the regional directors of a beverage distributor open a dashboard showing last week's revenue, volume by product and performance against targets, with charts they can filter by territory. They use it to decide where to focus their sales teams.",
    question: "Which discipline does this dashboard represent?",
    options: [
      { id: 'A', text: "Machine learning, because the dashboard learns from each week's data to predict future revenue." },
      { id: 'B', text: "Generative AI, because the dashboard creates new text and images every time a director opens it." },
      { id: 'C', text: "Business intelligence, because it presents business data in reports that support decisions." },
      { id: 'D', text: "Agentic AI, because the dashboard reassigns sales teams to territories without any human input." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Business intelligence covers the tools and processes that gather business data and present it in reports and dashboards so people can monitor performance and make decisions, which is exactly what the Monday dashboard does. It shows what happened rather than generating new content, so it is not generative AI. Nothing in it learns patterns to make predictions, so it is not machine learning. The directors, not the dashboard, decide how to deploy their teams, so there is no agent taking actions.",
    referenceUrl: "https://cloud.google.com/learn/what-is-business-intelligence",
    tags: ["Business intelligence", "AI concepts"]
  },
  {
    id: "gcp-cdl-204",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "Investigating a sudden rise in cancellations",
    scenario: "A streaming service's cancellations jumped 30% in one region last quarter. An analyst gathers subscription, billing and support data, cleans it, and explores it with statistical tests and ad hoc queries until she finds that a payment-provider change is behind the spike, then recommends a fix.",
    question: "Which term best describes the analyst's work?",
    options: [
      { id: 'A', text: "Generative AI, producing original content for the service's retention campaigns from learned patterns." },
      { id: 'B', text: "Data analytics, collecting and examining data to find patterns, explain causes and inform decisions." },
      { id: 'C', text: "Business intelligence, publishing the standard weekly dashboard of subscriptions for each region." },
      { id: 'D', text: "Agentic AI, planning and carrying out the fix to the payment provider without any human approval." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Data analytics is the process of collecting, transforming and examining data to uncover patterns, explain why something happened and inform decisions, which is what the analyst did in diagnosing the cause of the spike. Business intelligence typically delivers ongoing reports and dashboards of known metrics, such as a weekly subscriptions view, rather than a one-off investigation into causes. No new content was generated, so it is not generative AI. A person, not an autonomous agent, investigated and recommended the fix.",
    referenceUrl: "https://cloud.google.com/learn/what-is-data-analytics",
    tags: ["Data analytics", "Business intelligence"]
  },
  {
    id: "gcp-cdl-205",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "What makes a model a foundation model",
    scenario: "A bank's innovation team says it plans to use a foundation model for summarising reports, answering employee questions and drafting customer letters, rather than training three separate models. The CFO asks what a foundation model is and why one model can cover all three tasks.",
    question: "Which explanation is accurate?",
    options: [
      { id: 'A', text: "A database of approved answers that the model looks up and returns word for word to each request." },
      { id: 'B', text: "A small model trained only on the bank's own transactions to perform one fixed prediction task well." },
      { id: 'C', text: "A rules engine whose logic is written by the bank's analysts and updated whenever a policy changes." },
      { id: 'D', text: "A large model pre-trained on broad data that can be adapted or prompted to perform many tasks." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A foundation model is a large model pre-trained on vast, broad datasets, which gives it general capabilities that can be applied to many downstream tasks through prompting, grounding or tuning; large language models such as Gemini are examples, which is why one model can summarise, answer questions and draft letters. A small model trained for one prediction task is traditional task-specific machine learning. A hand-maintained rules engine does not learn at all. A lookup of approved answers retrieves fixed text rather than generating responses.",
    referenceUrl: "https://cloud.google.com/use-cases/generative-ai",
    tags: ["Foundation models", "Generative AI"]
  },
  {
    id: "gcp-cdl-206",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "Sorting a portfolio of AI ideas",
    scenario: "A telecom company's AI steering group is labelling proposed initiatives as either generative AI or predictive machine learning so it can assign them to the right teams. Most of the list involves creating content, but one initiative does not.",
    question: "Which initiative is predictive machine learning rather than generative AI?",
    options: [
      { id: 'A', text: "Writing a personalised retention email to each customer who has recently called to complain about service." },
      { id: 'B', text: "Producing tailored images for regional advertising campaigns from a short written brief for each market." },
      { id: 'C', text: "Summarising each recorded support call into a short note that the next agent can read before answering." },
      { id: 'D', text: "Estimating the probability that each customer will cancel their contract in the next ninety days of service." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Predictive machine learning learns from historical examples to output a value or class for new data; estimating each customer's probability of churning is a classic predictive model. Writing personalised emails, summarising calls into notes and producing campaign images all create new content, which is the defining trait of generative AI. Both approaches are forms of machine learning, but they deliver different kinds of output.",
    referenceUrl: "https://cloud.google.com/learn/what-is-machine-learning",
    tags: ["Predictive ML", "Generative AI"]
  },
  {
    id: "gcp-cdl-207",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "Drawing the AI family tree for new managers",
    scenario: "A consultancy is preparing training for new managers and wants a single slide showing how artificial intelligence, machine learning, deep learning and generative AI relate to one another. Two drafts contradict each other, and the partner in charge asks which relationship is correct.",
    question: "Which statement describes the relationship correctly?",
    options: [
      { id: 'A', text: "ML and AI are unrelated fields; deep learning belongs to AI, while generative AI is a branch of data analytics." },
      { id: 'B', text: "AI contains machine learning, which contains deep learning, and generative AI is built largely on deep learning." },
      { id: 'C', text: "Generative AI is the broadest field; AI, ML and deep learning are separate techniques that it uses to create content." },
      { id: 'D', text: "Deep learning contains machine learning, which contains AI, and generative AI is a separate field beside them." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Artificial intelligence is the broadest field. Machine learning is a subset of AI in which systems learn from data. Deep learning is a subset of machine learning that uses multi-layer neural networks. Modern generative AI models, such as large language and image models, are built on deep learning. Treating generative AI as the broadest field inverts the hierarchy. ML is not separate from AI, and generative AI is not a branch of data analytics. Placing deep learning around machine learning and AI reverses the nesting.",
    referenceUrl: "https://cloud.google.com/discover/what-is-deep-learning",
    tags: ["AI concepts", "Machine learning", "Deep learning", "Generative AI"]
  },
  {
    id: "gcp-cdl-208",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "Learning from ten years of past orders",
    scenario: "A bakery chain wants to know how many loaves each store will sell tomorrow. A data scientist proposes feeding ten years of daily sales, weather and holiday data into a system that works out the relationships itself and then produces a forecast for each store every evening.",
    question: "Which term describes this approach?",
    options: [
      { id: 'A', text: "Business intelligence, charting past sales for each store so managers can decide on tomorrow's baking." },
      { id: 'B', text: "Generative AI, in which a model writes a new description of each store's customers every evening." },
      { id: 'C', text: "Rule-based automation, in which analysts write fixed formulas that the system applies to each day." },
      { id: 'D', text: "Machine learning, in which a model learns patterns from historical data to predict new outcomes." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Machine learning is the subset of AI in which a model learns patterns from example data rather than being explicitly programmed, and then applies those patterns to make predictions on new data, which is exactly how the proposed forecasting system works. Business intelligence charts history but leaves the prediction to people. Generative AI creates content, and a nightly customer description does not forecast sales. Rule-based automation applies formulas that people write, whereas here the system discovers the relationships itself.",
    referenceUrl: "https://cloud.google.com/learn/what-is-machine-learning",
    tags: ["Machine learning", "AI concepts"]
  },
  {
    id: "gcp-cdl-209",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "Same model, very different answers",
    scenario: "Two HR specialists use the same gen AI model to draft job adverts. One types a single line and gets bland, generic text; the other describes the role, audience, tone, length and an example of a good advert and gets a usable draft. Their manager wants to understand why the results differ so much.",
    question: "What explains the difference?",
    options: [
      { id: 'A', text: "The size of the model's training dataset, which changes every time a different person uses it." },
      { id: 'B', text: "The number of dashboards each specialist has built from the HR department's recruitment data." },
      { id: 'C', text: "The storage class of the bucket where each specialist's past job adverts happen to be stored." },
      { id: 'D', text: "The quality of the prompt: the instructions and context that guide what the model generates." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A prompt is the input, instructions, context and examples, that a person gives a generative model, and more specific prompts that state the role, audience, tone, format and an example consistently produce more useful output; designing them well is called prompt engineering. Cloud Storage classes affect storage cost, not what a model writes. Dashboards are business intelligence and play no part in generation. A model's training data is fixed when it is trained and does not change per user.",
    referenceUrl: "https://cloud.google.com/discover/what-is-prompt-engineering",
    tags: ["Prompt engineering", "Generative AI"]
  },
  {
    id: "gcp-cdl-210",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "From FAQ bot to an agent that fixes the problem",
    scenario: "An airline's website chatbot can only link customers to help articles, so most people still phone the call center to change a flight or claim a refund. The airline is piloting an AI agent that can look up the booking, apply the fare rules, rebook the flight and issue the refund itself.",
    question: "Which business impact is the pilot most likely to deliver?",
    options: [
      { id: 'A', text: "It guarantees zero errors in refunds, since agents always interpret fare rules correctly." },
      { id: 'B', text: "It removes the need for any human agents, since the AI will handle every complex complaint unaided." },
      { id: 'C', text: "It resolves routine requests end to end at any hour and passes complex cases to human staff." },
      { id: 'D', text: "It replaces the airline's booking system, since the agent will store all reservations itself." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Agentic AI changes customer support by taking actions, looking up records, applying policies and completing transactions, rather than only pointing to information, so routine requests are resolved end to end around the clock while human staff focus on complex or sensitive cases. Complex complaints still benefit from human judgement and escalation. The agent works through the existing booking system's tools rather than replacing it. No AI system guarantees zero errors, which is why guardrails and monitoring remain necessary.",
    referenceUrl: "https://cloud.google.com/discover/what-are-ai-agents",
    tags: ["Agentic AI", "Customer support"]
  },
  {
    id: "gcp-cdl-211",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "Hours lost hunting across six systems",
    scenario: "A survey at an engineering firm finds that staff spend around eight hours a week searching for information across email, shared drives, the project tool and the HR portal, then copying it into reports. Leadership wants to give that time back to billable work.",
    question: "How can agentic AI most directly improve workforce productivity here?",
    options: [
      { id: 'A', text: "By producing a monthly dashboard that shows how many hours each team spends on searching." },
      { id: 'B', text: "By replacing all six systems with a single new database that staff query using SQL statements." },
      { id: 'C', text: "By adding more storage to each system so that staff can keep a larger archive of past projects." },
      { id: 'D', text: "By using agents that search across company systems and complete multi-step tasks for staff." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Agents connected to enterprise systems can find information across email, drives and business applications, summarise it and carry out multi-step tasks such as compiling a report or filing a request, which is how agentic AI reclaims time for knowledge workers; Google's Gemini Enterprise is built for this. Replacing six systems with one database is a costly migration and still leaves staff searching. More storage makes the search problem larger, not smaller. A dashboard measures the lost hours without recovering any of them.",
    referenceUrl: "https://cloud.google.com/gemini-enterprise",
    tags: ["Agentic AI", "Workforce productivity"]
  },
  {
    id: "gcp-cdl-212",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "Sellers buried in account research",
    scenario: "Account executives at an industrial software company spend much of each week researching prospects, writing outreach emails and updating the CRM after every call. Sales leadership wants them spending more time in conversations with customers and wants outreach to feel tailored to each account.",
    question: "Which use of agentic AI best serves this goal?",
    options: [
      { id: 'A', text: "A dashboard that ranks account executives by the number of emails each one sends per week." },
      { id: 'B', text: "Agents that research accounts, draft tailored outreach for review, and log call notes into the CRM." },
      { id: 'C', text: "A data warehouse that stores every past deal so sellers can query win rates by region with SQL." },
      { id: 'D', text: "A rules engine that sends the same outreach email to every prospect on a fixed weekly schedule." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "In sales, agents can gather account intelligence, draft personalised outreach for the seller to approve, and update the CRM automatically after meetings, removing low-value administration and improving the relevance of each touch. A warehouse of past deals supports analysis but still leaves sellers doing the research and admin. Ranking sellers by email volume measures activity rather than reducing it. A fixed template schedule is the opposite of tailored outreach.",
    referenceUrl: "https://cloud.google.com/discover/what-is-agentic-ai",
    tags: ["Agentic AI", "Sales"]
  },
  {
    id: "gcp-cdl-213",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "A port strike and ten thousand delayed shipments",
    scenario: "A consumer electronics company learns of disruptions such as port strikes and storms only when planners notice delays days later. It wants AI to watch supplier, shipping and weather data continuously, work out which orders are at risk and propose alternative routes, while keeping control over costly decisions.",
    question: "Which approach best applies agentic AI to these operations?",
    options: [
      { id: 'A', text: "A generative model that writes a weekly narrative summary of last week's delayed orders for the planners." },
      { id: 'B', text: "A dashboard that displays today's shipments on a map so planners can check each one against the news." },
      { id: 'C', text: "Agents that monitor the data, assess the impact and rebook every shipment themselves with no human review." },
      { id: 'D', text: "Agents that monitor signals, flag affected orders and propose reroutes, with planners approving costly ones." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Agentic AI in operations can continuously monitor many signals, reason about which orders are affected and prepare or execute responses, while human-in-the-loop approval for high-cost actions keeps the company in control, matching both requirements. Letting agents rebook everything with no review ignores the stated need to control costly decisions. A weekly narrative summary describes delays after the fact and takes no action. A map dashboard still relies on planners spotting problems themselves, which is today's slow process.",
    referenceUrl: "https://cloud.google.com/discover/what-is-agentic-ai",
    tags: ["Agentic AI", "Operations", "Human in the loop"]
  },
  {
    id: "gcp-cdl-214",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "Too many papers for one research team to read",
    scenario: "A biotech company's scientists cannot keep up with the thousands of papers published each month in their field, and forming new hypotheses about drug targets takes months of reading. The head of R&D asks how agentic AI could change the way her team works.",
    question: "Which description best fits the role agentic AI can play?",
    options: [
      { id: 'A', text: "Reviewing literature, synthesising findings and proposing hypotheses for scientists to test." },
      { id: 'B', text: "Replacing laboratory experiments entirely, since AI-generated conclusions need no validation." },
      { id: 'C', text: "Producing a quarterly chart of how many papers and hypotheses the team has worked through." },
      { id: 'D', text: "Storing all published papers in object storage so scientists can download them more quickly." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In research, agents can search and read large bodies of literature and data, synthesise what is known and propose novel hypotheses or experiment plans, compressing months of reading into days, while scientists remain responsible for validating the ideas; Google's AI co-scientist research is an example of this pattern. AI-generated hypotheses still require experimental validation. Faster downloads do not reduce the reading burden. A chart of papers read measures effort without accelerating discovery.",
    referenceUrl: "https://research.google/blog/accelerating-scientific-breakthroughs-with-an-ai-co-scientist/",
    tags: ["Agentic AI", "Research"]
  },
  {
    id: "gcp-cdl-215",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "A banking app that acts for its customers",
    scenario: "A digital bank's product team wants to stand out from competitors. Its idea is to build an assistant into the mobile app that, with the customer's permission, spots upcoming bills, moves money between accounts to avoid overdrafts and negotiates better rates on the customer's behalf.",
    question: "Which area of business transformation does this idea illustrate?",
    options: [
      { id: 'A', text: "Infrastructure modernization, because the assistant moves the bank's databases to managed services." },
      { id: 'B', text: "Product innovation, because agentic capabilities become a new feature that customers value directly." },
      { id: 'C', text: "Back-office cost cutting, because the assistant mainly automates the bank's internal reconciliation." },
      { id: 'D', text: "Regulatory reporting, because the assistant prepares the bank's filings for the financial regulator." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Embedding an agent that acts on the customer's behalf turns agentic AI into part of the product itself, creating a differentiating feature and potentially new revenue, which is product innovation. The assistant serves customers rather than automating internal reconciliation. It does not prepare regulatory filings. Moving databases to managed services is infrastructure modernization, which is unrelated to what the assistant does for customers.",
    referenceUrl: "https://cloud.google.com/discover/what-is-agentic-ai",
    tags: ["Agentic AI", "Product innovation"]
  },
  {
    id: "gcp-cdl-216",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "How a claims handler's job changes",
    scenario: "An insurer is rolling out agents that gather documents, check policy coverage, draft settlement recommendations and prepare payments for routine claims. Claims handlers are anxious and ask their director what their day-to-day work will look like once the agents are live.",
    question: "Which description best reflects how agentic AI typically reshapes such roles?",
    options: [
      { id: 'A', text: "Handlers shift to overseeing agents, reviewing their recommendations and handling complex or disputed claims." },
      { id: 'B', text: "Handlers move to IT roles, since their main task becomes maintaining the servers on which the agents run." },
      { id: 'C', text: "Handlers become unnecessary, since agents make every settlement decision with no oversight or escalation." },
      { id: 'D', text: "Handlers keep doing each step by hand and use the agents only to type up the notes after the claims close." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Agentic AI tends to move people from performing every step to supervising the work: setting goals, reviewing and approving agent recommendations, handling exceptions and complex or sensitive cases, and applying judgement and empathy where they matter. Using agents only for note-taking would waste their ability to run multi-step workflows. Removing all human oversight of settlements ignores the need for accountability and escalation. With managed cloud platforms, handlers do not become server administrators.",
    referenceUrl: "https://cloud.google.com/discover/what-is-agentic-ai",
    tags: ["Agentic AI", "Future of work", "Human oversight"]
  },
  {
    id: "gcp-cdl-217",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "Helping human agents during live calls",
    scenario: "A health insurer's contact center wants to keep humans on every call because members often discuss sensitive medical situations. However, new agents take months to learn the policies, and calls run long while they search for answers and write up notes afterwards.",
    question: "Which AI approach best fits these constraints?",
    options: [
      { id: 'A', text: "A larger team of trainers so that each new human agent spends more months in classroom sessions." },
      { id: 'B', text: "A monthly report that ranks the human agents by average call length and shares it with supervisors." },
      { id: 'C', text: "AI that assists human agents live with suggested answers and knowledge, then drafts the call summary." },
      { id: 'D', text: "A fully autonomous voice agent that answers every call so no human speaks with members any longer." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Agent-assist capabilities listen to the conversation, surface relevant policy knowledge and suggested responses in real time, and summarise the call afterwards, so humans stay on every call while ramp-up time and handle time fall; Google Cloud offers this in its contact center AI offerings. A fully autonomous voice agent contradicts the requirement that a human handle every call. A ranking report measures call length without helping agents answer faster. More classroom training lengthens ramp-up instead of shortening it.",
    referenceUrl: "https://cloud.google.com/agent-assist/docs",
    tags: ["Customer support", "Agent assist"]
  },
  {
    id: "gcp-cdl-218",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "AI projects stalled by scattered data",
    scenario: "A retailer's AI pilots keep stalling because the data they need is spread across separate systems for transactions, product images and customer reviews, and each project spends months copying and preparing data before any model work starts.",
    question: "Which benefit of Google Cloud's AI offerings addresses this problem?",
    options: [
      { id: 'A', text: "An AI-ready data cloud, where BigQuery unifies structured and unstructured data with built-in AI." },
      { id: 'B', text: "Committed-use discounts, which lower the hourly price of virtual machines reserved for three years." },
      { id: 'C', text: "Live migration of VMs, which keeps servers running while Google performs hardware maintenance." },
      { id: 'D', text: "A global network of edge locations, which delivers website images to shoppers with lower latency." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Google Cloud's AI-ready data cloud brings structured and unstructured data together in BigQuery, with governance and built-in AI and ML capabilities, so models and agents can work on enterprise data in place instead of each project copying and preparing it first. Edge locations speed up content delivery, not data preparation. Committed-use discounts reduce compute cost but do not unify data. Live migration keeps VMs available during maintenance, which is unrelated to data readiness for AI.",
    referenceUrl: "https://cloud.google.com/bigquery/docs/introduction",
    tags: ["AI-ready data", "BigQuery", "Google Cloud AI benefits"]
  },
  {
    id: "gcp-cdl-219",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "A model that reads text, images and video",
    scenario: "A media company wants an AI model that can understand news articles, photographs and video clips together, reason across them and generate summaries, and it wants that model to be developed and supported by its cloud provider rather than assembled from small open-source projects.",
    question: "Which Google Cloud AI benefit matches this requirement?",
    options: [
      { id: 'A', text: "Google's BigQuery ML, which trains models on table data in the warehouse with SQL statements." },
      { id: 'B', text: "Google's first-party Gemini models, which natively process text, images, audio and video." },
      { id: 'C', text: "Google's Cloud Translation API, which converts text from one language into another language." },
      { id: 'D', text: "Google's Speech-to-Text API, which transcribes the audio in recordings or video into transcripts." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Gemini is Google's family of first-party foundation models, natively multimodal so it can understand and reason across text, images, audio, video and code, and generate content from them, which fits the media company's need for a provider-built model. Cloud Translation handles only text translation. Speech-to-Text handles only audio transcription. BigQuery ML builds models over tabular data in the warehouse with SQL; it is not itself a multimodal generative model.",
    referenceUrl: "https://cloud.google.com/products/gemini-enterprise-agent-platform",
    tags: ["Gemini", "Multimodal", "Google Cloud AI benefits"]
  },
  {
    id: "gcp-cdl-220",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "Why the infrastructure behind AI matters to a CEO",
    scenario: "The CEO of a genomics startup is choosing a cloud provider for training and serving large AI models. Her board asks why the provider's underlying infrastructure should matter to a business decision rather than just the models it offers.",
    question: "Which point best explains the benefit Google Cloud highlights here?",
    options: [
      { id: 'A', text: "Google offers only one machine type for AI, so choosing a configuration takes the team much less time." },
      { id: 'B', text: "Google's purpose-built TPUs, also used for its own AI, give better performance for the cost." },
      { id: 'C', text: "Google requires AI workloads to run on-premises, so the startup keeps its own data center for training." },
      { id: 'D', text: "Google's AI infrastructure runs only open-source models, so the startup avoids any licence fees at all." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Google Cloud positions its AI infrastructure, including custom-designed Tensor Processing Units (TPUs) alongside GPUs, high-speed networking and optimised software, as a differentiator: the same infrastructure that trains and serves Google's own models such as Gemini is available to customers, which translates into better performance per dollar for training and inference. Google offers many machine types for AI, not one. AI workloads run in Google Cloud, with on-premises options available rather than required. The infrastructure runs Google, partner and open models alike.",
    referenceUrl: "https://cloud.google.com/tpu/docs/intro-to-tpu",
    tags: ["AI infrastructure", "TPU", "Google Cloud AI benefits"]
  },
  {
    id: "gcp-cdl-221",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "AI agents for every employee without a build project",
    scenario: "A professional services firm wants all 8,000 employees to use AI agents that search and act across Google Workspace, Microsoft SharePoint and Salesforce data, and it wants business teams to create simple agents themselves without code. It has no appetite for a long custom development project.",
    question: "Which Google Cloud offering best fits?",
    options: [
      { id: 'A', text: "Cloud Vision API, which labels objects and reads text in the images stored in the firm's shared drives." },
      { id: 'B', text: "Compute Engine GPU instances, on which engineers train and host a language model for employees." },
      { id: 'C', text: "Gemini Enterprise, which gives employees prebuilt and no-code agents connected to company data sources." },
      { id: 'D', text: "BigQuery ML, with which analysts build classification models on company data by writing SQL queries." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Gemini Enterprise (formerly Google Agentspace) is Google Cloud's prebuilt agent platform for the workforce: it connects to sources such as Google Workspace, Microsoft 365 and Salesforce, offers ready-made agents such as deep research, and lets business users build their own agents without code, which avoids a long development effort. Training and hosting a custom model on GPU instances is exactly the build project the firm wants to avoid. BigQuery ML creates predictive models for analysts, not employee-facing agents. The Vision API analyses images and does not search or act across business applications.",
    referenceUrl: "https://cloud.google.com/gemini-enterprise",
    tags: ["Gemini Enterprise", "Prebuilt agents", "Google Cloud AI benefits"]
  },
  {
    id: "gcp-cdl-222",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "Help writing documents and summarising meetings",
    scenario: "A charity whose staff already work in Gmail, Docs and Meet wants them to draft documents faster, summarise long email threads and get notes from video meetings, starting next month and without any development work or new applications to learn.",
    question: "Which option best fits this need?",
    options: [
      { id: 'A', text: "Build a custom summarisation model with AutoML and host it for staff to call from their own browsers." },
      { id: 'B', text: "Stream all Gmail and Meet data into BigQuery and create Looker dashboards of communication trends." },
      { id: 'C', text: "Use Gemini in Google Workspace, which adds AI assistance directly into Gmail, Docs, Meet and other apps." },
      { id: 'D', text: "Deploy the Speech-to-Text API so that every recorded meeting is transcribed into a text file for reading." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Gemini in Google Workspace is a prebuilt AI application: it helps write and refine documents in Docs, summarises threads in Gmail and takes notes in Meet, inside the tools staff already use, with no development work. Building and hosting a custom model is a development project and adds a new tool. Dashboards of communication trends do not help anyone draft or summarise. A raw transcript from Speech-to-Text is not a summary and still leaves the charity building an application around it.",
    referenceUrl: "https://workspace.google.com/solutions/ai/",
    tags: ["Gemini in Workspace", "Prebuilt AI apps", "Productivity"]
  },
  {
    id: "gcp-cdl-223",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "Stitching together seven AI vendors",
    scenario: "A retailer's first AI projects used one vendor for GPUs, another for data, a third for models and several more for agent tools and security. Integration work now consumes most of the team's time. The CIO is evaluating a single provider that covers the full stack.",
    question: "What is the main benefit Google Cloud offers in this situation?",
    options: [
      { id: 'A', text: "A requirement to use only Google-built models, which removes the need to evaluate model choices." },
      { id: 'B', text: "A fixed annual price for all AI usage, which removes any need to track consumption in the future." },
      { id: 'C', text: "A promise that projects need no data preparation, since the models work equally well on any input." },
      { id: 'D', text: "An integrated stack of infrastructure, data, models, platform and agents built to work together." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Google Cloud offers an end-to-end AI stack, from AI infrastructure and an AI-ready data cloud through first-party models and the Gemini Enterprise Agent Platform to prebuilt agents, designed to work together, which cuts integration effort while still allowing third-party and open models. It does not restrict customers to Google models; its model catalog includes many partner and open models. AI services are billed on usage, not a single fixed annual price. Data quality and preparation still matter for good results.",
    referenceUrl: "https://cloud.google.com/ai",
    tags: ["Google Cloud AI benefits", "Integrated AI stack"]
  },
  {
    id: "gcp-cdl-224",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "Legal fears prompts will train a public model",
    scenario: "A law firm wants lawyers to use Gemini models on Google Cloud to analyse confidential client documents. Its general counsel blocks the project, fearing that anything lawyers type or upload will be used to improve Google's models and could surface in other customers' results.",
    question: "Which fact about Google Cloud's enterprise AI best addresses this concern?",
    options: [
      { id: 'A', text: "Google Cloud encrypts prompts, which on its own guarantees that the models can never learn from any input." },
      { id: 'B', text: "Google Cloud deletes every prompt the moment a response is returned, so no logging or history is possible." },
      { id: 'C', text: "Google Cloud does not use customer data to train its models without permission, and data stays controlled." },
      { id: 'D', text: "Google Cloud only allows public, non-confidential documents to be used with its generative AI models." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Google Cloud commits that customer data, including prompts and responses, is not used to train its foundation models without the customer's permission, and enterprise controls such as IAM, data residency options, customer-managed encryption keys and VPC Service Controls keep that data under the customer's governance, which directly answers the general counsel. There is no rule limiting generative AI to public documents; confidential enterprise use is the intended case. Deleting every prompt instantly is not how the service is described, and customers can choose logging and caching settings. Encryption protects data but is not, by itself, what prevents training use; the contractual data-use commitment does that.",
    referenceUrl: "https://cloud.google.com/vertex-ai/generative-ai/docs/data-governance",
    tags: ["Data privacy", "Enterprise AI", "Google Cloud AI benefits"]
  },
  {
    id: "gcp-cdl-225",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "Reviewing a two-thousand-page deal file at once",
    scenario: "A private equity firm's deal team wants an AI model to read an entire acquisition data room, about two thousand pages of contracts, financials and board minutes, in a single request and answer questions that require connecting details spread across many documents.",
    question: "Which capability of Google's first-party models matters most here?",
    options: [
      { id: 'A', text: "Speech-to-Text, which converts board meeting recordings into written transcripts for the team." },
      { id: 'B', text: "Cloud Translation, which converts contracts written in other languages into the team's language." },
      { id: 'C', text: "AutoML tabular, which trains a model on structured financial tables to predict one column." },
      { id: 'D', text: "Gemini's long context window, which lets one prompt include very large document collections." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Gemini models support very long context windows, on the order of a million tokens or more, so a single request can include thousands of pages and the model can reason across details scattered through them. Speech-to-Text and Cloud Translation are useful pre-processing services, but neither reads and reasons across a whole data room. AutoML tabular predicts a target column in structured data; it does not answer questions about documents.",
    referenceUrl: "https://cloud.google.com/products/gemini-enterprise-agent-platform",
    tags: ["Gemini", "Long context", "Google Cloud AI benefits"]
  }
];

export default GCP_CDL_QUESTIONS_9;
