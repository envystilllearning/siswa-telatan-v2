"use client"

import { useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { AppShell } from "@/components/layout/AppShell"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { chapters } from "@/content/chapters"
import type { Activity } from "@/types/content"

function findAssessment(assessmentId: string): { assessment: Activity; chapterSlug: string } | null {
  for (const chapter of chapters) {
    if (chapter.evaluation) {
      const found = chapter.evaluation.find((a) => a.id === assessmentId)
      if (found) {
        return { assessment: found, chapterSlug: chapter.slug }
      }
    }
  }
  return null
}

export default function AssessmentPage() {
  const params = useParams()
  const id = params.id as string

  const [showAnswer, setShowAnswer] = useState(false)
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({})

  const result = findAssessment(id)

  if (!result) {
    return (
      <AppShell>
        <div className="p-8 text-center">
          <h1 className="text-xl font-bold">Assessment not found</h1>
          <Button render={<Link href="/curriculum" />} variant="outline" className="mt-4">
            Back to Curriculum
          </Button>
        </div>
      </AppShell>
    )
  }

  const { assessment, chapterSlug } = result

  function renderContent() {
    const content = assessment.content

    switch (content.type) {
      case "multiple-choice":
        return (
          <div className="space-y-4">
            <p className="text-lg font-medium">{content.question}</p>
            <div className="grid gap-2">
              {content.options.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSelectedAnswers((p) => ({ ...p, [assessment.id]: opt.id }))}
                  className={`flex items-center gap-3 rounded-lg border p-4 text-left text-sm transition-colors ${
                    selectedAnswers[assessment.id] === opt.id
                      ? "border-primary bg-primary/5"
                      : "hover:bg-muted"
                  } ${showAnswer && opt.id === content.correctId ? "border-green-500 bg-green-500/5" : ""}`}
                >
                  <div className={`size-4 rounded-full border shrink-0 flex items-center justify-center ${
                    selectedAnswers[assessment.id] === opt.id ? "border-primary" : ""
                  }`}>
                    {selectedAnswers[assessment.id] === opt.id && (
                      <div className="size-2 rounded-full bg-primary" />
                    )}
                  </div>
                  <span>{opt.text}</span>
                </button>
              ))}
            </div>
          </div>
        )
      case "true-false":
        return (
          <div className="space-y-3">
            {content.statements.map((stmt) => (
              <div key={stmt.id} className="flex items-start gap-3 rounded-lg border p-4 text-sm">
                <div className="flex gap-2 shrink-0">
                  <button
                    onClick={() => setSelectedAnswers((p) => ({ ...p, [stmt.id]: "true" }))}
                    className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                      selectedAnswers[stmt.id] === "true" ? "bg-primary text-primary-foreground" : "bg-muted"
                    } ${showAnswer && stmt.correct ? "bg-green-500 text-white" : ""}`}
                  >
                    T
                  </button>
                  <button
                    onClick={() => setSelectedAnswers((p) => ({ ...p, [stmt.id]: "false" }))}
                    className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                      selectedAnswers[stmt.id] === "false" ? "bg-primary text-primary-foreground" : "bg-muted"
                    } ${showAnswer && !stmt.correct ? "bg-green-500 text-white" : ""}`}
                  >
                    F
                  </button>
                </div>
                <span>{stmt.text}</span>
              </div>
            ))}
          </div>
        )
      case "fill-blank":
        return (
          <div className="space-y-4">
            <div className="text-lg leading-relaxed">
              {content.sentence.split("___").map((part, i, arr) => (
                <span key={i}>
                  {part}
                  {i < arr.length - 1 && (
                    <input
                      type="text"
                      value={selectedAnswers[`blank-${i}`] || ""}
                      onChange={(e) => setSelectedAnswers((p) => ({ ...p, [`blank-${i}`]: e.target.value }))}
                      className={`inline-block w-24 mx-1 border-b-2 text-center text-sm outline-none bg-transparent ${
                        showAnswer ? "border-green-500 text-green-700" : "border-border focus:border-primary"
                      }`}
                      placeholder="..."
                    />
                  )}
                </span>
              ))}
            </div>
          </div>
        )
      case "writing-task":
        return (
          <div className="space-y-4">
            <p>{content.context}</p>
            <div className="grid gap-2 text-sm">
              <p><span className="font-medium">Purpose:</span> {content.purpose}</p>
              <p><span className="font-medium">Audience:</span> {content.audience}</p>
            </div>
            {content.constraints.length > 0 && (
              <div>
                <p className="font-medium mb-2">Requirements</p>
                <ul className="space-y-1 text-sm">
                  {content.constraints.map((c, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="shrink-0">•</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {content.rubric && (
              <div>
                <p className="font-medium mb-2">Rubric</p>
                <div className="space-y-2">
                  {content.rubric.map((r) => (
                    <div key={r.criterion} className="rounded-lg border p-3 text-sm">
                      <p className="font-medium">{r.criterion}</p>
                      <p className="text-muted-foreground">{r.levels.join(" → ")}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )
      default:
        return (
          <div className="rounded-lg bg-muted p-4 text-sm text-muted-foreground">
            View the lesson page for full details on this assessment.
          </div>
        )
    }
  }

  return (
    <AppShell>
      <div className="p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto space-y-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link
            href={`/chapter/${chapterSlug}`}
            className="hover:text-foreground transition-colors flex items-center gap-1"
          >
            <ArrowLeft className="size-4" />
            Back to chapter
          </Link>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline">Assessment</Badge>
            <Badge variant="secondary">{assessment.type}</Badge>
            {assessment.duration && (
              <span className="text-sm text-muted-foreground">{assessment.duration} min</span>
            )}
          </div>
          <h1 className="text-2xl font-bold tracking-tight">{assessment.title}</h1>
          <p className="text-muted-foreground mt-1">{assessment.instruction}</p>
        </div>

        <Card>
          <CardContent className="py-6">
            {renderContent()}
          </CardContent>
        </Card>

        <div className="flex gap-3">
          <Button onClick={() => setShowAnswer(!showAnswer)}>
            {showAnswer ? "Hide Answers" : "Reveal Answers"}
          </Button>
        </div>

        {showAnswer && assessment.answerKey && (
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Answer Key</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              {Object.entries(assessment.answerKey.answers).length > 0 && (
                <div>
                  <p className="font-medium mb-1">Answers</p>
                  <div className="grid gap-1">
                    {Object.entries(assessment.answerKey.answers).map(([key, val]) => (
                      <p key={key} className="text-muted-foreground">
                        {key}: {val}
                      </p>
                    ))}
                  </div>
                </div>
              )}
              <p className="text-muted-foreground">{assessment.answerKey.explanation}</p>
              {assessment.answerKey.sampleResponse && (
                <div>
                  <p className="font-medium mt-2 mb-1">Sample Response</p>
                  <p className="text-muted-foreground italic">{assessment.answerKey.sampleResponse}</p>
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </AppShell>
  )
}
