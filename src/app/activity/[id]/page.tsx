"use client"

import { useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { AppShell } from "@/components/layout/AppShell"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { chapters } from "@/content/chapters"
import type { Activity } from "@/types/content"

function findActivity(activityId: string): { activity: Activity; chapterSlug: string; lessonSlug: string } | null {
  for (const chapter of chapters) {
    for (const lesson of chapter.lessons) {
      const found = lesson.activities.find((a) => a.id === activityId)
      if (found) {
        return { activity: found, chapterSlug: chapter.slug, lessonSlug: lesson.slug }
      }
    }
    const foundEval = chapter.evaluation.find((a) => a.id === activityId)
    if (foundEval) {
      return { activity: foundEval, chapterSlug: chapter.slug, lessonSlug: "" }
    }
    const foundRem = chapter.remedial.find((a) => a.id === activityId)
    if (foundRem) {
      return { activity: foundRem, chapterSlug: chapter.slug, lessonSlug: "" }
    }
    const foundEnr = chapter.enrichment.find((a) => a.id === activityId)
    if (foundEnr) {
      return { activity: foundEnr, chapterSlug: chapter.slug, lessonSlug: "" }
    }
  }
  return null
}

export default function ActivityPage() {
  const params = useParams()
  const id = params.id as string

  const [showAnswer, setShowAnswer] = useState(false)
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({})

  const result = findActivity(id)

  if (!result) {
    return (
      <AppShell>
        <div className="p-8 text-center">
          <h1 className="text-xl font-bold">Activity not found</h1>
          <Button render={<Link href="/curriculum" />} variant="outline" className="mt-4">
            Back to Curriculum
          </Button>
        </div>
      </AppShell>
    )
  }

  const { activity, chapterSlug, lessonSlug } = result

  function renderContent() {
    const content = activity.content

    switch (content.type) {
      case "multiple-choice":
        return (
          <div className="space-y-4">
            <p className="text-lg font-medium">{content.question}</p>
            <div className="grid gap-2">
              {content.options.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSelectedAnswers((p) => ({ ...p, [activity.id]: opt.id }))}
                  className={`flex items-center gap-3 rounded-lg border p-4 text-left text-sm transition-colors ${
                    selectedAnswers[activity.id] === opt.id
                      ? "border-primary bg-primary/5"
                      : "hover:bg-muted"
                  } ${showAnswer && opt.id === content.correctId ? "border-green-500 bg-green-500/5" : ""} ${showAnswer && selectedAnswers[activity.id] === opt.id && opt.id !== content.correctId ? "border-red-500 bg-red-500/5" : ""}`}
                >
                  <div className={`size-4 rounded-full border shrink-0 flex items-center justify-center ${
                    selectedAnswers[activity.id] === opt.id ? "border-primary" : ""
                  }`}>
                    {selectedAnswers[activity.id] === opt.id && (
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
                    } ${showAnswer && stmt.correct ? "bg-green-500 text-white" : ""} ${showAnswer && selectedAnswers[stmt.id] === "true" && !stmt.correct ? "bg-red-500 text-white" : ""}`}
                  >
                    T
                  </button>
                  <button
                    onClick={() => setSelectedAnswers((p) => ({ ...p, [stmt.id]: "false" }))}
                    className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                      selectedAnswers[stmt.id] === "false" ? "bg-primary text-primary-foreground" : "bg-muted"
                    } ${showAnswer && !stmt.correct ? "bg-green-500 text-white" : ""} ${showAnswer && selectedAnswers[stmt.id] === "false" && stmt.correct ? "bg-red-500 text-white" : ""}`}
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
                        showAnswer
                          ? "border-green-500 text-green-700"
                          : "border-border focus:border-primary"
                      }`}
                      placeholder="..."
                    />
                  )}
                </span>
              ))}
            </div>
          </div>
        )
      case "matching":
        return (
          <div className="space-y-3">
            {content.pairs.map((pair) => (
              <div key={pair.id} className="flex items-center gap-3 rounded-lg border p-3 text-sm">
                <span className="flex-1 font-medium">{pair.left}</span>
                <ArrowLeft className="size-4 text-muted-foreground shrink-0 rotate-180" />
                <span className="flex-1 text-right">{pair.right}</span>
              </div>
            ))}
          </div>
        )
      case "ordering":
        return (
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">{content.instruction}</p>
            {content.items.map((item, i) => (
              <div key={item.id} className="flex items-center gap-3 rounded-lg border p-3 text-sm">
                <span className="size-6 rounded-full bg-muted flex items-center justify-center text-xs font-medium shrink-0">
                  {i + 1}
                </span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        )
      case "vocabulary":
        return (
          <div className="grid gap-3 sm:grid-cols-2">
            {content.words.map((word) => (
              <Card key={word.word}>
                <CardContent className="py-4">
                  <p className="font-medium">{word.word}</p>
                  <p className="text-sm text-muted-foreground">{word.definition}</p>
                  <p className="text-sm text-muted-foreground italic mt-1">&ldquo;{word.example}&rdquo;</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )
      case "discussion":
        return (
          <div className="space-y-4">
            <div className="rounded-lg bg-muted p-6">
              <p className="text-lg font-medium">{content.prompt}</p>
            </div>
            {content.thinkingTime && (
              <p className="text-sm text-muted-foreground">Thinking time: {content.thinkingTime} minutes</p>
            )}
            {content.pairInstruction && (
              <p className="text-sm text-muted-foreground">Pair work: {content.pairInstruction}</p>
            )}
            {content.shareOutPrompt && (
              <p className="text-sm text-muted-foreground">Share out: {content.shareOutPrompt}</p>
            )}
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
            {content.checklist.length > 0 && (
              <div>
                <p className="font-medium mb-2">Checklist</p>
                <ul className="space-y-1 text-sm">
                  {content.checklist.map((c, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="size-3.5 text-muted-foreground shrink-0" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )
      case "reflection":
        return (
          <div className="space-y-3">
            {content.prompts.map((prompt) => (
              <div key={prompt.id} className="rounded-lg border p-4 text-sm">
                <Badge variant="outline" className="mb-2 text-xs">
                  {prompt.type}
                </Badge>
                <p>{prompt.question}</p>
              </div>
            ))}
          </div>
        )
      case "text-analysis":
        return (
          <div className="space-y-4">
            <div className="rounded-lg bg-muted p-4 text-sm leading-relaxed">
              {content.text}
            </div>
            <div className="space-y-3">
              {content.questions.map((q) => (
                <div key={q.id} className="rounded-lg border p-4 text-sm">
                  <p className="font-medium mb-2">{q.question}</p>
                  <div className="grid gap-1.5">
                    {q.options.map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => setSelectedAnswers((p) => ({ ...p, [q.id]: opt.id }))}
                        className={`flex items-center gap-2 rounded-md p-2 text-left transition-colors ${
                          selectedAnswers[q.id] === opt.id ? "bg-primary/5" : "hover:bg-muted"
                        }`}
                      >
                        <div className={`size-3.5 rounded-full border shrink-0 flex items-center justify-center ${
                          selectedAnswers[q.id] === opt.id ? "border-primary" : ""
                        }`}>
                          {selectedAnswers[q.id] === opt.id && (
                            <div className="size-1.5 rounded-full bg-primary" />
                          )}
                        </div>
                        <span>{opt.text}</span>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      default:
        return (
          <div className="rounded-lg bg-muted p-4 text-sm text-muted-foreground">
            Interactive mode not available for this activity type. View the lesson page for details.
          </div>
        )
    }
  }

  return (
    <AppShell>
      <div className="p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto space-y-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link
            href={lessonSlug ? `/chapter/${chapterSlug}/lesson/${lessonSlug}` : `/chapter/${chapterSlug}`}
            className="hover:text-foreground transition-colors flex items-center gap-1"
          >
            <ArrowLeft className="size-4" />
            Back to lesson
          </Link>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline">{activity.type}</Badge>
            {activity.level && <Badge variant="secondary">{activity.level}</Badge>}
            {activity.duration && (
              <span className="text-sm text-muted-foreground">{activity.duration} min</span>
            )}
          </div>
          <h1 className="text-2xl font-bold tracking-tight">{activity.title}</h1>
          <p className="text-muted-foreground mt-1">{activity.instruction}</p>
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

        {showAnswer && activity.answerKey && (
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Answer Key</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              {Object.entries(activity.answerKey.answers).length > 0 && (
                <div>
                  <p className="font-medium mb-1">Answers</p>
                  <div className="grid gap-1">
                    {Object.entries(activity.answerKey.answers).map(([key, val]) => (
                      <p key={key} className="text-muted-foreground">
                        {key}: {val}
                      </p>
                    ))}
                  </div>
                </div>
              )}
              <p className="text-muted-foreground">{activity.answerKey.explanation}</p>
              {activity.answerKey.sampleResponse && (
                <div>
                  <p className="font-medium mt-2 mb-1">Sample Response</p>
                  <p className="text-muted-foreground italic">{activity.answerKey.sampleResponse}</p>
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </AppShell>
  )
}
