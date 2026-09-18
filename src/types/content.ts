export type Semester = 1 | 2;

export type TextType =
  | "descriptive"
  | "recount"
  | "procedure"
  | "narrative"
  | "exposition"
  | "report";

export type SkillFocus = "listening" | "speaking" | "reading" | "writing" | "viewing" | "presenting";

export type ActivityType =
  | "multiple-choice"
  | "true-false"
  | "matching"
  | "fill-blank"
  | "ordering"
  | "text-analysis"
  | "vocabulary"
  | "discussion"
  | "case-study"
  | "writing-task"
  | "reflection";

export type DifficultyLevel = "remember" | "understand" | "apply" | "analyze" | "evaluate" | "create";

export interface LearningObjective {
  id: string;
  description: string;
  level: DifficultyLevel;
}

export interface VocabularyWord {
  word: string;
  definition: string;
  example: string;
  phonetic?: string;
}

export interface ActivityOption {
  id: string;
  text: string;
}

export interface Activity {
  id: string;
  type: ActivityType;
  title: string;
  instruction: string;
  content: ActivityContent;
  answerKey: AnswerKey;
  duration?: number;
  level?: DifficultyLevel;
}

export type ActivityContent =
  | MultipleChoiceContent
  | TrueFalseContent
  | MatchingContent
  | FillBlankContent
  | OrderingContent
  | TextAnalysisContent
  | VocabularyContent
  | DiscussionContent
  | CaseStudyContent
  | WritingTaskContent
  | ReflectionContent;

export interface MultipleChoiceContent {
  type: "multiple-choice";
  question: string;
  options: ActivityOption[];
  correctId: string;
  explanation: string;
}

export interface TrueFalseContent {
  type: "true-false";
  statements: { id: string; text: string; correct: boolean }[];
  explanation: string;
}

export interface MatchingContent {
  type: "matching";
  pairs: { id: string; left: string; right: string }[];
  explanation: string;
}

export interface FillBlankContent {
  type: "fill-blank";
  sentence: string;
  blanks: { id: string; position: number; acceptedAnswers: string[] }[];
  explanation: string;
}

export interface OrderingContent {
  type: "ordering";
  instruction: string;
  items: { id: string; text: string; correctPosition: number }[];
  explanation: string;
}

export interface TextAnalysisContent {
  type: "text-analysis";
  text: string;
  questions: {
    id: string;
    question: string;
    options: ActivityOption[];
    correctId: string;
  }[];
}

export interface VocabularyContent {
  type: "vocabulary";
  words: VocabularyWord[];
}

export interface DiscussionContent {
  type: "discussion";
  prompt: string;
  thinkingTime: number;
  pairInstruction?: string;
  groupInstruction?: string;
  shareOutPrompt?: string;
}

export interface CaseStudyContent {
  type: "case-study";
  context: string;
  problem: string;
  evidence: string[];
  questions: string[];
}

export interface WritingTaskContent {
  type: "writing-task";
  context: string;
  purpose: string;
  audience: string;
  constraints: string[];
  checklist: string[];
  rubric?: { criterion: string; levels: string[] }[];
}

export interface ReflectionContent {
  type: "reflection";
  prompts: {
    id: string;
    question: string;
    type: "understanding" | "difficulty" | "application" | "next-step";
  }[];
}

export interface AnswerKey {
  answers: Record<string, string>;
  explanation: string;
  alternatives?: string[];
  openEnded?: boolean;
  sampleResponse?: string;
  lookFor?: string[];
}

export interface Lesson {
  id: string;
  slug: string;
  number: number;
  title: string;
  description: string;
  duration: number;
  objectives: LearningObjective[];
  vocabulary: VocabularyWord[];
  languageFocus: string[];
  conceptExplanation: string;
  examples: string[];
  modelText?: string;
  activities: Activity[];
  assessment?: Activity;
  teacherNotes: TeacherNotes;
}

export interface TeacherNotes {
  objective: string;
  time: string;
  grouping: string;
  teacherPrompt: string;
  expectedResponse?: string;
  commonDifficulty?: string;
  followUp?: string;
}

export interface Chapter {
  id: string;
  slug: string;
  number: number;
  semester: Semester;
  title: string;
  theme: string;
  question: string;
  overview: string;
  estimatedTime: string;
  skills: SkillFocus[];
  textType: TextType;
  languageFocus: string[];
  objectives: LearningObjective[];
  lessons: Lesson[];
  caseStudy: CaseStudyContent;
  evaluation: Activity[];
  remedial: Activity[];
  enrichment: Activity[];
  reflection: ReflectionContent[];
}

export interface CurriculumData {
  title: string;
  grade: string;
  phase: string;
  semesters: {
    number: Semester;
    title: string;
    theme: string;
    chapters: { id: string; slug: string; number: number; title: string; overview: string }[];
  }[];
}
