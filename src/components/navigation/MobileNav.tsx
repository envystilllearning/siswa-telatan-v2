"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, BookOpen, Search, Info, Menu, Wrench } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { chapters } from "@/content/chapters"
import { getChapterTheme } from "@/lib/chapter-colors"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const semesterChapters = {
  1: chapters.filter((ch) => ch.semester === 1),
  2: chapters.filter((ch) => ch.semester === 2),
}

const mainLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/curriculum", label: "Curriculum", icon: BookOpen },
  { href: "/search", label: "Search", icon: Search },
]

export function MobileNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label="Open menu"
          />
        }
      >
        <Menu className="size-5" />
      </SheetTrigger>
      <SheetContent side="left" className="w-72 p-0">
        <SheetHeader className="px-5 py-5 border-b border-border">
          <SheetTitle className="flex items-center gap-2.5">
            <div className="flex items-center justify-center size-9 rounded-xl bg-primary text-primary-foreground font-display font-bold text-sm">
              ST
            </div>
            <span className="font-display">Siswa Telatan</span>
          </SheetTitle>
        </SheetHeader>
        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-5">
          <ul className="space-y-1">
            {mainLinks.map(({ href, label, icon: Icon }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-colors",
                    isActive(href)
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-sidebar-accent hover:text-foreground"
                  )}
                >
                  <Icon className="size-4.5 shrink-0" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {[1, 2].map((sem) => (
            <div key={sem}>
              <p className="px-3 mb-1.5 text-[10px] font-semibold tracking-widest text-muted-foreground/70 uppercase">
                Semester {sem}
              </p>
              <ul className="space-y-1">
                {semesterChapters[sem as 1 | 2].map((ch) => {
                  const theme = getChapterTheme(ch.slug)
                  const active = pathname === `/chapter/${ch.slug}` || pathname.startsWith(`/chapter/${ch.slug}/`)
                  return (
                    <li key={ch.id}>
                      <Link
                        href={`/chapter/${ch.slug}`}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-colors",
                          active
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground hover:bg-sidebar-accent hover:text-foreground"
                        )}
                      >
                        <span
                          className="size-2.5 rounded-full shrink-0 ring-2 ring-white/60"
                          style={{ backgroundColor: theme.color }}
                        />
                        <span className="truncate">
                          Ch{ch.number} · {ch.title}
                        </span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}

          <ul className="space-y-1 pt-1 border-t border-border">
            <li>
              <Link
                href="/tools"
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-colors",
                  isActive("/tools")
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-sidebar-accent hover:text-foreground"
                )}
              >
                <Wrench className="size-4.5 shrink-0" />
                Classroom Tools
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-colors",
                  isActive("/about")
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-sidebar-accent hover:text-foreground"
                )}
              >
                <Info className="size-4.5 shrink-0" />
                About
              </Link>
            </li>
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
