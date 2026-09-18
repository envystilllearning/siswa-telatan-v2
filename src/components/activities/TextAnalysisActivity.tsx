"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { type TextAnalysisContent } from "@/types/content";
import Burst from "./Burst";

interface TextAnalysisActivityProps {
  content: TextAnalysisContent;
}

export default function TextAnalysisActivity({ content }: TextAnalysisActivityProps) {
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
      <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
        <p className="whitespace-pre-wrap text-sm leading-relaxed">{content.text}</p>
      </div>

      <div className="relative space-y-4">
        <Burst active={submitted && content.questions.every((q) => answers[q.id] === q.correctId)} />
        <h3 className="font-display font-semibold text-base">Questions</h3>
        {content.questions.map((question, index) => {
          const selectedId = answers[question.id];

          return (
            <Card key={question.id} className="rounded-xl p-4">
              <p className="font-display font-semibold mb-3">{index + 1}. {question.question}</p>
              <div className="space-y-2">
                {question.options.map((option) => {
                  const isSelected = selectedId === option.id;
                  const isCorrect = option.id === question.correctId;
                  const showResult = submitted;
                  const showShake = showResult && isSelected && !isCorrect;

                  return (
                    <button
                      key={option.id}
                      type="button"
                      disabled={submitted}
                      onClick={() => handleSelect(question.id, option.id)}
                      className="w-full text-left"
                    >
                      <Card
                        className={`rounded-xl p-3 transition-colors cursor-pointer hover:bg-muted ${
                          showResult && isCorrect
                            ? "border-green-500 bg-green-500/10"
                            : showResult && isSelected && !isCorrect
                              ? "border-red-500 bg-red-500/10"
                              : isSelected
                                ? "border-primary ring-2 ring-primary"
                                : ""
                        } ${showShake ? "animate-shake" : ""}`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${isSelected ? "border-primary" : "border-muted-foreground"} shrink-0`}>
                            {isSelected && <div className="h-2.5 w-2.5 rounded-full bg-primary" />}
                          </div>
                          <span className="flex-1 text-sm">{option.text}</span>
                          {showResult && isCorrect && (
                            <span className="animate-pop flex size-6 shrink-0 items-center justify-center rounded-full bg-green-500 text-white">
                              <Check className="size-4" />
                            </span>
                          )}
                          {showResult && isSelected && !isCorrect && (
                            <span className="animate-pop flex size-6 shrink-0 items-center justify-center rounded-full bg-red-500 text-white">
                              <X className="size-4" />
                            </span>
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
