"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { type MatchingContent } from "@/types/content";

interface MatchingGameProps {
  content: MatchingContent;
}

function shuffleArray<T>(items: T[]): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function MatchingGame({ content }: MatchingGameProps) {
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [selectedRight, setSelectedRight] = useState<string | null>(null);
  const [matches, setMatches] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [shuffledRight] = useState(() =>
    shuffleArray(content.pairs.map((p) => ({ id: p.id, text: p.right })))
  );

  const correctMap = useMemo(() => {
    const map: Record<string, string> = {};
    content.pairs.forEach((p) => {
      map[p.id] = p.id;
    });
    return map;
  }, [content.pairs]);

  function handleLeftClick(id: string) {
    if (submitted) return;
    setSelectedLeft(id);
    if (selectedRight) {
      setMatches((prev) => ({ ...prev, [id]: selectedRight }));
      setSelectedLeft(null);
      setSelectedRight(null);
    }
  }

  function handleRightClick(id: string) {
    if (submitted) return;
    setSelectedRight(id);
    if (selectedLeft) {
      setMatches((prev) => ({ ...prev, [selectedLeft]: id }));
      setSelectedLeft(null);
      setSelectedRight(null);
    }
  }

  function handleUnmatch(leftId: string) {
    if (submitted) return;
    setMatches((prev) => {
      const next = { ...prev };
      delete next[leftId];
      return next;
    });
  }

  function handleSubmit() {
    if (Object.keys(matches).length !== content.pairs.length) return;
    setSubmitted(true);
  }

  function handleReset() {
    setMatches({});
    setSelectedLeft(null);
    setSelectedRight(null);
    setSubmitted(false);
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        Click a left item, then click its matching right item.
      </p>

      <div className="grid grid-cols-[1fr_auto_1fr] gap-4">
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-muted-foreground mb-2">Match these</h4>
          {content.pairs.map((pair) => {
            const matchId = matches[pair.id];
            const isSelected = selectedLeft === pair.id;
            const isCorrectMatch = submitted && matchId === pair.id;

            return (
              <button
                key={pair.id}
                type="button"
                disabled={submitted}
                onClick={() => handleLeftClick(pair.id)}
                className="w-full text-left"
              >
                <Card className={`p-3 transition-all cursor-pointer hover:bg-muted ${isSelected ? "border-primary ring-1 ring-primary" : ""} ${isCorrectMatch ? "border-green-500" : ""} ${submitted && matchId && !isCorrectMatch ? "border-red-500" : ""}`}>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm">{pair.left}</span>
                    {matchId && (
                      <div className="flex items-center gap-1">
                        {submitted ? (
                          <Badge variant="outline" className={isCorrectMatch ? "bg-green-500/10 text-green-700 border-green-500 text-xs" : "bg-red-500/10 text-red-700 border-red-500 text-xs"}>
                            {isCorrectMatch ? "Correct" : "Wrong"}
                          </Badge>
                        ) : (
                          <button type="button" onClick={(e) => { e.stopPropagation(); handleUnmatch(pair.id); }} className="text-xs text-muted-foreground hover:text-foreground">
                            ✕
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </Card>
              </button>
            );
          })}
        </div>

        <div className="flex flex-col items-center justify-center gap-2 text-muted-foreground">
          {content.pairs.map((pair) => (
            <div key={pair.id} className="h-[52px] flex items-center">
              {matches[pair.id] ? (
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              ) : (
                <div className="h-4 w-4" />
              )}
            </div>
          ))}
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-medium text-muted-foreground mb-2">With these</h4>
          {shuffledRight.map((item) => {
            const isSelected = selectedRight === item.id;
            const matchedByLeft = Object.entries(matches).find((entry) => entry[1] === item.id);
            const isCorrectMatch = submitted && matchedByLeft && correctMap[matchedByLeft[0]] === item.id;

            return (
              <button
                key={item.id}
                type="button"
                disabled={submitted}
                onClick={() => handleRightClick(item.id)}
                className="w-full text-left"
              >
                <Card className={`p-3 transition-all cursor-pointer hover:bg-muted ${isSelected ? "border-primary ring-1 ring-primary" : ""} ${isCorrectMatch ? "border-green-500" : ""} ${submitted && matchedByLeft && !isCorrectMatch ? "border-red-500" : ""}`}>
                  <span className="text-sm">{item.text}</span>
                </Card>
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex gap-2">
        {!submitted ? (
          <Button onClick={handleSubmit} disabled={Object.keys(matches).length !== content.pairs.length}>
            Check Matches
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
