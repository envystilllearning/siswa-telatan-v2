"use client"

import Link from "next/link"
import { useParams } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { AppShell } from "@/components/layout/AppShell"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ActivityRenderer } from "@/components/activities/ActivityRenderer"
import { chapters } from "@/content/chapters"
import type { Activity } from "@/types/content"

function findActivity(activityId: string): {
  activity: Activity
  chapterSlug: string
  lessonSlug: string | null
  section: "lesson" | "evaluation" | "remedial" | "enrichment"
} | null {
  for (const chapter of chapters) {
    for (const lesson of chapter.lessons) {
      const found = lesson.activities.find((a) => a.id === activityId)
      if (found) {
        return { activity: found, chapterSlug: chapter.slug, lessonSlug: lesson.slug, section: "lesson" }
      }
    }
    const evalFound = chapter.evaluation.find((a) => a.id === activityId)
    if (evalFound) {
      return { activity: evalFound, chapterSlug: chapter.slug, lessonSlug: null, section: "evaluation" }
    }
    const remFound = chapter.remedial.find((a) => a.id === activityId)
    if (remFound) {
      return { activity: remFound, chapterSlug: chapter.slug, lessonSlug: null, section: "remedial" }
    }
    const enrFound = chapter.enrichment.find((a) => a.id === activityId)
    if (enrFound) {
      return { activity: enrFound, chapterSlug: chapter.slug, lessonSlug: null, section: "enrichment" }
    }
  }
  return null
}

const sectionLabels: Record<string, string> = {
  lesson: "Lesson Activity",
  evaluation: "Chapter Evaluation",
  remedial: "Remedial",
  enrichment: "Enrichment",
}

export default function ActivityPage() {
  const params = useParams()
  const id = params.id as string

  const result = findActivity(id)

  if (!result) {
    return (
      <AppShell>
        <div className="p-8 text-center space-y-4">
          <h1 className="text-xl font-bold">Activity not found</h1>
          <p className="text-muted-foreground">
            The activity you are looking for does not exist.
          </p>
          <Button render={<Link href="/curriculum" />} variant="outline">
            <ArrowLeft className="size-4" />
            Back to Curriculum
          </Button>
        </div>
      </AppShell>
    )
  }

  const { activity, chapterSlug, lessonSlug, section } = result
  const backHref = lessonSlug
    ? `/chapter/${chapterSlug}/lesson/${lessonSlug}`
    : `/chapter/${chapterSlug}`

  return (
    <AppShell>
      <div className="p-4 sm:p-6 lg:p-8 max-w-3xl mx-auto space-y-6">
        <div className="flex items-center justify-between gap-2 text-sm text-muted-foreground">
          <Link
            href={backHref}
            className="hover:text-foreground transition-colors flex items-center gap-1"
          >
            <ArrowLeft className="size-4" />
            Back
          </Link>
          <Badge variant="outline">{sectionLabels[section]}</Badge>
        </div>

        <div className="flex items-center gap-2">
          <Badge variant="outline">{activity.type}</Badge>
          {activity.level && <Badge variant="secondary">{activity.level}</Badge>}
          {activity.duration && (
            <span className="text-sm text-muted-foreground">{activity.duration} min</span>
          )}
        </div>

        <ActivityRenderer activity={activity} />
      </div>
    </AppShell>
  )
}
