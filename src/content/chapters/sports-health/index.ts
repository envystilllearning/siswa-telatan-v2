import { Chapter } from "../../../types/content";

export const sportsHealth: Chapter = {
  id: "sports-health",
  slug: "sports-health",
  number: 3,
  semester: 1,
  title: "Sports and Health",
  theme: "Sports",
  question: "How can we help others stay healthy through clear instructions?",
  overview: "Students learn to write procedure texts about exercise routines and healthy habits. They master imperatives and sequence markers to give clear, step-by-step instructions that others can follow easily.",
  estimatedTime: "8 hours",
  skills: ["reading", "writing", "speaking", "listening"],
  textType: "procedure",
  languageFocus: ["imperatives", "sequence markers"],
  objectives: [
    { id: "sh-obj-1", description: "Use imperative sentences correctly to give instructions.", level: "apply" },
    { id: "sh-obj-2", description: "Write a procedure text with clear steps and sequence markers.", level: "create" },
    { id: "sh-obj-3", description: "Identify the features of a procedure text.", level: "understand" },
    { id: "sh-obj-4", description: "Evaluate the clarity and completeness of instruction texts.", level: "evaluate" }
  ],
  lessons: [
    {
      id: "sh-lesson-1",
      slug: "imperative-sentences",
      number: 1,
      title: "Imperative Sentences",
      description: "Students learn to form and use imperative sentences to give instructions, commands, and advice.",
      duration: 50,
      objectives: [
        { id: "sh-l1-obj-1", description: "Form imperative sentences using the base form of the verb.", level: "remember" },
        { id: "sh-l1-obj-2", description: "Use imperatives to give instructions for exercise routines.", level: "apply" }
      ],
      vocabulary: [
        { word: "stretch", definition: "to extend your body or limbs to their full length", example: "Stretch your arms above your head." },
        { word: "inhale", definition: "to breathe in", example: "Inhale deeply through your nose." },
        { word: "exhale", definition: "to breathe out", example: "Exhale slowly through your mouth." },
        { word: "hydrate", definition: "to drink water to maintain body function", example: "Hydrate before, during, and after exercise." },
        { word: "warm-up", definition: "light exercise done before intense physical activity", example: "Always do a five-minute warm-up before running." }
      ],
      languageFocus: ["imperative form", "negative imperatives", "polite imperatives with please"],
      conceptExplanation: "Imperative sentences give commands, instructions, or advice. They use the base form of the verb without a subject. For example: 'Stand up,' 'Open your textbook,' 'Listen carefully.'\n\nTo make a negative imperative, add 'do not' or 'don't' before the verb: 'Don't run on wet floors.' To be more polite, add 'please' at the beginning or end: 'Please sit down' or 'Sit down, please.'",
      examples: [
        "Stand with your feet shoulder-width apart.",
        "Do not lock your knees during the squat.",
        "Please warm up for five minutes before starting.",
        "Breathe deeply. Inhale for four counts, then exhale for six."
      ],
      modelText: "To perform a proper warm-up before any sport, follow these steps carefully. First, jog lightly in place for two minutes to increase your heart rate. Next, stretch your arms across your chest and hold for fifteen seconds each side. Then, perform ten leg swings on each leg to loosen your hip joints. After that, do five bodyweight squats to activate your leg muscles. Finally, shake out your limbs and take a few deep breaths. Remember to hydrate throughout the warm-up. Do not skip these steps, even if you are in a hurry. A proper warm-up prevents injuries and improves your performance.",
      activities: [
        {
          id: "sh-l1-act-1",
          type: "vocabulary",
          title: "Imperative Verbs",
          instruction: "Write an imperative sentence using each verb below as a fitness instruction.",
          content: { type: "vocabulary", words: [
            { word: "jump", definition: "write an imperative", example: "___ rope for ten minutes." },
            { word: "rest", definition: "write an imperative", example: "___ for one minute between sets." },
            { word: "breathe", definition: "write an imperative", example: "___ deeply before each rep." },
            { word: "run", definition: "write an imperative", example: "___ at a moderate pace for twenty minutes." },
            { word: "cool", definition: "write an imperative", example: "___ down with light stretching." }
          ] },
          answerKey: { answers: { jump: "Jump rope for ten minutes.", rest: "Rest for one minute between sets.", breathe: "Breathe deeply before each rep.", run: "Run at a moderate pace for twenty minutes.", cool: "Cool down with light stretching." }, explanation: "Each imperative starts with the base form of the verb and gives a clear instruction." },
          duration: 10,
          level: "remember"
        },
        {
          id: "sh-l1-act-2",
          type: "ordering",
          title: "Morning Stretch Routine",
          instruction: "Put the steps of a morning stretch routine in the correct order.",
          content: { type: "ordering", instruction: "Number from 1 (first) to 5 (last).", items: [
            { id: "ms1", text: "Roll your shoulders backward five times.", correctPosition: 2 },
            { id: "ms2", text: "Stand up straight and take three deep breaths.", correctPosition: 1 },
            { id: "ms3", text: "Touch your toes and hold for ten seconds.", correctPosition: 3 },
            { id: "ms4", text: "Twist your torso gently to the left and right.", correctPosition: 4 },
            { id: "ms5", text: "Shake out your arms and legs to finish.", correctPosition: 5 }
          ], explanation: "The routine flows from standing still to gentle movements, ending with relaxation." },
          answerKey: { answers: { ms1: "2", ms2: "1", ms3: "3", ms4: "4", ms5: "5" }, explanation: "The correct order is: breathe, shoulders, toes, twist, shake out." },
          duration: 10,
          level: "understand"
        },
        {
          id: "sh-l1-act-3",
          type: "fill-blank",
          title: "Complete the Instructions",
          instruction: "Fill in the blanks with appropriate imperative verbs.",
          content: { type: "fill-blank", sentence: "___ your shoes before you start. ___ for two minutes. ___ your legs one at a time. ___ ten push-ups. ___ down with a walk.", blanks: [
            { id: "fi1", position: 1, acceptedAnswers: ["Put on", "Wear", "Lace up"] },
            { id: "fi2", position: 2, acceptedAnswers: ["Warm up", "Jog", "Run"] },
            { id: "fi3", position: 3, acceptedAnswers: ["Stretch", "Extend", "Swing"] },
            { id: "fi4", position: 4, acceptedAnswers: ["Do", "Perform", "Complete"] },
            { id: "fi5", position: 5, acceptedAnswers: ["Cool", "Slow", "Walk"] }
          ], explanation: "Each blank requires an imperative verb that logically fits the exercise routine context." },
          answerKey: { answers: { fi1: "Put on", fi2: "Warm up", fi3: "Stretch", fi4: "Do", fi5: "Cool" }, explanation: "Any appropriate imperative verb that creates a logical exercise instruction is acceptable." },
          duration: 10,
          level: "apply"
        }
      ],
      teacherNotes: { objective: "Students will form and use imperative sentences for exercise instructions.", time: "50 minutes", grouping: "Whole class, individual practice, pair checking", teacherPrompt: "Demonstrate a simple exercise and narrate with imperatives: 'Stand up. Stretch your arms. Hold for ten seconds.'", expectedResponse: "Students can form correct imperative sentences for various exercise activities.", commonDifficulty: "Students may forget that imperatives have no visible subject. Remind them the subject 'you' is implied.", followUp: "Have students write 5 imperative sentences describing their favorite exercise." }
    },
    {
      id: "sh-lesson-2",
      slug: "sequence-markers",
      number: 2,
      title: "Sequence Markers in Procedures",
      description: "Students learn to use sequence markers like first, next, then, after that, and finally to organize procedure texts.",
      duration: 50,
      objectives: [
        { id: "sh-l2-obj-1", description: "Use sequence markers to organize steps in a procedure.", level: "apply" },
        { id: "sh-l2-obj-2", description: "Identify sequence markers in published procedure texts.", level: "understand" }
      ],
      vocabulary: [
        { word: "step", definition: "one stage in a process or procedure", example: "Step one: warm up for five minutes." },
        { word: "sequence", definition: "the order in which things happen", example: "Follow the sequence of exercises carefully." },
        { word: "routine", definition: "a fixed sequence of actions done regularly", example: "This is my daily exercise routine." },
        { word: "intensity", definition: "the level of effort or energy in an activity", example: "Increase the intensity gradually each week." },
        { word: "repetition", definition: "doing the same thing again and again", example: "Perform ten repetitions of each exercise." }
      ],
      languageFocus: ["sequence markers (first, next, then, finally)", "numbered steps", "time expressions in procedures"],
      conceptExplanation: "Sequence markers are words that show the order of steps in a process. In procedure texts, they help readers follow instructions in the correct order. Common sequence markers include: first, second, third, next, then, after that, following that, and finally.\n\nYou can also use numbered steps (Step 1, Step 2) or time expressions (for five minutes, after ten seconds) to make instructions clearer. Combining these techniques creates easy-to-follow procedures.",
      examples: [
        "First, put on your running shoes. Next, warm up with a light jog. Then, increase your speed to a comfortable pace.",
        "After completing ten push-ups, rest for thirty seconds. Then, perform another set.",
        "Finally, cool down by walking slowly and stretching your muscles."
      ],
      modelText: "Here is a simple bodyweight workout you can do at home without any equipment. First, warm up by marching in place for three minutes. Next, do fifteen bodyweight squats, keeping your back straight and your knees behind your toes. Then, move into ten push-ups; if full push-ups are too difficult, try the modified version on your knees. After that, hold a plank position for thirty seconds. Then, do twenty jumping jacks to keep your heart rate up. Follow this with ten lunges on each leg. Finally, cool down by stretching your quadriceps, hamstrings, and calves, holding each stretch for fifteen seconds. Remember to drink water between exercises and stop if you feel any pain.",
      activities: [
        {
          id: "sh-l2-act-1",
          type: "text-analysis",
          title: "Finding Sequence Markers",
          instruction: "Read the procedure below and highlight all the sequence markers. Then answer the questions.",
          content: { type: "text-analysis", text: "First, preheat your oven to 180 degrees Celsius. Next, mix the flour, sugar, and baking powder in a large bowl. Then, add the eggs and milk and stir until smooth. After that, pour the batter into a greased baking pan. Finally, bake for twenty-five minutes or until golden brown.", questions: [
            { id: "sm-q1", question: "How many sequence markers are in the text?", options: [{ id: "a", text: "3" }, { id: "b", text: "4" }, { id: "c", text: "5" }, { id: "d", text: "6" }], correctId: "c" },
            { id: "sm-q2", question: "Which marker signals the last step?", options: [{ id: "a", text: "First" }, { id: "b", text: "Next" }, { id: "c", text: "After that" }, { id: "d", text: "Finally" }], correctId: "d" },
            { id: "sm-q3", question: "What type of text is this?", options: [{ id: "a", text: "A recount" }, { id: "b", text: "A procedure" }, { id: "c", text: "A description" }, { id: "d", text: "A narrative" }], correctId: "b" }
          ] },
          answerKey: { answers: { "sm-q1": "c", "sm-q2": "d", "sm-q3": "b" }, explanation: "The five markers are: First, Next, Then, After that, Finally. 'Finally' signals the last step. This is a procedure text because it gives step-by-step instructions." },
          duration: 15,
          level: "understand"
        },
        {
          id: "sh-l2-act-2",
          type: "writing-task",
          title: "Write a Warm-Up Routine",
          instruction: "Write a procedure text (8-10 sentences) describing a warm-up routine for a specific sport.",
          content: { type: "writing-task", context: "You are writing for a school sports magazine's health column.", purpose: "To write a clear procedure text using sequence markers and imperatives.", audience: "Students who want to warm up properly before sports.", constraints: ["Choose a specific sport (football, basketball, swimming, etc.)", "Use at least 5 sequence markers", "Include at least 8 imperative sentences", "Include time durations for each step"], checklist: ["Specific sport chosen", "5+ sequence markers", "8+ imperative sentences", "Time durations included", "Logical step order"] },
          answerKey: { answers: {}, explanation: "Open-ended writing task.", openEnded: true, sampleResponse: "To warm up before a football match, follow these steps. First, jog around the pitch for three minutes at a slow pace. Next, do dynamic leg swings, ten on each leg. Then, perform bodyweight squats for one minute. After that, run through high knees for thirty seconds. Next, do lateral shuffles across the width of the pitch. Then, practice passing the ball gently with a partner. Finally, take a few sprints at seventy percent speed. Remember to hydrate throughout.", lookFor: ["clear sequence markers", "correct imperative form", "logical order", "sport-specific exercises"] },
          duration: 25,
          level: "create"
        },
        {
          id: "sh-l2-act-3",
          type: "true-false",
          title: "Procedure Text Facts",
          instruction: "Write T (True) or F (False) for each statement about procedure texts.",
          content: { type: "true-false", statements: [
            { id: "tf1", text: "Procedure texts use past tense verbs.", correct: false },
            { id: "tf2", text: "Sequence markers help readers follow steps in order.", correct: true },
            { id: "tf3", text: "Imperative sentences always include the subject 'you'.", correct: false },
            { id: "tf4", text: "A procedure text should include time durations for each step.", correct: true }
          ], explanation: "Procedure texts use imperatives (base form), not past tense. The subject 'you' is implied in imperatives, not stated." },
          answerKey: { answers: { tf1: "false", tf2: "true", tf3: "false", tf4: "true" }, explanation: "Procedures use imperatives, not past tense. The subject is implied in imperatives." },
          duration: 5,
          level: "remember"
        }
      ],
      teacherNotes: { objective: "Students will use sequence markers to organize procedure texts clearly.", time: "50 minutes", grouping: "Whole class, individual writing, pair discussion", teacherPrompt: "Write a simple recipe on the board and have students identify the sequence markers.", expectedResponse: "Students can identify and use a variety of sequence markers in their writing.", commonDifficulty: "Students may use the same marker repeatedly. Encourage variety.", followUp: "Have students swap procedure texts and follow the instructions to test if they work." }
    },
    {
      id: "sh-lesson-3",
      slug: "procedure-text-structure",
      number: 3,
      title: "Writing Complete Procedure Texts",
      description: "Students learn the full structure of a procedure text: title, goal, materials, and steps. They write a complete procedure.",
      duration: 60,
      objectives: [
        { id: "sh-l3-obj-1", description: "Identify all structural elements of a procedure text.", level: "understand" },
        { id: "sh-l3-obj-2", description: "Write a complete procedure text with title, goal, materials, and steps.", level: "create" }
      ],
      vocabulary: [
        { word: "objective", definition: "the goal or purpose of the procedure", example: "The objective is to improve cardiovascular fitness." },
        { word: "equipment", definition: "items needed to perform the activity", example: "The equipment needed includes a mat and dumbbells." },
        { word: "precaution", definition: "a measure taken in advance to prevent harm", example: "A precaution is to warm up before intense exercise." },
        { word: "moderate", definition: "of medium intensity or level", example: "Start with moderate exercise and increase gradually." },
        { word: "persist", definition: "to continue despite difficulty", example: "Persist with the routine for best results." }
      ],
      languageFocus: ["procedure structure", "imperative consistency", "advisory notes and warnings"],
      conceptExplanation: "A complete procedure text has four main elements. The title tells what the procedure is about. The goal or objective explains why you would do this procedure. The materials or equipment section lists everything you need. The steps section gives clear, numbered instructions using imperatives and sequence markers.\n\nProcedure texts may also include warnings or notes, such as 'Do not attempt this without supervision' or 'Stop if you feel pain.' These help keep the reader safe.",
      examples: [
        "Title: How to Perform a Plank Exercise",
        "Goal: To strengthen your core muscles and improve posture.",
        "Materials: Exercise mat, timer, comfortable clothing.",
        "Steps: 1. Place the mat on a flat surface. 2. Lie face down. 3. Prop yourself up on your forearms. 4. Lift your body so only your toes and forearms touch the ground. 5. Hold for thirty seconds."
      ],
      modelText: "How to Create a Weekly Exercise Plan\n\nGoal: To design a balanced weekly exercise routine that improves both strength and cardiovascular fitness.\n\nEquipment needed: Comfortable sportswear, running shoes, exercise mat, water bottle, and a timer.\n\nSteps:\nStep 1: Monday - Go for a thirty-minute jog at a moderate pace. Follow this with ten minutes of stretching.\nStep 2: Tuesday - Perform a bodyweight strength workout. Do three sets of twelve squats, ten push-ups, and a thirty-second plank.\nStep 3: Wednesday - Take a rest day or do light yoga for twenty minutes.\nStep 4: Thursday - Complete a interval training session. Alternate between one minute of sprinting and two minutes of walking for twenty minutes.\nStep 5: Friday - Repeat the strength workout from Tuesday, adding five repetitions to each exercise.\nStep 6: Saturday - Participate in a sport you enjoy for at least one hour.\nStep 7: Sunday - Rest completely and prepare for the next week.\n\nImportant note: Always warm up for five minutes before any exercise session. Stop immediately if you feel pain or dizziness.",
      activities: [
        {
          id: "sh-l3-act-1",
          type: "text-analysis",
          title: "Analyze a Procedure Text",
          instruction: "Read the procedure below and identify each structural element.",
          content: { type: "text-analysis", text: "How to Do a Proper Push-Up\n\nGoal: To strengthen your chest, shoulders, and triceps.\n\nEquipment: Exercise mat.\n\nSteps:\n1. Place the mat on the floor.\n2. Lie face down with your hands beside your shoulders.\n3. Push your body up until your arms are straight.\n4. Lower yourself slowly until your chest nearly touches the mat.\n5. Repeat ten to fifteen times.\n\nNote: Keep your back straight throughout the exercise.", questions: [
            { id: "pt-q1", question: "What is the goal of this procedure?", options: [{ id: "a", text: "To learn to swim" }, { id: "b", text: "To strengthen chest, shoulders, and triceps" }, { id: "c", text: "To run faster" }], correctId: "b" },
            { id: "pt-q2", question: "How many steps are in this procedure?", options: [{ id: "a", text: "3" }, { id: "b", text: "4" }, { id: "c", text: "5" }, { id: "d", text: "6" }], correctId: "c" },
            { id: "pt-q3", question: "What type of sentence is 'Keep your back straight throughout the exercise'?", options: [{ id: "a", text: "A question" }, { id: "b", text: "A statement" }, { id: "c", text: "An imperative" }], correctId: "c" }
          ] },
          answerKey: { answers: { "pt-q1": "b", "pt-q2": "c", "pt-q3": "c" }, explanation: "The goal is clearly stated. There are 5 numbered steps. The note uses an imperative to give advice." },
          duration: 15,
          level: "understand"
        },
        {
          id: "sh-l3-act-2",
          type: "writing-task",
          title: "Create Your Own Exercise Procedure",
          instruction: "Write a complete procedure text for an exercise or health routine of your choice.",
          content: { type: "writing-task", context: "You are creating content for a health and fitness blog aimed at teenagers.", purpose: "To write a complete procedure text with all structural elements.", audience: "Teenagers who want to start exercising regularly.", constraints: ["Include a clear title", "State the goal or objective", "List all equipment needed", "Write at least 6 numbered steps", "Use imperative sentences throughout", "Include at least one warning or note"], checklist: ["Title present", "Goal stated", "Equipment listed", "6+ numbered steps", "Imperative sentences used", "Warning or note included"], rubric: [
            { criterion: "Structure", levels: ["Missing elements", "Partial", "Complete", "Exemplary"] },
            { criterion: "Clarity", levels: ["Unclear", "Somewhat clear", "Clear", "Very clear and detailed"] },
            { criterion: "Grammar", levels: ["Frequent errors", "Some errors", "Mostly correct", "Accurate"] }
          ] },
          answerKey: { answers: {}, explanation: "Assessed using the provided rubric.", openEnded: true, sampleResponse: "How to Start a Morning Jogging Habit\n\nGoal: To build a consistent morning jogging routine that improves fitness and energy levels.\n\nEquipment: Running shoes, comfortable clothing, water bottle, stopwatch.\n\nSteps:\n1. Set your alarm for thirty minutes earlier than usual.\n2. Put on your running shoes and sportswear immediately.\n3. Drink a glass of water before leaving the house.\n4. Start with a five-minute walk to warm up.\n5. Begin jogging at a comfortable pace for ten minutes.\n6. Walk for two minutes, then jog for another ten minutes.\n7. Cool down with a five-minute walk.\n8. Stretch your legs for three minutes.\n\nNote: If you feel dizzy or experience pain, stop immediately and walk home slowly.", lookFor: ["complete structure", "clear imperatives", "logical steps", "safety awareness"] },
          duration: 30,
          level: "create"
        },
        {
          id: "sh-l3-act-3",
          type: "discussion",
          title: "Procedure vs. Recount",
          instruction: "Discuss with a partner: What makes a procedure text different from a recount?",
          content: { type: "discussion", prompt: "A procedure tells someone how to do something. A recount tells what happened. Both may use time顺序, but for different purposes. Can you explain the difference?", thinkingTime: 3, pairInstruction: "Compare the two text types and list at least three differences.", shareOutPrompt: "What is the most important difference?" },
          answerKey: { answers: {}, explanation: "Key differences: procedure uses imperatives and is about future actions; recount uses past tense and is about past events.", openEnded: true, lookFor: ["understanding of purpose differences", "correct tense usage", "clear comparison"] },
          duration: 15,
          level: "analyze"
        }
      ],
      teacherNotes: { objective: "Students will write complete procedure texts with all structural elements.", time: "60 minutes", grouping: "Whole class, individual writing, pair discussion", teacherPrompt: "Show examples of procedure texts from cookbooks or fitness magazines. Identify the structural elements together.", expectedResponse: "Students can write a complete procedure with title, goal, materials, and steps.", commonDifficulty: "Students may forget to include warnings or notes. Emphasize safety in exercise procedures.", followUp: "Have students test each other's procedures by following the instructions literally." }
    },
    {
      id: "sh-lesson-4",
      slug: "health-advice-speaking",
      number: 4,
      title: "Giving Health Advice",
      description: "Students practice giving health and exercise advice orally using imperatives and sequence markers. They role-play health consultations.",
      duration: 50,
      objectives: [
        { id: "sh-l4-obj-1", description: "Give clear health and exercise advice using imperative sentences.", level: "apply" },
        { id: "sh-l4-obj-2", description: "Listen to health advice and follow instructions accurately.", level: "understand" }
      ],
      vocabulary: [
        { word: "consult", definition: "to seek advice from a professional", example: "Consult a doctor before starting a new exercise program." },
        { word: "nutritious", definition: "containing important nutrients for health", example: "Eat nutritious meals to fuel your workouts." },
        { word: "sedentary", definition: "involving a lot of sitting and little exercise", example: "Avoid a sedentary lifestyle by being active every day." },
        { word: "endurance", definition: "the ability to sustain prolonged physical effort", example: "Build your endurance by running regularly." },
        { word: "wellness", definition: "the state of being in good health", example: "Wellness includes physical, mental, and social health." }
      ],
      languageFocus: ["giving advice with imperatives", "conditional advice (if you...)", "polite suggestions"],
      conceptExplanation: "When giving health advice, we use imperatives to make our instructions clear and direct. We can soften advice with conditional phrases like 'If you want to improve your fitness, try...' or 'You should consider...'\n\nGood health advice is specific and actionable. Instead of saying 'Exercise more,' say 'Walk for thirty minutes every morning before school.' Specific advice is easier to follow and more effective.",
      examples: [
        "Drink at least eight glasses of water every day.",
        "If you feel tired during the day, try going to bed thirty minutes earlier.",
        "You should consider joining a sports team to stay motivated.",
        "Start with ten minutes of exercise and gradually increase the duration."
      ],
      modelText: "If you want to improve your overall health and fitness, here is some practical advice. First, start your day with a glass of water to hydrate your body after sleep. Next, eat a balanced breakfast that includes protein, carbohydrates, and fruit. Then, try to walk or cycle to school instead of taking motorized transport. During the school day, take short breaks to stretch your legs and move around. After school, spend at least thirty minutes doing physical activity you enjoy. Finally, eat a nutritious dinner and avoid screens for one hour before bed to improve your sleep quality. Remember, small changes every day lead to big improvements over time.",
      activities: [
        {
          id: "sh-l4-act-1",
          type: "discussion",
          title: "Health Advice Role-Play",
          instruction: "Work with a partner. One person plays a student who wants to get healthier. The other plays a fitness advisor. Give at least 5 pieces of specific advice.",
          content: { type: "discussion", prompt: "Student: 'I want to be healthier but I don't know where to start. I sit all day and I often feel tired.' Advisor: Give specific, actionable advice using imperatives.", thinkingTime: 3, pairInstruction: "Switch roles after five minutes of advice-giving.", shareOutPrompt: "What was the best piece of advice you gave or received?" },
          answerKey: { answers: {}, explanation: "Assess based on specificity of advice, correct use of imperatives, and practical feasibility.", openEnded: true, lookFor: ["specific advice", "imperative sentences", "practical suggestions", "active listening"] },
          duration: 20,
          level: "apply"
        },
        {
          id: "sh-l4-act-2",
          type: "fill-blank",
          title: "Complete the Advice",
          instruction: "Fill in the blanks to complete the health advice.",
          content: { type: "fill-blank", sentence: "___ eight glasses of water daily. If you feel stressed, ___ for five minutes. ___ a balanced diet with plenty of vegetables. ___ at least thirty minutes of exercise each day.", blanks: [
            { id: "ha1", position: 1, acceptedAnswers: ["Drink", "Consume", "Have"] },
            { id: "ha2", position: 2, acceptedAnswers: ["breathe deeply", "meditate", "relax", "rest"] },
            { id: "ha3", position: 3, acceptedAnswers: ["Eat", "Follow", "Maintain"] },
            { id: "ha4", position: 4, acceptedAnswers: ["Do", "Get", "Perform", "Complete"] }
          ], explanation: "Each blank requires an imperative verb that gives clear health advice." },
          answerKey: { answers: { ha1: "Drink", ha2: "breathe deeply", ha3: "Eat", ha4: "Do" }, explanation: "Any appropriate imperative verb that gives clear health advice is acceptable." },
          duration: 10,
          level: "apply"
        },
        {
          id: "sh-l4-act-3",
          type: "reflection",
          title: "Health Advice Reflection",
          instruction: "Think about the health advice you have learned in this chapter.",
          content: { type: "reflection", prompts: [
            { id: "ref-sh-1", question: "What is the most useful piece of health advice you learned?", type: "understanding" },
            { id: "ref-sh-2", question: "Which health habit would be hardest for you to change? Why?", type: "difficulty" },
            { id: "ref-sh-3", question: "How could you use procedure writing to help a friend start exercising?", type: "application" }
          ] },
          answerKey: { answers: {}, explanation: "Look for specific, thoughtful responses that connect to personal experience.", openEnded: true },
          duration: 10,
          level: "evaluate"
        }
      ],
      teacherNotes: { objective: "Students will practice giving health advice using imperative sentences and sequence markers.", time: "50 minutes", grouping: "Pair role-play, whole-class sharing, individual reflection", teacherPrompt: "Model a health advice role-play with a strong student before pairs begin.", expectedResponse: "Students give specific, actionable health advice using imperative sentences.", commonDifficulty: "Students may give vague advice like 'be healthy.' Encourage specific, actionable suggestions.", followUp: "Have students write their best health advice on a class poster." }
    }
  ],
  caseStudy: {
    type: "case-study",
    context: "Dian is a 15-year-old student who recently joined the school volleyball team. She is enthusiastic but has no experience with structured exercise. She often feels sore after practice and sometimes gets minor injuries. Her coach noticed that Dian skips warm-ups because she thinks they are boring and unnecessary. She also tends to eat whatever is available in the cafeteria, including lots of fried food and sugary drinks. After practice, she goes straight home and sits at her desk doing homework for hours without stretching.",
    problem: "Dian needs a proper exercise and health routine to prevent injuries and improve her performance. She lacks knowledge about warm-ups, cool-downs, and basic nutrition.",
    evidence: [
      "Dian skips warm-ups before volleyball practice.",
      "She experiences frequent soreness and minor injuries.",
      "Her diet consists mainly of fried food and sugary drinks.",
      "She does not stretch after exercise.",
      "She sits for long periods doing homework without movement breaks."
    ],
    questions: [
      "Write a procedure text for a pre-volleyball warm-up routine that Dian could follow.",
      "Why are warm-ups and cool-downs important for preventing injuries?",
      "Create a one-day healthy meal plan for Dian that includes breakfast, lunch, and dinner.",
      "How would you explain to Dian why nutrition matters for athletic performance?"
    ]
  },
  evaluation: [
    {
      id: "sh-eval-1",
      type: "multiple-choice",
      title: "Imperative and Procedure Quiz",
      instruction: "Choose the best answer for each question.",
      content: { type: "multiple-choice", question: "Which is a correct imperative sentence?", options: [
        { id: "ev1a", text: "You should run every day." },
        { id: "ev1b", text: "Running is good exercise." },
        { id: "ev1c", text: "Run every day to stay fit." },
        { id: "ev1d", text: "Do you run every day?" }
      ], correctId: "ev1c", explanation: "An imperative sentence starts with the base verb and gives a command or instruction. 'Run every day to stay fit' is a clear imperative." },
      answerKey: { answers: { "ev1c": "correct" }, explanation: "Imperatives start with the base verb and have no visible subject." },
      duration: 10,
      level: "remember"
    },
    {
      id: "sh-eval-2",
      type: "ordering",
      title: "Procedure Sequence",
      instruction: "Put the steps of making a healthy smoothie in the correct order.",
      content: { type: "ordering", instruction: "Number from 1 (first) to 5 (last).", items: [
        { id: "ps1", text: "Pour the smoothie into a glass.", correctPosition: 5 },
        { id: "ps2", text: "Add a handful of spinach and half a banana.", correctPosition: 2 },
        { id: "ps3", text: "Blend everything until smooth.", correctPosition: 4 },
        { id: "ps4", text: "Place the fruit and yogurt in the blender.", correctPosition: 1 },
        { id: "ps5", text: "Add a splash of milk and a teaspoon of honey.", correctPosition: 3 }
      ], explanation: "The steps follow a logical order from adding ingredients to blending to serving." },
      answerKey: { answers: { ps1: "5", ps2: "2", ps3: "4", ps4: "1", ps5: "3" }, explanation: "The correct order is: add main ingredients, add greens, add liquid and sweetener, blend, pour." },
      duration: 10,
      level: "understand"
    },
    {
      id: "sh-eval-3",
      type: "writing-task",
      title: "Health Procedure Assessment",
      instruction: "Write a procedure text (100-150 words) for a health or exercise routine.",
      content: { type: "writing-task", context: "You are contributing to a class health handbook.", purpose: "To demonstrate mastery of procedure writing.", audience: "Fellow students who want to improve their health.", constraints: ["Include title, goal, equipment, and steps", "Use at least 6 imperative sentences", "Use at least 4 sequence markers", "Include at least one warning", "100-150 words"], checklist: ["All structural elements present", "6+ imperatives", "4+ sequence markers", "Warning included", "Word count met"] },
      answerKey: { answers: {}, explanation: "Assessed for structure, clarity, and grammar accuracy.", openEnded: true, lookFor: ["complete procedure structure", "correct imperative form", "clear sequence markers", "safety awareness"] },
      duration: 20,
      level: "create"
    }
  ],
  remedial: [
    {
      id: "sh-rem-1",
      type: "fill-blank",
      title: "Imperative Practice",
      instruction: "Complete each sentence with an imperative verb.",
      content: { type: "fill-blank", sentence: "___ your shoes before entering the gym. ___ for two minutes to warm up. ___ the ball ten times. ___ down with stretching. ___ water after exercise.", blanks: [
        { id: "rp1", position: 1, acceptedAnswers: ["Remove", "Take off", "Leave"] },
        { id: "rp2", position: 2, acceptedAnswers: ["Jog", "Run", "Walk"] },
        { id: "rp3", position: 3, acceptedAnswers: ["Bounce", "Dribble", "Throw"] },
        { id: "rp4", position: 4, acceptedAnswers: ["Cool", "Slow", "Relax"] },
        { id: "rp5", position: 5, acceptedAnswers: ["Drink", "Have", "Consume"] }
      ], explanation: "Each blank needs an imperative verb that makes sense in the exercise context." },
      answerKey: { answers: { rp1: "Remove", rp2: "Jog", rp3: "Bounce", rp4: "Cool", rp5: "Drink" }, explanation: "Any imperative that fits the context is acceptable." },
      duration: 10,
      level: "remember"
    },
    {
      id: "sh-rem-2",
      type: "matching",
      title: "Sequence Markers",
      instruction: "Match each sequence marker with its function.",
      content: { type: "matching", pairs: [
        { id: "sq1", left: "First", right: "Signals the beginning" },
        { id: "sq2", left: "Next", right: "Signals the following step" },
        { id: "sq3", left: "After that", right: "Signals a later step" },
        { id: "sq4", left: "Finally", right: "Signals the last step" },
        { id: "sq5", left: "Then", right: "Signals the next step" }
      ], explanation: "Each sequence marker has a specific function in showing the order of steps." },
      answerKey: { answers: { sq1: "Signals the beginning", sq2: "Signals the following step", sq3: "Signals a later step", sq4: "Signals the last step", sq5: "Signals the next step" }, explanation: "Understanding the function of each marker helps in writing clear procedures." },
      duration: 10,
      level: "remember"
    }
  ],
  enrichment: [
    {
      id: "sh-enr-1",
      type: "writing-task",
      title: "Fitness Challenge Procedure",
      instruction: "Design a seven-day fitness challenge and write procedure texts for each day's activity.",
      content: { type: "writing-task", context: "You are a student fitness leader creating a challenge for your classmates.", purpose: "To create a week-long fitness program using procedure writing.", audience: "Students who want a structured fitness challenge.", constraints: ["Write 7 short procedures (one for each day)", "Include variety (strength, cardio, flexibility, rest)", "Use imperative sentences and sequence markers", "Each procedure should be 3-5 steps"], checklist: ["7 procedures present", "Variety of activities", "Correct imperative form", "Sequence markers used", "Rest day included"] },
      answerKey: { answers: {}, explanation: "Assessed for creativity, accuracy, and completeness.", openEnded: true, lookFor: ["variety in activities", "clear instructions", "logical progression", "rest and recovery included"] },
      duration: 30,
      level: "create"
    },
    {
      id: "sh-enr-2",
      type: "discussion",
      title: "Health Myth Busters",
      instruction: "Research a common health or exercise myth and prepare to debunk it with evidence.",
      content: { type: "discussion", prompt: "Find a health or fitness myth (e.g., 'Stretching prevents all injuries' or 'No pain, no gain'). Is it true or false? What does the evidence say?", thinkingTime: 10, pairInstruction: "Present your myth and evidence to a partner.", shareOutPrompt: "Which myth surprised you the most?" },
      answerKey: { answers: {}, explanation: "Look for evidence-based reasoning and clear communication.", openEnded: true, lookFor: ["research quality", "critical thinking", "clear explanation", "use of evidence"] },
      duration: 20,
      level: "analyze"
    }
  ],
  reflection: [
    {
      type: "reflection",
      prompts: [
        { id: "sh-ref-1", question: "What is the most important element of a good procedure text?", type: "understanding" },
        { id: "sh-ref-2", question: "Which type of writing did you find most challenging in this chapter: procedures or health advice?", type: "difficulty" },
        { id: "sh-ref-3", question: "How could you use procedure writing in your daily life?", type: "application" },
        { id: "sh-ref-4", question: "What health habit would you most like to improve?", type: "next-step" }
      ]
    }
  ]
};
