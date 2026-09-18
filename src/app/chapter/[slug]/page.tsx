import Link from "next/link"
import { notFound } from "next/navigation"
import { Clock, BookOpen, ArrowRight, Target } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AppShell } from "@/components/layout/AppShell"
import { chapters } from "@/content/chapters"
import { getChapterTheme } from "@/lib/chapter-colors"
import { ChapterHeroIllustration } from "@/components/chapter/ChapterHeroIllustration"
import { ChapterTabs } from "@/components/chapter/ChapterTabs"

export function generateStaticParams() {
  return chapters.map((ch) => ({ slug: ch.slug }))
}

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const chapter = chapters.find((ch) => ch.slug === slug)

  if (!chapter) {
    notFound()
  }

  const theme = getChapterTheme(chapter.slug)
  const firstLesson = chapter.lessons[0]

  return (
    <AppShell>
      <div data-chapter={theme.key} className="max-w-5xl mx-auto pb-16">
      <section
        className="relative overflow-hidden text-white"
        style={{ background: `linear-gradient(120deg, ${theme.color}, ${theme.deep})` }}
      >
        <div className="dot-grid absolute inset-0" />
        <span className="absolute -top-8 right-4 font-display font-bold text-[150px] leading-none text-white/10 select-none hidden sm:block">
          {String(chapter.number).padStart(2, "0")}
        </span>
        <ChapterHeroIllustration slug={slug} />
        <div className="relative p-6 sm:p-10 lg:pr-[22rem]">
          <Badge className="bg-white/15 text-white border-white/25 backdrop-blur-sm mb-4">
            Chapter {chapter.number} · Semester {chapter.semester}
          </Badge>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight leading-[1.08] text-balance">
            {chapter.title}
          </h1>
          <p className="mt-3 text-xl sm:text-2xl font-display italic text-white/90 max-w-2xl leading-snug">
            &ldquo;{chapter.question}&rdquo;
          </p>
          <div className="flex flex-wrap items-center gap-2 mt-5 text-sm">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 px-3 py-1.5">
              <Clock className="size-3.5" />
              {chapter.estimatedTime}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 px-3 py-1.5">
              <BookOpen className="size-3.5" />
              {chapter.lessons.length} lessons
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 px-3 py-1.5 capitalize">
              {chapter.textType} text
            </span>
          </div>
        </div>
      </section>

      <div className="p-4 sm:p-6 lg:p-8 space-y-8">
        <Card className="border-border/70">
          <CardContent className="py-5 space-y-4">
            <p className="leading-relaxed">{chapter.overview}</p>
            <div className="flex flex-wrap gap-2">
              {chapter.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="capitalize">
                  {skill}
                </Badge>
              ))}
              {chapter.languageFocus.map((lf) => (
                <Badge key={lf} variant="outline">
                  {lf}
                </Badge>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 pt-1">
              {firstLesson && (
                <Button render={<Link href={`/chapter/${chapter.slug}/lesson/${firstLesson.slug}`} />} size="lg" className="shadow-md">
                  Start Chapter
                  <ArrowRight className="size-4" />
                </Button>
              )}
              <Button render={<Link href="/curriculum" />} variant="outline" size="lg">
                View Curriculum Alignment
              </Button>
            </div>
          </CardContent>
        </Card>

        <section>
          <h2 className="flex items-center gap-2 text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            <Target className="size-4 text-chapter" />
            Learning Objectives
          </h2>
          <Card>
            <CardContent className="py-4">
              <ul className="space-y-2.5">
                {chapter.objectives.map((obj) => (
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

        <ChapterTabs chapter={chapter} />
      </div>
      </div>
    </AppShell>
  )
}
