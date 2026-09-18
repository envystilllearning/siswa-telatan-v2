"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { type TrueFalseContent } from "@/types/content";
import Burst from "./Burst";

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
      <div className="relative space-y-3">
        <Burst active={submitted && content.statements.every((s) => answers[s.id] === s.correct)} />
        {content.statements.map((statement, index) => {
          const answer = answers[statement.id];
          const showResult = submitted;
          const isCorrectAnswer = answer === statement.correct;

          return (
            <Card
              key={statement.id}
              className={`rounded-xl p-4 transition-colors ${
                showResult
                  ? isCorrectAnswer
                    ? "border-green-500 bg-green-500/5"
                    : "border-red-500 bg-red-500/10 animate-shake"
                  : ""
              }`}
            >
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
                {showResult && isCorrectAnswer && (
                  <span className="animate-pop ml-2 flex size-6 shrink-0 items-center justify-center self-center rounded-full bg-green-500 text-white">
                    <Check className="size-4" />
                  </span>
                )}
                {showResult && !isCorrectAnswer && (
                  <div className="ml-2 flex items-center gap-1.5">
                    <span className="animate-pop flex size-6 shrink-0 items-center justify-center rounded-full bg-red-500 text-white">
                      <X className="size-4" />
                    </span>
                    <Badge variant="outline" className="bg-red-500/10 text-red-700 border-red-500">
                      Answer: {statement.correct ? "True" : "False"}
                    </Badge>
                  </div>
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
        <Card className="animate-rise rounded-xl border-l-4 border-primary bg-muted/60 p-4">
          <p className="text-sm">
            <span className="font-semibold">Explanation:</span> {content.explanation}
          </p>
        </Card>
      )}
    </div>
  );
}
