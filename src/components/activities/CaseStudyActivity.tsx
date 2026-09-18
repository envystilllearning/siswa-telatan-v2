"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { type CaseStudyContent } from "@/types/content";

interface CaseStudyActivityProps {
  content: CaseStudyContent;
}

export default function CaseStudyActivity({ content }: CaseStudyActivityProps) {
  const [responses, setResponses] = useState<Record<number, string>>({});

  function handleResponseChange(index: number, value: string) {
    setResponses((prev) => ({ ...prev, [index]: value }));
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <Card className="p-4">
          <h4 className="font-medium mb-2 flex items-center gap-2">
            <Badge variant="outline">Context</Badge>
          </h4>
          <p className="text-sm leading-relaxed">{content.context}</p>
        </Card>

        <Card className="p-4 border-amber-500/30 bg-amber-500/5">
          <h4 className="font-medium mb-2 flex items-center gap-2">
            <Badge variant="outline" className="bg-amber-500/10 border-amber-500">Problem</Badge>
          </h4>
          <p className="text-sm leading-relaxed">{content.problem}</p>
        </Card>

        {content.evidence.length > 0 && (
          <Card className="p-4">
            <h4 className="font-medium mb-2">Evidence</h4>
            <ul className="space-y-2">
              {content.evidence.map((item, i) => (
                <li key={i} className="text-sm flex gap-2">
                  <span className="text-muted-foreground shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        )}
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold">Questions</h3>
        {content.questions.map((question, index) => (
          <Card key={index} className="p-4 space-y-3">
            <p className="font-medium text-sm">{index + 1}. {question}</p>
            <Textarea
              value={responses[index] || ""}
              onChange={(e) => handleResponseChange(index, e.target.value)}
              placeholder="Type your response here..."
              className="min-h-[80px]"
            />
          </Card>
        ))}
      </div>
    </div>
  );
}
