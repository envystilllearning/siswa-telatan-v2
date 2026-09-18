"use client"

import { AthleteRunner } from "@/components/illustrations/AthleteRunner"
import { StadiumEvent } from "@/components/illustrations/StadiumEvent"
import { HeartPulse } from "@/components/illustrations/HeartPulse"
import { FoodPlate } from "@/components/illustrations/FoodPlate"
import { GraffitiWall } from "@/components/illustrations/GraffitiWall"
import { StoryBook } from "@/components/illustrations/StoryBook"

const illustMap: Record<string, React.FC<{ className?: string }>> = {
  "great-athletes": AthleteRunner,
  "sports-events": StadiumEvent,
  "sports-health": HeartPulse,
  "food-nutrition": FoodPlate,
  "digital-citizenship": GraffitiWall,
  "creative-writing": StoryBook,
}

export function ChapterHeroIllustration({ slug }: { slug: string }) {
  const Component = illustMap[slug]
  if (!Component) return null
  return <Component className="absolute right-0 bottom-0 w-56 h-44 sm:w-72 sm:h-56 opacity-95 hidden md:block" />
}
