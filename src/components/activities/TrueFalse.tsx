"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { type TrueFalseContent } from "@/types/content";

interface TrueFalseProps {
  content: TrueFalseContent;
}

export default function TrueFalse({ content }: TrueFalseProps) {
  const [answers, setAnswers] = useState<Record<string, boolean | null>>({});
  const [submitted, setSubmitted] = useState(false);

  function handleSelect(id: string, value: boolean) {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [id]: value }));
  }

  function handleSubmit() {
    if (!content.statements.every((s) => answers[s.id] !== null && answers[s.id] !== undefined)) return;
    setSubmitted(true);
  }

  function handleReset() {
    setAnswers({});
    setSubmitted(false);
  }

  return (
    <div className="space-y-4">
      <div className="space-y-3">
        {content.statements.map((statement, index) => {
          const answer = answers[statement.id];
          const showResult = submitted;
          const isCorrectAnswer = answer === statement.correct;

          return (
            <Card key={statement.id} className={`p-4 transition-colors ${showResult ? (isCorrectAnswer ? "border-green-500 bg-green-500/5" : "border-red-500 bg-red-500/5") : ""}`}>
              <p className="mb-3 font-medium">{index + 1}. {statement.text}</p>
              <div className="flex gap-2">
                <Button
                  variant={answer === true ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleSelect(statement.id, true)}
                  disabled={submitted}
                  className="min-w-20"
                >
                  True
                </Button>
                <Button
                  variant={answer === false ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleSelect(statement.id, false)}
                  disabled={submitted}
                  className="min-w-20"
                >
                  False
                </Button>
                {showResult && (
                  <Badge
                    variant="outline"
                    className={isCorrectAnswer ? "bg-green-500/10 text-green-700 border-green-500 ml-2" : "bg-red-500/10 text-red-700 border-red-500 ml-2"}
                  >
                    {isCorrectAnswer ? "Correct" : `Answer: ${statement.correct ? "True" : "False"}`}
                  </Badge>
                )}
              </div>
            </Card>
          );
        })}
      </div>

      <div className="flex gap-2">
        {!submitted ? (
          <Button onClick={handleSubmit} disabled={!content.statements.every((s) => answers[s.id] !== null && answers[s.id] !== undefined)}>
            Check Answers
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
