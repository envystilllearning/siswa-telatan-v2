"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { type MultipleChoiceContent } from "@/types/content";
import Burst from "./Burst";

interface MultipleChoiceProps {
  content: MultipleChoiceContent;
}

export default function MultipleChoice({ content }: MultipleChoiceProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit() {
    if (!selected) return;
    setSubmitted(true);
  }

  function handleReset() {
    setSelected(null);
    setSubmitted(false);
  }

  return (
    <div className="space-y-4">
      <h3 className="font-display font-semibold text-lg">{content.question}</h3>

      <div className="relative space-y-2">
        <Burst active={submitted && selected === content.correctId} />
        {content.options.map((option) => {
          const isSelected = selected === option.id;
          const isAnswer = option.id === content.correctId;
          const showResult = submitted && isSelected;
          const showShake = submitted && isSelected && !isAnswer;

          return (
            <button
              key={option.id}
              type="button"
              disabled={submitted}
              onClick={() => setSelected(option.id)}
              className="w-full text-left"
            >
              <Card
                className={`rounded-xl p-3 transition-colors cursor-pointer hover:bg-muted ${
                  submitted && isAnswer
                    ? "border-green-500 bg-green-500/10"
                    : showResult
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
                  <span className="flex-1">{option.text}</span>
                  {submitted && isAnswer && (
                    <span className="animate-pop flex size-6 shrink-0 items-center justify-center rounded-full bg-green-500 text-white">
                      <Check className="size-4" />
                    </span>
                  )}
                  {showResult && !isAnswer && (
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

      <div className="flex gap-2">
        {!submitted ? (
          <Button onClick={handleSubmit} disabled={!selected}>
            Check Answer
          </Button>
        ) : (
          <Button variant="outline" onClick={handleReset}>
            Try Again
          </Button>
        )}
      </div>

      {submitted && (
        <Card className="animate-rise rounded-xl border-l-4 border-primary bg-muted/60 p-4">
          <p className="text-sm">
            <span className="font-semibold">Explanation:</span> {content.explanation}
          </p>
        </Card>
      )}
    </div>
  );
}
