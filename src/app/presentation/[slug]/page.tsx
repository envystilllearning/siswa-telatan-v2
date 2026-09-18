"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useParams, useSearchParams, useRouter } from "next/navigation"
import { ArrowLeft, ArrowRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { chapters } from "@/content/chapters"

export default function PresentationPage() {
  const params = useParams()
  const searchParams = useSearchParams()
  const router = useRouter()

  const slug = params.slug as string
  const lessonParam = searchParams.get("lesson")

  const chapter = chapters.find((ch) => ch.slug === slug)
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

  if (!chapter || !slide) {
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
    <div className="h-screen flex flex-col bg-background overflow-hidden">
      <div className="flex items-center justify-between px-6 py-4 border-b border-border shrink-0">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => router.back()}>
            <X className="size-5" />
          </Button>
          <div>
            <p className="text-sm font-medium">{chapter.title}</p>
            {lesson && (
              <p className="text-xs text-muted-foreground">
                Lesson {lesson.number}: {lesson.title}
              </p>
            )}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Badge variant="outline">
            {currentSlide + 1} / {totalSlides}
          </Badge>
          {slide && (
            <Badge variant="secondary">
              {slideTypeLabels[slide.type] || slide.type}
            </Badge>
          )}
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center px-8 py-12 overflow-hidden">
        <div className="max-w-4xl w-full space-y-6">
          {slide?.type === "title" ? (
            <div className="text-center space-y-4">
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight">
                {slide.content}
              </h1>
              {slide.sub && (
                <p className="text-2xl text-muted-foreground">{slide.sub}</p>
              )}
            </div>
          ) : slide?.type === "objective" ? (
            <div className="space-y-4">
              <Badge variant="outline" className="text-sm">
                Learning Objective
              </Badge>
              <p className="text-3xl sm:text-4xl font-medium leading-snug">
                {slide.content}
              </p>
              {slide.sub && (
                <p className="text-lg text-muted-foreground">{slide.sub}</p>
              )}
            </div>
          ) : slide?.type === "vocabulary" ? (
            <div className="space-y-4">
              <Badge variant="outline" className="text-sm">
                Vocabulary
              </Badge>
              <div className="space-y-4">
                {slide.content.split("\n").map((line, i) => (
                  <div key={i} className="rounded-lg bg-muted px-6 py-4">
                    <p className="text-2xl font-medium">{line.split(" — ")[0]}</p>
                    <p className="text-lg text-muted-foreground mt-1">
                      {line.split(" — ")[1]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {slideTypeLabels[slide?.type || ""] && (
                <Badge variant="outline" className="text-sm">
                  {slideTypeLabels[slide?.type || ""]}
                </Badge>
              )}
              <div className="text-2xl sm:text-3xl leading-relaxed whitespace-pre-line">
                {slide?.content}
              </div>
              {slide?.sub && (
                <p className="text-lg text-muted-foreground">{slide.sub}</p>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between px-6 py-4 border-t border-border shrink-0">
        <Button
          variant="outline"
          size="lg"
          onClick={goPrev}
          disabled={currentSlide === 0}
        >
          <ArrowLeft className="size-4" />
          Previous
        </Button>

        <div className="flex gap-1">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`size-2 rounded-full transition-colors ${
                i === currentSlide ? "bg-primary" : "bg-muted"
              }`}
            />
          ))}
        </div>

        <Button
          size="lg"
          onClick={goNext}
          disabled={currentSlide === totalSlides - 1}
        >
          Next
          <ArrowRight className="size-4" />
        </Button>
      </div>
    </div>
  )
}
