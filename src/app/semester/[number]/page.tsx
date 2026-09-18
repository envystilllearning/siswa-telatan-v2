import Link from "next/link"
import { AppShell } from "@/components/layout/AppShell"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { curriculum } from "@/content/curriculum"
import { chapters } from "@/content/chapters"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return [{ number: "1" }, { number: "2" }]
}

export default async function SemesterPage({
  params,
}: {
  params: Promise<{ number: string }>
}) {
  const { number } = await params
  const semesterNum = parseInt(number, 10)

  if (semesterNum !== 1 && semesterNum !== 2) {
    notFound()
  }

  const semester = curriculum.semesters.find((s) => s.number === semesterNum)
  if (!semester) {
    notFound()
  }

  const semesterChapters = chapters.filter((ch) => ch.semester === semesterNum)

  return (
    <AppShell>
      <div className="p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto space-y-8">
        <div>
          <Badge variant="outline" className="mb-2">
            Semester {semester.number}
          </Badge>
          <h1 className="text-2xl font-bold tracking-tight">{semester.title}</h1>
          <p className="text-muted-foreground mt-1">{semester.theme}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {semesterChapters.map((chapter) => (
            <Link key={chapter.id} href={`/chapter/${chapter.slug}`}>
              <Card className="transition-colors hover:bg-muted/50 cursor-pointer h-full">
                <CardHeader>
                  <Badge variant="secondary" className="w-fit text-xs">
                    Chapter {chapter.number}
                  </Badge>
                  <CardTitle className="mt-2">{chapter.title}</CardTitle>
                  <CardDescription>{chapter.question}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground line-clamp-3">
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
                  {chapter.objectives.length > 0 && (
                    <div className="border-t pt-3">
                      <p className="text-xs font-medium text-muted-foreground mb-2">Learning Outcomes</p>
                      <ul className="space-y-1">
                        {chapter.objectives.map((obj) => (
                          <li key={obj.id} className="text-xs text-muted-foreground flex gap-2">
                            <span className="shrink-0">•</span>
                            <span>{obj.description}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </AppShell>
  )
}
