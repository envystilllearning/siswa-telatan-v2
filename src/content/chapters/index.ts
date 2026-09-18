import { Chapter } from "../../types/content";

import { greatAthletes } from "./great-athletes";
import { sportsEvents } from "./sports-events";
import { sportsHealth } from "./sports-health";
import { healthyFoods } from "./healthy-foods";
import { graffiti } from "./graffiti";
import { fracturedStories } from "./fractured-stories";

export const chapters: Chapter[] = [
  greatAthletes,
  sportsEvents,
  sportsHealth,
  healthyFoods,
  graffiti,
  fracturedStories,
];

export function getChapterBySlug(slug: string): Chapter | undefined {
  return chapters.find((ch) => ch.slug === slug);
}

export function getChapterByNumber(num: number): Chapter | undefined {
  return chapters.find((ch) => ch.number === num);
}

export function getAllChapters(): Chapter[] {
  return chapters;
}

export { greatAthletes } from "./great-athletes";
export { sportsEvents } from "./sports-events";
export { sportsHealth } from "./sports-health";
export { healthyFoods } from "./healthy-foods";
export { graffiti } from "./graffiti";
export { fracturedStories } from "./fractured-stories";
