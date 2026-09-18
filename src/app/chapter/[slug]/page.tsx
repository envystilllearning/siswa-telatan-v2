import Link from "next/link"
import { notFound } from "next/navigation"
import { Clock, BookOpen, ArrowRight } from "lucide-react"
import { AppShell } from "@/components/layout/AppShell"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { chapters } from "@/content/chapters"

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

  const firstLesson = chapter.lessons[0]

  return (
    <AppShell>
      <div className="p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto space-y-8">
        <div>
          <Badge variant="outline" className="mb-2">
            Chapter {chapter.number}
          </Badge>
          <h1 className="text-2xl font-bold tracking-tight">{chapter.title}</h1>
          <p className="text-lg text-muted-foreground mt-1 italic">
            {chapter.question}
          </p>
        </div>

        <Card>
          <CardContent className="py-6 space-y-4">
            <p className="text-sm leading-relaxed">{chapter.overview}</p>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Clock className="size-4" />
                <span>{chapter.estimatedTime}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <BookOpen className="size-4" />
                <span>{chapter.lessons.length} lessons</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-wrap gap-2">
          {chapter.skills.map((skill) => (
            <Badge key={skill} variant="secondary">
              {skill}
            </Badge>
          ))}
          <Badge variant="outline">{chapter.textType}</Badge>
          {chapter.languageFocus.map((lf) => (
            <Badge key={lf} variant="outline">
              {lf}
            </Badge>
          ))}
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Learning Objectives</h2>
          <Card>
            <CardContent className="py-4">
              <ul className="space-y-2">
                {chapter.objectives.map((obj) => (
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

        <div>
          <h2 className="text-lg font-semibold mb-4">Lessons</h2>
          <div className="space-y-3">
            {chapter.lessons.map((lesson) => (
              <Link
                key={lesson.id}
                href={`/chapter/${chapter.slug}/lesson/${lesson.slug}`}
              >
                <Card className="transition-colors hover:bg-muted/50 cursor-pointer">
                  <CardContent className="flex items-center justify-between py-4 gap-4">
                    <div className="flex items-center gap-4 min-w-0">
                      <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10 shrink-0 text-sm font-bold text-primary">
                        {lesson.number}
                      </div>
                      <div className="min-w-0">
                        <p className="font-medium truncate">{lesson.title}</p>
                        <p className="text-sm text-muted-foreground truncate">
                          {lesson.description}
                        </p>
                        <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                          <Clock className="size-3" />
                          <span>{lesson.duration} min</span>
                          <span>·</span>
                          <span>{lesson.activities.length} activities</span>
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="size-4 text-muted-foreground shrink-0" />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          {firstLesson && (
            <Button render={<Link href={`/chapter/${chapter.slug}/lesson/${firstLesson.slug}`} />}>
              Start Chapter
              <ArrowRight className="size-4" />
            </Button>
          )}
          <Button render={<Link href="/curriculum" />} variant="outline">
            View Curriculum Alignment
          </Button>
        </div>
      </div>
    </AppShell>
  )
}
