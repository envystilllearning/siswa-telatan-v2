import { notFound } from "next/navigation"
import { chapters } from "@/content/chapters"
import { LessonView } from "@/components/lesson/LessonView"

export function generateStaticParams() {
  const params: { slug: string; lesson: string }[] = []
  for (const chapter of chapters) {
    for (const lesson of chapter.lessons) {
      params.push({ slug: chapter.slug, lesson: lesson.slug })
    }
  }
  return params
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ slug: string; lesson: string }>
}) {
  const { slug, lesson: lessonSlug } = await params

  const chapter = chapters.find((ch) => ch.slug === slug)
  const lesson = chapter?.lessons.find((l) => l.slug === lessonSlug)

  if (!chapter || !lesson) {
    notFound()
  }

  return <LessonView chapter={chapter} lesson={lesson} />
}
