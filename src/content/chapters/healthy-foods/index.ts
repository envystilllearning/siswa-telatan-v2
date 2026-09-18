import { Chapter } from "../../../types/content";

export const healthyFoods: Chapter = {
  id: "healthy-foods",
  slug: "healthy-foods",
  number: 4,
  semester: 1,
  title: "Healthy Foods",
  theme: "Sports",
  question: "How can we make informed choices about what we eat?",
  overview: "Students explore nutrition and healthy eating through report and exposition writing. They learn to compare food options, present evidence-based recommendations, and construct balanced arguments about diet and health.",
  estimatedTime: "8 hours",
  skills: ["reading", "writing", "speaking", "listening"],
  textType: "report",
  languageFocus: ["comparison", "recommendation"],
  objectives: [
    { id: "hf-obj-1", description: "Use comparative and superlative forms to compare food options.", level: "apply" },
    { id: "hf-obj-2", description: "Write a report text about a food group or nutrition topic.", level: "create" },
    { id: "hf-obj-3", description: "Present recommendations about healthy eating with supporting evidence.", level: "evaluate" },
    { id: "hf-obj-4", description: "Analyze nutritional information and make informed food choices.", level: "analyze" }
  ],
  lessons: [
    {
      id: "hf-lesson-1",
      slug: "food-vocabulary",
      number: 1,
      title: "Food and Nutrition Vocabulary",
      description: "Students learn vocabulary related to food groups, nutrition, and healthy eating habits.",
      duration: 50,
      objectives: [
        { id: "hf-l1-obj-1", description: "Use at least 15 food and nutrition vocabulary words correctly.", level: "remember" },
        { id: "hf-l1-obj-2", description: "Classify foods into their correct nutritional groups.", level: "understand" }
      ],
      vocabulary: [
        { word: "carbohydrates", definition: "nutrients that provide energy; found in rice, bread, pasta", example: "Carbohydrates are the body's main source of energy." },
        { word: "protein", definition: "nutrients for building and repairing muscles; found in meat, eggs, beans", example: "Athletes need extra protein to repair their muscles after training." },
        { word: "vitamins", definition: "essential nutrients needed in small amounts for health", example: "Fruits and vegetables are rich in vitamins." },
        { word: "fiber", definition: "plant material that aids digestion; found in vegetables and whole grains", example: "Eating fiber helps maintain a healthy digestive system." },
        { word: "balanced diet", definition: "a diet containing the right proportions of all food groups", example: "A balanced diet includes proteins, carbohydrates, fats, vitamins, and minerals." }
      ],
      languageFocus: ["food group classification", "nutrition labels", "describing food properties"],
      conceptExplanation: "Understanding food vocabulary is essential for discussing nutrition. The five main food groups are: carbohydrates (energy), protein (muscle building), fats (energy storage and insulation), vitamins and minerals (body functions), and fiber (digestion).\n\nReading nutrition labels helps us understand what we eat. Labels show calories, protein, carbohydrates, fats, sugar, and sodium content. Learning to read these labels empowers us to make healthier choices.",
      examples: [
        "Brown rice contains more fiber and nutrients than white rice.",
        "Chicken breast is a lean source of protein with less fat than red meat.",
        "A medium banana provides about 105 calories and 3 grams of fiber."
      ],
      modelText: "Understanding Food Groups for a Healthy Lifestyle\n\nThe food we eat can be divided into five main groups, each serving a unique purpose in our bodies. Carbohydrates, found in rice, bread, and pasta, are the body's primary energy source. Without enough carbohydrates, we feel tired and cannot concentrate. Proteins, found in meat, fish, eggs, and legumes, are essential for building and repairing muscles, making them especially important for athletes. Fats, while often seen as unhealthy, are necessary in moderate amounts for brain function and hormone production. Vitamins and minerals, abundant in fruits and vegetables, support our immune system and overall health. Finally, fiber from whole grains and vegetables aids digestion and keeps us feeling full longer. A balanced diet includes appropriate portions from each group. For teenagers, a typical balanced plate should be half vegetables and fruits, one quarter protein, and one quarter carbohydrates.",
      activities: [
        {
          id: "hf-l1-act-1",
          type: "matching",
          title: "Food Group Classification",
          instruction: "Match each food item with its correct food group.",
          content: { type: "matching", pairs: [
            { id: "fg1", left: "Rice", right: "Carbohydrates" },
            { id: "fg2", left: "Chicken breast", right: "Protein" },
            { id: "fg3", left: "Olive oil", right: "Fats" },
            { id: "fg4", left: "Orange", right: "Vitamins" },
            { id: "fg5", left: "Brown bread", right: "Fiber" }
          ], explanation: "Each food belongs to its primary nutritional group based on its main nutrient content." },
          answerKey: { answers: { fg1: "Carbohydrates", fg2: "Protein", fg3: "Fats", fg4: "Vitamins", fg5: "Fiber" }, explanation: "Rice and bread are carbohydrate sources. Chicken is protein. Olive oil is fat. Oranges provide vitamins. Brown bread is high in fiber." },
          duration: 10,
          level: "remember"
        },
        {
          id: "hf-l1-act-2",
          type: "vocabulary",
          title: "Nutrition Word Bank",
          instruction: "Use each vocabulary word in a sentence about healthy eating.",
          content: { type: "vocabulary", words: [
            { word: "calories", definition: "units of energy in food", example: "An active teenager needs about 2,000 to 2,400 calories per day." },
            { word: "portion", definition: "the amount of food served at one time", example: "Control your portion sizes to avoid overeating." },
            { word: "processed", definition: "food that has been altered from its natural state", example: "Processed foods often contain high levels of sugar and salt." },
            { word: "nutritious", definition: "providing nutrients needed for health", example: "A nutritious breakfast helps you concentrate in class." },
            { word: "hydration", definition: "the process of providing the body with enough water", example: "Good hydration is essential for athletic performance." }
          ] },
          answerKey: { answers: {}, explanation: "Sentences should demonstrate understanding of each word's meaning in context.", openEnded: true, lookFor: ["correct usage", "contextual understanding", "sentence structure"] },
          duration: 15,
          level: "apply"
        },
        {
          id: "hf-l1-act-3",
          type: "text-analysis",
          title: "Reading a Nutrition Label",
          instruction: "Read the nutrition information below and answer the questions.",
          content: { type: "text-analysis", text: "Nutrition Information per Serving (250ml):\nEnergy: 150 kcal\nProtein: 8g\nCarbohydrates: 25g (of which sugars: 12g)\nFat: 3g (of which saturated fat: 1g)\nFiber: 2g\nSodium: 200mg", questions: [
            { id: "nl-q1", question: "How many calories does one serving contain?", options: [{ id: "a", text: "250" }, { id: "b", text: "150" }, { id: "c", text: "200" }], correctId: "b" },
            { id: "nl-q2", question: "Which nutrient is highest in this product?", options: [{ id: "a", text: "Protein" }, { id: "b", text: "Fat" }, { id: "c", text: "Carbohydrates" }], correctId: "c" },
            { id: "nl-q3", question: "Is this product high or low in sugar?", options: [{ id: "a", text: "Low (less than 5g)" }, { id: "b", text: "Moderate (5-15g)" }, { id: "c", text: "High (more than 15g)" }], correctId: "b" }
          ] },
          answerKey: { answers: { "nl-q1": "b", "nl-q2": "c", "nl-q3": "b" }, explanation: "Energy is 150 kcal. Carbohydrates at 25g are the highest nutrient. Sugar at 12g is moderate." },
          duration: 15,
          level: "analyze"
        }
      ],
      teacherNotes: { objective: "Students will learn food and nutrition vocabulary and be able to classify foods into groups.", time: "50 minutes", grouping: "Whole class, pair matching, individual analysis", teacherPrompt: "Bring food packaging from home to show real nutrition labels.", expectedResponse: "Students can classify foods into groups and read basic nutrition labels.", commonDifficulty: "Students may confuse fiber with carbohydrates. Clarify the difference.", followUp: "Have students bring a food label from home and analyze it in the next lesson." }
    },
    {
      id: "hf-lesson-2",
      slug: "comparative-superlative",
      number: 2,
      title: "Comparing Food Options",
      description: "Students learn to use comparative and superlative adjectives to compare food options and make recommendations.",
      duration: 50,
      objectives: [
        { id: "hf-l2-obj-1", description: "Form comparative and superlative adjectives correctly.", level: "remember" },
        { id: "hf-l2-obj-2", description: "Use comparisons to argue for healthier food choices.", level: "apply" }
      ],
      vocabulary: [
        { word: "healthier", definition: "comparative of healthy; more beneficial to health", example: "Brown rice is healthier than white rice." },
        { word: "nutritious", definition: "providing more nutrients; beneficial for health", example: "Fresh fruit is more nutritious than fruit juice." },
        { word: "processed", definition: "altered from natural state; often less healthy", example: "Processed snacks are less healthy than fresh snacks." },
        { word: "lean", definition: "containing little fat", example: "Fish is a leaner source of protein than beef." },
        { word: "essential", definition: "absolutely necessary for health", example: "Calcium is essential for strong bones." }
      ],
      languageFocus: ["comparative forms (-er/more)", "superlative forms (-est/most)", "comparison words (than, as...as)"],
      conceptExplanation: "We use comparative adjectives to compare two things and superlative adjectives to compare three or more. For short adjectives (1-2 syllables), add -er for comparative and -est for superlative: healthy becomes healthier and healthiest. For long adjectives (3+ syllables), use more and most: nutritious becomes more nutritious and most nutritious.\n\nWe use 'than' after comparatives: 'Apples are healthier than candy.' We use 'the' before superlatives: 'Water is the healthiest drink.'",
      examples: [
        "Brown rice is healthier than white rice because it contains more fiber.",
        "Vegetables are more nutritious than most snacks.",
        "The best breakfast includes protein, carbohydrates, and fruit.",
        "Grilled chicken is as filling as fried chicken but has less fat."
      ],
      modelText: "When choosing between food options, comparisons can help us make better decisions. Fresh fruit is generally healthier than packaged snacks because it contains natural sugars, vitamins, and fiber without added preservatives. Among beverages, water is the healthiest choice; it has no calories and keeps us hydrated. If you enjoy flavored drinks, fruit juice is better than soda, but whole fruit is even better than juice because it retains all the fiber. When it comes to protein sources, fish is leaner than red meat and provides omega-3 fatty acids that are essential for brain health. However, not all fish is equally healthy; grilled fish is better than fried fish because frying adds unhealthy fats. The most important thing to remember is that no single food is perfect on its own. A varied diet that includes all food groups in appropriate portions is the key to good nutrition.",
      activities: [
        {
          id: "hf-l2-act-1",
          type: "fill-blank",
          title: "Comparative and Superlative Practice",
          instruction: "Complete each sentence with the correct comparative or superlative form.",
          content: { type: "fill-blank", sentence: "Water is ___ (healthy) than soda. Fresh fruit is ___ (nutritious) than candy. Brown rice is ___ (good) source of fiber than white rice. Among all vegetables, spinach is one of ___ (nutritious). Vegetables are ___ (important) for health than most people think.", blanks: [
            { id: "cs1", position: 1, acceptedAnswers: ["healthier"] },
            { id: "cs2", position: 2, acceptedAnswers: ["more nutritious"] },
            { id: "cs3", position: 3, acceptedAnswers: ["a better", "better"] },
            { id: "cs4", position: 4, acceptedAnswers: ["the most nutritious", "most nutritious"] },
            { id: "cs5", position: 5, acceptedAnswers: ["more important"] }
          ], explanation: "Short adjectives use -er/-est. Long adjectives use more/most." },
          answerKey: { answers: { cs1: "healthier", cs2: "more nutritious", cs3: "a better", cs4: "the most nutritious", cs5: "more important" }, explanation: "Healthier is comparative of healthy (short). More nutritious uses 'more' (long). Better is irregular comparative. Most nutritious is superlative." },
          duration: 15,
          level: "apply"
        },
        {
          id: "hf-l2-act-2",
          type: "discussion",
          title: "Healthier Choices Debate",
          instruction: "Work with a partner to compare two food options and argue which is healthier.",
          content: { type: "discussion", prompt: "Compare the following pairs and decide which is healthier. Use comparative adjectives to explain your reasoning: (1) homemade lunch vs. cafeteria lunch, (2) rice vs. noodles, (3) fresh juice vs. packaged juice.", thinkingTime: 5, pairInstruction: "Discuss each pair and write three comparison sentences using comparatives.", shareOutPrompt: "Which pair was the hardest to decide? Why?" },
          answerKey: { answers: {}, explanation: "Look for correct comparative forms and logical reasoning.", openEnded: true, lookFor: ["correct comparative forms", "logical arguments", "specific evidence"] },
          duration: 15,
          level: "apply"
        },
        {
          id: "hf-l2-act-3",
          type: "writing-task",
          title: "Food Comparison Report",
          instruction: "Write a short report (80-100 words) comparing two food options and recommending the healthier choice.",
          content: { type: "writing-task", context: "You are writing for a school health newsletter.", purpose: "To use comparative adjectives to recommend healthier food choices.", audience: "Students who want to eat better.", constraints: ["Compare at least two food items", "Use at least 4 comparative adjectives", "Include a clear recommendation", "80-100 words"], checklist: ["Two foods compared", "4+ comparatives", "Clear recommendation", "Word count met"] },
          answerKey: { answers: {}, explanation: "Open-ended writing task.", openEnded: true, sampleResponse: "When comparing brown rice and white rice, brown rice is the healthier option. It is richer in fiber and nutrients than white rice. Brown rice is more filling, which helps control portion sizes. While white rice has a milder taste, brown rice is better for long-term health. The recommended choice for athletes is brown rice because it provides sustained energy.", lookFor: ["correct comparative forms", "logical comparison", "clear recommendation"] },
          duration: 15,
          level: "apply"
        }
      ],
      teacherNotes: { objective: "Students will use comparative and superlative forms to compare food options.", time: "50 minutes", grouping: "Whole class, pair discussion, individual writing", teacherPrompt: "Write two foods on the board and model a comparison sentence.", expectedResponse: "Students can form comparatives and superlatives correctly and use them in context.", commonDifficulty: "Irregular forms (good-better-best, bad-worse-worst) need extra practice.", followUp: "Have students create a 'Healthier Choice' poster comparing common snack foods." }
    },
    {
      id: "hf-lesson-3",
      slug: "report-text-nutrition",
      number: 3,
      title: "Writing a Nutrition Report",
      description: "Students learn the structure of a report text and write a report about a food group or nutrition topic.",
      duration: 60,
      objectives: [
        { id: "hf-l3-obj-1", description: "Identify the structure of a report text: general classification, description, and summary.", level: "understand" },
        { id: "hf-l3-obj-2", description: "Write a report text about a food group or nutrition topic.", level: "create" }
      ],
      vocabulary: [
        { word: "classification", definition: "the act of organizing things into groups", example: "The classification of foods helps us understand nutrition." },
        { word: "characteristics", definition: "features or qualities of something", example: "The characteristics of protein include building muscle." },
        { word: "function", definition: "the purpose or role of something", example: "The function of carbohydrates is to provide energy." },
        { word: "source", definition: "the origin or supply of something", example: "Fish is an excellent source of omega-3 fatty acids." },
        { word: "deficiency", definition: "a lack or shortage of something", example: "Iron deficiency can cause fatigue and weakness." }
      ],
      languageFocus: ["report text structure", "present tense for general facts", "technical vocabulary"],
      conceptExplanation: "A report text describes a group of things in general. It has three main parts: general classification (what the thing is), description (its characteristics, features, and functions), and summary (conclusion or overall importance).\n\nUnlike a recount that tells about specific events, a report presents general facts using present tense. For example: 'Fruit contains natural sugars' (general fact) vs. 'I ate an apple yesterday' (specific event).",
      examples: [
        "General classification: Fruits are natural foods that grow on trees or plants.",
        "Description: Most fruits are sweet and juicy. They contain vitamins, minerals, and fiber. Fruits are low in calories and high in water content.",
        "Summary: Including a variety of fruits in your daily diet is essential for maintaining good health."
      ],
      modelText: "Fruits and Their Importance for Teenage Health\n\nFruits are natural, nutrient-rich foods that grow on trees, bushes, or vines. They come in a wide variety of colors, shapes, and flavors, from sweet bananas to tart lemons. Each type of fruit offers unique health benefits.\n\nFruits are primarily composed of natural sugars, water, and fiber. They are rich in vitamins and minerals that support various body functions. Vitamin C, found abundantly in oranges and strawberries, strengthens the immune system and helps the body absorb iron. Potassium, abundant in bananas, supports heart health and muscle function. The fiber in fruits aids digestion and helps maintain a healthy weight by keeping us feeling full longer.\n\nAmong all food groups, fruits are one of the easiest to incorporate into a daily diet. They require no cooking and make convenient snacks. However, fruit juice, while tasty, is less healthy than whole fruit because it lacks fiber and contains concentrated sugars. The recommended daily intake for teenagers is two to three servings of whole fruit.\n\nIn summary, fruits are an essential part of a balanced diet. Their vitamins, minerals, and fiber make them indispensable for teenage growth and development.",
      activities: [
        {
          id: "hf-l3-act-1",
          type: "text-analysis",
          title: "Analyze a Report Text",
          instruction: "Read the report below and identify the general classification, description, and summary sections.",
          content: { type: "text-analysis", text: "Water is the most essential substance for human survival. The human body is composed of approximately sixty percent water. Water serves multiple critical functions in the body, including regulating temperature, transporting nutrients, and removing waste products. It lubricates joints and cushions organs. Dehydration, which occurs when the body loses more water than it takes in, can cause headaches, fatigue, and reduced concentration. Teenagers should aim to drink eight to ten glasses of water daily, and more during physical activity. Water is clearly the healthiest beverage choice for maintaining optimal body function.", questions: [
            { id: "rp-q1", question: "What is the general classification in this report?", options: [{ id: "a", text: "Water serves multiple functions" }, { id: "b", text: "Water is the most essential substance for human survival" }, { id: "c", text: "Teenagers should drink eight glasses daily" }], correctId: "b" },
            { id: "rp-q2", question: "Which sentence describes the characteristics of water?", options: [{ id: "a", text: "The human body is composed of approximately sixty percent water" }, { id: "b", text: "Teenagers should drink eight to ten glasses daily" }, { id: "c", text: "Water is clearly the healthiest beverage" }], correctId: "a" },
            { id: "rp-q3", question: "What tense is used throughout the report?", options: [{ id: "a", text: "Past tense" }, { id: "b", text: "Present tense" }, { id: "c", text: "Future tense" }], correctId: "b" }
          ] },
          answerKey: { answers: { "rp-q1": "b", "rp-q2": "a", "rp-q3": "b" }, explanation: "The opening sentence provides the general classification. The second sentence describes a characteristic. Present tense is used throughout for general facts." },
          duration: 15,
          level: "understand"
        },
        {
          id: "hf-l3-act-2",
          type: "writing-task",
          title: "Write a Food Group Report",
          instruction: "Write a report text (120-160 words) about one food group of your choice.",
          content: { type: "writing-task", context: "You are writing for a school health education project.", purpose: "To write a report text about a food group using general facts and present tense.", audience: "Students learning about nutrition.", constraints: ["Choose one food group", "Include general classification", "Include at least 3 characteristics or functions", "Include a summary statement", "Use present tense throughout", "120-160 words"], checklist: ["Clear classification", "3+ characteristics described", "Summary present", "Present tense consistent", "Word count met"], rubric: [
            { criterion: "Structure", levels: ["Missing elements", "Partial", "Complete", "Exemplary"] },
            { criterion: "Vocabulary", levels: ["Limited", "Adequate", "Good", "Excellent"] },
            { criterion: "Accuracy", levels: ["Frequent errors", "Some errors", "Mostly correct", "Accurate"] }
          ] },
          answerKey: { answers: {}, explanation: "Assessed using the provided rubric.", openEnded: true, sampleResponse: "Proteins are essential nutrients that play a crucial role in building and repairing body tissues. They are found in both animal sources, such as meat, fish, and eggs, and plant sources, such as beans, lentils, and nuts.\n\nProteins are composed of amino acids, which are often called the building blocks of the body. There are twenty amino acids, nine of which are essential, meaning the body cannot produce them and they must come from food. Protein helps build muscle, repair damaged tissues, produce enzymes and hormones, and support immune function.\n\nTeenagers who are physically active need more protein than sedentary individuals. The recommended daily intake for active teenagers is approximately 1.2 to 1.6 grams per kilogram of body weight. Good protein sources include chicken breast, fish, eggs, tofu, and Greek yogurt.\n\nIn conclusion, protein is a vital nutrient for teenage athletes. Including a source of protein in every meal supports muscle growth, recovery, and overall health.", lookFor: ["clear report structure", "accurate facts", "present tense usage", "technical vocabulary"] },
          duration: 30,
          level: "create"
        },
        {
          id: "hf-l3-act-3",
          type: "discussion",
          title: "Report vs. Exposition",
          instruction: "Discuss with a partner: What is the difference between a report text and an exposition text?",
          content: { type: "discussion", prompt: "A report presents general facts about a topic. An exposition presents an argument with an opinion. How can you tell them apart?", thinkingTime: 3, pairInstruction: "Give an example of each type of text about the same topic.", shareOutPrompt: "How does the purpose of the text affect the language used?" },
          answerKey: { answers: {}, explanation: "Reports use present tense and present facts. Expositions present opinions and arguments.", openEnded: true, lookFor: ["understanding of purpose", "correct examples", "awareness of language differences"] },
          duration: 15,
          level: "analyze"
        }
      ],
      teacherNotes: { objective: "Students will write report texts about nutrition topics using the correct structure.", time: "60 minutes", grouping: "Whole class analysis, individual writing, pair discussion", teacherPrompt: "Show examples of report texts from health magazines and identify the structural elements together.", expectedResponse: "Students can identify report structure and write their own report text.", commonDifficulty: "Students may mix up report and exposition. Emphasize that reports present facts, not opinions.", followUp: "Have students create a class nutrition report booklet." }
    },
    {
      id: "hf-lesson-4",
      slug: "healthy-eating-recommendations",
      number: 4,
      title: "Making Food Recommendations",
      description: "Students learn to make and justify food recommendations using evidence and reasoning.",
      duration: 50,
      objectives: [
        { id: "hf-l4-obj-1", description: "Make specific food recommendations with supporting reasons.", level: "evaluate" },
        { id: "hf-l4-obj-2", description: "Evaluate food options based on nutritional information.", level: "analyze" }
      ],
      vocabulary: [
        { word: "recommend", definition: "to suggest as worthy of acceptance", example: "I recommend eating at least five portions of fruit and vegetables daily." },
        { word: "avoid", definition: "to keep away from or prevent", example: "You should avoid excessive sugar and salt." },
        { word: "moderation", definition: "the avoidance of extremes", example: "Eat everything in moderation for a balanced diet." },
        { word: "substitute", definition: "to use something in place of another", example: "Substitute water for sugary drinks." },
        { word: "portion control", definition: "managing the amount of food you eat", example: "Portion control is important for maintaining a healthy weight." }
      ],
      languageFocus: ["recommendation language", "giving reasons", "modal verbs for advice (should, could, might)"],
      conceptExplanation: "Making good food recommendations requires evidence and reasoning. Instead of saying 'Eat more vegetables,' explain why: 'Eat more vegetables because they provide essential vitamins and fiber that support growth and digestion.'\n\nModal verbs help soften recommendations. 'You should eat breakfast' is strong advice. 'You might consider eating breakfast' is gentler. 'You could try adding fruit to your breakfast' is a suggestion. Choose the right level of strength for your audience.",
      examples: [
        "I recommend replacing sugary snacks with fresh fruit to reduce sugar intake.",
        "You should drink at least eight glasses of water daily to stay hydrated.",
        "Instead of frying food, you could try baking or grilling for a healthier option.",
        "If you want more energy for sports, you should eat a banana thirty minutes before training."
      ],
      modelText: "Based on our study of nutrition, here are my top five recommendations for a healthier diet. First, I recommend eating a protein-rich breakfast every morning. Research shows that students who eat breakfast perform better in class. Eggs, yogurt, or whole-grain toast with peanut butter are excellent choices. Second, you should replace sugary drinks with water or unsweetened tea. A single can of soda contains about ten teaspoons of sugar, which is more than the recommended daily limit. Third, try to eat at least two servings of vegetables with lunch and dinner. Vegetables provide essential vitamins and fiber. Fourth, you could substitute processed snacks with nuts and fruits. While processed snacks are convenient, they often contain unhealthy fats and additives. Fifth, practice portion control by using smaller plates and serving yourself reasonable amounts. Eating in moderation is the key to maintaining a healthy weight without feeling deprived.",
      activities: [
        {
          id: "hf-l4-act-1",
          type: "discussion",
          title: "School Cafeteria Improvements",
          instruction: "Work in groups of four. Your task is to recommend three changes to the school cafeteria menu to make it healthier.",
          content: { type: "discussion", prompt: "What unhealthy options are currently available? What healthier alternatives could replace them? How would you convince other students to try the new options?", thinkingTime: 5, groupInstruction: "Brainstorm three specific recommendations with supporting reasons. Prepare a short presentation.", shareOutPrompt: "Which group had the most convincing recommendations?" },
          answerKey: { answers: {}, explanation: "Look for specific, practical recommendations with clear reasoning.", openEnded: true, lookFor: ["specific changes proposed", "supporting evidence", "practical implementation ideas", "persuasive communication"] },
          duration: 25,
          level: "evaluate"
        },
        {
          id: "hf-l4-act-2",
          type: "writing-task",
          title: "Personal Nutrition Recommendations",
          instruction: "Write five specific food recommendations for a teenager who wants to improve their diet.",
          content: { type: "writing-task", context: "You are a student health advisor writing for a peer.", purpose: "To make evidence-based food recommendations.", audience: "A teenager who wants to eat healthier.", constraints: ["Write exactly 5 recommendations", "Each recommendation must include a reason", "Use modal verbs (should, could, might)", "Be specific about foods and portions"], checklist: ["5 recommendations", "Each has a reason", "Modal verbs used", "Specific foods mentioned", "Practical and achievable"] },
          answerKey: { answers: {}, explanation: "Open-ended writing task.", openEnded: true, sampleResponse: "1. You should eat a banana before morning sports for quick energy. 2. You could replace chips with carrot sticks and hummus as an after-school snack. 3. You should drink a glass of water with every meal to stay hydrated. 4. You might try adding spinach to your smoothies for extra vitamins. 5. You should eat fish at least twice a week for omega-3 fatty acids.", lookFor: ["specific foods", "clear reasons", "correct modal verbs", "practical advice"] },
          duration: 15,
          level: "evaluate"
        },
        {
          id: "hf-l4-act-3",
          type: "reflection",
          title: "Diet Reflection",
          instruction: "Reflect on your own eating habits based on what you have learned.",
          content: { type: "reflection", prompts: [
            { id: "ref-hf-1", question: "What is one healthy food habit you already have?", type: "understanding" },
            { id: "ref-hf-2", question: "What is one change you could make to improve your diet?", type: "application" },
            { id: "ref-hf-3", question: "What was the most surprising thing you learned about nutrition?", type: "understanding" }
          ] },
          answerKey: { answers: {}, explanation: "Look for genuine self-reflection and specific, achievable goals.", openEnded: true },
          duration: 10,
          level: "evaluate"
        }
      ],
      teacherNotes: { objective: "Students will make evidence-based food recommendations and reflect on their own diets.", time: "50 minutes", grouping: "Group discussion, individual writing, personal reflection", teacherPrompt: "Share a personal example of changing an eating habit and how it affected your energy or health.", expectedResponse: "Students make specific, evidence-based recommendations and reflect honestly on their habits.", commonDifficulty: "Recommendations may be too vague. Encourage specific foods and portions.", followUp: "Have students try one dietary change for a week and report back." }
    }
  ],
  caseStudy: {
    type: "case-study",
    context: "Rizky is a 16-year-old basketball player who has been gaining weight over the past three months. His coach noticed that his performance has declined: he runs slower and gets tired more easily. When asked about his diet, Rizky admits that he has been eating a lot of fast food, energy drinks, and instant noodles. He usually skips breakfast and eats large portions of fried chicken and rice for dinner. He drinks four to five cans of energy drinks per week because he says they help him stay awake to study. His mother is worried about his health but Rizky insists he is fine because he is still growing.",
    problem: "Rizky's weight gain and declining performance are directly related to his poor dietary choices. He needs to understand how his current diet affects his athletic performance and overall health.",
    evidence: [
      "Rizky eats fast food, energy drinks, and instant noodles regularly.",
      "He skips breakfast and eats large portions at dinner.",
      "He drinks 4-5 energy drinks per week.",
      "His weight has increased over three months.",
      "His athletic performance has declined noticeably."
    ],
    questions: [
      "Compare Rizky's current diet with a balanced diet. What is missing?",
      "Why are energy drinks particularly harmful for a teenage athlete?",
      "Write a one-day meal plan for Rizky that includes breakfast, lunch, and dinner.",
      "How would you explain to Rizky why his diet is affecting his basketball performance?"
    ]
  },
  evaluation: [
    {
      id: "hf-eval-1",
      type: "multiple-choice",
      title: "Comparatives and Nutrition Quiz",
      instruction: "Choose the best answer for each question.",
      content: { type: "multiple-choice", question: "Which sentence correctly uses a comparative adjective?", options: [
        { id: "ev1a", text: "Fruit is more healthier than candy." },
        { id: "ev1b", text: "Fruit is healthier than candy." },
        { id: "ev1c", text: "Fruit is healthiest than candy." },
        { id: "ev1d", text: "Fruit is health than candy." }
      ], correctId: "ev1b", explanation: "'Healthier' is the correct comparative form of 'healthy.' 'More healthier' is redundant." },
      answerKey: { answers: { "ev1b": "correct" }, explanation: "Short adjectives use -er for comparatives. Do not use 'more' with short adjectives." },
      duration: 10,
      level: "remember"
    },
    {
      id: "hf-eval-2",
      type: "true-false",
      title: "Nutrition Facts",
      instruction: "Write T (True) or F (False) for each statement.",
      content: { type: "true-false", statements: [
        { id: "tf1", text: "A report text presents opinions and arguments.", correct: false },
        { id: "tf2", text: "Fruits contain natural sugars, vitamins, and fiber.", correct: true },
        { id: "tf3", text: "Energy drinks are recommended for teenage athletes.", correct: false },
        { id: "tf4", text: "A balanced diet includes foods from all food groups.", correct: true }
      ], explanation: "Reports present facts, not opinions. Energy drinks are not recommended for teenagers." },
      answerKey: { answers: { tf1: "false", tf2: "true", tf3: "false", tf4: "true" }, explanation: "Report texts present general facts. Energy drinks contain excessive caffeine and sugar." },
      duration: 5,
      level: "remember"
    },
    {
      id: "hf-eval-3",
      type: "writing-task",
      title: "Food Report Assessment",
      instruction: "Write a report text (120-150 words) about one food group or specific food item.",
      content: { type: "writing-task", context: "You are writing for a school health website.", purpose: "To demonstrate mastery of report writing about nutrition.", audience: "Students who want to learn about healthy eating.", constraints: ["Include general classification", "Describe characteristics and functions", "Include a summary", "Use present tense throughout", "120-150 words"], checklist: ["Report structure present", "Present tense used", "Factual information", "Clear classification", "Word count met"] },
      answerKey: { answers: {}, explanation: "Assessed for structure, accuracy, and language use.", openEnded: true, lookFor: ["correct report structure", "accurate nutritional facts", "present tense consistency", "clear organization"] },
      duration: 20,
      level: "create"
    }
  ],
  remedial: [
    {
      id: "hf-rem-1",
      type: "matching",
      title: "Food Group Review",
      instruction: "Match each food item with its primary nutrient group.",
      content: { type: "matching", pairs: [
        { id: "rg1", left: "Bread", right: "Carbohydrates" },
        { id: "rg2", left: "Eggs", right: "Protein" },
        { id: "rg3", left: "Butter", right: "Fats" },
        { id: "rg4", left: "Apple", right: "Vitamins" },
        { id: "rg5", left: "Oats", right: "Fiber" }
      ], explanation: "Each food item belongs to its primary nutritional group." },
      answerKey: { answers: { rg1: "Carbohydrates", rg2: "Protein", rg3: "Fats", rg4: "Vitamins", rg5: "Fiber" }, explanation: "Understanding food groups helps make balanced dietary choices." },
      duration: 10,
      level: "remember"
    },
    {
      id: "hf-rem-2",
      type: "fill-blank",
      title: "Comparative Forms Practice",
      instruction: "Complete each sentence with the correct comparative form.",
      content: { type: "fill-blank", sentence: "Water is ___ (good) than soda. Vegetables are ___ (important) than many people think. Fish is ___ (healthy) than fried chicken. Fruit is ___ (nutritious) than candy.", blanks: [
        { id: "cp1", position: 1, acceptedAnswers: ["better"] },
        { id: "cp2", position: 2, acceptedAnswers: ["more important"] },
        { id: "cp3", position: 3, acceptedAnswers: ["healthier"] },
        { id: "cp4", position: 4, acceptedAnswers: ["more nutritious"] }
      ], explanation: "Good becomes better (irregular). Important and nutritious are long adjectives using 'more.' Healthy uses -er." },
      answerKey: { answers: { cp1: "better", cp2: "more important", cp3: "healthier", cp4: "more nutritious" }, explanation: "Good/better is irregular. Long adjectives use 'more.' Short adjectives use '-er.'" },
      duration: 10,
      level: "apply"
    }
  ],
  enrichment: [
    {
      id: "hf-enr-1",
      type: "writing-task",
      title: "School Nutrition Survey Report",
      instruction: "Design a survey about your classmates' eating habits, collect data, and write a report on your findings.",
      content: { type: "writing-task", context: "You are a student researcher investigating school nutrition.", purpose: "To collect and report data about student eating habits.", audience: "Teachers and students at your school.", constraints: ["Design at least 5 survey questions", "Collect responses from at least 10 students", "Write a report with your findings", "Include charts or graphs if possible", "Make recommendations based on your data"], checklist: ["Survey questions designed", "Data collected", "Report structured clearly", "Findings presented", "Recommendations made"] },
      answerKey: { answers: {}, explanation: "Assessed for research methodology, data presentation, and report quality.", openEnded: true, lookFor: ["well-designed survey", "clear data presentation", "logical report structure", "evidence-based recommendations"] },
      duration: 40,
      level: "create"
    },
    {
      id: "hf-enr-2",
      type: "discussion",
      title: "Food and Culture",
      instruction: "Research how different cultures approach healthy eating. Prepare a brief presentation.",
      content: { type: "discussion", prompt: "Different countries have different food traditions. How do Japanese, Mediterranean, or Indonesian diets compare in terms of healthiness? What can we learn from other food cultures?", thinkingTime: 10, pairInstruction: "Share your research findings with a partner.", shareOutPrompt: "What is the most interesting food tradition you discovered?" },
          answerKey: { answers: {}, explanation: "Look for well-researched information and thoughtful comparisons.", openEnded: true, lookFor: ["cultural awareness", "factual accuracy", "thoughtful comparison", "clear presentation"] },
          duration: 20,
          level: "analyze"
        }
  ],
  reflection: [
    {
      type: "reflection",
      prompts: [
        { id: "hf-ref-1", question: "What is the most important lesson you learned about nutrition in this chapter?", type: "understanding" },
        { id: "hf-ref-2", question: "Which food group do you think you need to eat more of? Why?", type: "application" },
        { id: "hf-ref-3", question: "How has learning about comparatives helped you make better food choices?", type: "application" },
        { id: "hf-ref-4", question: "What is one specific change you will make to your diet this week?", type: "next-step" }
      ]
    }
  ]
};
