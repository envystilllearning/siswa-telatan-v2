"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ExitTicketProps {
  questions: string[]
}

export function ExitTicket({ questions }: ExitTicketProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [responses, setResponses] = useState<Record<number, string>>(
    questions.reduce((acc, _, i) => ({ ...acc, [i]: "" }), {} as Record<number, string>)
  )
  const [viewAll, setViewAll] = useState(false)

  const handleResponseChange = (value: string) => {
    setResponses((prev) => ({ ...prev, [currentIndex]: value }))
  }

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent, action: () => void) => {
    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
      action()
    }
  }

  const answeredCount = Object.values(responses).filter((r) => r.trim().length > 0).length

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Exit Ticket
          <div className="flex gap-2">
            <Badge variant="secondary">
              {answeredCount}/{questions.length}
            </Badge>
            <Button
              variant={viewAll ? "default" : "outline"}
              size="sm"
              onClick={() => setViewAll(!viewAll)}
            >
              {viewAll ? "One at a Time" : "View All"}
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {viewAll ? (
          <div className="space-y-6">
            {questions.map((question, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-start gap-2">
                  <Badge variant="outline" className="mt-0.5 shrink-0">
                    {index + 1}
                  </Badge>
                  <p className="text-lg font-medium">{question}</p>
                </div>
                <Textarea
                  placeholder="Write your response..."
                  value={responses[index]}
                  onChange={(e) =>
                    setResponses((prev) => ({ ...prev, [index]: e.target.value }))
                  }
                  className="min-h-[5rem] text-base"
                  aria-label={`Response for question ${index + 1}`}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            <div className="space-y-2">
              <Badge variant="outline">
                Question {currentIndex + 1} of {questions.length}
              </Badge>
              <p className="text-xl font-medium md:text-2xl">{questions[currentIndex]}</p>
            </div>
            <Textarea
              placeholder="Write your response..."
              value={responses[currentIndex]}
              onChange={(e) => handleResponseChange(e.target.value)}
              onKeyDown={(e) => handleKeyDown(e, handleNext)}
              className="min-h-[8rem] text-base"
              aria-label={`Response for question ${currentIndex + 1}`}
            />
            <div className="flex items-center justify-between">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentIndex === 0}
                className="text-base"
              >
                Previous
              </Button>
              <Button
                onClick={handleNext}
                disabled={currentIndex === questions.length - 1}
                className="text-base"
              >
                Next Question
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
