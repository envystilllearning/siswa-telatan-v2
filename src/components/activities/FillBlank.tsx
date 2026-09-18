"use client";

import { useState, useMemo } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { type FillBlankContent } from "@/types/content";
import Burst from "./Burst";

interface FillBlankProps {
  content: FillBlankContent;
}

export default function FillBlank({ content }: FillBlankProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const sentenceParts = useMemo(() => {
    const sortedBlanks = [...content.blanks].sort((a, b) => a.position - b.position);
    const parts: { type: "text"; value: string }[] = [];
    let lastIndex = 0;

    const fullText = content.sentence;

    sortedBlanks.forEach((blank) => {
      const blankIndex = fullText.indexOf("_".repeat(3), lastIndex);
      if (blankIndex === -1) return;

      if (blankIndex > lastIndex) {
        parts.push({ type: "text", value: fullText.slice(lastIndex, blankIndex) });
      }
      parts.push({ type: "text", value: `__BLANK_${blank.id}__` });
      lastIndex = blankIndex + 3;
    });

    if (lastIndex < fullText.length) {
      parts.push({ type: "text", value: fullText.slice(lastIndex) });
    }

    return { parts, sortedBlanks };
  }, [content]);

  function isBlankCorrect(blankId: string): boolean {
    const blank = content.blanks.find((b) => b.id === blankId);
    if (!blank) return false;
    const userAnswer = (answers[blankId] || "").trim().toLowerCase();
    return blank.acceptedAnswers.some((a) => a.toLowerCase() === userAnswer);
  }

  function handleSubmit() {
    if (!content.blanks.every((b) => (answers[b.id] || "").trim())) return;
    setSubmitted(true);
  }

  function handleReset() {
    setAnswers({});
    setSubmitted(false);
  }

  return (
    <div className="space-y-4">
      <div className="relative">
        <Burst active={submitted && content.blanks.every((b) => isBlankCorrect(b.id))} />
        <Card className="p-4">
          <p className="text-base leading-relaxed whitespace-pre-wrap">
            {sentenceParts.parts.map((part, i) => {
              if (part.value.startsWith("__BLANK_")) {
                const blankId = part.value.replace("__BLANK_", "").replace("__", "");
                const blank = content.blanks.find((b) => b.id === blankId);
                const isCorrect = submitted && isBlankCorrect(blankId);

                return (
                  <span key={i} className="inline-block mx-1">
                    <Input
                      value={answers[blankId] || ""}
                      onChange={(e) => setAnswers((prev) => ({ ...prev, [blankId]: e.target.value }))}
                      disabled={submitted}
                      placeholder="..."
                      className={`inline-block h-8 w-32 rounded-lg border-2 text-center ${submitted ? (isCorrect ? "border-green-500 bg-green-500/5" : "border-red-500 bg-red-500/5") : ""}`}
                      aria-label={`Blank ${blank?.position || blankId}`}
                    />
                    {submitted && isCorrect && (
                      <Check className="ml-0.5 inline size-3.5 animate-pop align-middle text-green-600" />
                    )}
                    {submitted && !isCorrect && (
                      <span className="animate-rise mt-1 block text-xs text-red-600">
                        Answer: {blank?.acceptedAnswers[0]}
                      </span>
                    )}
                  </span>
                );
              }
              return <span key={i}>{part.value}</span>;
            })}
          </p>
        </Card>
      </div>

      <div className="flex gap-2">
        {!submitted ? (
          <Button onClick={handleSubmit} disabled={!content.blanks.every((b) => (answers[b.id] || "").trim())}>
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
