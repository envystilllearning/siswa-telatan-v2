"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { type MultipleChoiceContent } from "@/types/content";

interface MultipleChoiceProps {
  content: MultipleChoiceContent;
}

export default function MultipleChoice({ content }: MultipleChoiceProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const isCorrect = selected === content.correctId;

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
      <h3 className="text-lg font-semibold">{content.question}</h3>

      <div className="space-y-2">
        {content.options.map((option) => {
          const isSelected = selected === option.id;
          const isAnswer = option.id === content.correctId;
          const showResult = submitted && isSelected;

          let borderColor = "border-border";
          if (showResult && isCorrect) borderColor = "border-green-500";
          else if (showResult && !isCorrect) borderColor = "border-red-500";
          else if (isSelected) borderColor = "border-primary";
          if (submitted && isAnswer) borderColor = "border-green-500";

          return (
            <button
              key={option.id}
              type="button"
              disabled={submitted}
              onClick={() => setSelected(option.id)}
              className="w-full text-left"
            >
              <Card className={`p-3 transition-colors cursor-pointer hover:bg-muted ${borderColor} ${isSelected && !submitted ? "bg-muted" : ""}`}>
                <div className="flex items-center gap-3">
                  <div className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${isSelected ? "border-primary" : "border-muted-foreground"} shrink-0`}>
                    {isSelected && <div className="h-2.5 w-2.5 rounded-full bg-primary" />}
                  </div>
                  <span className="flex-1">{option.text}</span>
                  {submitted && isAnswer && (
                    <Badge variant="outline" className="bg-green-500/10 text-green-700 border-green-500">
                      Correct
                    </Badge>
                  )}
                  {showResult && !isCorrect && (
                    <Badge variant="outline" className="bg-red-500/10 text-red-700 border-red-500">
                      Incorrect
                    </Badge>
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
        <Card className="p-4 bg-muted/50">
          <p className="text-sm">
            <span className="font-semibold">Explanation:</span> {content.explanation}
          </p>
        </Card>
      )}
    </div>
  );
}
