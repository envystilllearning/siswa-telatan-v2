"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  Monitor,
  Clock,
  Play,
  ListChecks,
  Scale,
  Link2,
  TextCursorInput,
  ListOrdered,
  FileText,
  BookOpenText,
  MessagesSquare,
  Briefcase,
  PenLine,
  Lightbulb,
  Repeat2,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { getChapterTheme } from "@/lib/chapter-colors"
import type { Chapter, Lesson, ActivityType } from "@/types/content"

const typeIcons: Record<ActivityType, React.ComponentType<{ className?: string }>> = {
  "multiple-choice": ListChecks,
  "true-false": Scale,
  matching: Link2,
  "fill-blank": TextCursorInput,
  ordering: ListOrdered,
  "text-analysis": FileText,
  vocabulary: BookOpenText,
  discussion: MessagesSquare,
  "case-study": Briefcase,
  "writing-task": PenLine,
  reflection: Lightbulb,
}

function SectionHeader({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <span className="flex items-center justify-center size-9 rounded-xl bg-chapter text-white font-display font-bold text-sm shadow-md shadow-chapter/30">
        {index}
      </span>
      <h2 className="font-display text-lg font-bold tracking-tight">{title}</h2>
    </div>
  )
}

function VocabularyCard({
  word,
  index,
}: {
  word: { word: string; definition: string; example: string; phonetic?: string }
  index: number
}) {
  const [flipped, setFlipped] = useState(false)

  return (
    <button
      type="button"
      onClick={() => setFlipped((f) => !f)}
      className="text-left [perspective:1000px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-2xl"
      aria-pressed={flipped}
    >
      <div className={`flashcard-3d relative h-44 w-full ${flipped ? "flashcard-flipped" : ""}`}>
        <Card className="flashcard-face absolute inset-0 flex flex-col items-center justify-center gap-1.5 p-5 border-2 border-chapter/25 bg-card text-center">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
            Word {index + 1}
          </span>
          <p className="font-display text-2xl font-bold text-chapter">{word.word}</p>
          {word.phonetic && (
            <p className="text-xs text-muted-foreground font-mono">{word.phonetic}</p>
          )}
          <span className="mt-2 inline-flex items-center gap-1 text-[11px] text-muted-foreground">
            <Repeat2 className="size-3" />
            Tap to flip
          </span>
        </Card>
        <Card className="flashcard-face flashcard-back absolute inset-0 flex flex-col justify-center p-5 bg-chapter text-white border-2 border-chapter">
          <p className="text-sm leading-snug font-medium">{word.definition}</p>
          <p className="text-xs text-white/80 italic mt-3 leading-snug">&ldquo;{word.example}&rdquo;</p>
        </Card>
      </div>
    </button>
  )
}

