import { AppShell } from "@/components/layout/AppShell"
import { Card, CardContent } from "@/components/ui/card"
import { curriculum } from "@/content/curriculum"

export default function AboutPage() {
  return (
    <AppShell>
      <div className="p-4 sm:p-6 lg:p-8 max-w-3xl mx-auto space-y-8">
        <div>
          <h1 className="font-display text-2xl font-bold tracking-tight">About Siswa Telatan</h1>
          <p className="text-muted-foreground mt-1">
            An interactive English teaching system for the classroom
          </p>
        </div>

        <Card>
          <CardContent className="py-6 space-y-4 text-sm leading-relaxed">
            <p>
              Siswa Telatan is a digital teaching companion designed to support English
              teachers in delivering engaging, structured lessons for Grade 10 students.
              The application provides a complete curriculum framework with interactive
              activities, assessments, and classroom tools.
            </p>
            <p>
              Built with modern web technologies, Siswa Telatan runs entirely in the
              browser with no server-side data collection. All progress and settings
              are stored locally on the teacher&apos;s device.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="py-6 space-y-4 text-sm leading-relaxed">
            <h2 className="font-display text-base font-semibold">Curriculum Alignment</h2>
            <p>
              This application is aligned with the <strong>Kurikulum Merdeka</strong> for
              English Language Education, specifically targeting <strong>Fase E</strong> (Grade 10 / Class 10).
            </p>
            <div className="grid gap-3 sm:grid-cols-2 mt-4">
              <div className="rounded-lg bg-muted p-4">
                <p className="font-medium">Grade</p>
                <p className="text-muted-foreground">{curriculum.grade}</p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <p className="font-medium">Phase</p>
                <p className="text-muted-foreground">{curriculum.phase}</p>
              </div>
            </div>
            <p>
              The curriculum content covers {curriculum.semesters.length} semesters with a total
              of {curriculum.semesters.reduce((acc, s) => acc + s.chapters.length, 0)} chapters,
              each containing detailed lesson plans, vocabulary lists, activities, and assessments.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="py-6 space-y-4 text-sm leading-relaxed">
            <h2 className="font-display text-base font-semibold">Disclaimer</h2>
            <p>
              Siswa Telatan is independently developed and is not officially affiliated
              with, endorsed by, or connected to the Indonesian Ministry of Education
              and Culture (Kemendikbud), or any official Kurikulum Merdeka organization.
            </p>
            <p>
              While the curriculum structure and learning objectives are designed to align
              with Fase E requirements, this application should be used as a supplementary
              teaching resource. Teachers should always refer to official curriculum
              documents and adapt materials to their specific classroom needs.
            </p>
            <p>
              The content within this application, including lesson materials, examples,
              and activities, is original content created for educational purposes.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="py-6 space-y-4 text-sm leading-relaxed">
            <h2 className="font-display text-base font-semibold">Features</h2>
            <ul className="space-y-2">
              <li className="flex gap-2">
                <span className="shrink-0">•</span>
                <span>Complete chapter and lesson structure with learning objectives</span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0">•</span>
                <span>Interactive activities with answer reveal functionality</span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0">•</span>
                <span>Presentation mode for classroom projection</span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0">•</span>
                <span>Teacher notes with prompts, expected responses, and follow-up suggestions</span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0">•</span>
                <span>Searchable curriculum content</span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0">•</span>
                <span>Responsive design for desktop and tablet use</span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0">•</span>
                <span>Local storage for progress tracking</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </AppShell>
  )
}
