"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { type OrderingContent } from "@/types/content";
import Burst from "./Burst";

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

      <div className="relative space-y-2">
        <Burst active={submitted && orderedIds.every((id, index) => isItemCorrect(id, index))} />
        {orderedIds.map((id, index) => {
          const item = content.items.find((i) => i.id === id);
          if (!item) return null;
          const isCorrect = submitted && isItemCorrect(id, index);

          return (
            <Card
              key={id}
              className={`hover-lift rounded-xl p-3 transition-colors ${
                submitted
                  ? isCorrect
                    ? "border-green-500 bg-green-500/5"
                    : "border-red-500 bg-red-500/10 animate-shake"
                  : ""
              }`}
            >
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
                <Badge className="w-7 shrink-0 justify-center rounded-lg">
                  {index + 1}
                </Badge>
                <span className="flex-1 text-sm">{item.text}</span>
                {submitted && isCorrect && (
                  <span className="animate-pop flex size-6 shrink-0 items-center justify-center rounded-full bg-green-500 text-white">
                    <Check className="size-4" />
                  </span>
                )}
                {submitted && !isCorrect && (
                  <div className="flex items-center gap-1.5">
                    <span className="animate-pop flex size-6 shrink-0 items-center justify-center rounded-full bg-red-500 text-white">
                      <X className="size-4" />
                    </span>
                    <Badge variant="outline" className="bg-red-500/10 text-red-700 border-red-500">
                      Position: {item.correctPosition}
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
          <Button onClick={handleSubmit}>Check Order</Button>
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
