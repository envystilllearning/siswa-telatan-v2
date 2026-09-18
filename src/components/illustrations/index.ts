import { AthleteRunner } from "./AthleteRunner";
import { StadiumEvent } from "./StadiumEvent";
import { HeartPulse } from "./HeartPulse";
import { FoodPlate } from "./FoodPlate";
import { GraffitiWall } from "./GraffitiWall";
import { StoryBook } from "./StoryBook";
import { EmptyState } from "./EmptyState";

export const chapterIllustrations: Record<string, React.ComponentType<{ className?: string }>> = {
  "great-athletes": AthleteRunner,
  "sports-events": StadiumEvent,
  "sports-health": HeartPulse,
  "healthy-foods": FoodPlate,
  graffiti: GraffitiWall,
  "fractured-stories": StoryBook,
};

export function getChapterIllustration(slug: string) {
  return chapterIllustrations[slug] ?? EmptyState;
}

export {
  AthleteRunner,
  StadiumEvent,
  HeartPulse,
  FoodPlate,
  GraffitiWall,
  StoryBook,
  EmptyState,
};
