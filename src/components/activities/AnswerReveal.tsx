"use client";

import { Eye } from "lucide-react";
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
          <Eye className="size-4" />
          Reveal Answer
        </Button>
      ) : (
        <Card className="animate-rise space-y-3 p-4 text-sm">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="gap-1.5 bg-green-500/10 text-green-700 border-green-500">
              <Eye className="size-3" />
              Answer Key
            </Badge>
          </div>

          <div className="grid gap-1.5">
            {Object.entries(answerKey.answers).map(([id, answer]) => (
              <div key={id} className="flex gap-2">
                <span className="font-medium text-muted-foreground shrink-0">{id}:</span>
                <span>{answer}</span>
              </div>
            ))}
          </div>

          <div className="border-t pt-2">
            <p>
              <span className="font-semibold">Explanation:</span> {answerKey.explanation}
            </p>
          </div>

          {answerKey.alternatives && answerKey.alternatives.length > 0 && (
            <div className="border-t pt-2">
              <p className="font-semibold mb-1">Alternative Answers:</p>
              <ul className="space-y-1">
                {answerKey.alternatives.map((alt, i) => (
                  <li key={i} className="text-muted-foreground flex gap-2">
                    <span className="shrink-0">•</span>
                    <span>{alt}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {answerKey.sampleResponse && (
            <div className="border-t pt-2">
              <p className="font-semibold mb-1">Sample Response:</p>
              <p className="text-muted-foreground italic">{answerKey.sampleResponse}</p>
            </div>
          )}

          {answerKey.lookFor && answerKey.lookFor.length > 0 && (
            <div className="border-t pt-2">
              <p className="font-semibold mb-1">Look For:</p>
              <ul className="space-y-1">
                {answerKey.lookFor.map((item, i) => (
                  <li key={i} className="text-muted-foreground flex gap-2">
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
