"use client"

import { useMemo, useSyncExternalStore } from "react"
import Link from "next/link"
import { Trophy, Palette, Timer, Shuffle, Vote, ClipboardList, ArrowRight, Play } from "lucide-react"
import { AppShell } from "@/components/layout/AppShell"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { curriculum } from "@/content/curriculum"

interface LastLesson {
  chapterSlug: string
  lessonSlug: string
  chapterTitle: string
  lessonTitle: string
}

function subscribeToStorage(callback: () => void) {
  window.addEventListener("storage", callback)
  return () => window.removeEventListener("storage", callback)
}

function getStoredLesson(): string | null {
  return localStorage.getItem("lastLesson")
}

function getServerSnapshot(): string | null {
  return null
}

export default function HomePage() {
  const stored = useSyncExternalStore(subscribeToStorage, getStoredLesson, getServerSnapshot)

  const lastLesson = useMemo<LastLesson | null>(() => {
    if (!stored) return null
    try {
      return JSON.parse(stored) as LastLesson
    } catch {
      return null
    }
  }, [stored])

  const semester1 = curriculum.semesters[0]
  const semester2 = curriculum.semesters[1]

  return (
    <AppShell>
      <div className="p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto space-y-8">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Teacher Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Welcome to Siswa Telatan — Interactive English Classroom
          </p>
        </div>

        {lastLesson && (
          <Card>
            <CardContent className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4 min-w-0">
                <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10 shrink-0">
                  <Play className="size-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-muted-foreground">Continue Teaching</p>
                  <p className="font-medium truncate">
                    {lastLesson.chapterTitle} — {lastLesson.lessonTitle}
                  </p>
                </div>
              </div>
              <Button render={<Link href={`/chapter/${lastLesson.chapterSlug}/lesson/${lastLesson.lessonSlug}`} />} size="sm" className="shrink-0">
                Resume
                <ArrowRight className="size-4" />
              </Button>
            </CardContent>
          </Card>
        )}

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              semester: semester1,
              icon: Trophy,
              color: "text-amber-500",
              bgColor: "bg-amber-500/10",
            },
            {
              semester: semester2,
              icon: Palette,
              color: "text-violet-500",
              bgColor: "bg-violet-500/10",
            },
          ].map(({ semester, icon: Icon, color, bgColor }) => (
            <Link key={semester.number} href={`/semester/${semester.number}`}>
              <Card className="transition-colors hover:bg-muted/50 cursor-pointer h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className={`flex items-center justify-center size-10 rounded-lg ${bgColor} shrink-0`}>
                      <Icon className={`size-5 ${color}`} />
                    </div>
                    <div>
                      <CardTitle>{semester.title}</CardTitle>
                      <CardDescription>{semester.theme}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {semester.chapters.map((ch) => (
                      <Badge key={ch.id} variant="secondary">
                        Ch{ch.number}: {ch.title}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Curriculum Map</h2>
          <Card>
            <CardContent className="py-6">
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-3">Semester 1 — Sports and Health</p>
                  <div className="flex flex-wrap items-center gap-2">
                    {semester1.chapters.map((ch, i) => (
                      <div key={ch.id} className="flex items-center gap-2">
                        <Link
                          href={`/chapter/${ch.slug}`}
                          className="inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-sm font-medium hover:bg-muted transition-colors"
                        >
                          Ch{ch.number}
                          <span className="text-muted-foreground hidden sm:inline">— {ch.title}</span>
                        </Link>
                        {i < semester1.chapters.length - 1 && (
                          <ArrowRight className="size-4 text-muted-foreground shrink-0" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="border-t pt-6">
                  <p className="text-sm font-medium text-muted-foreground mb-3">Semester 2 — Arts and Communication</p>
                  <div className="flex flex-wrap items-center gap-2">
                    {semester2.chapters.map((ch, i) => (
                      <div key={ch.id} className="flex items-center gap-2">
                        <Link
                          href={`/chapter/${ch.slug}`}
                          className="inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-sm font-medium hover:bg-muted transition-colors"
                        >
                          Ch{ch.number}
                          <span className="text-muted-foreground hidden sm:inline">— {ch.title}</span>
                        </Link>
                        {i < semester2.chapters.length - 1 && (
                          <ArrowRight className="size-4 text-muted-foreground shrink-0" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Tools</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: "Timer", icon: Timer, href: "/tools/timer" },
              { label: "Random Prompt", icon: Shuffle, href: "/tools/random-prompt" },
              { label: "Quick Vote", icon: Vote, href: "/tools/quick-vote" },
              { label: "Exit Ticket", icon: ClipboardList, href: "/tools/exit-ticket" },
            ].map(({ label, icon: Icon, href }) => (
              <Link key={href} href={href}>
                <Card className="transition-colors hover:bg-muted/50 cursor-pointer text-center py-4">
                  <CardContent className="flex flex-col items-center gap-2">
                    <Icon className="size-6 text-muted-foreground" />
                    <span className="text-sm font-medium">{label}</span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  )
}
