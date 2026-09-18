"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface TimerProps {
  presets?: number[]
}

export function Timer({ presets = [1, 3, 5, 10] }: TimerProps) {
  const [totalSeconds, setTotalSeconds] = useState(0)
  const [remaining, setRemaining] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [customMinutes, setCustomMinutes] = useState("")
  const [finished, setFinished] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const audioCtxRef = useRef<AudioContext | null>(null)

  const clearTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [])

  useEffect(() => {
    return () => clearTimer()
  }, [clearTimer])

  const playBeep = useCallback(() => {
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioContext()
      }
      const ctx = audioCtxRef.current
      const oscillator = ctx.createOscillator()
      const gainNode = ctx.createGain()

      oscillator.connect(gainNode)
      gainNode.connect(ctx.destination)

      oscillator.type = "sine"
      oscillator.frequency.setValueAtTime(800, ctx.currentTime)
      gainNode.gain.setValueAtTime(0.3, ctx.currentTime)

      oscillator.start(ctx.currentTime)
      oscillator.stop(ctx.currentTime + 0.2)

      setTimeout(() => {
        const osc2 = ctx.createOscillator()
        const gain2 = ctx.createGain()
        osc2.connect(gain2)
        gain2.connect(ctx.destination)
        osc2.type = "sine"
        osc2.frequency.setValueAtTime(1000, ctx.currentTime)
        gain2.gain.setValueAtTime(0.3, ctx.currentTime)
        osc2.start(ctx.currentTime)
        osc2.stop(ctx.currentTime + 0.3)
      }, 250)
    } catch {
      // Silently fail if audio not available
    }
  }, [])

  useEffect(() => {
    if (isRunning && remaining > 0) {
      intervalRef.current = setInterval(() => {
        setRemaining((prev) => {
          if (prev <= 1) {
            clearTimer()
            setIsRunning(false)
            setFinished(true)
            playBeep()
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }
    return () => clearTimer()
  }, [isRunning, remaining, clearTimer, playBeep])

  const handlePreset = (minutes: number) => {
    clearTimer()
    const secs = minutes * 60
    setTotalSeconds(secs)
    setRemaining(secs)
    setIsRunning(false)
    setFinished(false)
  }

  const handleCustom = () => {
    const mins = parseFloat(customMinutes)
    if (!isNaN(mins) && mins > 0) {
      const secs = Math.round(mins * 60)
      handlePreset(secs / 60)
    }
  }

  const handleStart = () => {
    if (remaining === 0 && totalSeconds > 0) {
      setRemaining(totalSeconds)
    }
    if (remaining > 0) {
      setFinished(false)
      setIsRunning(true)
    }
  }

  const handlePause = () => {
    setIsRunning(false)
  }

  const handleReset = () => {
    clearTimer()
    setIsRunning(false)
    setRemaining(0)
    setTotalSeconds(0)
    setFinished(false)
  }

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60)
    const s = secs % 60
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`
  }

  const isLowTime = remaining > 0 && remaining <= 30
  const progress = totalSeconds > 0 ? (remaining / totalSeconds) * 100 : 0

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Timer
          {finished && <Badge variant="destructive">Time&apos;s Up!</Badge>}
          {isRunning && <Badge variant="default">Running</Badge>}
          {!isRunning && remaining > 0 && !finished && <Badge variant="secondary">Paused</Badge>}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col items-center gap-4">
          <div
            className={`font-mono text-7xl font-bold tabular-nums transition-colors duration-300 md:text-8xl ${
              finished
                ? "text-destructive animate-pulse"
                : isLowTime
                  ? "text-amber-500"
                  : "text-foreground"
            }`}
            aria-live="polite"
            aria-label={`Time remaining: ${formatTime(remaining)}`}
          >
            {formatTime(remaining)}
          </div>

          {totalSeconds > 0 && (
            <div className="w-full max-w-md">
              <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
                <div
                  className={`h-full transition-all duration-1000 ${
                    isLowTime ? "bg-amber-500" : "bg-primary"
                  }`}
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {presets.map((minutes) => (
            <Button
              key={minutes}
              variant={totalSeconds === minutes * 60 ? "default" : "outline"}
              size="lg"
              onClick={() => handlePreset(minutes)}
              className="min-w-[4rem] text-base"
            >
              {minutes}m
            </Button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Input
            type="number"
            placeholder="Custom (min)"
            value={customMinutes}
            onChange={(e) => setCustomMinutes(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleCustom()}
            className="max-w-[8rem] text-base"
            min="0.1"
            step="0.5"
          />
          <Button variant="outline" onClick={handleCustom}>
            Set
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {!isRunning ? (
            <Button size="lg" onClick={handleStart} className="min-w-[5rem] text-base">
              Start
            </Button>
          ) : (
            <Button size="lg" variant="secondary" onClick={handlePause} className="min-w-[5rem] text-base">
              Pause
            </Button>
          )}
          <Button size="lg" variant="outline" onClick={handleReset} className="min-w-[5rem] text-base">
            Reset
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
