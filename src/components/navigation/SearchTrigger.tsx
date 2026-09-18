"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SearchTrigger() {
  const router = useRouter()

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault()
        router.push("/search")
      }
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [router])

  return (
    <Button
      variant="outline"
      size="sm"
      className="gap-2 text-muted-foreground"
      onClick={() => router.push("/search")}
      aria-label="Search curriculum"
    >
      <Search className="size-4" />
      <span className="hidden sm:inline">Search...</span>
      <kbd className="hidden sm:inline-flex items-center gap-0.5 rounded-md border border-border bg-muted px-1.5 text-[10px] font-medium text-muted-foreground">
        Ctrl K
      </kbd>
    </Button>
  )
}
