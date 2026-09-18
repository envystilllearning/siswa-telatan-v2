import { CurriculumData } from "../../types/content";

export const curriculum: CurriculumData = {
  title: "English Grade 10 — Fase E",
  grade: "Grade X / Class 10",
  phase: "Fase E",
  semesters: [
    {
      number: 1,
      title: "Semester 1",
      theme: "Sports and Health",
      chapters: [
        {
          id: "great-athletes",
          slug: "great-athletes",
          number: 1,
          title: "Great Athletes",
          overview:
            "Explore what makes athletes remarkable through descriptive writing. Students learn to describe people, places, and events using vivid adjectives, adverbs, and the simple present tense.",
        },
        {
          id: "sports-events",
          slug: "sports-events",
          number: 2,
          title: "Sports Events",
          overview:
            "Recount exciting sports events using past tense and sequencing markers. Students practice retelling personal and professional sports experiences in clear chronological order.",
        },
        {
          id: "sports-health",
          slug: "sports-health",
          number: 3,
          title: "Sports and Health",
          overview:
            "Write clear procedure texts about exercise routines and healthy habits. Students master imperatives and sequence markers to give step-by-step instructions.",
        },
        {
          id: "healthy-foods",
          slug: "healthy-foods",
          number: 4,
          title: "Healthy Foods",
          overview:
            "Compare and recommend nutritious food choices through report and exposition writing. Students learn to present balanced arguments about diet and nutrition.",
        },
      ],
    },
    {
      number: 2,
      title: "Semester 2",
      theme: "Arts and Communication",
      chapters: [
        {
          id: "graffiti",
          slug: "graffiti",
          number: 5,
          title: "Graffiti",
          overview:
            "Investigate the world of graffiti and street art through exposition writing. Students construct opinion-based arguments about art, expression, and public spaces.",
        },
        {
          id: "fractured-stories",
          slug: "fractured-stories",
          number: 6,
          title: "Fractured Stories",
          overview:
            "Reimagine classic tales by rewriting them from different perspectives. Students study narrative structure including setting, character, plot, conflict, and resolution.",
        },
      ],
    },
  ],
};
