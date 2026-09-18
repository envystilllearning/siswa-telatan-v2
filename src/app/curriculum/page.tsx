import Link from "next/link"
import { AppShell } from "@/components/layout/AppShell"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { curriculum } from "@/content/curriculum"
import { chapters } from "@/content/chapters"

export default function CurriculumPage() {
  return (
    <AppShell>
      <div className="p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto space-y-8">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">{curriculum.title}</h1>
          <p className="text-muted-foreground mt-1">
            {curriculum.grade} — {curriculum.phase}
          </p>
        </div>

        {curriculum.semesters.map((semester) => {
          const semesterChapters = chapters.filter((ch) => ch.semester === semester.number)

          return (
            <div key={semester.number}>
              <h2 className="text-lg font-semibold mb-4">
                {semester.title} — {semester.theme}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {semesterChapters.map((chapter) => (
                  <Link key={chapter.id} href={`/chapter/${chapter.slug}`}>
                    <Card className="transition-colors hover:bg-muted/50 cursor-pointer h-full">
                      <CardHeader>
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <Badge variant="outline" className="mb-2">
                              Chapter {chapter.number}
                            </Badge>
                            <CardTitle>{chapter.title}</CardTitle>
                            <CardDescription className="mt-1">
                              {chapter.question}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {chapter.overview}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {chapter.skills.map((skill) => (
                            <Badge key={skill} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          <Badge variant="outline" className="text-xs">
                            {chapter.textType}
                          </Badge>
                          {chapter.languageFocus.map((lf) => (
                            <Badge key={lf} variant="outline" className="text-xs">
                              {lf}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span>{chapter.lessons.length} lessons</span>
                          <span>·</span>
                          <span>{chapter.estimatedTime}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </AppShell>
  )
}
