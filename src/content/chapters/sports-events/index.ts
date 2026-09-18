import { Chapter } from "../../../types/content";

export const sportsEvents: Chapter = {
  id: "sports-events",
  slug: "sports-events",
  number: 2,
  semester: 1,
  title: "Sports Events",
  theme: "Sports",
  question: "How do we retell experiences clearly?",
  overview: "Students learn to write and speak about sports events using recount texts. They practice past tense verbs and sequencing markers to retell experiences in chronological order.",
  estimatedTime: "8 hours",
  skills: ["reading", "writing", "speaking", "listening"],
  textType: "recount",
  languageFocus: ["past tense", "sequencing"],
  objectives: [
    { id: "se-obj-1", description: "Use regular and irregular past tense verbs accurately in recount writing.", level: "apply" },
    { id: "se-obj-2", description: "Sequence events chronologically using time connectives and adverbs.", level: "understand" },
    { id: "se-obj-3", description: "Write a recount text about a personal or observed sports experience.", level: "create" },
    { id: "se-obj-4", description: "Analyze the structure of a recount text and identify its key features.", level: "analyze" }
  ],
  lessons: [
    {
      id: "se-lesson-1",
      slug: "past-tense-review",
      number: 1,
      title: "Past Tense Review",
      description: "Students review regular and irregular past tense verb forms, focusing on accuracy in pronunciation and spelling.",
      duration: 50,
      objectives: [
        { id: "se-l1-obj-1", description: "Form regular past tense verbs by adding -ed correctly.", level: "remember" },
        { id: "se-l1-obj-2", description: "Use 15 common irregular past tense verbs correctly.", level: "apply" }
      ],
      vocabulary: [
        { word: "competed", definition: "past tense of compete; took part in a contest", example: "She competed in the regional championship." },
        { word: "scored", definition: "past tense of score; earned points or goals", example: "He scored the winning goal in the last minute." },
        { word: "defeated", definition: "past tense of defeat; beat someone in a contest", example: "The home team defeated the visitors 3-0." },
        { word: "celebrated", definition: "past tense of celebrate; expressed joy over an achievement", example: "The fans celebrated the victory all night." },
        { word: "qualified", definition: "past tense of qualify; earned the right to compete later", example: "She qualified for the national finals with her personal best." }
      ],
      languageFocus: ["regular past tense (-ed)", "irregular past tense forms", "past tense pronunciation"],
      conceptExplanation: "To form the past tense of regular verbs, we add -ed to the base form: play becomes played, train becomes trained, watch becomes watched. However, many common English verbs are irregular and have unique past tense forms: go becomes went, see becomes saw, run becomes ran.\n\nThe pronunciation of -ed varies: it sounds like /t/ after voiceless sounds (watched), /d/ after voiced sounds (played), and /id/ after t or d (defeated). Pay attention to these differences when speaking.",
      examples: [
        "Yesterday, we watched the basketball final. The home team played brilliantly and scored four goals.",
        "After the match, the players shook hands and the fans celebrated in the streets."
      ],
      modelText: "Last Saturday, our school held its annual sports day. The weather was perfect for outdoor events. Over two hundred students competed in track and field, swimming, and basketball. I participated in the 100-meter sprint and finished third, which was my best result ever. My friend Amira won the long jump with a leap of 4.2 meters. The basketball final was the most exciting event of the day; it went into overtime before Class 10B finally defeated Class 10A by two points. Everyone cheered wildly when the final whistle blew. We all went home exhausted but happy, already looking forward to next year's competition.",
      activities: [
        {
          id: "se-l1-act-1",
          type: "vocabulary",
          title: "Past Tense Verb Forms",
          instruction: "Write the past tense form of each verb below.",
          content: { type: "vocabulary", words: [
            { word: "score", definition: "past tense form?", example: "She ___ three goals last night." },
            { word: "go", definition: "past tense form?", example: "He ___ to the stadium early." },
            { word: "win", definition: "past tense form?", example: "They ___ the championship last year." },
            { word: "see", definition: "past tense form?", example: "We ___ an amazing match." },
            { word: "catch", definition: "past tense form?", example: "She ___ the ball at the last second." }
          ] },
          answerKey: { answers: { score: "scored", go: "went", win: "won", see: "saw", catch: "caught" }, explanation: "Scored is regular. Went, won, saw, and caught are irregular past tense forms." },
          duration: 10,
          level: "remember"
        },
        {
          id: "se-l1-act-2",
          type: "fill-blank",
          title: "Recount the Match",
          instruction: "Complete the paragraph by filling in the past tense forms of the verbs in parentheses.",
          content: { type: "fill-blank", sentence: "Last Friday, our team (play) ___ against the city champions. We (arrive) ___ at the stadium two hours early. The match (start) ___ at 3:00 PM. Our striker (score) ___ first, but the opponents (equalize) ___ before halftime.", blanks: [
            { id: "p1", position: 1, acceptedAnswers: ["played"] },
            { id: "p2", position: 2, acceptedAnswers: ["arrived"] },
            { id: "p3", position: 3, acceptedAnswers: ["started"] },
            { id: "p4", position: 4, acceptedAnswers: ["scored"] },
            { id: "p5", position: 5, acceptedAnswers: ["equalized", "equalised"] }
          ], explanation: "All verbs should be in past tense. Regular verbs add -ed; irregular verbs change form." },
          answerKey: { answers: { p1: "played", p2: "arrived", p3: "started", p4: "scored", p5: "equalized" }, explanation: "All these are regular past tense forms with the -ed ending." },
          duration: 15,
          level: "apply"
        },
        {
          id: "se-l1-act-3",
          type: "matching",
          title: "Irregular Verb Matching",
          instruction: "Match each base form with its correct past tense form.",
          content: { type: "matching", pairs: [
            { id: "iv1", left: "run", right: "ran" },
            { id: "iv2", left: "swim", right: "swam" },
            { id: "iv3", left: "throw", right: "threw" },
            { id: "iv4", left: "catch", right: "caught" },
            { id: "iv5", left: "give", right: "gave" }
          ], explanation: "These are all irregular verbs that do not follow the -ed pattern." },
          answerKey: { answers: { iv1: "ran", iv2: "swam", iv3: "threw", iv4: "caught", iv5: "gave" }, explanation: "Irregular verbs have unique past forms that must be memorized." },
          duration: 10,
          level: "remember"
        }
      ],
      teacherNotes: { objective: "Students will review and practice regular and irregular past tense verb forms.", time: "50 minutes", grouping: "Whole class drill, individual practice, pair matching", teacherPrompt: "Start with a quick oral drill: say the base form and students call out the past tense.", expectedResponse: "Students correctly form most regular past tense verbs and recall common irregular forms.", commonDifficulty: "Irregular verbs require memorization. Create a class verb wall for reference.", followUp: "Assign students to memorize 20 irregular verbs for a quiz next class." }
    },
    {
      id: "se-lesson-2",
      slug: "sequencing-events",
      number: 2,
      title: "Sequencing Events",
      description: "Students learn to use time connectives and sequencing adverbs to organize recount texts in clear chronological order.",
      duration: 50,
      objectives: [
        { id: "se-l2-obj-1", description: "Use time connectives to sequence events logically.", level: "apply" },
        { id: "se-l2-obj-2", description: "Identify the chronological structure of a recount text.", level: "understand" }
      ],
      vocabulary: [
        { word: "initially", definition: "at the beginning; first", example: "Initially, the match was evenly balanced." },
        { word: "subsequently", definition: "after that; following that", example: "Subsequently, the team scored two quick goals." },
        { word: "eventually", definition: "in the end; after a long time", example: "Eventually, they won the penalty shootout." },
        { word: "meanwhile", definition: "during the same time period", example: "Meanwhile, the crowd grew louder." },
        { word: "afterward", definition: "after the event or time mentioned", example: "Afterward, the players shook hands." }
      ],
      languageFocus: ["time connectives", "sequencing adverbs", "chronological order"],
      conceptExplanation: "A recount text tells events in the order they happened. To make this clear, we use time connectives and sequencing adverbs. These words act as signposts that guide the reader through the timeline.\n\nCommon sequencing words include: first, next, then, after that, subsequently, meanwhile, afterward, finally, and eventually. Using a variety of these words makes the writing more engaging and easier to follow.",
      examples: [
        "First, the players lined up on the field. Then, the referee blew the whistle to start the match. After that, both teams played aggressively.",
        "Meanwhile, the fans in the stands were getting increasingly excited. Eventually, the home team scored the winning goal."
      ],
      modelText: "The regional swimming championship began on a bright Saturday morning. Initially, the swimmers warmed up in the pool while coaches offered last-minute advice. At nine o'clock, the first event started: the 200-meter freestyle. Our school's representative, Dimas, took his position at lane four. The starting signal sounded and he dove into the water smoothly. After the first lap, Dimas was in third place, trailing the leader by half a body length. Subsequently, he increased his pace and moved into second position. Meanwhile, the crowd cheered louder with every stroke. Eventually, on the final lap, Dimas surged forward and touched the wall just ahead of his rival. He had won by 0.3 seconds. Afterward, his teammates surrounded him with hugs and congratulations.",
      activities: [
        {
          id: "se-l2-act-1",
          type: "ordering",
          title: "Put the Events in Order",
          instruction: "Arrange the following sentences in the correct chronological order.",
          content: { type: "ordering", instruction: "Number the sentences from 1 (first) to 6 (last).", items: [
            { id: "so1", text: "The crowd erupted in celebration.", correctPosition: 6 },
            { id: "so2", text: "The players took the field for warm-ups.", correctPosition: 2 },
            { id: "so3", text: "The referee blew the final whistle.", correctPosition: 5 },
            { id: "so4", text: "The spectators found their seats in the stands.", correctPosition: 1 },
            { id: "so5", text: "The home team scored the winning goal in the 89th minute.", correctPosition: 4 },
            { id: "so6", text: "The match kicked off at three o'clock.", correctPosition: 3 }
          ], explanation: "The events follow a logical sequence from arrival to warm-up to match start to the winning goal and final whistle." },
          answerKey: { answers: { so1: "6", so2: "2", so3: "5", so4: "1", so5: "4", so6: "3" }, explanation: "The sequence is: spectators arrive, players warm up, match kicks off, goal scored, final whistle, celebration." },
          duration: 10,
          level: "understand"
        },
        {
          id: "se-l2-act-2",
          type: "text-analysis",
          title: "Identifying Sequencing Words",
          instruction: "Read the recount below and identify all the time connectives, then answer the questions.",
          content: { type: "text-analysis", text: "First, we arrived at the gymnasium at noon. The volleyball tournament was already underway. Next, we found our team and checked the schedule. We were set to play at 2:00 PM. Meanwhile, we watched the other teams compete. Then it was our turn. We played well and won the first set easily. After that, the opponents fought back and took the second set. Eventually, we regrouped and won the deciding set 15-13.", questions: [
            { id: "sq-q1", question: "How many sequencing words or time connectives are in the text?", options: [{ id: "a", text: "3" }, { id: "b", text: "5" }, { id: "c", text: "7" }, { id: "d", text: "9" }], correctId: "c" },
            { id: "sq-q2", question: "What does 'eventually' suggest about the third set?", options: [{ id: "a", text: "It was easy" }, { id: "b", text: "It happened quickly" }, { id: "c", text: "It was difficult but they succeeded" }, { id: "d", text: "It was cancelled" }], correctId: "c" },
            { id: "sq-q3", question: "Which word indicates simultaneous events?", options: [{ id: "a", text: "First" }, { id: "b", text: "Meanwhile" }, { id: "c", text: "Next" }, { id: "d", text: "After that" }], correctId: "b" }
          ] },
          answerKey: { answers: { "sq-q1": "c", "sq-q2": "c", "sq-q3": "b" }, explanation: "The sequencing words are First, Next, Meanwhile, Then, After that, Eventually. 'Eventually' implies difficulty. 'Meanwhile' indicates simultaneous events." },
          duration: 15,
          level: "analyze"
        },
        {
          id: "se-l2-act-3",
          type: "writing-task",
          title: "Sequence a Sports Moment",
          instruction: "Write 6 sentences describing the key moments of a sports event. Use at least 4 different time connectives.",
          content: { type: "writing-task", context: "You are writing for a class blog about memorable sports moments.", purpose: "To practice using sequencing words to organize events clearly.", audience: "Classmates who want to read about exciting sports experiences.", constraints: ["Write 6 sentences", "Use at least 4 different time connectives", "Use past tense throughout", "Describe events in chronological order"], checklist: ["Chronological order", "4+ time connectives", "Past tense used", "Clear sequence of events"] },
          answerKey: { answers: {}, explanation: "Open-ended writing task.", openEnded: true, sampleResponse: "First, we gathered at the basketball court after lunch. Next, the referee explained the rules. Then, the game started and both teams played aggressively. After that, our team took an early lead. Meanwhile, the other team called a timeout. Eventually, we held on to win by five points.", lookFor: ["variety in sequencing words", "correct past tense", "logical flow"] },
          duration: 20,
          level: "apply"
        }
      ],
      teacherNotes: { objective: "Students will use time connectives to sequence events in a recount text.", time: "50 minutes", grouping: "Whole class, individual work, pair checking", teacherPrompt: "Model writing a recount on the board with students suggesting sequencing words.", expectedResponse: "Students can order events chronologically and use a variety of connectives.", commonDifficulty: "Repeating the same sequencing word. Encourage variety.", followUp: "Have students swap their recounts with a partner and check the sequencing." }
    },
    {
      id: "se-lesson-3",
      slug: "recount-text-structure",
      number: 3,
      title: "Recount Text Structure",
      description: "Students learn the three-part structure of a recount text: orientation, events, and reorientation.",
      duration: 60,
      objectives: [
        { id: "se-l3-obj-1", description: "Identify orientation, events, and reorientation in a recount text.", level: "understand" },
        { id: "se-l3-obj-2", description: "Write a complete recount text with all three structural elements.", level: "create" }
      ],
      vocabulary: [
        { word: "orientation", definition: "the opening section that sets the scene", example: "The orientation tells who, when, and where." },
        { word: "chronological", definition: "arranged in order of time", example: "The events are told in chronological order." },
        { word: "narrative", definition: "a spoken or written account of events", example: "The narrative described the entire tournament." },
        { word: "recount", definition: "to tell again; to narrate past events", example: "She recounted her experience at the Olympics." },
        { word: "reflection", definition: "thoughts about what happened", example: "His reflection on the game showed maturity." }
      ],
      languageFocus: ["recount structure", "past tense consistency", "personal pronouns in recount"],
      conceptExplanation: "A recount text has three main parts. The orientation introduces who was involved, when it happened, and where it took place. The events section tells what happened in chronological order, using past tense and time connectives. The reorientation wraps up the text with a personal reflection, summary, or final comment.\n\nThink of it like telling a friend about something that happened to you. You start by setting the scene, then tell the story step by step, and finally share how you felt about it or what you learned.",
      examples: [
        "Orientation: Last Tuesday afternoon, our class competed in the inter-school basketball tournament at the city sports center.",
        "Events: The game started at 3:00 PM. Our team scored first but the opponents quickly caught up. At halftime, the score was tied.",
        "Reorientation: In the end, we lost by just two points. It was disappointing, but we learned about teamwork and resilience."
      ],
      modelText: "On the morning of March 15th, our school held its annual cross-country race through the hills behind the campus. Over one hundred students from grades 9 through 12 had signed up to participate. The race began at seven thirty, when the sun was just rising over the trees. I started near the middle of the pack, keeping a steady pace to save energy for the hills ahead. The first kilometer was relatively flat, and I passed several runners who had started too fast. By the halfway point, my legs were burning and I wanted to slow down, but I thought about my coach's advice to push through the pain. I gradually moved up from fortieth place to twenty-fifth. In the final stretch, I gave everything I had left and sprinted past three more runners. I finished twenty-second out of 108 participants. After crossing the finish line, I collapsed onto the grass, exhausted but proud. Looking back, that race taught me the value of pacing and perseverance.",
      activities: [
        {
          id: "se-l3-act-1",
          type: "text-analysis",
          title: "Analyzing Recount Structure",
          instruction: "Read the recount below and label each paragraph with its structural element.",
          content: { type: "text-analysis", text: "Last weekend, our school volleyball team traveled to Jakarta for the regional tournament. We had been training for three months and felt confident about our chances.\n\nThe tournament began on Saturday morning. We won our first two matches convincingly. In the semifinal, we faced a tough opponent from Bandung. The match went to five sets. We saved two match points before finally winning. The final was against the host school. Despite playing our best, we lost in straight sets.\n\nAlthough we did not win, the experience was invaluable. We discovered our strengths and weaknesses. We learned that teamwork and communication are just as important as individual skill.", questions: [
            { id: "rs-q1", question: "Which paragraph is the Orientation?", options: [{ id: "a", text: "Paragraph 1" }, { id: "b", text: "Paragraph 2" }, { id: "c", text: "Paragraph 3" }], correctId: "a" },
            { id: "rs-q2", question: "Which paragraph contains the Events?", options: [{ id: "a", text: "Paragraph 1" }, { id: "b", text: "Paragraph 2" }, { id: "c", text: "Paragraph 3" }], correctId: "b" },
            { id: "rs-q3", question: "What type of content is in the Reorientation?", options: [{ id: "a", text: "More events" }, { id: "b", text: "Personal reflection and learning" }, { id: "c", text: "Detailed statistics" }], correctId: "b" }
          ] },
          answerKey: { answers: { "rs-q1": "a", "rs-q2": "b", "rs-q3": "b" }, explanation: "Paragraph 1 sets the scene (orientation). Paragraph 2 tells what happened (events). Paragraph 3 reflects on the experience (reorientation)." },
          duration: 15,
          level: "understand"
        },
        {
          id: "se-l3-act-2",
          type: "writing-task",
          title: "Write Your Own Recount",
          instruction: "Write a complete recount text (120-180 words) about a sports event. Include all three structural elements.",
          content: { type: "writing-task", context: "You are writing a personal recount for an English language portfolio.", purpose: "To demonstrate understanding of recount structure through original writing.", audience: "Your English teacher and classmates.", constraints: ["Include an Orientation paragraph", "Include Events with at least 4 events", "Include a Reorientation with personal reflection", "Use past tense throughout", "Use at least 3 time connectives", "120-180 words"], checklist: ["Orientation present", "Events in chronological order", "Reorientation with reflection", "Past tense consistent", "3+ time connectives", "Word count appropriate"], rubric: [
            { criterion: "Structure", levels: ["Missing elements", "Partial", "Complete", "Exemplary"] },
            { criterion: "Language", levels: ["Frequent errors", "Some errors", "Mostly accurate", "Accurate and varied"] },
            { criterion: "Content", levels: ["Sparse", "Adequate", "Detailed", "Rich and engaging"] }
          ] },
          answerKey: { answers: {}, explanation: "Assessed using the provided rubric.", openEnded: true, sampleResponse: "Last Friday, our school hosted the annual swimming carnival. Over eighty students competed in freestyle, backstroke, and butterfly events.\n\nThe carnival started at 9:00 AM with the 50-meter freestyle. I competed in the 100-meter backstroke at 10:30. Initially, I felt nervous, but the support from my teammates calmed me down. I started well and maintained a strong pace throughout. After the halfway point, I was in second place. Subsequently, I pushed harder and overtook the leader on the final lap. Meanwhile, the crowd cheered so loudly that I could barely hear the announcer. I touched the wall first and qualified for the regional competition.\n\nAfterward, I could not stop smiling. That race taught me that believing in yourself can make all the difference.", lookFor: ["clear three-part structure", "variety in past tense verbs", "effective use of connectives", "genuine reflection"] },
          duration: 25,
          level: "create"
        },
        {
          id: "se-l3-act-3",
          type: "discussion",
          title: "Recount vs. Narrative",
          instruction: "Discuss with a partner: What is the difference between a recount and a narrative text?",
          content: { type: "discussion", prompt: "A recount tells what happened in chronological order. A narrative tells a story with a problem or conflict. Can you think of examples of each?", thinkingTime: 3, pairInstruction: "Compare your ideas and list at least two differences.", shareOutPrompt: "What is the most important difference between a recount and a narrative?" },
          answerKey: { answers: {}, explanation: "Key differences: recount focuses on what happened, narrative focuses on a problem/conflict.", openEnded: true, lookFor: ["understanding of structural differences", "ability to give examples", "clear comparison"] },
          duration: 15,
          level: "analyze"
        }
      ],
      teacherNotes: { objective: "Students will understand and apply the three-part structure of a recount text.", time: "60 minutes", grouping: "Whole class, individual writing, pair discussion", teacherPrompt: "Use a T-chart on the board to compare recount and narrative structures.", expectedResponse: "Students can identify the three parts and write a structured recount.", commonDifficulty: "Students often write only events without orientation or reorientation.", followUp: "Have students revise their recounts based on peer feedback." }
    },
    {
      id: "se-lesson-4",
      slug: "recount-speaking",
      number: 4,
      title: "Oral Recount and Listening",
      description: "Students practice telling recounts orally and listening to others. They learn appropriate intonation and pacing.",
      duration: 50,
      objectives: [
        { id: "se-l4-obj-1", description: "Deliver a 2-minute oral recount with clear sequencing and appropriate intonation.", level: "apply" },
        { id: "se-l4-obj-2", description: "Listen to a recount and identify the key events in order.", level: "understand" }
      ],
      vocabulary: [
        { word: "intonation", definition: "the rise and fall of the voice when speaking", example: "Her intonation made the story more exciting." },
        { word: "pacing", definition: "the speed at which something happens", example: "The pacing of his recount kept everyone engaged." },
        { word: "summarize", definition: "to give a brief statement of the main points", example: "She summarized the match in three sentences." },
        { word: "elaborate", definition: "to add more details to something", example: "Can you elaborate on what happened after the goal?" },
        { word: "captivating", definition: "holding attention; fascinating", example: "Her captivating storytelling held the audience spellbound." }
      ],
      languageFocus: ["oral presentation skills", "stress and intonation for emphasis", "asking follow-up questions"],
      conceptExplanation: "When recounting events orally, your voice is a powerful tool. Vary your intonation to show excitement, surprise, or disappointment. Slow down for important moments and speed up for less critical details. Pause after dramatic events to let the audience absorb the moment.\n\nGood oral recounts also involve interaction. The listener can ask questions to elicit more details. Phrases like 'Can you tell us more about that?' or 'What happened next?' keep the conversation flowing naturally.",
      examples: [
        "Use rising intonation for yes/no questions: 'Did you see that amazing goal?'",
        "Use falling intonation for statements: 'We won the championship.'",
        "Pause for effect: 'And then... he scored from the halfway line!'"
      ],
      modelText: "So there I was, standing at the starting line of the 400-meter race, my heart pounding so hard I could hear it. The stadium was packed with over two thousand spectators. When the gun went off, I burst out of the blocks and settled into my rhythm. At the 200-meter mark, I was in third place. I could see the two leaders just ahead of me. I told myself to stay calm and save my energy for the final straight. Around the last bend, I found another gear. I overtook the runner in second place and then chased down the leader. With fifty meters to go, I surged past him. I crossed the finish line first, collapsing in exhaustion. The roar of the crowd was deafening.",
      activities: [
        {
          id: "se-l4-act-1",
          type: "discussion",
          title: "Oral Recount Preparation",
          instruction: "Prepare a 2-minute oral recount of a memorable sports moment.",
          content: { type: "discussion", prompt: "Think of a sports event you watched or participated in. What was the most exciting moment? How did it feel? Plan your recount with a beginning, middle, and end.", thinkingTime: 5, pairInstruction: "Practice your recount with a partner. Give each other feedback on clarity and pacing.", shareOutPrompt: "Who had the most captivating recount? What made it stand out?" },
          answerKey: { answers: {}, explanation: "Assess based on structure, fluency, intonation, and audience engagement.", openEnded: true, lookFor: ["clear structure", "varied intonation", "appropriate pacing", "audience engagement"] },
          duration: 25,
          level: "apply"
        },
        {
          id: "se-l4-act-2",
          type: "text-analysis",
          title: "Listen and Sequence",
          instruction: "Listen to a classmate's oral recount and write the key events in the order they happened.",
          content: { type: "text-analysis", text: "[Listen to an oral recount delivered by a classmate or teacher]", questions: [
            { id: "lq1", question: "What was the first event described?", options: [{ id: "a", text: "The goal" }, { id: "b", text: "The arrival at the stadium" }, { id: "c", text: "The celebration" }], correctId: "b" },
            { id: "lq2", question: "What was the turning point in the story?", options: [{ id: "a", text: "The beginning" }, { id: "b", text: "The injury in the second half" }, { id: "c", text: "The end of the game" }], correctId: "b" },
            { id: "lq3", question: "How did the recount end?", options: [{ id: "a", text: "With a loss" }, { id: "b", text: "With a celebration" }, { id: "c", text: "With a reflection on the experience" }], correctId: "c" }
          ] },
          answerKey: { answers: { "lq1": "b", "lq2": "b", "lq3": "c" }, explanation: "Answers may vary depending on the specific recount heard. Check that students identified events in the correct order." },
          duration: 15,
          level: "understand"
        },
        {
          id: "se-l4-act-3",
          type: "reflection",
          title: "Self-Assessment",
          instruction: "Reflect on your oral recount performance.",
          content: { type: "reflection", prompts: [
            { id: "ref-se-1", question: "What was the strongest part of your oral recount?", type: "understanding" },
            { id: "ref-se-2", question: "What did you find most difficult about speaking about a past event?", type: "difficulty" },
            { id: "ref-se-3", question: "How could you improve your next oral presentation?", type: "next-step" }
          ] },
          answerKey: { answers: {}, explanation: "Look for honest self-assessment and specific improvement goals.", openEnded: true },
          duration: 10,
          level: "evaluate"
        }
      ],
      teacherNotes: { objective: "Students will practice oral recount delivery and active listening skills.", time: "50 minutes", grouping: "Individual preparation, pair practice, whole-class sharing", teacherPrompt: "Model a short oral recount first, demonstrating good intonation and pacing.", expectedResponse: "Students deliver a structured 2-minute recount with appropriate intonation.", commonDifficulty: "Students may read from notes rather than speak naturally. Encourage eye contact.", followUp: "Record oral recounts for self-assessment and teacher review." }
    }
  ],
  caseStudy: {
    type: "case-study",
    context: "Last month, our school basketball team played in the district final against our long-time rivals, SMPN 3. The game was incredibly close throughout. With ten seconds left on the clock, our team was down by one point. Our point guard, Reza, had the ball. He drove to the basket but was fouled hard. He had two free throws to win the game. The first shot went in smoothly. The second shot rattled around the rim and bounced out. The game went to overtime. In overtime, our team ran out of energy and lost by six points. Reza was devastated. He blamed himself for missing the second free throw and refused to talk to anyone after the game.",
    problem: "Reza is struggling with the emotional aftermath of a high-pressure sports moment. He is blaming himself for the team's loss, even though basketball is a team sport.",
    evidence: [
      "Reza missed one free throw out of two in a crucial moment.",
      "The game went to overtime and the team lost by six points.",
      "Reza refuses to talk to teammates and blames himself.",
      "Free throw shooting averages for high school players are around 70%, meaning missing is common.",
      "The team's overtime performance was affected by fatigue, not just the missed free throw."
    ],
    questions: [
      "Is it fair for Reza to blame himself for the entire loss? Why or why not?",
      "Write a recount of the game from Reza's perspective, using past tense and sequencing words.",
      "What advice would you give Reza to help him move past this experience?",
      "How does this situation show the importance of mental resilience in sports?"
    ]
  },
  evaluation: [
    {
      id: "se-eval-1",
      type: "multiple-choice",
      title: "Past Tense and Sequencing Quiz",
      instruction: "Choose the best answer for each question.",
      content: { type: "multiple-choice", question: "Which sentence uses past tense and a sequencing word correctly?", options: [
        { id: "ev1a", text: "First, she scored. Next, she celebrated." },
        { id: "ev1b", text: "First, she scores. Next, she celebrated." },
        { id: "ev1c", text: "First, she scored. Next, she celebrates." },
        { id: "ev1d", text: "First, she scoring. Next, she celebrated." }
      ], correctId: "ev1a", explanation: "The sentence correctly uses past tense (scored, celebrated) with sequencing words (First, Next)." },
      answerKey: { answers: { "ev1a": "correct" }, explanation: "Both verbs must be in past tense for a recount text." },
      duration: 10,
      level: "remember"
    },
    {
      id: "se-eval-2",
      type: "fill-blank",
      title: "Complete the Recount",
      instruction: "Fill in the blanks with appropriate past tense verbs and sequencing words.",
      content: { type: "fill-blank", sentence: "___, the team (arrive) ___ at the stadium. ___, they (warm up) ___ for thirty minutes. ___, the match (begin) ___ and both teams (play) ___ aggressively.", blanks: [
        { id: "ev-p1", position: 1, acceptedAnswers: ["First", "Initially", "To start"] },
        { id: "ev-p2", position: 2, acceptedAnswers: ["arrived"] },
        { id: "ev-p3", position: 3, acceptedAnswers: ["Next", "Then", "After that"] },
        { id: "ev-p4", position: 4, acceptedAnswers: ["warmed up"] },
        { id: "ev-p5", position: 5, acceptedAnswers: ["Subsequently", "Then", "After that"] },
        { id: "ev-p6", position: 6, acceptedAnswers: ["began", "started"] },
        { id: "ev-p7", position: 7, acceptedAnswers: ["played"] }
      ], explanation: "The recount needs appropriate sequencing words and past tense verbs throughout." },
      answerKey: { answers: { "ev-p1": "First", "ev-p2": "arrived", "ev-p3": "Next", "ev-p4": "warmed up", "ev-p5": "Then", "ev-p6": "began", "ev-p7": "played" }, explanation: "Any appropriate sequencing word and past tense verb that fits the context is acceptable." },
      duration: 15,
      level: "apply"
    },
    {
      id: "se-eval-3",
      type: "writing-task",
      title: "Final Recount Assessment",
      instruction: "Write a recount text (150-200 words) about a sports event.",
      content: { type: "writing-task", context: "You are writing for the school English newsletter.", purpose: "To demonstrate mastery of recount writing techniques.", audience: "Students and teachers at your school.", constraints: ["Include orientation, events, and reorientation", "Use past tense consistently", "Use at least 5 different time connectives", "Include personal reflection", "150-200 words"], checklist: ["Three-part structure", "Consistent past tense", "5+ time connectives", "Personal reflection included", "Word count met"], rubric: [
            { criterion: "Structure", levels: ["Missing elements", "Partial", "Complete", "Exemplary"] },
            { criterion: "Grammar", levels: ["Frequent errors", "Some errors", "Mostly correct", "Accurate"] },
            { criterion: "Vocabulary", levels: ["Limited", "Adequate", "Good", "Excellent"] }
          ] },
      answerKey: { answers: {}, explanation: "Assessed using the provided rubric.", openEnded: true, lookFor: ["clear three-part structure", "consistent past tense", "variety of connectives", "meaningful reflection"] },
      duration: 25,
      level: "create"
    }
  ],
  remedial: [
    {
      id: "se-rem-1",
      type: "matching",
      title: "Irregular Verb Review",
      instruction: "Match each base form with its correct past tense form.",
      content: { type: "matching", pairs: [
        { id: "rm1", left: "eat", right: "ate" },
        { id: "rm2", left: "drink", right: "drank" },
        { id: "rm3", left: "write", right: "wrote" },
        { id: "rm4", left: "take", right: "took" },
        { id: "rm5", left: "come", right: "came" }
      ], explanation: "These are common irregular verbs that must be memorized." },
      answerKey: { answers: { rm1: "ate", rm2: "drank", rm3: "wrote", rm4: "took", rm5: "came" }, explanation: "Irregular verbs do not follow the -ed pattern and must be learned individually." },
      duration: 10,
      level: "remember"
    },
    {
      id: "se-rem-2",
      type: "ordering",
      title: "Sequence Practice",
      instruction: "Put these events in the correct order to form a logical story.",
      content: { type: "ordering", instruction: "Number from 1 (first) to 5 (last).", items: [
        { id: "ro1", text: "The player scored the winning goal.", correctPosition: 4 },
        { id: "ro2", text: "The referee blew the final whistle.", correctPosition: 5 },
        { id: "ro3", text: "The players walked onto the field.", correctPosition: 1 },
        { id: "ro4", text: "The match began.", correctPosition: 2 },
        { id: "ro5", text: "Both teams played hard for 80 minutes.", correctPosition: 3 }
      ], explanation: "The events follow a natural chronological order from start to finish." },
      answerKey: { answers: { ro1: "4", ro2: "5", ro3: "1", ro4: "2", ro5: "3" }, explanation: "Players enter, match starts, they play, goal is scored, whistle blows." },
      duration: 10,
      level: "understand"
    }
  ],
  enrichment: [
    {
      id: "se-enr-1",
      type: "writing-task",
      title: "Sports Journalism",
      instruction: "Write a news article (200-250 words) about a fictional sports event as a sports journalist.",
      content: { type: "writing-task", context: "You are a junior reporter for a sports newspaper.", purpose: "To write a professional sports recount using journalistic conventions.", audience: "Sports fans reading the newspaper.", constraints: ["Use an engaging headline", "Include a lead paragraph with who, what, when, where", "Use quotes from players or coaches", "Use past tense throughout", "200-250 words"], checklist: ["Headline present", "Lead paragraph with key details", "Quotes included", "Past tense consistent", "Engaging and informative"] },
      answerKey: { answers: {}, explanation: "Assessed for journalistic style, accuracy of past tense, and engagement.", openEnded: true, lookFor: ["journalistic tone", "clear lead paragraph", "plausible quotes", "varied vocabulary"] },
      duration: 30,
      level: "create"
    },
    {
      id: "se-enr-2",
      type: "discussion",
      title: "Sports and Memory",
      instruction: "Research how athletes remember and recall their greatest moments.",
      content: { type: "discussion", prompt: "Find a famous athlete's recount of their greatest achievement. How do they describe the moment? What sequencing words do they use?", thinkingTime: 10, pairInstruction: "Share your findings with a partner and compare the athletes' storytelling techniques.", shareOutPrompt: "What common techniques do athletes use when recounting their best moments?" },
      answerKey: { answers: {}, explanation: "Look for students who identify storytelling techniques such as pacing, detail selection, and emotional language.", openEnded: true, lookFor: ["research quality", "identification of techniques", "clear presentation"] },
      duration: 20,
      level: "analyze"
    }
  ],
  reflection: [
    {
      type: "reflection",
      prompts: [
        { id: "se-ref-1", question: "What is the most important difference between a recount and other text types?", type: "understanding" },
        { id: "se-ref-2", question: "Which past tense verbs did you find most difficult to use correctly?", type: "difficulty" },
        { id: "se-ref-3", question: "How could you use recount skills to tell stories about your own life?", type: "application" },
        { id: "se-ref-4", question: "What would you like to practice more in the next chapter?", type: "next-step" }
      ]
    }
  ]
};
