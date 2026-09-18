"use client"

import { AppShell } from "@/components/layout/AppShell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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

export default function ToolsPage() {
  return (
    <AppShell>
      <div className="p-6 md:p-8">
        <div className="mb-8 space-y-2">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Classroom Tools</h1>
          <p className="text-lg text-muted-foreground">
            Quick-access tools for interactive teaching sessions.
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Timer</CardTitle>
            </CardHeader>
            <CardContent>
              <Timer presets={[1, 3, 5, 10]} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Random Prompt</CardTitle>
            </CardHeader>
            <CardContent>
              <RandomPrompt prompts={defaultDiscussionPrompts} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Quick Vote</CardTitle>
            </CardHeader>
            <CardContent>
              <QuickVote question={sampleVoteQuestion} options={sampleVoteOptions} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Exit Ticket</CardTitle>
            </CardHeader>
            <CardContent>
              <ExitTicket questions={sampleExitQuestions} />
            </CardContent>
          </Card>
        </div>
      </div>
    </AppShell>
  )
}
