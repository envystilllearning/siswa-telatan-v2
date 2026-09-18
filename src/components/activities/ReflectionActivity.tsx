"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { type ReflectionContent } from "@/types/content";

interface ReflectionActivityProps {
  content: ReflectionContent;
}

const typeLabels: Record<string, string> = {
  understanding: "Understanding",
  difficulty: "Difficulty",
  application: "Application",
  "next-step": "Next Step",
};

const typeColors: Record<string, string> = {
  understanding: "bg-blue-500/10 text-blue-700 border-blue-500",
  difficulty: "bg-amber-500/10 text-amber-700 border-amber-500",
  application: "bg-green-500/10 text-green-700 border-green-500",
  "next-step": "bg-purple-500/10 text-purple-700 border-purple-500",
};

export default function ReflectionActivity({ content }: ReflectionActivityProps) {
  const [responses, setResponses] = useState<Record<string, string>>({});

  function handleResponseChange(id: string, value: string) {
    setResponses((prev) => ({ ...prev, [id]: value }));
  }

  const filledCount = Object.values(responses).filter((v) => v.trim()).length;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Reflect on your learning. Take your time.
        </p>
        <Badge variant="outline">{filledCount}/{content.prompts.length} completed</Badge>
      </div>

      {content.prompts.map((prompt) => (
        <Card key={prompt.id} className="p-4 space-y-3">
          <div className="flex items-start gap-3">
            <Badge variant="outline" className={`shrink-0 ${typeColors[prompt.type] || ""}`}>
              {typeLabels[prompt.type] || prompt.type}
            </Badge>
            <p className="font-medium text-sm flex-1">{prompt.question}</p>
          </div>
          <Textarea
            value={responses[prompt.id] || ""}
            onChange={(e) => handleResponseChange(prompt.id, e.target.value)}
            placeholder="Write your reflection here..."
            className="min-h-[80px]"
          />
        </Card>
      ))}
    </div>
  );
}
