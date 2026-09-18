"use client"

import Link from "next/link"
import { ArrowRight, Clock, Lightbulb, Wrench, Rocket, MessageSquareText } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { Chapter } from "@/types/content"

export function ChapterTabs({ chapter }: { chapter: Chapter }) {
  return (
    <Tabs defaultValue="lessons" className="w-full">
      <TabsList className="w-full justify-start overflow-x-auto h-auto p-1 rounded-2xl bg-muted/70">
        <TabsTrigger value="lessons" className="gap-1.5 rounded-xl px-4 py-2 data-[selected]:bg-card data-[selected]:shadow-sm">
          Lessons
          <Badge variant="secondary" className="text-[10px] px-1.5">
            {chapter.lessons.length}
          </Badge>
        </TabsTrigger>
        <TabsTrigger value="evaluation" className="gap-1.5 rounded-xl px-4 py-2 data-[selected]:bg-card data-[selected]:shadow-sm">
          <Lightbulb className="size-3.5" />
          Evaluation
        </TabsTrigger>
        <TabsTrigger value="support" className="gap-1.5 rounded-xl px-4 py-2 data-[selected]:bg-card data-[selected]:shadow-sm">
          <Wrench className="size-3.5" />
          Remedial &amp; Enrichment
        </TabsTrigger>
        <TabsTrigger value="reflection" className="gap-1.5 rounded-xl px-4 py-2 data-[selected]:bg-card data-[selected]:shadow-sm">
          <MessageSquareText className="size-3.5" />
          Reflection
        </TabsTrigger>
      </TabsList>

      <TabsContent value="lessons" className="mt-5 space-y-3 animate-rise">
        {chapter.lessons.map((lesson) => (
          <Link key={lesson.id} href={`/chapter/${chapter.slug}/lesson/${lesson.slug}`}>
            <Card className="hover-lift transition-colors hover:bg-muted/40 cursor-pointer border-border/70">
              <CardContent className="flex items-center justify-between py-4 gap-4">
                <div className="flex items-center gap-4 min-w-0">
                  <div className="flex items-center justify-center size-11 rounded-2xl bg-chapter text-white font-display font-bold shrink-0 shadow-md shadow-chapter/30">
                    {lesson.number}
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold truncate">{lesson.title}</p>
                    <p className="text-sm text-muted-foreground truncate">{lesson.description}</p>
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
      </TabsContent>

      <TabsContent value="evaluation" className="mt-5 space-y-5 animate-rise">
        <div>
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Chapter Evaluation
          </h3>
          <div className="space-y-3">
            {chapter.evaluation.map((activity) => (
              <Link key={activity.id} href={`/assessment/${activity.id}`}>
                <Card className="hover-lift transition-colors hover:bg-muted/40 cursor-pointer">
                  <CardContent className="flex items-center justify-between py-4 gap-4">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="outline" className="text-xs">{activity.type}</Badge>
                        {activity.level && (
                          <Badge variant="secondary" className="text-xs capitalize">{activity.level}</Badge>
                        )}
                        {activity.duration && (
                          <span className="text-xs text-muted-foreground">{activity.duration} min</span>
                        )}
                      </div>
                      <p className="font-semibold truncate">{activity.title}</p>
                      <p className="text-sm text-muted-foreground truncate">{activity.instruction}</p>
                    </div>
                    <ArrowRight className="size-4 text-muted-foreground shrink-0" />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </TabsContent>

      <TabsContent value="support" className="mt-5 animate-rise">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border-2 border-sky-500/25 bg-sky-500/5 p-5">
            <h3 className="font-display font-semibold text-base flex items-center gap-2 mb-1">
              <span className="flex items-center justify-center size-8 rounded-xl bg-sky-500 text-white">
                <Wrench className="size-4" />
              </span>
              Remedial Activities
            </h3>
            <p className="text-xs text-muted-foreground mb-4">Reinforce the basics before moving on.</p>
            <div className="space-y-2">
              {chapter.remedial.map((activity) => (
                <Link
                  key={activity.id}
                  href={`/activity/${activity.id}`}
                  className="block rounded-xl border bg-card p-3 text-sm hover:bg-muted transition-colors"
                >
                  <p className="font-medium">{activity.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5 capitalize">{activity.type} · {activity.duration} min</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border-2 border-emerald-500/25 bg-emerald-500/5 p-5">
            <h3 className="font-display font-semibold text-base flex items-center gap-2 mb-1">
              <span className="flex items-center justify-center size-8 rounded-xl bg-emerald-500 text-white">
                <Rocket className="size-4" />
              </span>
              Enrichment Activities
            </h3>
            <p className="text-xs text-muted-foreground mb-4">Stretch challenges for fast finishers.</p>
            <div className="space-y-2">
              {chapter.enrichment.map((activity) => (
                <Link
                  key={activity.id}
                  href={`/activity/${activity.id}`}
                  className="block rounded-xl border bg-card p-3 text-sm hover:bg-muted transition-colors"
                >
                  <p className="font-medium">{activity.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5 capitalize">{activity.type} · {activity.duration} min</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="reflection" className="mt-5 animate-rise">
        <Card>
          <CardContent className="py-5">
            <div className="space-y-4">
              {chapter.reflection.flatMap((r) => r.prompts).map((prompt, i) => (
                <div key={prompt.id} className="flex gap-3 text-sm">
                  <span className="flex items-center justify-center size-7 rounded-lg bg-chapter-soft text-chapter font-display font-bold text-xs shrink-0">
                    {i + 1}
                  </span>
                  <div className="min-w-0">
                    <Badge variant="outline" className="text-[10px] capitalize mb-1">
                      {prompt.type.replace("-", " ")}
                    </Badge>
                    <p>{prompt.question}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
