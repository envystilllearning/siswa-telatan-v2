import { Chapter } from "../../../types/content";

export const graffiti: Chapter = {
  id: "graffiti",
  slug: "graffiti",
  number: 5,
  semester: 2,
  title: "Graffiti",
  theme: "Arts",
  question: "Is graffiti art or vandalism?",
  overview: "Students explore the world of graffiti and street art through exposition writing. They construct opinion-based arguments about art, expression, and public spaces, learning to support claims with evidence and reasoning.",
  estimatedTime: "8 hours",
  skills: ["reading", "writing", "speaking", "listening", "viewing"],
  textType: "exposition",
  languageFocus: ["opinion", "argument", "evidence"],
  objectives: [
    { id: "gr-obj-1", description: "Identify the features of an exposition text: thesis, arguments, and conclusion.", level: "understand" },
    { id: "gr-obj-2", description: "Write an exposition presenting an opinion with supporting arguments.", level: "create" },
    { id: "gr-obj-3", description: "Evaluate the strengths of different arguments on a controversial topic.", level: "evaluate" },
    { id: "gr-obj-4", description: "Use persuasive language techniques to strengthen written arguments.", level: "apply" }
  ],
  lessons: [
    {
      id: "gr-lesson-1",
      slug: "what-is-graffiti",
      number: 1,
      title: "What Is Graffiti?",
      description: "Students explore different types of graffiti, from vandalism to recognized street art, and develop vocabulary for discussing visual art.",
      duration: 50,
      objectives: [
        { id: "gr-l1-obj-1", description: "Distinguish between different types of graffiti and street art.", level: "understand" },
        { id: "gr-l1-obj-2", description: "Use art-related vocabulary to describe visual works.", level: "apply" }
      ],
      vocabulary: [
        { word: "graffiti", definition: "writing or drawings on public surfaces, often unauthorized", example: "The city walls were covered in colorful graffiti." },
        { word: "mural", definition: "a large painting done directly on a wall", example: "The mural on the school wall depicts local history." },
        { word: "vandalism", definition: "deliberate destruction or damage to property", example: "Spray-painting private property is considered vandalism." },
        { word: "stencil", definition: "a thin sheet with cut-out patterns used to create designs", example: "Banksy is famous for his stencil-based street art." },
        { word: "expression", definition: "the act of conveying thoughts or feelings through art", example: "Street art is a form of personal expression." }
      ],
      languageFocus: ["art vocabulary", "describing visual elements", "opinion language"],
      conceptExplanation: "Graffiti exists on a spectrum from simple tags (quick signatures) to elaborate murals that transform entire buildings. Understanding this spectrum is important for forming balanced opinions about street art.\n\nVisual art uses elements like color, line, shape, texture, and composition. When describing graffiti, we can talk about its style (realistic, abstract, cartoon-like), its message (political, social, humorous), and its context (where it appears and what it adds to the space).",
      examples: [
        "The graffiti on the underpass features bold colors and sharp geometric shapes that draw the eye upward.",
        "The mural depicts local heroes and cultural symbols that represent the community's identity.",
        "A simple tag is just a stylized signature, while a full-piece mural can take days to complete."
      ],
      modelText: "Graffiti and street art have a complex history that spans thousands of years. Ancient Romans wrote graffiti on the walls of Pompeii, and throughout history, people have used public surfaces to communicate messages. Modern graffiti emerged in the 1970s in New York City, where young people from marginalized communities used spray paint to leave their marks on subway cars and buildings. What began as an act of rebellion has evolved into a recognized art form. Today, cities around the world commission street artists to create murals that beautify neighborhoods and celebrate local culture. Artists like Banksy, Shepard Fairey, and Os Gemeos have brought street art into galleries and museums. However, the debate continues: is all graffiti art, or does some of it remain vandalism? The answer may depend on context, intention, and execution.",
      activities: [
        {
          id: "gr-l1-act-1",
          type: "vocabulary",
          title: "Art Vocabulary Builder",
          instruction: "Match each art term with its correct definition.",
          content: { type: "vocabulary", words: [
            { word: "composition", definition: "the arrangement of elements in an artwork", example: "The composition of the mural draws your eye to the center." },
            { word: "texture", definition: "the surface quality of an artwork", example: "The rough texture of the brick wall adds character to the piece." },
            { word: "perspective", definition: "the technique of representing 3D objects on a flat surface", example: "The artist used perspective to make the tunnel look deeper." },
            { word: "symbolism", definition: "the use of symbols to represent ideas", example: "The dove in the mural symbolizes peace." },
            { word: "ephemeral", definition: "lasting for a very short time", example: "Graffiti is ephemeral because it can be painted over at any time." }
          ] },
          answerKey: { answers: {}, explanation: "Each term describes a different aspect of visual art and graffiti.", openEnded: true, lookFor: ["correct matching", "understanding of terms", "ability to use terms in context"] },
          duration: 15,
          level: "remember"
        },
        {
          id: "gr-l1-act-2",
          type: "discussion",
          title: "Graffiti Debate Prep",
          instruction: "Work in pairs. One person argues that graffiti is art. The other argues it is vandalism. Prepare two arguments for each side.",
          content: { type: "discussion", prompt: "Before writing your exposition, you need to understand both sides of the argument. What reasons support each position?", thinkingTime: 5, pairInstruction: "Prepare two arguments for each side and discuss with your partner.", shareOutPrompt: "Which arguments are the most convincing on each side?" },
          answerKey: { answers: {}, explanation: "Look for balanced reasoning and specific examples on both sides.", openEnded: true, lookFor: ["balanced arguments", "specific examples", "logical reasoning", "respectful discussion"] },
          duration: 15,
          level: "analyze"
        },
        {
          id: "gr-l1-act-3",
          type: "text-analysis",
          title: "Analyzing Street Art Descriptions",
          instruction: "Read the descriptions below and identify the art elements mentioned in each.",
          content: { type: "text-analysis", text: "Piece 1: A large mural of a phoenix rising from flames covers the entire side of a five-story building. The colors transition from deep red at the bottom to bright orange and yellow at the top, creating a sense of movement and energy.\n\nPiece 2: A simple black-and-white stencil of a child reaching for a star appears on a concrete wall near the train station. The contrast between the dark stencil and light wall makes the image stand out.", questions: [
            { id: "ae-q1", question: "Which art element is emphasized in Piece 1?", options: [{ id: "a", text: "Color" }, { id: "b", text: "Line" }, { id: "c", text: "Texture" }], correctId: "a" },
            { id: "ae-q2", question: "What technique does Piece 2 use?", options: [{ id: "a", text: "Mural painting" }, { id: "b", text: "Stencil" }, { id: "c", text: "Spray painting" }], correctId: "b" },
            { id: "ae-q3", question: "Which piece is more likely to be considered 'street art' rather than 'vandalism'?", options: [{ id: "a", text: "Piece 1" }, { id: "b", text: "Piece 2" }, { id: "c", text: "Both equally" }], correctId: "a" }
          ] },
          answerKey: { answers: { "ae-q1": "a", "ae-q2": "b", "ae-q3": "a" }, explanation: "Piece 1 emphasizes color transitions. Piece 2 uses stencil technique. The large mural is more likely to be commissioned street art." },
          duration: 15,
          level: "analyze"
        }
      ],
      teacherNotes: { objective: "Students will explore different types of graffiti and develop art-related vocabulary.", time: "50 minutes", grouping: "Whole class, pair discussion, individual analysis", teacherPrompt: "Show images of different types of graffiti and street art from around the world.", expectedResponse: "Students can distinguish between different types of graffiti and use art vocabulary.", commonDifficulty: "Students may have strong preconceptions about graffiti. Encourage balanced thinking.", followUp: "Have students photograph or sketch examples of street art in their neighborhood." }
    },
    {
      id: "gr-lesson-2",
      slug: "exposition-structure",
      number: 2,
      title: "Writing an Exposition",
      description: "Students learn the three-part structure of an exposition: thesis, arguments, and conclusion. They practice constructing a well-reasoned argument.",
      duration: 60,
      objectives: [
        { id: "gr-l2-obj-1", description: "Identify thesis, arguments, and conclusion in exposition texts.", level: "understand" },
        { id: "gr-l2-obj-2", description: "Write an exposition with a clear thesis and at least two supporting arguments.", level: "create" }
      ],
      vocabulary: [
        { word: "thesis", definition: "the main argument or position in an exposition", example: "The thesis of her essay was that graffiti should be legalized." },
        { word: "argument", definition: "a reason given to support a claim", example: "One argument for graffiti is that it beautifies urban spaces." },
        { word: "evidence", definition: "facts or examples that support an argument", example: "She provided evidence from studies on urban renewal." },
        { word: "rebuttal", definition: "an argument against the opposing position", example: "The rebuttal addressed concerns about property damage." },
        { word: "conclude", definition: "to bring an argument to an end", example: "In conclusion, graffiti has both positive and negative aspects." }
      ],
      languageFocus: ["exposition structure", "thesis statements", "supporting arguments", "conclusion techniques"],
      conceptExplanation: "An exposition is a text that presents a point of view on an issue. It has three main parts: the thesis (your position), the arguments (reasons supporting your position), and the conclusion (summary and final statement).\n\nA strong thesis statement is clear and debatable. 'Graffiti exists' is a fact, not a thesis. 'Graffiti should be recognized as a legitimate art form' is a thesis because people can disagree with it. Arguments should be supported with evidence: statistics, examples, expert opinions, or logical reasoning.",
      examples: [
        "Thesis: Graffiti, when done thoughtfully, contributes positively to urban culture.",
        "Argument 1: Cities with legal graffiti walls report less unauthorized vandalism.",
        "Argument 2: Street art attracts tourists and boosts local economies.",
        "Conclusion: While graffiti must respect property rights, its artistic and cultural value should not be dismissed."
      ],
      modelText: "Graffiti has long been a controversial topic, with some viewing it as an eyesore and others celebrating it as a legitimate art form. I believe that graffiti, when created with permission and artistic intent, should be recognized as valuable street art that enriches our urban environments.\n\nOne strong argument in favor of graffiti as art is its ability to transform neglected spaces. Derelict buildings and plain concrete walls become canvases for creativity. In cities like Melbourne, Australia, and Bogota, Colombia, street art has turned entire neighborhoods into outdoor galleries that attract visitors from around the world. This demonstrates that graffiti can have real economic and cultural benefits.\n\nFurthermore, graffiti provides a voice for communities that are often excluded from traditional art spaces. Young artists who cannot afford gallery space can share their work publicly. Street art often addresses social and political issues, sparking important conversations in the public sphere. The work of Banksy, for example, has drawn attention to war, poverty, and environmental issues.\n\nAdmittedly, unauthorized graffiti on private property is a legitimate concern. Property owners have the right to control what appears on their buildings. However, this argument does not apply to all graffiti. Cities can designate legal walls and commission murals, allowing artistic expression while protecting property rights.\n\nIn conclusion, while graffiti on private property without permission is wrong, the art form itself has tremendous value. Cities should embrace street art by creating legal spaces for artists and commissioning public murals. When given the opportunity, graffiti artists create works that beautify cities, provoke thought, and give voice to the voiceless.",
      activities: [
        {
          id: "gr-l2-act-1",
          type: "text-analysis",
          title: "Analyzing an Exposition",
          instruction: "Read the exposition below and identify the thesis, arguments, and conclusion.",
          content: { type: "text-analysis", text: "Art education should be mandatory in all schools. Creative thinking is just as important as mathematical and scientific skills. Students who study art develop better problem-solving abilities and emotional intelligence. Furthermore, the creative industries are a growing source of employment worldwide. While some argue that core academic subjects should take priority, research shows that students who participate in art programs actually perform better in other subjects as well. In conclusion, investing in art education benefits both individual students and society as a whole.", questions: [
            { id: "ex-q1", question: "What is the thesis of this exposition?", options: [{ id: "a", text: "Art is important" }, { id: "b", text: "Art education should be mandatory in all schools" }, { id: "c", text: "Students should study art" }], correctId: "b" },
            { id: "ex-q2", question: "How many arguments support the thesis?", options: [{ id: "a", text: "2" }, { id: "b", text: "3" }, { id: "c", text: "4" }], correctId: "b" },
            { id: "ex-q3", question: "What type of evidence is used?", options: [{ id: "a", text: "Personal stories" }, { id: "b", text: "Research findings" }, { id: "c", text: "Expert quotes" }], correctId: "b" }
          ] },
          answerKey: { answers: { "ex-q1": "b", "ex-q2": "b", "ex-q3": "b" }, explanation: "The thesis is clearly stated in the first sentence. Three arguments follow: problem-solving/emotional intelligence, employment, and better performance in other subjects. Research findings are cited." },
          duration: 15,
          level: "understand"
        },
        {
          id: "gr-l2-act-2",
          type: "writing-task",
          title: "Write Your First Exposition",
          instruction: "Write an exposition (150-200 words) arguing that graffiti should or should not be allowed in your city.",
          content: { type: "writing-task", context: "You are writing for a school newspaper that is running a feature on street art.", purpose: "To present a clear argument about graffiti using exposition structure.", audience: "Students and teachers at your school.", constraints: ["State a clear thesis", "Include at least 2 arguments with evidence", "Include a counter-argument or rebuttal", "Write a conclusion", "150-200 words"], checklist: ["Clear thesis", "2+ arguments with evidence", "Counter-argument addressed", "Conclusion present", "Word count met"], rubric: [
            { criterion: "Argument strength", levels: ["Weak", "Adequate", "Strong", "Compelling"] },
            { criterion: "Evidence use", levels: ["No evidence", "Some evidence", "Clear evidence", "Well-supported"] },
            { criterion: "Structure", levels: ["Unclear", "Partial", "Complete", "Exemplary"] }
          ] },
          answerKey: { answers: {}, explanation: "Assessed using the provided rubric.", openEnded: true, sampleResponse: "I believe that graffiti should be allowed in designated areas of our city. First, graffiti can transform ugly, neglected walls into beautiful works of art. In many cities, street art has become a tourist attraction. Second, graffiti gives young people a creative outlet and reduces vandalism because artists have legal walls to use. Critics argue that graffiti damages property, but this only applies to unauthorized work. Legal graffiti walls actually reduce illegal tagging. In conclusion, allowing graffiti in specific locations benefits the community while respecting property rights.", lookFor: ["clear thesis", "logical arguments", "evidence provided", "balanced perspective"] },
          duration: 25,
          level: "create"
        },
        {
          id: "gr-l2-act-3",
          type: "discussion",
          title: "Thesis Statement Workshop",
          instruction: "Work with a partner to evaluate thesis statements. Which are strong and which need improvement?",
          content: { type: "discussion", prompt: "Evaluate these thesis statements: (1) Graffiti is bad. (2) Graffiti should be allowed in designated zones. (3) Schools need better art programs. (4) Art education improves academic performance and should be mandatory.", thinkingTime: 3, pairInstruction: "Discuss which thesis statements are strong and which need improvement. Explain why.", shareOutPrompt: "What makes a strong thesis statement?" },
          answerKey: { answers: {}, explanation: "Strong theses are specific and debatable. Weak theses are too general or state facts.", openEnded: true, lookFor: ["understanding of thesis quality", "ability to improve weak statements", "clear reasoning"] },
          duration: 15,
          level: "analyze"
        }
      ],
      teacherNotes: { objective: "Students will understand exposition structure and write their own exposition.", time: "60 minutes", grouping: "Whole class, pair work, individual writing", teacherPrompt: "Model analyzing an exposition on the board, labeling the thesis, arguments, and conclusion.", expectedResponse: "Students can identify exposition elements and write a basic exposition.", commonDifficulty: "Students may write arguments without evidence. Emphasize the need for support.", followUp: "Have students peer-review each other's expositions using a checklist." }
    },
    {
      id: "gr-lesson-3",
      slug: "persuasive-language",
      number: 3,
      title: "Persuasive Language Techniques",
      description: "Students learn persuasive language techniques including emotive language, rhetorical questions, and repetition to strengthen their arguments.",
      duration: 50,
      objectives: [
        { id: "gr-l3-obj-1", description: "Identify persuasive language techniques in written and spoken texts.", level: "understand" },
        { id: "gr-l3-obj-2", description: "Use at least three persuasive techniques in their own writing.", level: "apply" }
      ],
      vocabulary: [
        { word: "rhetorical question", definition: "a question asked for effect, not expecting an answer", example: "Who doesn't want to live in a beautiful city?" },
        { word: "emotive language", definition: "words that evoke strong emotional responses", example: "Destroying young artists' dreams is a tragedy." },
        { word: "repetition", definition: "saying the same thing again for emphasis", example: "Art matters. Art inspires. Art transforms." },
        { word: "inclusive language", definition: "language that makes the reader feel included", example: "We all benefit from a more colorful city." },
        { word: "expert testimony", definition: "citing an authority to support an argument", example: "According to urban planning experts, murals reduce crime rates." }
      ],
      languageFocus: ["persuasive techniques", "emotive vocabulary", "rhetorical devices"],
      conceptExplanation: "Persuasive language techniques help make arguments more compelling. Rhetorical questions engage the reader and make them think: 'Who doesn't want cleaner streets?' Emotive language appeals to feelings: 'This beautiful artwork brightens the lives of everyone who walks past.' Repetition drives home key points: 'It's art. It's culture. It's our community.'\n\nInclusive language makes the reader feel part of the argument: 'We can all agree that...' or 'Our community deserves...' Expert testimony adds credibility: 'Leading art educators agree that...' Use these techniques to make your writing more persuasive without being dishonest.",
      examples: [
        "Rhetorical question: 'Can we really call a city vibrant if it has no public art?'",
        "Emotive language: 'Every day, talented young artists are silenced by outdated laws.'",
        "Repetition: 'Legal walls mean less vandalism. Legal walls mean more art. Legal walls mean better cities.'",
        "Expert testimony: 'According to UNESCO, public art is essential for cultural development.'"
      ],
      modelText: "When was the last time a piece of graffiti made you stop and think? When did a mural last brighten your walk to school? If you cannot remember, that is precisely why we need more street art in our city. Every blank wall is a missed opportunity for beauty, expression, and community connection. The evidence is clear: cities that embrace public art see reduced vandalism, increased tourism, and stronger community bonds. According to a study by the National Endowment for the Arts, neighborhoods with public art experience a thirty percent reduction in property crime. We all deserve to live in spaces that inspire us. We all benefit from art that reflects our shared stories and values. It is time to stop treating graffiti as mere vandalism and start recognizing it for what it truly is: a powerful form of cultural expression that enriches every community it touches.",
      activities: [
        {
          id: "gr-l3-act-1",
          type: "text-analysis",
          title: "Identifying Persuasive Techniques",
          instruction: "Read the passage and identify the persuasive techniques used in each underlined section.",
          content: { type: "text-analysis", text: "Isn't it time we gave young artists a chance? [Rhetorical question] Our city's walls are gray and lifeless. [Emotive language] Street art brings color, life, and meaning to forgotten spaces. [Repetition] As art critic Sarah Chen notes, 'Public art transforms communities.' [Expert testimony] We all want to live in a beautiful city. [Inclusive language]", questions: [
            { id: "pt-q1", question: "What technique is 'Isn't it time we gave young artists a chance?'", options: [{ id: "a", text: "Emotive language" }, { id: "b", text: "Rhetorical question" }, { id: "c", text: "Repetition" }], correctId: "b" },
            { id: "pt-q2", question: "What technique is 'Our city's walls are gray and lifeless'?", options: [{ id: "a", text: "Inclusive language" }, { id: "b", text: "Expert testimony" }, { id: "c", text: "Emotive language" }], correctId: "c" },
            { id: "pt-q3", question: "What type of evidence is 'As art critic Sarah Chen notes'?", options: [{ id: "a", text: "Statistics" }, { id: "b", text: "Expert testimony" }, { id: "c", text: "Personal experience" }], correctId: "b" }
          ] },
          answerKey: { answers: { "pt-q1": "b", "pt-q2": "c", "pt-q3": "b" }, explanation: "The first is a rhetorical question engaging the reader. The second uses negative emotive words. The third cites an expert authority." },
          duration: 15,
          level: "understand"
        },
        {
          id: "gr-l3-act-2",
          type: "writing-task",
          title: "Persuasive Exposition Revision",
          instruction: "Take your exposition from Lesson 2 and add at least three persuasive language techniques to make it more compelling.",
          content: { type: "writing-task", context: "You are revising your school newspaper article for maximum impact.", purpose: "To strengthen an existing exposition using persuasive techniques.", audience: "School newspaper readers.", constraints: ["Add at least 3 persuasive techniques", "Keep your original thesis and arguments", "Use emotive language in at least 2 places", "Include at least 1 rhetorical question", "Include at least 1 expert reference or statistic"], checklist: ["3+ techniques added", "Thesis maintained", "Emotive language used", "Rhetorical question present", "Expert reference included"] },
          answerKey: { answers: {}, explanation: "Assessed on effective use of persuasive techniques.", openEnded: true, sampleResponse: "When was the last time a piece of graffiti made you stop and think? [Rhetorical question] Our city's gray walls are crying out for color and life. [Emotive language] Graffiti, when done with permission, transforms forgotten spaces into outdoor galleries that everyone can enjoy. [Inclusive language] According to urban studies researcher Dr. Maria Santos, cities with legal street art programs see a thirty percent reduction in illegal tagging. [Expert testimony] We all deserve to live in a city that inspires us. [Inclusive language]", lookFor: ["effective technique integration", "natural flow", "emotional impact", "evidence-based persuasion"] },
          duration: 20,
          level: "apply"
        },
        {
          id: "gr-l3-act-3",
          type: "matching",
          title: "Technique Identification",
          instruction: "Match each sentence with the persuasive technique it uses.",
          content: { type: "matching", pairs: [
            { id: "ti1", left: "Who doesn't want cleaner streets?", right: "Rhetorical question" },
            { id: "ti2", left: "Art transforms. Art inspires. Art unites.", right: "Repetition" },
            { id: "ti3", left: "We all deserve beautiful public spaces.", right: "Inclusive language" },
            { id: "ti4", left: "Young artists are being silenced.", right: "Emotive language" },
            { id: "ti5", left: "Professor Lee confirms the benefits.", right: "Expert testimony" }
          ], explanation: "Each sentence demonstrates a different persuasive technique used in argumentative writing." },
          answerKey: { answers: { ti1: "Rhetorical question", ti2: "Repetition", ti3: "Inclusive language", ti4: "Emotive language", ti5: "Expert testimony" }, explanation: "Understanding these techniques helps students use them effectively in their own writing." },
          duration: 10,
          level: "remember"
        }
      ],
      teacherNotes: { objective: "Students will identify and use persuasive language techniques in exposition writing.", time: "50 minutes", grouping: "Whole class, individual revision, pair matching", teacherPrompt: "Show examples of persuasive language from advertisements and political speeches.", expectedResponse: "Students can identify persuasive techniques and incorporate them into their writing.", commonDifficulty: "Students may overuse techniques, making writing feel forced. Emphasize balance.", followUp: "Have students read their revised expositions aloud to feel the persuasive impact." }
    },
    {
      id: "gr-lesson-4",
      slug: "debate-speaking",
      number: 4,
      title: "Graffiti Debate",
      description: "Students participate in a structured debate about graffiti, practicing speaking skills and constructing oral arguments.",
      duration: 60,
      objectives: [
        { id: "gr-l4-obj-1", description: "Deliver a 2-minute debate speech with clear arguments and evidence.", level: "apply" },
        { id: "gr-l4-obj-2", description: "Respond to opposing arguments with counterpoints.", level: "analyze" }
      ],
      vocabulary: [
        { word: "rebuttal", definition: "a counter-argument that refutes an opposing claim", example: "The rebuttal addressed the concern about property damage." },
        { word: "concede", definition: "to acknowledge that a point is valid", example: "I concede that some graffiti is indeed vandalism." },
        { word: "stipulate", definition: "to agree that something is true", example: "I stipulate that not all graffiti is art." },
        { word: "contend", definition: "to argue or assert a position", example: "I contend that street art benefits communities." },
        { word: "prevalent", definition: "widespread and common", example: "Graffiti is prevalent in urban areas worldwide." }
      ],
      languageFocus: ["debate language", "agreeing and disagreeing", "structured oral argument"],
      conceptExplanation: "A formal debate requires clear structure and respectful argumentation. Each side presents their case, responds to the other side, and summarizes their position. Key debate phrases include: 'I contend that...', 'I concede that...', 'While I understand your point, I believe...', 'The evidence suggests...'\n\nGood debaters acknowledge valid points from the other side (concession) while maintaining their position. This shows intellectual honesty and makes their arguments more credible.",
      examples: [
        "Opening: 'I contend that graffiti should be allowed in designated public spaces.'",
        "Concession: 'I concede that unauthorized graffiti on private property is wrong.'",
        "Rebuttal: 'While my opponent argues that graffiti reduces property values, studies show the opposite in areas with legal street art.'",
        "Closing: 'In conclusion, the evidence clearly supports allowing legal graffiti in our city.'"
      ],
      modelText: "Opening statement for the proposition: Ladies and gentlemen, I contend that graffiti, when given appropriate legal frameworks, is a valuable form of artistic expression that benefits our communities. Let me present three key arguments. First, legal graffiti walls reduce unauthorized vandalism. In Melbourne, Australia, the creation of designated street art zones led to a forty percent decrease in illegal tagging. Second, street art attracts tourists and supports local businesses. The famous Hosier Lane in Melbourne draws over a million visitors annually. Third, graffiti provides a platform for marginalized voices. Young artists from disadvantaged backgrounds can share their stories publicly without needing gallery connections. I concede that some graffiti is indeed vandalism, but that does not negate the artistic value of thoughtful, permitted street art. The solution is not to ban all graffiti but to create legal spaces where art can flourish. I urge you to support the motion.",
      activities: [
        {
          id: "gr-l4-act-1",
          type: "discussion",
          title: "Debate Preparation",
          instruction: "Work in groups of four. Assign two people to argue for graffiti as art and two to argue against. Prepare your arguments.",
          content: { type: "discussion", prompt: "Each team should prepare: an opening statement (1 minute), two main arguments with evidence, and a response to the opposing side's strongest argument.", thinkingTime: 10, groupInstruction: "Prepare your arguments, then practice delivering them. Time each speech.", shareOutPrompt: "Which team presented the most convincing case?" },
          answerKey: { answers: {}, explanation: "Assess based on argument quality, evidence use, delivery, and respectful engagement.", openEnded: true, lookFor: ["clear arguments", "evidence cited", "respectful debate", "effective delivery"] },
          duration: 25,
          level: "apply"
        },
        {
          id: "gr-l4-act-2",
          type: "reflection",
          title: "Debate Reflection",
          instruction: "Reflect on your debate experience.",
          content: { type: "reflection", prompts: [
            { id: "ref-gr-1", question: "Which argument from the opposing side was hardest to respond to? Why?", type: "difficulty" },
            { id: "ref-gr-2", question: "What did you learn about the graffiti debate that you did not know before?", type: "understanding" },
            { id: "ref-gr-3", question: "How did preparing for the debate change your opinion about graffiti?", type: "application" }
          ] },
          answerKey: { answers: {}, explanation: "Look for genuine reflection and evidence of changed thinking.", openEnded: true },
          duration: 15,
          level: "evaluate"
        },
        {
          id: "gr-l4-act-3",
          type: "writing-task",
          title: "Final Exposition Assessment",
          instruction: "Write a polished exposition (180-220 words) about graffiti, incorporating everything you have learned.",
          content: { type: "writing-task", context: "You are submitting your final piece for the school newspaper's feature on street art.", purpose: "To demonstrate mastery of exposition writing with persuasive techniques.", audience: "The entire school community.", constraints: ["Clear thesis statement", "At least 3 supporting arguments with evidence", "At least 1 counter-argument and rebuttal", "At least 2 persuasive language techniques", "Strong conclusion", "180-220 words"], checklist: ["Clear thesis", "3+ arguments with evidence", "Counter-argument addressed", "2+ persuasive techniques", "Strong conclusion", "Word count met"], rubric: [
            { criterion: "Argument quality", levels: ["Weak", "Adequate", "Strong", "Compelling"] },
            { criterion: "Evidence and support", levels: ["No evidence", "Some evidence", "Clear evidence", "Well-supported throughout"] },
            { criterion: "Persuasive techniques", levels: ["None used", "1-2 techniques", "3+ techniques", "Techniques used effectively"] },
            { criterion: "Structure and coherence", levels: ["Disorganized", "Partial structure", "Well-structured", "Exemplary structure"] }
          ] },
          answerKey: { answers: {}, explanation: "Final assessment using comprehensive rubric.", openEnded: true, lookFor: ["compelling argument", "varied evidence", "effective persuasive techniques", "polished structure"] },
          duration: 30,
          level: "create"
        }
      ],
      teacherNotes: { objective: "Students will participate in a structured debate and write a polished exposition.", time: "60 minutes", grouping: "Group preparation, whole-class debate, individual writing", teacherPrompt: "Establish ground rules for respectful debate before beginning.", expectedResponse: "Students deliver structured debate speeches and write compelling expositions.", commonDifficulty: "Students may become emotional rather than logical during debate. Remind them to use evidence.", followUp: "Display the best expositions on a class bulletin board." }
    }
  ],
  caseStudy: {
    type: "case-study",
    context: "Your school principal has announced a new policy: all graffiti on school property will be immediately removed, and students caught creating graffiti will receive a suspension. Several students are upset because they believe the policy is too harsh. A group of art students has been creating murals on a designated wall in the school courtyard with permission from the previous principal. These murals have won awards and attracted positive attention from local media. The new policy does not distinguish between unauthorized tags and authorized murals. The art students want to present their case to the school board.",
    problem: "The art students need to argue that the policy should be revised to allow authorized murals while still prohibiting unauthorized graffiti.",
    evidence: [
      "The school's murals have won regional art awards.",
      "Local media has featured the school's street art program positively.",
      "The murals were created with permission from the previous principal.",
      "The new policy treats all graffiti equally, regardless of authorization.",
      "Several students have developed real artistic skills through the mural program."
    ],
    questions: [
      "What is the strongest argument the art students can make to the school board?",
      "How should they address the principal's concern about unauthorized graffiti?",
      "Write a letter to the school board presenting the students' case.",
      "What compromise solution could satisfy both the art students and the principal?"
    ]
  },
  evaluation: [
    {
      id: "gr-eval-1",
      type: "multiple-choice",
      title: "Exposition and Persuasion Quiz",
      instruction: "Choose the best answer for each question.",
      content: { type: "multiple-choice", question: "What is the thesis in an exposition?", options: [
        { id: "ev1a", text: "A fact that everyone agrees on" },
        { id: "ev1b", text: "The main argument or position the writer takes" },
        { id: "ev1c", text: "A summary of the opposing view" },
        { id: "ev1d", text: "A list of evidence" }
      ], correctId: "ev1b", explanation: "The thesis is the writer's main position on the issue. It should be debatable, not a simple fact." },
      answerKey: { answers: { "ev1b": "correct" }, explanation: "The thesis statement presents the writer's argument that the rest of the exposition supports." },
      duration: 10,
      level: "remember"
    },
    {
      id: "gr-eval-2",
      type: "matching",
      title: "Persuasive Technique Match",
      instruction: "Match each sentence with the persuasive technique it uses.",
      content: { type: "matching", pairs: [
        { id: "pm1", left: "Who wouldn't want a more colorful city?", right: "Rhetorical question" },
        { id: "pm2", left: "Art transforms. Art inspires. Art enriches.", right: "Repetition" },
        { id: "pm3", left: "Studies show a 30% reduction in crime.", right: "Statistical evidence" },
        { id: "pm4", left: "We all deserve beautiful neighborhoods.", right: "Inclusive language" },
        { id: "pm5", left: "Talented young artists are being silenced.", right: "Emotive language" }
      ], explanation: "Each sentence demonstrates a specific persuasive technique used in argumentative writing." },
      answerKey: { answers: { pm1: "Rhetorical question", pm2: "Repetition", pm3: "Statistical evidence", pm4: "Inclusive language", pm5: "Emotive language" }, explanation: "These techniques help make arguments more compelling and memorable." },
      duration: 10,
      level: "remember"
    },
    {
      id: "gr-eval-3",
      type: "true-false",
      title: "Graffiti and Art Facts",
      instruction: "Write T (True) or F (False) for each statement.",
      content: { type: "true-false", statements: [
        { id: "gtf1", text: "An exposition presents facts without opinions.", correct: false },
        { id: "gtf2", text: "A rhetorical question is asked for effect, not expecting an answer.", correct: true },
        { id: "gtf3", text: "Good arguments never acknowledge the opposing side.", correct: false },
        { id: "gtf4", text: "Expert testimony can strengthen an argument.", correct: true }
      ], explanation: "Expositions present opinions with evidence. Good arguments acknowledge and address counter-arguments." },
      answerKey: { answers: { gtf1: "false", gtf2: "true", gtf3: "false", gtf4: "true" }, explanation: "Expositions are opinion-based. Rhetorical questions engage readers. Acknowledging counter-arguments strengthens credibility." },
      duration: 5,
      level: "remember"
    }
  ],
  remedial: [
    {
      id: "gr-rem-1",
      type: "ordering",
      title: "Exposition Structure",
      instruction: "Put the parts of an exposition in the correct order.",
      content: { type: "ordering", instruction: "Number from 1 (first) to 4 (last).", items: [
        { id: "eo1", text: "Conclusion summarizing the argument.", correctPosition: 4 },
        { id: "eo2", text: "Thesis statement presenting the position.", correctPosition: 1 },
        { id: "eo3", text: "Third supporting argument.", correctPosition: 3 },
        { id: "eo4", text: "First supporting argument.", correctPosition: 2 }
      ], explanation: "An exposition follows a logical structure: thesis, arguments, conclusion." },
      answerKey: { answers: { eo1: "4", eo2: "1", eo3: "3", eo4: "2" }, explanation: "The correct order is: thesis, first argument, third argument, conclusion." },
      duration: 10,
      level: "understand"
    },
    {
      id: "gr-rem-2",
      type: "fill-blank",
      title: "Opinion Language Practice",
      instruction: "Complete each sentence with appropriate opinion language.",
      content: { type: "fill-blank", sentence: "I ___ that graffiti should be allowed in public spaces. ___ is an important art form. ___ the concerns about property damage, the benefits outweigh the risks.", blanks: [
        { id: "ol1", position: 1, acceptedAnswers: ["believe", "think", "argue", "contend"] },
        { id: "ol2", position: 2, acceptedAnswers: ["Graffiti", "Street art", "Public art"] },
        { id: "ol3", position: 3, acceptedAnswers: ["While", "Although", "Despite"] }
      ], explanation: "Each blank requires opinion or concession language appropriate for an exposition." },
      answerKey: { answers: { ol1: "believe", ol2: "Graffiti", ol3: "While" }, explanation: "Opinion language helps present a clear position while acknowledging other perspectives." },
      duration: 10,
      level: "apply"
    }
  ],
  enrichment: [
    {
      id: "gr-enr-1",
      type: "writing-task",
      title: "Street Art Documentary Script",
      instruction: "Write a 3-minute documentary script about street art in your city or country.",
      content: { type: "writing-task", context: "You are creating a short documentary for a school media project.", purpose: "To inform and persuade viewers about the value of street art.", audience: "Students and teachers at your school.", constraints: ["Include an engaging opening", "Describe at least 2 specific street artworks", "Interview a local artist (create quotes)", "Include a call to action", "Write for a spoken format"], checklist: ["Engaging opening", "Specific artwork descriptions", "Artist quotes included", "Call to action present", "Spoken language appropriate"] },
      answerKey: { answers: {}, explanation: "Assessed for creativity, engagement, and persuasion.", openEnded: true, lookFor: ["vivid descriptions", "compelling narrative", "persuasive elements", "natural spoken language"] },
      duration: 30,
      level: "create"
    },
    {
      id: "gr-enr-2",
      type: "discussion",
      title: "Art and Social Change",
      instruction: "Research how street art has been used for social or political movements around the world.",
      content: { type: "discussion", prompt: "Find examples of street art used in social movements (e.g., Black Lives Matter murals, environmental art, political protest). How does art communicate messages differently from written arguments?", thinkingTime: 10, pairInstruction: "Share your research findings with a partner.", shareOutPrompt: "Which example of art as social change was most powerful? Why?" },
      answerKey: { answers: {}, explanation: "Look for well-researched examples and thoughtful analysis of art's communicative power.", openEnded: true, lookFor: ["research quality", "analysis of art's impact", "connections to own argument", "clear presentation"] },
      duration: 20,
      level: "analyze"
    }
  ],
  reflection: [
    {
      type: "reflection",
      prompts: [
        { id: "gr-ref-1", question: "What is the most important element of a strong exposition?", type: "understanding" },
        { id: "gr-ref-2", question: "Which persuasive technique did you find most effective? Why?", type: "difficulty" },
        { id: "gr-ref-3", question: "Has your opinion about graffiti changed since the beginning of this chapter? How?", type: "application" },
        { id: "gr-ref-4", question: "What topic would you like to write an exposition about next?", type: "next-step" }
      ]
    }
  ]
};