export function LessonView({ chapter, lesson }: { chapter: Chapter; lesson: Lesson }) {
  const theme = getChapterTheme(chapter.slug)

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
    <div data-chapter={theme.key} className="max-w-4xl mx-auto pb-16">
      <section
        className="relative overflow-hidden text-white"
        style={{ background: `linear-gradient(120deg, ${theme.color}, ${theme.deep})` }}
      >
        <div className="dot-grid absolute inset-0" />
        <div className="relative p-6 sm:p-8">
          <div className="flex items-center gap-2 text-sm text-white/80 mb-3">
            <Link href={`/chapter/${chapter.slug}`} className="hover:text-white transition-colors">
              {chapter.title}
            </Link>
            <span>/</span>
            <span>Lesson {lesson.number}</span>
          </div>
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight leading-tight text-balance">
                {lesson.title}
              </h1>
              <p className="text-white/85 mt-2 max-w-xl">{lesson.description}</p>
              <div className="flex flex-wrap items-center gap-2 mt-4 text-sm">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 px-3 py-1.5">
                  <Clock className="size-3.5" />
                  {lesson.duration} min
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 px-3 py-1.5">
                  <Play className="size-3" />
                  {lesson.activities.length} activities
                </span>
              </div>
            </div>
            <Button
              render={<Link href={`/presentation/${chapter.slug}?lesson=${lesson.slug}`} />}
              variant="outline"
              size="sm"
              className="shrink-0 border-white/35 text-white hover:bg-white/10 hover:text-white"
            >
              <Monitor className="size-4" />
              <span className="hidden sm:inline">Presentation</span>
            </Button>
          </div>
        </div>
      </section>

      <div className="p-4 sm:p-6 lg:p-8 space-y-10">
        {lesson.objectives.length > 0 && (
          <section>
            <SectionHeader index="01" title="Learning Objectives" />
            <Card>
              <CardContent className="py-4">
                <ul className="space-y-2.5">
                  {lesson.objectives.map((obj) => (
                    <li key={obj.id} className="flex gap-3 text-sm">
                      <Badge variant="outline" className="shrink-0 text-xs mt-0.5 capitalize border-chapter/40 text-chapter">
                        {obj.level}
                      </Badge>
                      <span>{obj.description}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>
        )}

        {lesson.vocabulary.length > 0 && (
          <section>
            <SectionHeader index="02" title="Key Vocabulary" />
            <p className="text-xs text-muted-foreground -mt-2 mb-3 ml-12">
              Click a card to flip it.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {lesson.vocabulary.map((word, i) => (
                <VocabularyCard key={word.word} word={word} index={i} />
              ))}
            </div>
          </section>
        )}

        {lesson.languageFocus.length > 0 && (
          <section>
            <SectionHeader index="03" title="Language Focus" />
            <div className="flex flex-wrap gap-2 ml-12">
              {lesson.languageFocus.map((lf) => (
                <Badge key={lf} variant="secondary" className="px-3 py-1.5 text-sm rounded-xl">
                  {lf}
                </Badge>
              ))}
            </div>
          </section>
        )}

        <section>
          <SectionHeader index="04" title="Concept Explanation" />
          <Card className="border-l-4 border-l-chapter">
            <CardContent className="py-5">
              <div className="leading-relaxed whitespace-pre-line">
                {lesson.conceptExplanation}
              </div>
            </CardContent>
          </Card>
        </section>

        {lesson.examples.length > 0 && (
          <section>
            <SectionHeader index="05" title="Examples" />
            <div className="space-y-3 ml-0 sm:ml-12">
              {lesson.examples.map((ex, i) => (
                <Card key={i} className="hover-lift border-chapter/20 bg-chapter-soft/40">
                  <CardContent className="py-4">
                    <p className="leading-relaxed whitespace-pre-line">{ex}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {lesson.modelText && (
          <section>
            <SectionHeader index="06" title="Model Text" />
            <Card className="ml-0 sm:ml-12 bg-[linear-gradient(#fff,#fff)] shadow-md">
              <CardContent className="py-6 px-6 sm:px-8">
                <p className="leading-[1.9] [text-indent:2.5rem] first:[text-indent:0] font-[450]">
                  {lesson.modelText}
                </p>
              </CardContent>
            </Card>
          </section>
        )}

        {lesson.activities.length > 0 && (
          <section>
            <SectionHeader index="07" title="Activities" />
            <div className="space-y-3">
              {lesson.activities.map((activity, i) => {
                const Icon = typeIcons[activity.type]
                return (
                  <Card key={activity.id} className="hover-lift border-border/70">
                    <CardContent className="py-4 flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4 min-w-0">
                        <div className="relative shrink-0">
                          <div className="flex items-center justify-center size-12 rounded-2xl bg-chapter-soft text-chapter border border-chapter/20">
                            <Icon className="size-5.5" />
                          </div>
                          <span className="absolute -top-1.5 -left-1.5 flex items-center justify-center size-5 rounded-full bg-chapter text-white text-[10px] font-bold font-display">
                            {i + 1}
                          </span>
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <Badge variant="outline" className="text-[10px]">
                              {activity.type}
                            </Badge>
                            {activity.level && (
                              <Badge variant="secondary" className="text-[10px] capitalize">
                                {activity.level}
                              </Badge>
                            )}
                            {activity.duration && (
                              <span className="text-xs text-muted-foreground">{activity.duration} min</span>
                            )}
                          </div>
                          <p className="font-display font-semibold">{activity.title}</p>
                          <p className="text-sm text-muted-foreground mt-0.5">{activity.instruction}</p>
                        </div>
                      </div>
                      <Button render={<Link href={`/activity/${activity.id}`} />} size="sm" className="shrink-0 mt-1">
                        <Play className="size-4" />
                        Start
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </section>
        )}

        <section className="ml-0 sm:ml-12">
          <Accordion>
            <AccordionItem value="teacher-notes">
              <AccordionTrigger className="text-base font-semibold font-display">
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
        </section>

        <div className="flex items-center justify-between gap-3 border-t pt-6">
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
    </div>
  )
}
