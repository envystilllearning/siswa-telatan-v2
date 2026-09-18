"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import {
  ArrowLeft,
  ArrowRight,
  Monitor,
  Clock,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Play,
} from "lucide-react"
import { AppShell } from "@/components/layout/AppShell"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { chapters } from "@/content/chapters"
import type { Activity, ActivityType } from "@/types/content"

export default function LessonPage() {
  const params = useParams()
  const router = useRouter()
  const slug = params.slug as string
  const lessonSlug = params.lesson as string

  const [showAnswers, setShowAnswers] = useState<Record<string, boolean>>({})

  const chapter = chapters.find((ch) => ch.slug === slug)
  const lesson = chapter?.lessons.find((l) => l.slug === lessonSlug)

  useEffect(() => {
    if (chapter && lesson) {
      localStorage.setItem(
        "lastLesson",
        JSON.stringify({
          chapterSlug: chapter.slug,
          lessonSlug: lesson.slug,
          chapterTitle: chapter.title,
          lessonTitle: lesson.title,
        })
      )
    }
  }, [chapter, lesson])

  if (!chapter || !lesson) {
    return (
      <AppShell>
        <div className="p-8 text-center">
          <h1 className="text-xl font-bold">Lesson not found</h1>
          <Button render={<Link href="/curriculum" />} variant="outline" className="mt-4">
            Back to Curriculum
          </Button>
        </div>
      </AppShell>
    )
  }

  const lessonIndex = chapter.lessons.findIndex((l) => l.slug === lessonSlug)
  const prevLesson = lessonIndex > 0 ? chapter.lessons[lessonIndex - 1] : null
  const nextLesson =
    lessonIndex < chapter.lessons.length - 1
      ? chapter.lessons[lessonIndex + 1]
      : null

  const toggleAnswer = (id: string) => {
    setShowAnswers((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  function renderActivityContent(activity: Activity) {
    const content = activity.content
    const isRevealed = showAnswers[activity.id]

    switch (content.type) {
      case "multiple-choice":
        return (
          <div className="space-y-3">
            <p className="font-medium">{content.question}</p>
            <div className="grid gap-2">
              {content.options.map((opt) => (
                <div
                  key={opt.id}
                  className="flex items-center gap-3 rounded-lg border p-3 text-sm"
                >
                  <div className="size-4 rounded-full border shrink-0" />
                  <span>{opt.text}</span>
                </div>
              ))}
            </div>
            {isRevealed && (
              <div className="rounded-lg bg-muted p-3 text-sm">
                <p className="font-medium">Answer: {content.options.find((o) => o.id === content.correctId)?.text}</p>
                <p className="text-muted-foreground mt-1">{content.explanation}</p>
              </div>
            )}
          </div>
        )
      case "true-false":
        return (
          <div className="space-y-3">
            {content.statements.map((stmt) => (
              <div key={stmt.id} className="flex items-start gap-3 rounded-lg border p-3 text-sm">
                <span className="shrink-0 font-mono text-xs mt-0.5">{stmt.correct ? "T" : "F"}</span>
                <span>{stmt.text}</span>
              </div>
            ))}
            {isRevealed && (
              <div className="rounded-lg bg-muted p-3 text-sm">
                <p className="text-muted-foreground">{content.explanation}</p>
              </div>
            )}
          </div>
        )
      case "fill-blank":
        return (
          <div className="space-y-3">
            <p className="font-medium">{content.sentence}</p>
            {isRevealed && (
              <div className="rounded-lg bg-muted p-3 text-sm">
                {content.blanks.map((blank) => (
                  <p key={blank.id}>
                    Blank {blank.position}: <span className="font-medium">{blank.acceptedAnswers[0]}</span>
                  </p>
                ))}
                <p className="text-muted-foreground mt-2">{content.explanation}</p>
              </div>
            )}
          </div>
        )
      case "matching":
        return (
          <div className="space-y-3">
            <div className="grid gap-2">
              {content.pairs.map((pair) => (
                <div key={pair.id} className="flex items-center gap-3 rounded-lg border p-3 text-sm">
                  <span className="flex-1">{pair.left}</span>
                  <ArrowRight className="size-4 text-muted-foreground shrink-0" />
                  <span className="flex-1 text-right">{pair.right}</span>
                </div>
              ))}
            </div>
            {isRevealed && (
              <div className="rounded-lg bg-muted p-3 text-sm">
                <p className="text-muted-foreground">{content.explanation}</p>
              </div>
            )}
          </div>
        )
      case "ordering":
        return (
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">{content.instruction}</p>
            <div className="space-y-2">
              {content.items
                .sort((a, b) => a.correctPosition - b.correctPosition)
                .map((item, i) => (
                  <div key={item.id} className="flex items-center gap-3 rounded-lg border p-3 text-sm">
                    <span className="size-6 rounded-full bg-muted flex items-center justify-center text-xs font-medium shrink-0">
                      {i + 1}
                    </span>
                    <span>{item.text}</span>
                  </div>
                ))}
            </div>
            {isRevealed && (
              <div className="rounded-lg bg-muted p-3 text-sm">
                <p className="text-muted-foreground">{content.explanation}</p>
              </div>
            )}
          </div>
        )
      case "vocabulary":
        return (
          <div className="space-y-3">
            {content.words.map((word) => (
              <div key={word.word} className="rounded-lg border p-3 text-sm">
                <p className="font-medium">{word.word}</p>
                <p className="text-muted-foreground">{word.definition}</p>
                <p className="text-muted-foreground italic mt-1">&ldquo;{word.example}&rdquo;</p>
              </div>
            ))}
          </div>
        )
      case "discussion":
        return (
          <div className="space-y-3">
            <div className="rounded-lg bg-muted p-4">
              <p className="font-medium">{content.prompt}</p>
            </div>
            <div className="grid gap-2 text-sm">
              {content.thinkingTime && (
                <p className="text-muted-foreground">Thinking time: {content.thinkingTime} minutes</p>
              )}
              {content.pairInstruction && (
                <p className="text-muted-foreground">Pair work: {content.pairInstruction}</p>
              )}
              {content.shareOutPrompt && (
                <p className="text-muted-foreground">Share out: {content.shareOutPrompt}</p>
              )}
            </div>
          </div>
        )
      case "writing-task":
        return (
          <div className="space-y-3">
            <p className="text-sm">{content.context}</p>
            <div className="grid gap-2 text-sm">
              <p><span className="font-medium">Purpose:</span> {content.purpose}</p>
              <p><span className="font-medium">Audience:</span> {content.audience}</p>
            </div>
            {content.constraints.length > 0 && (
              <div>
                <p className="text-sm font-medium mb-2">Requirements</p>
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
                <p className="text-sm font-medium mb-2">Checklist</p>
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
            {isRevealed && content.rubric && (
              <div className="rounded-lg bg-muted p-3 text-sm">
                <p className="font-medium mb-2">Rubric</p>
                <div className="space-y-2">
                  {content.rubric.map((r) => (
                    <div key={r.criterion}>
                      <p className="font-medium">{r.criterion}</p>
                      <p className="text-muted-foreground">{r.levels.join(" → ")}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )
      case "reflection":
        return (
          <div className="space-y-3">
            {content.prompts.map((prompt) => (
              <div key={prompt.id} className="rounded-lg border p-3 text-sm">
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
                <div key={q.id} className="rounded-lg border p-3 text-sm">
                  <p className="font-medium mb-2">{q.question}</p>
                  <div className="grid gap-1.5">
                    {q.options.map((opt) => (
                      <div key={opt.id} className="flex items-center gap-2">
                        <div className="size-3.5 rounded-full border shrink-0" />
                        <span>{opt.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            {isRevealed && (
              <div className="rounded-lg bg-muted p-3 text-sm">
                <p className="text-muted-foreground">
                  {content.questions.map((q) => (
                    <span key={q.id}>
                      Q: {q.options.find((o) => o.id === q.correctId)?.text}{" "}
                    </span>
                  ))}
                </p>
              </div>
            )}
          </div>
        )
      default:
        return (
          <div className="rounded-lg bg-muted p-4 text-sm text-muted-foreground">
            Activity content type not yet supported for inline display.
          </div>
        )
    }
  }

  return (
    <AppShell>
      <div className="p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto space-y-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <Link href={`/chapter/${chapter.slug}`} className="hover:text-foreground transition-colors">
                {chapter.title}
              </Link>
              <span>/</span>
              <span>Lesson {lesson.number}</span>
            </div>
            <h1 className="text-2xl font-bold tracking-tight">{lesson.title}</h1>
            <p className="text-muted-foreground mt-1">{lesson.description}</p>
            <div className="flex items-center gap-3 mt-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Clock className="size-4" />
                <span>{lesson.duration} min</span>
              </div>
              <span>·</span>
              <span>{lesson.activities.length} activities</span>
            </div>
          </div>
          <Button render={<Link href={`/presentation/${chapter.slug}?lesson=${lesson.slug}`} />} variant="outline" size="sm" className="shrink-0">
            <Monitor className="size-4" />
            Presentation Mode
          </Button>
        </div>

        {lesson.objectives.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold mb-3">Objectives</h2>
            <Card>
              <CardContent className="py-4">
                <ul className="space-y-2">
                  {lesson.objectives.map((obj) => (
                    <li key={obj.id} className="flex gap-3 text-sm">
                      <Badge variant="outline" className="shrink-0 text-xs mt-0.5">
                        {obj.level}
                      </Badge>
                      <span>{obj.description}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        )}

        {lesson.vocabulary.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold mb-3">Vocabulary</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {lesson.vocabulary.map((word) => (
                <Card key={word.word}>
                  <CardContent className="py-4">
                    <p className="font-medium">{word.word}</p>
                    {word.phonetic && (
                      <p className="text-xs text-muted-foreground font-mono">{word.phonetic}</p>
                    )}
                    <p className="text-sm text-muted-foreground mt-1">{word.definition}</p>
                    <p className="text-sm text-muted-foreground italic mt-1">&ldquo;{word.example}&rdquo;</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {lesson.languageFocus.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold mb-3">Language Focus</h2>
            <div className="flex flex-wrap gap-2">
              {lesson.languageFocus.map((lf) => (
                <Badge key={lf} variant="secondary">
                  {lf}
                </Badge>
              ))}
            </div>
          </div>
        )}

        <div>
          <h2 className="text-lg font-semibold mb-3">Concept Explanation</h2>
          <Card>
            <CardContent className="py-4">
              <div className="text-sm leading-relaxed whitespace-pre-line">
                {lesson.conceptExplanation}
              </div>
            </CardContent>
          </Card>
        </div>

        {lesson.examples.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold mb-3">Examples</h2>
            <div className="space-y-3">
              {lesson.examples.map((ex, i) => (
                <Card key={i}>
                  <CardContent className="py-4">
                    <p className="text-sm leading-relaxed">{ex}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {lesson.modelText && (
          <div>
            <h2 className="text-lg font-semibold mb-3">Model Text</h2>
            <Card>
              <CardContent className="py-4">
                <p className="text-sm leading-relaxed italic">{lesson.modelText}</p>
              </CardContent>
            </Card>
          </div>
        )}

        {lesson.activities.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold mb-3">Activities</h2>
            <div className="space-y-4">
              {lesson.activities.map((activity) => (
                <Card key={activity.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="outline" className="text-xs">
                            {activity.type}
                          </Badge>
                          {activity.level && (
                            <Badge variant="secondary" className="text-xs">
                              {activity.level}
                            </Badge>
                          )}
                          {activity.duration && (
                            <span className="text-xs text-muted-foreground">
                              {activity.duration} min
                            </span>
                          )}
                        </div>
                        <CardTitle className="text-base">{activity.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">{activity.instruction}</p>
                    {renderActivityContent(activity)}
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleAnswer(activity.id)}
                      >
                        {showAnswers[activity.id] ? (
                          <>
                            <ChevronUp className="size-4" />
                            Hide Answer
                          </>
                        ) : (
                          <>
                            <ChevronDown className="size-4" />
                            Reveal Answer
                          </>
                        )}
                      </Button>
                      <Button render={<Link href={`/activity/${activity.id}`} />} size="sm">
                        <Play className="size-4" />
                        Start Activity
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        <div>
          <Accordion>
            <AccordionItem value="teacher-notes">
              <AccordionTrigger>Teacher Notes</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-medium mb-1">Objective</p>
                    <p className="text-muted-foreground">{lesson.teacherNotes.objective}</p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="font-medium mb-1">Time</p>
                      <p className="text-muted-foreground">{lesson.teacherNotes.time}</p>
                    </div>
                    <div>
                      <p className="font-medium mb-1">Grouping</p>
                      <p className="text-muted-foreground">{lesson.teacherNotes.grouping}</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Teacher Prompt</p>
                    <p className="text-muted-foreground">{lesson.teacherNotes.teacherPrompt}</p>
                  </div>
                  {lesson.teacherNotes.expectedResponse && (
                    <div>
                      <p className="font-medium mb-1">Expected Response</p>
                      <p className="text-muted-foreground">{lesson.teacherNotes.expectedResponse}</p>
                    </div>
                  )}
                  {lesson.teacherNotes.commonDifficulty && (
                    <div>
                      <p className="font-medium mb-1">Common Difficulty</p>
                      <p className="text-muted-foreground">{lesson.teacherNotes.commonDifficulty}</p>
                    </div>
                  )}
                  {lesson.teacherNotes.followUp && (
                    <div>
                      <p className="font-medium mb-1">Follow-up</p>
                      <p className="text-muted-foreground">{lesson.teacherNotes.followUp}</p>
                    </div>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="flex items-center justify-between border-t pt-6">
          {prevLesson ? (
            <Button render={<Link href={`/chapter/${chapter.slug}/lesson/${prevLesson.slug}`} />} variant="outline">
              <ArrowLeft className="size-4" />
              {prevLesson.title}
            </Button>
          ) : (
            <div />
          )}
          {nextLesson ? (
            <Button render={<Link href={`/chapter/${chapter.slug}/lesson/${nextLesson.slug}`} />}>
              {nextLesson.title}
              <ArrowRight className="size-4" />
            </Button>
          ) : (
            <Button render={<Link href={`/chapter/${chapter.slug}`} />}>
              Complete Chapter
              <ArrowRight className="size-4" />
            </Button>
          )}
        </div>
      </div>
    </AppShell>
  )
}
