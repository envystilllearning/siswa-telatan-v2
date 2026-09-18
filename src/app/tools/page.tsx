"use client"

import { AppShell } from "@/components/layout/AppShell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Timer } from "@/components/classroom-tools/Timer"
import { RandomPrompt } from "@/components/classroom-tools/RandomPrompt"
import { QuickVote } from "@/components/classroom-tools/QuickVote"
import { ExitTicket } from "@/components/classroom-tools/ExitTicket"

const defaultDiscussionPrompts = [
  "What is the most important skill for learning English? Why?",
  "How do you feel when you speak English in class?",
  "What is your favorite English word and why?",
  "Describe your dream job using English adjectives.",
  "What makes a good story? Give examples.",
  "How is English different from Bahasa Indonesia?",
  "What would you do if you lived in an English-speaking country?",
  "What topics would you like to discuss in English?",
  "How do you practice English outside of school?",
  "What is the hardest part about learning English?",
]

const sampleVoteQuestion = "What is the best way to improve English skills?"
const sampleVoteOptions = [
  "Watch English movies",
  "Read English books",
  "Speak with friends",
  "Practice with apps",
]

const sampleExitQuestions = [
  "What did you learn today that was new?",
  "What part of today's lesson was challenging for you?",
  "How will you use what you learned outside of class?",
  "What question do you still have about today's topic?",
]

const toolMeta = [
  {
    title: "Timer",
    desc: "Countdown for pair work, reading, and writing sprints.",
    color: "#3B82F6",
    bg: "#EFF6FF",
    icon: "⏱️",
  },
  {
    title: "Random Prompt",
    desc: "Draw a discussion prompt — no repeats until all are used.",
    color: "#F59E0B",
    bg: "#FFFBEB",
    icon: "🎲",
  },
  {
    title: "Quick Vote",
    desc: "Show options, tally votes by hand, no student data stored.",
    color: "#22C55E",
    bg: "#F0FDF4",
    icon: "🗳️",
  },
  {
    title: "Exit Ticket",
    desc: "One to three reflection questions before students leave.",
    color: "#8B5CF6",
    bg: "#F5F3FF",
    icon: "🎫",
  },
]

export default function ToolsPage() {
  return (
    <AppShell>
      <div className="p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto space-y-8 pb-16">
        <div className="space-y-1">
          <Badge variant="outline" className="mb-1">
            Classroom Utilities
          </Badge>
          <h1 className="font-display text-3xl font-bold tracking-tight">Classroom Tools</h1>
          <p className="text-muted-foreground">
            Quick-access tools for interactive teaching sessions — project and go.
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          {toolMeta.map((meta, i) => (
            <Card key={meta.title} className="overflow-hidden border-border/70">
              <CardHeader
                className="pb-3 border-b-2"
                style={{ background: meta.bg, borderColor: `${meta.color}55` }}
              >
                <CardTitle className="flex items-center gap-3">
                  <span
                    className="flex items-center justify-center size-10 rounded-2xl text-xl shadow-md"
                    style={{ backgroundColor: meta.color, boxShadow: `0 8px 18px -6px ${meta.color}80` }}
                  >
                    {meta.icon}
                  </span>
                  <span className="min-w-0">
                    <span className="font-display block">{meta.title}</span>
                    <span className="block text-xs font-normal text-muted-foreground leading-snug">
                      {meta.desc}
                    </span>
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-5">
                {i === 0 && <Timer presets={[1, 3, 5, 10]} />}
                {i === 1 && <RandomPrompt prompts={defaultDiscussionPrompts} />}
                {i === 2 && <QuickVote question={sampleVoteQuestion} options={sampleVoteOptions} />}
                {i === 3 && <ExitTicket questions={sampleExitQuestions} />}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AppShell>
  )
}
