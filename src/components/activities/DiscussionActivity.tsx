"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { type DiscussionContent } from "@/types/content";

interface DiscussionActivityProps {
  content: DiscussionContent;
}

export default function DiscussionActivity({ content }: DiscussionActivityProps) {
  const [timer, setTimer] = useState(content.thinkingTime);
  const [isRunning, setIsRunning] = useState(false);
  const [phase, setPhase] = useState<"intro" | "thinking" | "discussion" | "shareout">("intro");

  useEffect(() => {
    if (!isRunning || timer <= 0) return;
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          setIsRunning(false);
          setPhase("discussion");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isRunning, timer]);

  function startThinking() {
    setTimer(content.thinkingTime);
    setIsRunning(true);
    setPhase("thinking");
  }

  function formatTime(seconds: number) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  }

  return (
    <div className="space-y-6">
      <Card className="p-6 border-primary/20 bg-primary/5">
        <h3 className="text-lg font-semibold mb-2">Discussion Prompt</h3>
        <p className="text-base leading-relaxed">{content.prompt}</p>
      </Card>

      {phase === "intro" && (
        <div className="space-y-4">
          <Button onClick={startThinking}>Start Thinking Time</Button>
        </div>
      )}

      {phase === "thinking" && (
        <Card className="p-6 text-center">
          <p className="text-sm text-muted-foreground mb-2">Thinking Time</p>
          <p className="text-4xl font-mono font-bold">{formatTime(timer)}</p>
          <p className="text-sm text-muted-foreground mt-4">
            Use this time to think about your answer individually.
          </p>
        </Card>
      )}

      {phase === "discussion" && (
        <div className="space-y-4">
          {content.pairInstruction && (
            <Card className="p-4">
              <h4 className="font-medium mb-1">Pair Discussion</h4>
              <p className="text-sm text-muted-foreground">{content.pairInstruction}</p>
            </Card>
          )}
          {content.groupInstruction && (
            <Card className="p-4">
              <h4 className="font-medium mb-1">Group Discussion</h4>
              <p className="text-sm text-muted-foreground">{content.groupInstruction}</p>
            </Card>
          )}
          <Button onClick={() => setPhase("shareout")}>
            Ready to Share Out
          </Button>
        </div>
      )}

      {phase === "shareout" && content.shareOutPrompt && (
        <Card className="p-6 border-accent-foreground/20 bg-accent/10">
          <h4 className="font-medium mb-2">Share Out</h4>
          <p className="text-sm">{content.shareOutPrompt}</p>
          <Button variant="ghost" size="sm" className="mt-3" onClick={() => setPhase("discussion")}>
            Back to Discussion
          </Button>
        </Card>
      )}
    </div>
  );
}
