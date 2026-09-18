"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Search as SearchIcon, ArrowRight } from "lucide-react"
import { AppShell } from "@/components/layout/AppShell"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { curriculum } from "@/content/curriculum"
import { chapters } from "@/content/chapters"

interface SearchResult {
  type: "chapter" | "lesson" | "vocabulary" | "activity"
  title: string
  description: string
  href: string
  tags: string[]
}

export default function SearchPage() {
  const [query, setQuery] = useState("")

  const results = useMemo(() => {
    if (!query.trim()) return []

    const q = query.toLowerCase()
    const items: SearchResult[] = []

    for (const chapter of chapters) {
      if (
        chapter.title.toLowerCase().includes(q) ||
        chapter.overview.toLowerCase().includes(q) ||
        chapter.question.toLowerCase().includes(q) ||
        chapter.theme.toLowerCase().includes(q) ||
        chapter.textType.includes(q) ||
        chapter.languageFocus.some((lf) => lf.toLowerCase().includes(q)) ||
        chapter.skills.some((skill) => skill.includes(q))
      ) {
        items.push({
          type: "chapter",
          title: `Ch${chapter.number}: ${chapter.title}`,
          description: chapter.overview,
          href: `/chapter/${chapter.slug}`,
          tags: [chapter.textType, ...chapter.skills],
        })
      }

      for (const lesson of chapter.lessons) {
        if (
          lesson.title.toLowerCase().includes(q) ||
          lesson.description.toLowerCase().includes(q) ||
          lesson.conceptExplanation.toLowerCase().includes(q) ||
          lesson.languageFocus.some((lf) => lf.toLowerCase().includes(q))
        ) {
          items.push({
            type: "lesson",
            title: `${chapter.title} — ${lesson.title}`,
            description: lesson.description,
            href: `/chapter/${chapter.slug}/lesson/${lesson.slug}`,
            tags: [`${lesson.duration} min`, `${lesson.activities.length} activities`],
          })
        }

        for (const vocab of lesson.vocabulary) {
          if (
            vocab.word.toLowerCase().includes(q) ||
            vocab.definition.toLowerCase().includes(q)
          ) {
            items.push({
              type: "vocabulary",
              title: vocab.word,
              description: vocab.definition,
              href: `/chapter/${chapter.slug}/lesson/${lesson.slug}`,
              tags: ["vocabulary"],
            })
          }
        }

        for (const activity of lesson.activities) {
          if (
            activity.title.toLowerCase().includes(q) ||
            activity.instruction.toLowerCase().includes(q)
          ) {
            items.push({
              type: "activity",
              title: activity.title,
              description: activity.instruction,
              href: `/activity/${activity.id}`,
              tags: [activity.type],
            })
          }
        }
      }

      for (const evalAct of chapter.evaluation) {
        if (
          evalAct.title.toLowerCase().includes(q) ||
          evalAct.instruction.toLowerCase().includes(q)
        ) {
          items.push({
            type: "activity",
            title: evalAct.title,
            description: evalAct.instruction,
            href: `/assessment/${evalAct.id}`,
            tags: ["assessment", evalAct.type],
          })
        }
      }
    }

    return items
  }, [query])

  const typeColors: Record<string, string> = {
    chapter: "bg-blue-500/10 text-blue-600",
    lesson: "bg-green-500/10 text-green-600",
    vocabulary: "bg-amber-500/10 text-amber-600",
    activity: "bg-violet-500/10 text-violet-600",
  }

  return (
    <AppShell>
      <div className="p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="font-display text-2xl font-bold tracking-tight">Search</h1>
          <p className="text-muted-foreground mt-1">
            Search across chapters, lessons, vocabulary, and activities
          </p>
        </div>

        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search curriculum content..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-9"
          />
        </div>

        {query.trim() && (
          <div>
            <p className="text-sm text-muted-foreground mb-4">
              {results.length} result{results.length !== 1 ? "s" : ""} for &ldquo;{query}&rdquo;
            </p>

            {results.length === 0 ? (
              <Card>
                <CardContent className="py-8 text-center text-muted-foreground">
                  No results found. Try different keywords.
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-3">
                {results.map((result, i) => (
                  <Link key={`${result.type}-${result.href}-${i}`} href={result.href}>
                    <Card className="transition-colors hover:bg-muted/50 cursor-pointer">
                      <CardContent className="py-4">
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <Badge
                                variant="secondary"
                                className={`text-xs ${typeColors[result.type]}`}
                              >
                                {result.type}
                              </Badge>
                              {result.tags.map((tag) => (
                                <Badge key={tag} variant="outline" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                            <p className="font-medium truncate">{result.title}</p>
                            <p className="text-sm text-muted-foreground line-clamp-2 mt-0.5">
                              {result.description}
                            </p>
                          </div>
                          <ArrowRight className="size-4 text-muted-foreground shrink-0 mt-1" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}

        {!query.trim() && (
          <div className="space-y-6">
            <div>
              <h2 className="text-sm font-medium text-muted-foreground mb-3">Browse by Semester</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {curriculum.semesters.map((sem) => (
                  <Link key={sem.number} href={`/semester/${sem.number}`}>
                    <Card className="transition-colors hover:bg-muted/50 cursor-pointer">
                      <CardContent className="py-4">
                        <p className="font-medium">{sem.title}</p>
                        <p className="text-sm text-muted-foreground">{sem.theme}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-sm font-medium text-muted-foreground mb-3">Browse by Chapter</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {chapters.map((ch) => (
                  <Link key={ch.id} href={`/chapter/${ch.slug}`}>
                    <Card className="transition-colors hover:bg-muted/50 cursor-pointer">
                      <CardContent className="py-4">
                        <p className="font-medium">Ch{ch.number}: {ch.title}</p>
                        <p className="text-sm text-muted-foreground line-clamp-1">{ch.question}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </AppShell>
  )
}
