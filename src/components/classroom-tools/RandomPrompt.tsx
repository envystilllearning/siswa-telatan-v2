"use client"

import { useState, useCallback, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface RandomPromptProps {
  prompts: string[]
}

export function RandomPrompt({ prompts }: RandomPromptProps) {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null)
  const [shownIndices, setShownIndices] = useState<Set<number>>(new Set())
  const [fadeIn, setFadeIn] = useState(false)

  const unseenPrompts = useMemo(() => {
    return prompts.map((_, i) => i).filter((i) => !shownIndices.has(i))
  }, [prompts, shownIndices])

  const allShown = unseenPrompts.length === 0

  const drawPrompt = useCallback(() => {
    const pool = unseenPrompts.length > 0 ? unseenPrompts : prompts.map((_, i) => i)
    if (pool.length === 0) return

    setFadeIn(false)
    setTimeout(() => {
      const randomIndex = pool[Math.floor(Math.random() * pool.length)]
      setCurrentIndex(randomIndex)
      setShownIndices((prev) => new Set([...prev, randomIndex]))
      setFadeIn(true)
    }, 100)
  }, [unseenPrompts, prompts])

  const handleDrawAgain = () => {
    drawPrompt()
  }

  const handleReset = () => {
    setFadeIn(false)
    setTimeout(() => {
      setCurrentIndex(null)
      setShownIndices(new Set())
    }, 100)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Random Prompt
          <Badge variant="secondary">
            {shownIndices.size}/{prompts.length}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex min-h-[12rem] items-center justify-center">
          {currentIndex !== null ? (
            <p
              className={`text-center text-2xl font-medium text-foreground transition-opacity duration-500 md:text-3xl ${
                fadeIn ? "opacity-100" : "opacity-0"
              }`}
              aria-live="polite"
            >
              {prompts[currentIndex]}
            </p>
          ) : (
            <p className="text-center text-lg text-muted-foreground">
              Press the button to draw a prompt
            </p>
          )}
        </div>

        {allShown && shownIndices.size > 0 && (
          <p className="text-center text-sm text-muted-foreground">
            All prompts have been shown!
          </p>
        )}

        <div className="flex flex-wrap items-center justify-center gap-3">
          {currentIndex === null ? (
            <Button size="lg" onClick={drawPrompt} className="min-w-[8rem] text-base">
              Draw Prompt
            </Button>
          ) : (
            <>
              <Button size="lg" onClick={handleDrawAgain} className="min-w-[8rem] text-base">
                Draw Again
              </Button>
              <Button size="lg" variant="outline" onClick={handleReset}>
                Reset All
              </Button>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
