"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useParams, useSearchParams, useRouter } from "next/navigation"
import { ArrowLeft, ArrowRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { chapters } from "@/content/chapters"
import { getChapterTheme } from "@/lib/chapter-colors"

export default function PresentationPage() {
  const params = useParams()
  const searchParams = useSearchParams()
  const router = useRouter()

  const slug = params.slug as string
  const lessonParam = searchParams.get("lesson")

  const chapter = chapters.find((ch) => ch.slug === slug)
  const theme = chapter ? getChapterTheme(chapter.slug) : null
  const lesson = chapter?.lessons.find((l) => l.slug === lessonParam)

  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = lesson
    ? [
        { type: "title" as const, content: lesson.title, sub: lesson.description },
        ...lesson.objectives.map((obj) => ({
          type: "objective" as const,
          content: obj.description,
          sub: `Level: ${obj.level}`,
        })),
        ...(lesson.modelText
          ? [{ type: "model-text" as const, content: lesson.modelText, sub: "" }]
          : []),
        { type: "explanation" as const, content: lesson.conceptExplanation, sub: "" },
        ...lesson.examples.map((ex) => ({
          type: "example" as const,
          content: ex,
          sub: "",
        })),
        ...(lesson.vocabulary.length > 0
          ? [
              {
                type: "vocabulary" as const,
                content: lesson.vocabulary.map((v) => `${v.word} — ${v.definition}`).join("\n"),
                sub: "",
              },
            ]
          : []),
      ]
    : chapter
    ? [
        { type: "title" as const, content: chapter.title, sub: chapter.question },
        { type: "overview" as const, content: chapter.overview, sub: "" },
        ...chapter.objectives.map((obj) => ({
          type: "objective" as const,
          content: obj.description,
          sub: `Level: ${obj.level}`,
        })),
      ]
    : []

  const totalSlides = slides.length
  const slide = slides[currentSlide]

  function goNext() {
    setCurrentSlide((p) => Math.min(p + 1, totalSlides - 1))
  }

  function goPrev() {
    setCurrentSlide((p) => Math.max(p - 1, 0))
  }

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault()
        setCurrentSlide((p) => Math.min(p + 1, totalSlides - 1))
      } else if (e.key === "ArrowLeft") {
        e.preventDefault()
        setCurrentSlide((p) => Math.max(p - 1, 0))
      } else if (e.key === "Escape") {
        router.back()
      }
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [totalSlides, router])

  if (!chapter || !theme || !slide) {
    return (
      <div className="h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <h1 className="text-xl font-bold">Content not found</h1>
          <Button render={<Link href="/" />} variant="outline">
            Back to Home
          </Button>
        </div>
      </div>
    )
  }

  const slideTypeLabels: Record<string, string> = {
    title: "Title",
    objective: "Objective",
    "model-text": "Model Text",
    explanation: "Explanation",
    example: "Example",
    vocabulary: "Vocabulary",
    overview: "Overview",
  }

  return (
    <div
      data-chapter={theme.key}
      className="h-screen flex flex-col text-white overflow-hidden"
      style={{ background: `linear-gradient(135deg, ${theme.color}, ${theme.deep})` }}
    >
      <div className="dot-grid absolute inset-0 pointer-events-none" />

      <header className="relative flex items-center justify-between px-6 py-4 shrink-0">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => router.back()}
            className="text-white hover:bg-white/15 hover:text-white"
            aria-label="Exit presentation"
          >
            <X className="size-5" />
          </Button>
          <div>
            <p className="text-sm font-semibold">{chapter.title}</p>
            {lesson && (
              <p className="text-xs text-white/70">
                Lesson {lesson.number}: {lesson.title}
              </p>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          <Badge className="bg-white/15 text-white border-white/25 backdrop-blur-sm tabular-nums">
            {currentSlide + 1} / {totalSlides}
          </Badge>
          <Badge className="bg-white/15 text-white border-white/25 backdrop-blur-sm hidden sm:inline-flex">
            {slideTypeLabels[slide.type] || slide.type}
          </Badge>
        </div>
      </header>

      <main className="relative flex-1 flex items-center justify-center px-8 py-10 overflow-hidden">
        <div key={currentSlide} className="max-w-5xl w-full animate-rise">
          {slide.type === "title" ? (
            <div className="text-center space-y-5">
              <h1 className="font-display text-5xl sm:text-7xl font-bold tracking-tight leading-[1.05] text-balance">
                {slide.content}
              </h1>
              {slide.sub && (
                <p className="text-2xl sm:text-3xl text-white/85 leading-snug max-w-3xl mx-auto">
                  {slide.sub}
                </p>
              )}
            </div>
          ) : slide.type === "objective" ? (
            <div className="space-y-5">
              <Badge className="bg-white/15 text-white border-white/25 backdrop-blur-sm text-sm px-3 py-1">
                Learning Objective
              </Badge>
              <p className="font-display text-3xl sm:text-5xl font-semibold leading-[1.2] text-balance">
                {slide.content}
              </p>
              {slide.sub && <p className="text-xl text-white/75 capitalize">{slide.sub}</p>}
            </div>
          ) : slide.type === "vocabulary" ? (
            <div className="space-y-5">
              <Badge className="bg-white/15 text-white border-white/25 backdrop-blur-sm text-sm px-3 py-1">
                Vocabulary
              </Badge>
              <div className="grid gap-4 sm:grid-cols-2">
                {slide.content.split("\n").map((line, i) => (
                  <div
                    key={i}
                    className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-4"
                  >
                    <p className="font-display text-2xl font-bold">{line.split(" — ")[0]}</p>
                    <p className="text-lg text-white/85 mt-1 leading-snug">{line.split(" — ")[1]}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-5">
              {slideTypeLabels[slide.type] && (
                <Badge className="bg-white/15 text-white border-white/25 backdrop-blur-sm text-sm px-3 py-1">
                  {slideTypeLabels[slide.type]}
                </Badge>
              )}
              <div className="font-display text-2xl sm:text-4xl leading-[1.45] whitespace-pre-line text-balance">
                {slide.content}
              </div>
              {slide.sub && <p className="text-xl text-white/75">{slide.sub}</p>}
            </div>
          )}
        </div>
      </main>

      <footer className="relative flex items-center justify-between px-6 py-4 shrink-0">
        <Button
          variant="outline"
          size="lg"
          onClick={goPrev}
          disabled={currentSlide === 0}
          className="border-white/35 text-white hover:bg-white/15 hover:text-white disabled:opacity-30"
        >
          <ArrowLeft className="size-4" />
          Previous
        </Button>

        <div className="hidden md:flex items-center gap-2 text-xs text-white/60">
          <kbd className="rounded-md bg-white/15 border border-white/25 px-2 py-1 font-mono">←</kbd>
          <kbd className="rounded-md bg-white/15 border border-white/25 px-2 py-1 font-mono">→</kbd>
          <span>navigate</span>
          <kbd className="rounded-md bg-white/15 border border-white/25 px-2 py-1 font-mono">Esc</kbd>
          <span>exit</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-200 ${
                  i === currentSlide ? "w-6 bg-white" : "w-2 bg-white/35 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
          <Button
            size="lg"
            onClick={goNext}
            disabled={currentSlide === totalSlides - 1}
            className="bg-white text-gray-900 hover:bg-white/90 font-semibold disabled:opacity-30"
          >
            Next
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </footer>
    </div>
  )
}
