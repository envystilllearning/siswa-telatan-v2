export interface ChapterTheme {
  key: string;
  color: string;
  deep: string;
}

const chapterThemes: Record<string, ChapterTheme> = {
  "great-athletes": { key: "ch1", color: "#F97316", deep: "#C2410C" },
  "sports-events": { key: "ch2", color: "#3B82F6", deep: "#1D4ED8" },
  "sports-health": { key: "ch3", color: "#22C55E", deep: "#15803D" },
  "healthy-foods": { key: "ch4", color: "#F59E0B", deep: "#B45309" },
  graffiti: { key: "ch5", color: "#EC4899", deep: "#BE185D" },
  "fractured-stories": { key: "ch6", color: "#8B5CF6", deep: "#6D28D9" },
};

export function getChapterTheme(slug: string): ChapterTheme {
  return chapterThemes[slug] ?? { key: "ch0", color: "#6366F1", deep: "#4F46E5" };
}
