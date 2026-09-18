"use client"

import { useMemo, useSyncExternalStore } from "react"
import Link from "next/link"
import {
  Trophy,
  Palette,
  Timer,
  Shuffle,
  Vote,
  ClipboardList,
  ArrowRight,
  Play,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AppShell } from "@/components/layout/AppShell"
import { curriculum } from "@/content/curriculum"
import { chapters } from "@/content/chapters"
import { getChapterTheme } from "@/lib/chapter-colors"
import { AthleteRunner, StoryBook, GraffitiWall } from "@/components/illustrations"

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

const toolTiles = [
  { label: "Timer", icon: Timer, href: "/tools", color: "#3B82F6", bg: "#EFF6FF" },
  { label: "Random Prompt", icon: Shuffle, href: "/tools", color: "#F59E0B", bg: "#FFFBEB" },
  { label: "Quick Vote", icon: Vote, href: "/tools", color: "#22C55E", bg: "#F0FDF4" },
  { label: "Exit Ticket", icon: ClipboardList, href: "/tools", color: "#8B5CF6", bg: "#F5F3FF" },
]

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
  const chaptersS1 = chapters.filter((ch) => ch.semester === 1)
  const chaptersS2 = chapters.filter((ch) => ch.semester === 2)

  return (
    <AppShell>
      <div className="max-w-6xl mx-auto space-y-10 pb-16">
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 dot-grid px-6 py-10 sm:px-10 sm:py-14 text-white animate-rise">
        <StoryBook className="absolute -right-6 -bottom-8 w-64 h-64 opacity-90 hidden sm:block animate-float" />
        <div className="relative max-w-2xl space-y-4">
          <Badge className="bg-white/15 text-white border-white/25 gap-1.5 backdrop-blur-sm">
            <Sparkles className="size-3" />
            English · Grade 10 · Fase E
          </Badge>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] text-balance">
            Teach English that sticks.
          </h1>
          <p className="text-white/85 text-lg leading-relaxed max-w-xl">
            Your interactive classroom companion for Kurikulum Merdeka — lessons,
            activities, case studies, and assessment, ready to project.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button
              render={<Link href="/curriculum" />}
              size="lg"
              className="bg-white text-indigo-700 hover:bg-indigo-50 font-semibold shadow-lg shadow-indigo-950/20"
            >
              Start Teaching
              <ArrowRight className="size-4" />
            </Button>
            <Button
              render={<Link href="/tools" />}
              size="lg"
              variant="outline"
              className="border-white/35 text-white hover:bg-white/10 hover:text-white"
            >
              Classroom Tools
            </Button>
          </div>
        </div>
      </section>

      {lastLesson && (
        <section>
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Continue Teaching
          </h2>
          <Link href={`/chapter/${lastLesson.chapterSlug}/lesson/${lastLesson.lessonSlug}`}>
            <div className="hover-lift flex items-center justify-between gap-4 rounded-2xl border border-primary/25 bg-primary/5 p-5 cursor-pointer">
              <div className="flex items-center gap-4 min-w-0">
                <div className="flex items-center justify-center size-12 rounded-2xl bg-primary text-primary-foreground shrink-0 shadow-md shadow-primary/30">
                  <Play className="size-5 fill-current" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wide">
                    Last opened
                  </p>
                  <p className="font-display font-semibold text-lg truncate">
                    {lastLesson.lessonTitle}
                  </p>
                  <p className="text-sm text-muted-foreground truncate">
                    {lastLesson.chapterTitle}
                  </p>
                </div>
              </div>
              <ArrowRight className="size-5 text-primary shrink-0" />
            </div>
          </Link>
        </section>
      )}

      <section>
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
          Semesters
        </h2>
        <div className="grid gap-5 md:grid-cols-2">
          {[
            { semester: semester1, list: chaptersS1, icon: Trophy, ill: AthleteRunner, from: "#F97316", to: "#EA580C", tag: "4 Chapters" },
            { semester: semester2, list: chaptersS2, icon: Palette, ill: GraffitiWall, from: "#8B5CF6", to: "#7C3AED", tag: "2 Chapters" },
          ].map(({ semester, list, icon: Icon, ill: Illustration, from, to, tag }) => (
            <Link key={semester.number} href={`/semester/${semester.number}`}>
              <article
                className="hover-lift relative overflow-hidden rounded-3xl h-full cursor-pointer text-white"
                style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
              >
                <div className="dot-grid absolute inset-0" />
                <Illustration className="absolute -right-4 -bottom-6 w-48 h-48 opacity-95" />
                <div className="relative p-6 pr-44">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center justify-center size-9 rounded-xl bg-white/20 backdrop-blur-sm">
                      <Icon className="size-4.5" />
                    </div>
                    <Badge className="bg-white/15 text-white border-white/25 backdrop-blur-sm">
                      {tag}
                    </Badge>
                  </div>
                  <h3 className="font-display text-2xl font-bold">{semester.title}</h3>
                  <p className="text-white/85 text-sm mt-1">{semester.theme}</p>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {list.map((ch) => (
                      <span
                        key={ch.id}
                        className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 px-2.5 py-1 text-xs font-medium"
                      >
                        <span className="size-1.5 rounded-full bg-white/90" />
                        Ch{ch.number}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
          Curriculum Map
        </h2>
        <div className="space-y-8 rounded-3xl border bg-card p-6 sm:p-8">
          {[{ sem: semester1, list: chaptersS1, label: "Semester 1 — Sports and Health" }, { sem: semester2, list: chaptersS2, label: "Semester 2 — Arts and Communication" }].map(
            ({ sem, list, label }) => (
              <div key={sem.number}>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                  {label}
                </p>
                <div className="flex items-center gap-0 overflow-x-auto pb-2">
                  {list.map((ch, i) => {
                    const theme = getChapterTheme(ch.slug)
                    return (
                      <div key={ch.id} className="flex items-center shrink-0">
                        <Link href={`/chapter/${ch.slug}`} className="group block">
                          <div
                            className="hover-lift w-40 rounded-2xl border-2 bg-card p-4 cursor-pointer transition-colors group-hover:border-transparent"
                            style={{ borderColor: `${theme.color}55` }}
                          >
                            <div
                              className="flex items-center justify-center size-10 rounded-xl font-display font-bold text-white mb-3 shadow-md"
                              style={{ backgroundColor: theme.color, boxShadow: `0 8px 20px -6px ${theme.color}80` }}
                            >
                              {ch.number}
                            </div>
                            <p className="font-semibold text-sm leading-snug group-hover:text-primary transition-colors">
                              {ch.title}
                            </p>
                            <p className="text-[11px] text-muted-foreground mt-1 line-clamp-2 leading-snug">
                              {ch.question}
                            </p>
                          </div>
                        </Link>
                        {i < list.length - 1 && (
                          <svg width="34" height="16" viewBox="0 0 34 16" className="mx-1 shrink-0" aria-hidden="true">
                            <line
                              x1="0"
                              y1="8"
                              x2="34"
                              y2="8"
                              stroke="#94A3B8"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              className="animate-dash"
                            />
                          </svg>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          )}
        </div>
      </section>

      <section>
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
          Quick Tools
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {toolTiles.map(({ label, icon: Icon, href, color, bg }) => (
            <Link key={label} href={href}>
              <div
                className="hover-lift group flex flex-col items-center gap-3 rounded-2xl border p-5 cursor-pointer"
                style={{ backgroundColor: bg, borderColor: `${color}40` }}
              >
                <div
                  className="flex items-center justify-center size-11 rounded-2xl text-white shadow-md transition-transform group-hover:scale-110 group-hover:-rotate-6"
                  style={{ backgroundColor: color, boxShadow: `0 8px 18px -6px ${color}80` }}
                >
                  <Icon className="size-5" />
                </div>
                <span className="text-sm font-semibold">{label}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      </div>
    </AppShell>
  )
}
