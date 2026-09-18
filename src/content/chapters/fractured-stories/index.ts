import { Chapter } from "../../../types/content";

export const fracturedStories: Chapter = {
  id: "fractured-stories",
  slug: "fractured-stories",
  number: 6,
  semester: 2,
  title: "Fractured Stories",
  theme: "Arts",
  question: "How can we retell classic stories in new and creative ways?",
  overview: "Students reimagine classic tales by rewriting them from different perspectives or in different genres. They study narrative structure including setting, characters, plot, conflict, and resolution.",
  estimatedTime: "8 hours",
  skills: ["reading", "writing", "speaking", "listening"],
  textType: "narrative",
  languageFocus: ["past tense", "narrative structure"],
  objectives: [
    { id: "fs-obj-1", description: "Identify the key elements of narrative structure.", level: "understand" },
    { id: "fs-obj-2", description: "Write a fractured story that retells a classic tale from a new perspective.", level: "create" },
    { id: "fs-obj-3", description: "Use past tense consistently and accurately in narrative writing.", level: "apply" },
    { id: "fs-obj-4", description: "Evaluate the effectiveness of different narrative techniques.", level: "evaluate" }
  ],
  lessons: [
    {
      id: "fs-lesson-1",
      slug: "narrative-elements",
      number: 1,
      title: "Elements of a Story",
      description: "Students learn the five key elements of narrative structure: setting, characters, plot, conflict, and resolution.",
      duration: 50,
      objectives: [
        { id: "fs-l1-obj-1", description: "Identify setting, characters, plot, conflict, and resolution in a story.", level: "remember" },
        { id: "fs-l1-obj-2", description: "Explain how each element contributes to the narrative.", level: "understand" }
      ],
      vocabulary: [
        { word: "protagonist", definition: "the main character in a story", example: "The protagonist must overcome many challenges." },
        { word: "antagonist", definition: "the character that opposes the protagonist", example: "The antagonist creates conflict in the story." },
        { word: "climax", definition: "the most exciting turning point of the story", example: "The climax occurs when the hero faces the villain." },
        { word: "exposition", definition: "the beginning that introduces characters and setting", example: "The exposition introduces the main characters and their world." },
        { word: "resolution", definition: "the end where the conflict is resolved", example: "The resolution brings the story to a satisfying conclusion." }
      ],
      languageFocus: ["narrative structure", "story elements vocabulary", "past tense in storytelling"],
      conceptExplanation: "Every story has five key elements. The setting tells where and when the story takes place. The characters are the people or beings in the story. The plot is the sequence of events. The conflict is the problem that the characters must face. The resolution is how the conflict is resolved.\n\nUnderstanding these elements helps us analyze stories we read and plan stories we write. When writing a fractured story, we keep some elements the same while changing others to create a fresh version of a familiar tale.",
      examples: [
        "Setting: A small fishing village on the coast of Java in the 1990s.",
        "Characters: A young fisherman named Budi, his grandmother, and a mysterious sea turtle.",
        "Conflict: Budi must choose between wealth for his village and protecting the ocean.",
        "Resolution: Budi uses his final wish to restore the ocean."
      ],
      modelText: "The old woman lived alone at the edge of the forest, in a cottage so small that a grown man could touch both walls with his arms spread wide. Every morning, she walked to the river to fetch water, and every evening, she sat by her fire and told stories to the flames. The villagers avoided her, whispering that she was a witch, but the truth was simpler and sadder than that. She had been a teacher once, before the war took her family and her school. The stories she told were not spells but memories, and the fire was not magic but loneliness. One autumn evening, a girl named Sari wandered into the cottage while chasing a butterfly. The old woman offered her tea and told her a story about a brave princess who rescued a dragon instead of slaying it. Sari returned the next night, and the next. Slowly, the cottage filled with laughter instead of whispers.",
      activities: [
        {
          id: "fs-l1-act-1",
          type: "text-analysis",
          title: "Story Element Identification",
          instruction: "Read the story and identify the setting, characters, plot, conflict, and resolution.",
          content: { type: "text-analysis", text: "In a kingdom where music was forbidden, a young girl named Lina secretly played her grandmother's violin every night. One night, the king's soldiers heard the music and arrested her. In prison, Lina continued to play. Her music was so beautiful that even the guards wept. The king, who had banned music because it reminded him of his late wife, heard Lina's song and was moved to tears. He freed Lina and lifted the ban on music.", questions: [
            { id: "se-q1", question: "Where does the story take place?", options: [{ id: "a", text: "A modern city" }, { id: "b", text: "A kingdom where music was forbidden" }], correctId: "b" },
            { id: "se-q2", question: "Who is the main character?", options: [{ id: "a", text: "The king" }, { id: "b", text: "Lina" }], correctId: "b" },
            { id: "se-q3", question: "What is the conflict?", options: [{ id: "a", text: "Lina wants to play music but it is forbidden" }, { id: "b", text: "Lina is hungry" }], correctId: "a" },
            { id: "se-q4", question: "How is the conflict resolved?", options: [{ id: "a", text: "Lina escapes" }, { id: "b", text: "The king hears her music and lifts the ban" }], correctId: "b" }
          ] },
          answerKey: { answers: { "se-q1": "b", "se-q2": "b", "se-q3": "a", "se-q4": "b" }, explanation: "The setting is a kingdom where music is banned. Lina is the protagonist. The conflict is the ban on music." },
          duration: 15,
          level: "understand"
        },
        {
          id: "fs-l1-act-2",
          type: "matching",
          title: "Story Element Match",
          instruction: "Match each story element with its definition.",
          content: { type: "matching", pairs: [
            { id: "sem1", left: "Setting", right: "Where and when the story takes place" },
            { id: "sem2", left: "Characters", right: "The people or beings in the story" },
            { id: "sem3", left: "Plot", right: "The sequence of events" },
            { id: "sem4", left: "Conflict", right: "The problem characters must face" },
            { id: "sem5", left: "Resolution", right: "How the problem is solved" }
          ], explanation: "Each element plays a specific role in building a narrative." },
          answerKey: { answers: { sem1: "Where and when", sem2: "People or beings", sem3: "Sequence of events", sem4: "The problem", sem5: "How it is solved" }, explanation: "Understanding these elements helps in both reading and writing stories." },
          duration: 10,
          level: "remember"
        },
        {
          id: "fs-l1-act-3",
          type: "discussion",
          title: "Classic Story Analysis",
          instruction: "Choose a fairy tale you know well and discuss its five elements with a partner.",
          content: { type: "discussion", prompt: "Think of a fairy tale like Cinderella, Timun Mas, or similar. Identify the setting, characters, plot, conflict, and resolution.", thinkingTime: 5, pairInstruction: "Share your story and identify each element together.", shareOutPrompt: "Which elements were easiest to identify?" },
          answerKey: { answers: {}, explanation: "Look for accurate identification of all five elements.", openEnded: true, lookFor: ["correct element identification", "detailed analysis"] },
          duration: 15,
          level: "understand"
        }
      ],
      teacherNotes: { objective: "Students will identify and understand the five key elements of narrative structure.", time: "50 minutes", grouping: "Whole class, pair discussion", teacherPrompt: "Use a familiar fairy tale to model identifying all five elements on the board.", expectedResponse: "Students can identify all five narrative elements in stories.", commonDifficulty: "Students may confuse plot with conflict.", followUp: "Have students map the five elements of their favorite story." }
    },
    {
      id: "fs-lesson-2",
      slug: "what-are-fractured-stories",
      number: 2,
      title: "What Are Fractured Stories?",
      description: "Students learn what makes a story fractured and explore different ways to retell classic tales.",
      duration: 50,
      objectives: [
        { id: "fs-l2-obj-1", description: "Explain what a fractured story is and how it differs from the original.", level: "understand" },
        { id: "fs-l2-obj-2", description: "Generate ideas for retelling a classic story from a new perspective.", level: "create" }
      ],
      vocabulary: [
        { word: "fractured", definition: "broken apart and reassembled in a new way", example: "The fractured fairy tale told the story from the wolf's view." },
        { word: "perspective", definition: "the point of view from which a story is told", example: "Changing the perspective can change a story's meaning." },
        { word: "reimagine", definition: "to create a new interpretation of something", example: "The author reimagined Robin Hood as science fiction." },
        { word: "twist", definition: "an unexpected change in a story", example: "The twist revealed that the villain was the hero." },
        { word: "retelling", definition: "telling a story again in a new way", example: "Her retelling was set in modern-day Jakarta." }
      ],
      languageFocus: ["point of view", "perspective shifts", "creative reinterpretation"],
      conceptExplanation: "A fractured story retells a familiar tale but changes something fundamental: the point of view, setting, genre, or outcome.\n\nExamples include 'The True Story of the Three Little Pigs' (the wolf's version) and 'Wicked' (The Wizard of Oz from the witch's perspective).",
      examples: [
        "Original: Cinderella marries the prince. Fractured: The stepsister reveals her jealousy of Cinderella's courage.",
        "Original: Little Red Riding Hood is tricked by a wolf. Fractured: The wolf is framed by a fox.",
        "Original: Jack climbs the beanstalk. Fractured: The giant is a gentle being invaded by a thief."
      ],
      modelText: "What if the Big Bad Wolf was not really bad at all? In this fractured version of the Three Little Pigs, the wolf, named Wolfgang, is a music teacher who just wants to practice his singing. Unfortunately, his howling disturbs his neighbors. Each pig builds a stronger house not to keep the wolf out, but because they compete with each other. When Wolfgang accidentally sneezes and blows down the first pig's poorly built house, he is horrified. He tries to apologize, but the pigs think he is attacking them. Only the third pig, who built a solid house, listens to Wolfgang's side of the story. Together, they help rebuild, and Wolfgang learns to sing only during the day.",
      activities: [
        {
          id: "fs-l2-act-1",
          type: "discussion",
          title: "Fractured Story Brainstorm",
          instruction: "Choose a fairy tale and brainstorm three ways to fracture it.",
          content: { type: "discussion", prompt: "How could you change the perspective, setting, or genre of a classic story?", thinkingTime: 5, pairInstruction: "List three ways to fracture your chosen story.", shareOutPrompt: "Which fractured idea was the most creative?" },
          answerKey: { answers: {}, explanation: "Look for creative ideas that fundamentally change the original story.", openEnded: true, lookFor: ["creative thinking", "understanding of perspective"] },
          duration: 15,
          level: "create"
        },
        {
          id: "fs-l2-act-2",
          type: "text-analysis",
          title: "Comparing Original and Fractured",
          instruction: "Read both versions and answer the questions.",
          content: { type: "text-analysis", text: "Original: Once upon a time, a beautiful princess named Snow White lived in a castle. Her stepmother, the queen, was jealous and tried to have her killed.\n\nFractured: The queen stared into her magic mirror. 'Mirror, mirror, who is the fairest?' she asked. But what the mirror did not show was the queen's side: how she worked tirelessly to improve the kingdom while Snow White sang to birds.", questions: [
            { id: "fs-q1", question: "Whose perspective is told in the fractured version?", options: [{ id: "a", text: "Snow White" }, { id: "b", text: "The queen" }], correctId: "b" },
            { id: "fs-q2", question: "How does the fractured version change our view?", options: [{ id: "a", text: "The queen is more evil" }, { id: "b", text: "The queen is hardworking" }], correctId: "b" },
            { id: "fs-q3", question: "What does 'the mirror did not show' suggest?", options: [{ id: "a", text: "The mirror is broken" }, { id: "b", text: "There is more to the story" }], correctId: "b" }
          ] },
          answerKey: { answers: { "fs-q1": "b", "fs-q2": "b", "fs-q3": "b" }, explanation: "The fractured version tells the queen's story, showing she is hardworking." },
          duration: 15,
          level: "analyze"
        },
        {
          id: "fs-l2-act-3",
          type: "writing-task",
          title: "Plan Your Fractured Story",
          instruction: "Choose a classic story and plan how you will fracture it.",
          content: { type: "writing-task", context: "You are planning a creative writing project.", purpose: "To plan a fractured story by identifying what to change.", audience: "Your teacher and classmates.", constraints: ["Choose a well-known story", "Identify the original elements", "Decide what to change", "Plan the new beginning, middle, and end"], checklist: ["Original story identified", "Change identified", "New plot planned"] },
          answerKey: { answers: {}, explanation: "Planning is essential for a well-structured fractured story.", openEnded: true, lookFor: ["clear original story", "thoughtful change identified", "complete plot outline"] },
          duration: 20,
          level: "create"
        }
      ],
      teacherNotes: { objective: "Students will understand fractured stories and plan their own.", time: "50 minutes", grouping: "Whole class, pair brainstorming", teacherPrompt: "Share examples of fractured stories from books and films.", expectedResponse: "Students can explain the concept and generate creative ideas.", commonDifficulty: "Students may struggle to think beyond the original story.", followUp: "Have students share their plans with the class for feedback." }
    },
    {
      id: "fs-lesson-3",
      slug: "narrative-writing",
      number: 3,
      title: "Writing a Fractured Story",
      description: "Students write their own fractured story, applying narrative structure and past tense skills.",
      duration: 60,
      objectives: [
        { id: "fs-l3-obj-1", description: "Write a fractured story with clear setting, characters, conflict, and resolution.", level: "create" },
        { id: "fs-l3-obj-2", description: "Use past tense consistently throughout the narrative.", level: "apply" }
      ],
      vocabulary: [
        { word: "narrator", definition: "the person telling the story", example: "The narrator of the story was the villain." },
        { word: "flashback", definition: "a scene set in an earlier time", example: "The flashback showed the queen's childhood." },
        { word: "foreshadow", definition: "to hint of what is to come", example: "The dark clouds foreshadowed the coming storm." },
        { word: "dialogue", definition: "conversation between characters", example: "The dialogue between the wolf and pig was surprising." },
        { word: "vivid", definition: "producing strong mental images", example: "The vivid descriptions made the forest feel alive." }
      ],
      languageFocus: ["past tense consistency", "dialogue punctuation", "descriptive techniques"],
      conceptExplanation: "Writing a fractured story requires planning and creativity. Decide what element to change, then plan your new version.\n\nWhen writing, use past tense consistently: 'She walked' not 'She walks.' Include dialogue to bring characters to life. Use descriptive language to create vivid images.",
      examples: [
        "Modern setting: Cinderella checked her phone. The prince's dating app showed no match.",
        "Villain's perspective: Everyone called me wicked, but no one asked why.",
        "Genre change: Detective Rapunzel surveyed the crime scene at the broken tower."
      ],
      modelText: "The wolf sat in the courtroom, his tail tucked between his legs. The judge, a stern owl, peered over his spectacles. 'Mr. Wolfgang Wolf,' the owl said, 'you are accused of destroying three houses. How do you plead?'\n\nThe wolf sighed. He had been telling anyone who would listen that it was all a misunderstanding. He was a music teacher, not a villain. His students were birds, rabbits, and the occasional hedgehog.\n\n'The first house fell because it was made of straw,' the wolf explained. 'I merely sneezed. I had a cold. The second house was sticks, and I knocked too hard trying to apologize. Only the brick house survived because the pig actually listened.'\n\nThe courtroom fell silent. The youngest pig stood up. 'He is telling the truth,' the pig said quietly. 'We did not listen.'\n\nThe judge banged his gavel. 'Case dismissed. And perhaps,' he added, 'you should build better houses.'",
      activities: [
        {
          id: "fs-l3-act-1",
          type: "writing-task",
          title: "Write Your Fractured Story",
          instruction: "Write your fractured story (200-300 words) based on your plan.",
          content: { type: "writing-task", context: "You are writing a creative narrative for your English portfolio.", purpose: "To demonstrate mastery of narrative structure and creative storytelling.", audience: "Your teacher and classmates.", constraints: ["Follow your story plan", "Use past tense throughout", "Include at least one dialogue exchange", "Include descriptive language", "200-300 words"], checklist: ["Past tense consistent", "Dialogue included", "Descriptive language used", "Clear structure", "Word count met"], rubric: [
            { criterion: "Creativity", levels: ["Minimal", "Some", "Good", "Highly original"] },
            { criterion: "Structure", levels: ["Incomplete", "Partial", "Complete", "Well-crafted"] },
            { criterion: "Language", levels: ["Frequent errors", "Some errors", "Mostly accurate", "Accurate and varied"] }
          ] },
          answerKey: { answers: {}, explanation: "Assessed using the provided rubric.", openEnded: true, lookFor: ["creative reinterpretation", "consistent past tense", "vivid description"] },
          duration: 30,
          level: "create"
        },
        {
          id: "fs-l3-act-2",
          type: "discussion",
          title: "Peer Story Share",
          instruction: "Read your story to a partner. Give feedback on structure, past tense, and creativity.",
          content: { type: "discussion", prompt: "What was the most creative part? Was past tense used correctly? Did the story have a clear beginning, middle, and end?", thinkingTime: 5, pairInstruction: "Read each other's stories and provide specific feedback.", shareOutPrompt: "Which story was the most surprising?" },
          answerKey: { answers: {}, explanation: "Look for constructive, specific feedback.", openEnded: true, lookFor: ["constructive feedback", "specific suggestions"] },
          duration: 20,
          level: "evaluate"
        },
        {
          id: "fs-l3-act-3",
          type: "reflection",
          title: "Creative Writing Reflection",
          instruction: "Reflect on your fractured story writing experience.",
          content: { type: "reflection", prompts: [
            { id: "ref-fs-1", question: "What was the most creative decision you made?", type: "understanding" },
            { id: "ref-fs-2", question: "What was the hardest part of writing in past tense?", type: "difficulty" },
            { id: "ref-fs-3", question: "How did reading your partner's story give you ideas?", type: "application" }
          ] },
          answerKey: { answers: {}, explanation: "Look for thoughtful reflection on the creative process.", openEnded: true },
          duration: 10,
          level: "evaluate"
        }
      ],
      teacherNotes: { objective: "Students will write a complete fractured story.", time: "60 minutes", grouping: "Individual writing, pair feedback", teacherPrompt: "Play soft music while students write.", expectedResponse: "Students produce original fractured stories with clear structure.", commonDifficulty: "Tense inconsistency is common.", followUp: "Host a class storytelling event." }
    }
  ],
  caseStudy: {
    type: "case-study",
    context: "Maya has chosen the story of Timun Mas for her English class creative project. She wants to retell it from the giant's perspective, making the giant a sympathetic character who was actually trying to protect Timun Mas from a greater danger. She is worried her classmates will not accept a version where the giant is not evil.",
    problem: "Maya needs to create a compelling fractured story that changes the reader's perspective while maintaining narrative coherence.",
    evidence: [
      "The original story portrays the giant as a villain.",
      "Maya wants to make the giant sympathetic.",
      "She needs to maintain narrative coherence while changing perspectives.",
      "Her classmates know the original story well.",
      "The project requires clear narrative structure and past tense."
    ],
    questions: [
      "What techniques could Maya use to make the giant sympathetic?",
      "How should Maya handle the ending of her fractured version?",
      "Write the opening paragraph of Maya's fractured story from the giant's perspective.",
      "What challenges might Maya face when retelling a beloved cultural story?"
    ]
  },
  evaluation: [
    {
      id: "fs-eval-1",
      type: "multiple-choice",
      title: "Narrative Structure Quiz",
      instruction: "Choose the best answer.",
      content: { type: "multiple-choice", question: "Which element tells us where and when a story takes place?", options: [
        { id: "ev1a", text: "Plot" },
        { id: "ev1b", text: "Setting" },
        { id: "ev1c", text: "Conflict" }
      ], correctId: "ev1b", explanation: "The setting describes the time, place, and environment." },
      answerKey: { answers: { "ev1b": "correct" }, explanation: "Setting provides context for the story." },
      duration: 10,
      level: "remember"
    },
    {
      id: "fs-eval-2",
      type: "true-false",
      title: "Fractured Story Facts",
      instruction: "Write T or F for each statement.",
      content: { type: "true-false", statements: [
        { id: "ftf1", text: "A fractured story must keep the same ending.", correct: false },
        { id: "ftf2", text: "Changing the point of view fractures a story.", correct: true },
        { id: "ftf3", text: "Narrative writing uses present tense.", correct: false },
        { id: "ftf4", text: "Dialogue brings characters to life.", correct: true }
      ], explanation: "Fractured stories can change any element. Narratives use past tense." },
      answerKey: { answers: { ftf1: "false", ftf2: "true", ftf3: "false", ftf4: "true" }, explanation: "Fractured stories change elements. Narratives use past tense." },
      duration: 5,
      level: "remember"
    },
    {
      id: "fs-eval-3",
      type: "writing-task",
      title: "Final Narrative Assessment",
      instruction: "Write a fractured story (150-250 words) based on any classic tale.",
      content: { type: "writing-task", context: "Final narrative assessment for the semester.", purpose: "To demonstrate mastery of narrative writing.", audience: "Your English teacher.", constraints: ["Choose a well-known story to fracture", "Change at least one element", "Use past tense consistently", "Include descriptive language", "150-250 words"], checklist: ["Original story identifiable", "Element changed", "Past tense consistent", "Descriptive language present", "Word count met"] },
      answerKey: { answers: {}, explanation: "Assessed for creativity, structure, and language use.", openEnded: true, lookFor: ["clear structure", "creative reinterpretation", "consistent past tense"] },
      duration: 25,
      level: "create"
    }
  ],
  remedial: [
    {
      id: "fs-rem-1",
      type: "fill-blank",
      title: "Past Tense Practice",
      instruction: "Fill in the past tense forms of the verbs.",
      content: { type: "fill-blank", sentence: "The girl (walk) ___ into the forest. She (see) ___ a strange house. She (feel) ___ curious and (approach) ___ the door.", blanks: [
        { id: "pt1", position: 1, acceptedAnswers: ["walked"] },
        { id: "pt2", position: 2, acceptedAnswers: ["saw"] },
        { id: "pt3", position: 3, acceptedAnswers: ["felt"] },
        { id: "pt4", position: 4, acceptedAnswers: ["approached"] }
      ], explanation: "Walk and approach are regular. See and feel are irregular." },
      answerKey: { answers: { pt1: "walked", pt2: "saw", pt3: "felt", pt4: "approached" }, explanation: "Regular verbs add -ed. Irregular verbs change form." },
      duration: 10,
      level: "remember"
    },
    {
      id: "fs-rem-2",
      type: "ordering",
      title: "Story Sequence Review",
      instruction: "Put the events in the correct order.",
      content: { type: "ordering", instruction: "Number from 1 to 5.", items: [
        { id: "ss1", text: "The hero found a magical sword.", correctPosition: 2 },
        { id: "ss2", text: "The village celebrated.", correctPosition: 5 },
        { id: "ss3", text: "The hero defeated the dragon.", correctPosition: 4 },
        { id: "ss4", text: "A dragon threatened the village.", correctPosition: 1 },
        { id: "ss5", text: "The hero journeyed to the cave.", correctPosition: 3 }
      ], explanation: "Classic adventure structure: threat, quest, resolution." },
      answerKey: { answers: { ss1: "2", ss2: "5", ss3: "4", ss4: "1", ss5: "3" }, explanation: "Threat, sword, journey, defeat, celebration." },
      duration: 10,
      level: "understand"
    }
  ],
  enrichment: [
    {
      id: "fs-enr-1",
      type: "writing-task",
      title: "Cross-Cultural Fractured Story",
      instruction: "Retell a folk tale from another country set in Indonesia.",
      content: { type: "writing-task", context: "Creating a cross-cultural fractured story collection.", purpose: "To combine cultural knowledge with creative storytelling.", audience: "Students interested in world literature.", constraints: ["Choose a foreign folk tale", "Set it in Indonesia", "Change at least two elements", "200-300 words"], checklist: ["Original identified", "Indonesian setting", "Two elements changed", "Word count met"] },
      answerKey: { answers: {}, explanation: "Assessed for creativity and cultural awareness.", openEnded: true, lookFor: ["cultural sensitivity", "creative blending", "clear structure"] },
      duration: 30,
      level: "create"
    },
    {
      id: "fs-enr-2",
      type: "discussion",
      title: "The Power of Perspective",
      instruction: "Discuss how changing perspective changes a story's meaning.",
      content: { type: "discussion", prompt: "How does telling a story from a different viewpoint change the meaning?", thinkingTime: 5, pairInstruction: "Discuss how perspective shapes meaning in stories and real life.", shareOutPrompt: "Can you think of a real situation where perspective changes the story?" },
      answerKey: { answers: {}, explanation: "Look for deep understanding of perspective.", openEnded: true, lookFor: ["insightful analysis", "connections to real life"] },
      duration: 15,
      level: "analyze"
    }
  ],
  reflection: [
    {
      type: "reflection",
      prompts: [
        { id: "fs-ref-1", question: "What did you learn about storytelling from writing a fractured story?", type: "understanding" },
        { id: "fs-ref-2", question: "Which narrative element was most challenging to write?", type: "difficulty" },
        { id: "fs-ref-3", question: "How could you use fractured storytelling elsewhere?", type: "application" },
        { id: "fs-ref-4", question: "What story would you like to fracture next?", type: "next-step" }
      ]
    }
  ]
};
