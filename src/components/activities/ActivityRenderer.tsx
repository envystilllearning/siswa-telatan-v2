"use client";

import { useState } from "react";
import { type Activity } from "@/types/content";
import MultipleChoice from "./MultipleChoice";
import TrueFalse from "./TrueFalse";
import MatchingGame from "./MatchingGame";
import FillBlank from "./FillBlank";
import OrderingActivity from "./OrderingActivity";
import TextAnalysisActivity from "./TextAnalysisActivity";
import VocabularyActivity from "./VocabularyActivity";
import DiscussionActivity from "./DiscussionActivity";
import CaseStudyActivity from "./CaseStudyActivity";
import WritingTaskActivity from "./WritingTaskActivity";
import ReflectionActivity from "./ReflectionActivity";
import AnswerReveal from "./AnswerReveal";

interface ActivityRendererProps {
  activity: Activity;
}

export default function ActivityRenderer({ activity }: ActivityRendererProps) {
  const [revealed, setRevealed] = useState(false);

  function renderActivity() {
    switch (activity.type) {
      case "multiple-choice": {
        const content = activity.content as import("@/types/content").MultipleChoiceContent;
        return <MultipleChoice content={content} answerKey={activity.answerKey} />;
      }
      case "true-false": {
        const content = activity.content as import("@/types/content").TrueFalseContent;
        return <TrueFalse content={content} answerKey={activity.answerKey} />;
      }
      case "matching": {
        const content = activity.content as import("@/types/content").MatchingContent;
        return <MatchingGame content={content} answerKey={activity.answerKey} />;
      }
      case "fill-blank": {
        const content = activity.content as import("@/types/content").FillBlankContent;
        return <FillBlank content={content} answerKey={activity.answerKey} />;
      }
      case "ordering": {
        const content = activity.content as import("@/types/content").OrderingContent;
        return <OrderingActivity content={content} answerKey={activity.answerKey} />;
      }
      case "text-analysis": {
        const content = activity.content as import("@/types/content").TextAnalysisContent;
        return <TextAnalysisActivity content={content} answerKey={activity.answerKey} />;
      }
      case "vocabulary": {
        const content = activity.content as import("@/types/content").VocabularyContent;
        return <VocabularyActivity content={content} answerKey={activity.answerKey} />;
      }
      case "discussion": {
        const content = activity.content as import("@/types/content").DiscussionContent;
        return <DiscussionActivity content={content} />;
      }
      case "case-study": {
        const content = activity.content as import("@/types/content").CaseStudyContent;
        return <CaseStudyActivity content={content} />;
      }
      case "writing-task": {
        const content = activity.content as import("@/types/content").WritingTaskContent;
        return <WritingTaskActivity content={content} />;
      }
      case "reflection": {
        const content = activity.content as import("@/types/content").ReflectionContent;
        return <ReflectionActivity content={content} />;
      }
      default:
        return null;
    }
  }

  return (
    <div className="space-y-4">
      {activity.title && (
        <h2 className="text-xl font-bold">{activity.title}</h2>
      )}
      {activity.instruction && (
        <p className="text-sm text-muted-foreground">{activity.instruction}</p>
      )}
      {activity.duration && (
        <p className="text-xs text-muted-foreground">Estimated time: {activity.duration} min</p>
      )}
      {renderActivity()}
      <AnswerReveal
        answerKey={activity.answerKey}
        revealed={revealed}
        onReveal={() => setRevealed(true)}
      />
    </div>
  );
}
