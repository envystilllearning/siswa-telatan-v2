"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { type AnswerKey } from "@/types/content";

interface AnswerRevealProps {
  answerKey: AnswerKey;
  revealed: boolean;
  onReveal: () => void;
}

export default function AnswerReveal({ answerKey, revealed, onReveal }: AnswerRevealProps) {
  return (
    <div className="mt-4">
      {!revealed ? (
        <Button variant="outline" onClick={onReveal} className="gap-2">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          Reveal Answer
        </Button>
      ) : (
        <Card className="p-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="bg-green-500/10 text-green-700 border-green-500">
              Answer Key
            </Badge>
          </div>

          <div className="space-y-2">
            {Object.entries(answerKey.answers).map(([id, answer]) => (
              <div key={id} className="flex gap-2 text-sm">
                <span className="font-medium text-muted-foreground shrink-0">{id}:</span>
                <span>{answer}</span>
              </div>
            ))}
          </div>

          <div className="pt-2 border-t">
            <p className="text-sm">
              <span className="font-semibold">Explanation:</span> {answerKey.explanation}
            </p>
          </div>

          {answerKey.alternatives && answerKey.alternatives.length > 0 && (
            <div className="pt-2 border-t">
              <p className="text-sm font-semibold mb-1">Alternative Answers:</p>
              <ul className="space-y-1">
                {answerKey.alternatives.map((alt, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex gap-2">
                    <span className="shrink-0">•</span>
                    <span>{alt}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {answerKey.sampleResponse && (
            <div className="pt-2 border-t">
              <p className="text-sm font-semibold mb-1">Sample Response:</p>
              <p className="text-sm text-muted-foreground italic">{answerKey.sampleResponse}</p>
            </div>
          )}

          {answerKey.lookFor && answerKey.lookFor.length > 0 && (
            <div className="pt-2 border-t">
              <p className="text-sm font-semibold mb-1">Look For:</p>
              <ul className="space-y-1">
                {answerKey.lookFor.map((item, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex gap-2">
                    <span className="shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Card>
      )}
    </div>
  );
}
