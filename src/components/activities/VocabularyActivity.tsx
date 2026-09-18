"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { type VocabularyContent } from "@/types/content";

interface VocabularyActivityProps {
  content: VocabularyContent;
}

export default function VocabularyActivity({ content }: VocabularyActivityProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showDefinition, setShowDefinition] = useState(false);
  const [userDefinition, setUserDefinition] = useState("");
  const [checked, setChecked] = useState(false);

  const currentWord = content.words[currentWordIndex];
  const isLast = currentWordIndex === content.words.length - 1;

  function handleCheck() {
    if (!userDefinition.trim()) return;
    setChecked(true);
  }

  function handleNext() {
    setCurrentWordIndex((prev) => prev + 1);
    setShowDefinition(false);
    setUserDefinition("");
    setChecked(false);
  }

  function handleReset() {
    setCurrentWordIndex(0);
    setShowDefinition(false);
    setUserDefinition("");
    setChecked(false);
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground">
          Word {currentWordIndex + 1} of {content.words.length}
        </span>
        <Button variant="ghost" size="sm" onClick={handleReset}>
          Reset
        </Button>
      </div>

      <Card className="p-6">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold">{currentWord.word}</h3>
          {currentWord.phonetic && (
            <p className="text-sm text-muted-foreground">{currentWord.phonetic}</p>
          )}
          <p className="text-sm text-muted-foreground italic">
            Example: &quot;{currentWord.example}&quot;
          </p>

          <div className="space-y-3 pt-4">
            <p className="text-sm font-medium">Write the definition of this word:</p>
            <Input
              value={userDefinition}
              onChange={(e) => setUserDefinition(e.target.value)}
              placeholder="Type the definition here..."
              disabled={checked}
              onKeyDown={(e) => e.key === "Enter" && !checked && handleCheck()}
            />
          </div>

          {!checked && (
            <div className="flex justify-center gap-2 pt-2">
              <Button onClick={handleCheck} disabled={!userDefinition.trim()}>
                Check
              </Button>
              <Button variant="ghost" onClick={() => setShowDefinition(true)}>
                Show Definition
              </Button>
            </div>
          )}

          {(checked || showDefinition) && (
            <div className="pt-4 space-y-2">
              <div className="p-3 rounded-lg bg-muted">
                <p className="text-sm font-medium">Definition:</p>
                <p className="text-sm mt-1">{currentWord.definition}</p>
              </div>
            </div>
          )}

          {checked && (
            <Button onClick={handleNext}>
              {isLast ? "Start Over" : "Next Word"}
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
}
