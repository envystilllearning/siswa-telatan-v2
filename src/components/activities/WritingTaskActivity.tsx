"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { type WritingTaskContent } from "@/types/content";

interface WritingTaskActivityProps {
  content: WritingTaskContent;
}

export default function WritingTaskActivity({ content }: WritingTaskActivityProps) {
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});
  const [writing, setWriting] = useState("");

  function toggleCheck(index: number) {
    setCheckedItems((prev) => ({ ...prev, [index]: !prev[index] }));
  }

  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const totalItems = content.checklist.length;

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <Card className="p-4">
          <h4 className="font-medium mb-1">Context</h4>
          <p className="text-sm text-muted-foreground">{content.context}</p>
        </Card>
        <div className="grid grid-cols-2 gap-3">
          <Card className="p-3">
            <h4 className="text-xs font-medium text-muted-foreground mb-1">Purpose</h4>
            <p className="text-sm">{content.purpose}</p>
          </Card>
          <Card className="p-3">
            <h4 className="text-xs font-medium text-muted-foreground mb-1">Audience</h4>
            <p className="text-sm">{content.audience}</p>
          </Card>
        </div>
      </div>

      {content.constraints.length > 0 && (
        <Card className="p-4">
          <h4 className="font-medium mb-2">Constraints</h4>
          <ul className="space-y-1">
            {content.constraints.map((constraint, i) => (
              <li key={i} className="text-sm flex gap-2">
                <span className="text-muted-foreground shrink-0">•</span>
                <span>{constraint}</span>
              </li>
            ))}
          </ul>
        </Card>
      )}

      <Card className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-medium">Writing Checklist</h4>
          <Badge variant="outline">{checkedCount}/{totalItems}</Badge>
        </div>
        <div className="space-y-2">
          {content.checklist.map((item, i) => (
            <label key={i} className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={checkedItems[i] || false}
                onChange={() => toggleCheck(i)}
                className="mt-1 h-4 w-4 rounded border-input shrink-0"
              />
              <span className="text-sm">{item}</span>
            </label>
          ))}
        </div>
      </Card>

      <Card className="p-4 space-y-3">
        <h4 className="font-medium">Your Writing</h4>
        <Textarea
          value={writing}
          onChange={(e) => setWriting(e.target.value)}
          placeholder="Start writing here..."
          className="min-h-[200px]"
        />
      </Card>

      {content.rubric && content.rubric.length > 0 && (
        <Card className="p-4">
          <h4 className="font-medium mb-3">Rubric</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 pr-4 font-medium">Criterion</th>
                  {content.rubric[0]?.levels.map((_, i) => (
                    <th key={i} className="text-center py-2 px-2 font-medium">Level {i + 1}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {content.rubric.map((row, i) => (
                  <tr key={i} className="border-b last:border-0">
                    <td className="py-2 pr-4 font-medium">{row.criterion}</td>
                    {row.levels.map((level, j) => (
                      <td key={j} className="py-2 px-2 text-center text-muted-foreground">{level}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}
    </div>
  );
}
