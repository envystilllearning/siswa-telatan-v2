"use client"

import { useEffect } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  Monitor,
  Clock,
  Play,
} from "lucide-react"
import { Card, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import type { Chapter, Lesson } from "@/types/content"

export function LessonView({ chapter, lesson }: { chapter: Chapter; lesson: Lesson }) {
  useEffect(() => {
    localStorage.setItem(
      "lastLesson",
      JSON.stringify({
        chapterSlug: chapter.slug,
        lessonSlug: lesson.slug,
        chapterTitle: chapter.title,
        lessonTitle: lesson.title,
      })
    )
  }, [chapter, lesson])

  const lessonIndex = chapter.lessons.findIndex((l) => l.slug === lesson.slug)
  const prevLesson = lessonIndex > 0 ? chapter.lessons[lessonIndex - 1] : null
  const nextLesson =
    lessonIndex < chapter.lessons.length - 1
      ? chapter.lessons[lessonIndex + 1]
      : null

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto space-y-8">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
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
          Presentation
        </Button>
      </div>

      {lesson.objectives.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold mb-3">Learning Objectives</h2>
          <Card>
            <CardContent className="py-4">
              <ul className="space-y-2">
                {lesson.objectives.map((obj) => (
                  <li key={obj.id} className="flex gap-3 text-sm">
                    <Badge variant="outline" className="shrink-0 text-xs mt-0.5 capitalize">
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
          <h2 className="text-lg font-semibold mb-3">Key Vocabulary</h2>
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
                  <p className="text-sm leading-relaxed whitespace-pre-line">{ex}</p>
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
              <p className="text-sm leading-relaxed">{lesson.modelText}</p>
            </CardContent>
          </Card>
        </div>
      )}

      {lesson.activities.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold mb-3">Activities</h2>
          <div className="space-y-3">
            {lesson.activities.map((activity, i) => (
              <Card key={activity.id}>
                <CardContent className="py-4 flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="text-xs font-medium text-muted-foreground">
                        Activity {i + 1}
                      </span>
                      <Badge variant="outline" className="text-xs">
                        {activity.type}
                      </Badge>
                      {activity.level && (
                        <Badge variant="secondary" className="text-xs capitalize">
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
                    <p className="text-sm text-muted-foreground mt-1">{activity.instruction}</p>
                  </div>
                  <Button render={<Link href={`/activity/${activity.id}`} />} size="sm" className="shrink-0">
                    <Play className="size-4" />
                    Start
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      <Accordion>
        <AccordionItem value="teacher-notes">
          <AccordionTrigger className="text-base font-semibold">
            Teacher Notes
          </AccordionTrigger>
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

      <div className="flex items-center justify-between border-t pt-6">
        {prevLesson ? (
          <Button render={<Link href={`/chapter/${chapter.slug}/lesson/${prevLesson.slug}`} />} variant="outline">
            <ArrowLeft className="size-4" />
            <span className="hidden sm:inline">{prevLesson.title}</span>
            <span className="sm:hidden">Previous</span>
          </Button>
        ) : (
          <div />
        )}
        {nextLesson ? (
          <Button render={<Link href={`/chapter/${chapter.slug}/lesson/${nextLesson.slug}`} />}>
            <span className="hidden sm:inline">{nextLesson.title}</span>
            <span className="sm:hidden">Next</span>
            <ArrowRight className="size-4" />
          </Button>
        ) : (
          <Button render={<Link href={`/chapter/${chapter.slug}`} />}>
            Finish Chapter
            <ArrowRight className="size-4" />
          </Button>
        )}
      </div>
    </div>
  )
}
