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

function findAssessment(assessmentId: string): {
  assessment: Activity
  chapterSlug: string
  section: "evaluation" | "remedial" | "enrichment"
} | null {
  for (const chapter of chapters) {
    const evalFound = chapter.evaluation.find((a) => a.id === assessmentId)
    if (evalFound) {
      return { assessment: evalFound, chapterSlug: chapter.slug, section: "evaluation" }
    }
    const remFound = chapter.remedial.find((a) => a.id === assessmentId)
    if (remFound) {
      return { assessment: remFound, chapterSlug: chapter.slug, section: "remedial" }
    }
    const enrFound = chapter.enrichment.find((a) => a.id === assessmentId)
    if (enrFound) {
      return { assessment: enrFound, chapterSlug: chapter.slug, section: "enrichment" }
    }
  }
  return null
}

const sectionLabels: Record<string, string> = {
  evaluation: "Chapter Evaluation",
  remedial: "Remedial Activity",
  enrichment: "Enrichment Activity",
}

export default function AssessmentPage() {
  const params = useParams()
  const id = params.id as string

  const result = findAssessment(id)

  if (!result) {
    return (
      <AppShell>
        <div className="p-8 text-center space-y-4">
          <h1 className="text-xl font-bold">Assessment not found</h1>
          <p className="text-muted-foreground">
            The assessment you are looking for does not exist.
          </p>
          <Button render={<Link href="/curriculum" />} variant="outline">
            <ArrowLeft className="size-4" />
            Back to Curriculum
          </Button>
        </div>
      </AppShell>
    )
  }

  const { assessment, chapterSlug, section } = result

  return (
    <AppShell>
      <div className="p-4 sm:p-6 lg:p-8 max-w-3xl mx-auto space-y-6">
        <div className="flex items-center justify-between gap-2 text-sm text-muted-foreground">
          <Link
            href={`/chapter/${chapterSlug}`}
            className="hover:text-foreground transition-colors flex items-center gap-1"
          >
            <ArrowLeft className="size-4" />
            Back to chapter
          </Link>
          <Badge variant="outline">{sectionLabels[section]}</Badge>
        </div>

        <div className="flex items-center gap-2">
          <Badge variant="secondary">{assessment.type}</Badge>
          {assessment.level && <Badge variant="outline">{assessment.level}</Badge>}
          {assessment.duration && (
            <span className="text-sm text-muted-foreground">{assessment.duration} min</span>
          )}
        </div>

        <ActivityRenderer activity={assessment} />
      </div>
    </AppShell>
  )
}
