"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { type TextAnalysisContent, type AnswerKey } from "@/types/content";

interface TextAnalysisActivityProps {
  content: TextAnalysisContent;
  answerKey: AnswerKey;
}

export default function TextAnalysisActivity({ content, answerKey }: TextAnalysisActivityProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  function handleSelect(questionId: string, optionId: string) {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [questionId]: optionId }));
  }

  function handleSubmit() {
    if (!content.questions.every((q) => answers[q.id])) return;
    setSubmitted(true);
  }

  function handleReset() {
    setAnswers({});
    setSubmitted(false);
  }

  return (
    <div className="space-y-6">
      <Card className="p-4 bg-muted/30">
        <p className="whitespace-pre-wrap text-sm leading-relaxed">{content.text}</p>
      </Card>

      <div className="space-y-4">
        <h3 className="text-base font-semibold">Questions</h3>
        {content.questions.map((question, index) => {
          const selectedId = answers[question.id];

          return (
            <Card key={question.id} className="p-4">
              <p className="font-medium mb-3">{index + 1}. {question.question}</p>
              <div className="space-y-2">
                {question.options.map((option) => {
                  const isSelected = selectedId === option.id;
                  const isCorrect = option.id === question.correctId;
                  const showResult = submitted;

                  let borderClass = "border-border";
                  if (showResult && isSelected && isCorrect) borderClass = "border-green-500";
                  else if (showResult && isSelected && !isCorrect) borderClass = "border-red-500";
                  else if (showResult && isCorrect) borderClass = "border-green-500 border-dashed";

                  return (
                    <button
                      key={option.id}
                      type="button"
                      disabled={submitted}
                      onClick={() => handleSelect(question.id, option.id)}
                      className="w-full text-left"
                    >
                      <Card className={`p-3 transition-colors cursor-pointer hover:bg-muted ${borderClass} ${isSelected && !submitted ? "bg-muted" : ""}`}>
                        <div className="flex items-center gap-3">
                          <div className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${isSelected ? "border-primary" : "border-muted-foreground"} shrink-0`}>
                            {isSelected && <div className="h-2.5 w-2.5 rounded-full bg-primary" />}
                          </div>
                          <span className="flex-1 text-sm">{option.text}</span>
                          {showResult && isCorrect && (
                            <Badge variant="outline" className="bg-green-500/10 text-green-700 border-green-500 text-xs">
                              Correct
                            </Badge>
                          )}
                          {showResult && isSelected && !isCorrect && (
                            <Badge variant="outline" className="bg-red-500/10 text-red-700 border-red-500 text-xs">
                              Incorrect
                            </Badge>
                          )}
                        </div>
                      </Card>
                    </button>
                  );
                })}
              </div>
            </Card>
          );
        })}
      </div>

      <div className="flex gap-2">
        {!submitted ? (
          <Button onClick={handleSubmit} disabled={!content.questions.every((q) => answers[q.id])}>
            Check Answers
          </Button>
        ) : (
          <Button variant="outline" onClick={handleReset}>
            Try Again
          </Button>
        )}
      </div>
    </div>
  );
}
