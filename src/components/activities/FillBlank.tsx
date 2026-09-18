"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { type FillBlankContent, type AnswerKey } from "@/types/content";

interface FillBlankProps {
  content: FillBlankContent;
  answerKey: AnswerKey;
}

export default function FillBlank({ content, answerKey }: FillBlankProps) {
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
                    className={`inline-block w-32 text-center h-8 ${submitted ? (isCorrect ? "border-green-500 bg-green-500/5" : "border-red-500 bg-red-500/5") : ""}`}
                    aria-label={`Blank ${blank?.position || blankId}`}
                  />
                  {submitted && !isCorrect && (
                    <span className="text-xs text-red-600 block mt-1">
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
        <Card className="p-4 bg-muted/50">
          <p className="text-sm">
            <span className="font-semibold">Explanation:</span> {content.explanation}
          </p>
        </Card>
      )}
    </div>
  );
}
