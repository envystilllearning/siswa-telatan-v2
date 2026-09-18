"use client"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface QuickVoteProps {
  question: string
  options: string[]
}

export function QuickVote({ question, options }: QuickVoteProps) {
  const [votes, setVotes] = useState<Record<string, number>>(
    options.reduce((acc, opt) => ({ ...acc, [opt]: 0 }), {} as Record<string, number>)
  )
  const [hasVoted, setHasVoted] = useState(false)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  const totalVotes = Object.values(votes).reduce((sum, v) => sum + v, 0)

  const handleVote = useCallback((option: string) => {
    setVotes((prev) => ({ ...prev, [option]: prev[option] + 1 }))
    setSelectedOption(option)
    setHasVoted(true)
  }, [])

  const handleReset = () => {
    setVotes(options.reduce((acc, opt) => ({ ...acc, [opt]: 0 }), {} as Record<string, number>))
    setHasVoted(false)
    setSelectedOption(null)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center text-2xl md:text-3xl">{question}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-3 sm:grid-cols-2">
          {options.map((option) => {
            const count = votes[option]
            const percentage = totalVotes > 0 ? Math.round((count / totalVotes) * 100) : 0
            const isSelected = selectedOption === option

            return (
              <button
                key={option}
                onClick={() => !hasVoted && handleVote(option)}
                disabled={hasVoted}
                className={`relative flex flex-col items-center justify-center gap-2 rounded-xl border-2 p-6 text-center transition-all duration-300 ${
                  isSelected
                    ? "border-primary bg-primary/10"
                    : "border-border hover:border-primary/50 hover:bg-muted"
                } ${hasVoted ? "cursor-default" : "cursor-pointer"}`}
                aria-label={`${option}, ${count} votes`}
              >
                <span className="text-xl font-medium md:text-2xl">{option}</span>
                {hasVoted && (
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold tabular-nums">{count}</span>
                    <span className="text-sm text-muted-foreground">({percentage}%)</span>
                  </div>
                )}
                {hasVoted && (
                  <div className="absolute bottom-0 left-0 h-1.5 rounded-b-xl bg-primary transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                  />
                )}
              </button>
            )
          })}
        </div>

        {hasVoted && (
          <div className="space-y-4 text-center">
            <p className="text-lg text-muted-foreground">
              Total votes: <span className="font-semibold text-foreground">{totalVotes}</span>
            </p>
            <Button size="lg" variant="outline" onClick={handleReset} className="text-base">
              Reset
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
