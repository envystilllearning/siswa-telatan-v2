"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { type OrderingContent } from "@/types/content";

interface OrderingActivityProps {
  content: OrderingContent;
}

export default function OrderingActivity({ content }: OrderingActivityProps) {
  const [orderedIds, setOrderedIds] = useState<string[]>(() =>
    [...content.items].sort(() => Math.random() - 0.5).map((item) => item.id)
  );
  const [submitted, setSubmitted] = useState(false);

  function moveUp(index: number) {
    if (index === 0 || submitted) return;
    setOrderedIds((prev) => {
      const next = [...prev];
      [next[index - 1], next[index]] = [next[index], next[index - 1]];
      return next;
    });
  }

  function moveDown(index: number) {
    if (index === orderedIds.length - 1 || submitted) return;
    setOrderedIds((prev) => {
      const next = [...prev];
      [next[index], next[index + 1]] = [next[index + 1], next[index]];
      return next;
    });
  }

  function getCorrectPosition(id: string): number {
    const item = content.items.find((i) => i.id === id);
    return item?.correctPosition ?? -1;
  }

  function isItemCorrect(id: string, currentPos: number): boolean {
    return getCorrectPosition(id) === currentPos;
  }

  function handleSubmit() {
    setSubmitted(true);
  }

  function handleReset() {
    setOrderedIds([...content.items].sort(() => Math.random() - 0.5).map((i) => i.id));
    setSubmitted(false);
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">{content.instruction}</p>

      <div className="space-y-2">
        {orderedIds.map((id, index) => {
          const item = content.items.find((i) => i.id === id);
          if (!item) return null;
          const isCorrect = submitted && isItemCorrect(id, index);

          return (
            <Card key={id} className={`p-3 transition-colors ${submitted ? (isCorrect ? "border-green-500 bg-green-500/5" : "border-red-500 bg-red-500/5") : ""}`}>
              <div className="flex items-center gap-3">
                <div className="flex flex-col gap-0.5 shrink-0">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 w-6 p-0"
                    onClick={() => moveUp(index)}
                    disabled={index === 0 || submitted}
                    aria-label="Move up"
                  >
                    ▲
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 w-6 p-0"
                    onClick={() => moveDown(index)}
                    disabled={index === orderedIds.length - 1 || submitted}
                    aria-label="Move down"
                  >
                    ▼
                  </Button>
                </div>
                <Badge variant="outline" className="shrink-0 w-7 justify-center">
                  {index + 1}
                </Badge>
                <span className="flex-1 text-sm">{item.text}</span>
                {submitted && (
                  <Badge variant="outline" className={isCorrect ? "bg-green-500/10 text-green-700 border-green-500" : "bg-red-500/10 text-red-700 border-red-500"}>
                    {isCorrect ? "Correct" : `Position: ${item.correctPosition}`}
                  </Badge>
                )}
              </div>
            </Card>
          );
        })}
      </div>

      <div className="flex gap-2">
        {!submitted ? (
          <Button onClick={handleSubmit}>Check Order</Button>
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
