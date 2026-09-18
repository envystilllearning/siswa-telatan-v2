"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Home,
  BookOpen,
  Wrench,
  Search,
  Info,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { chapters } from "@/content/chapters"
import { getChapterTheme } from "@/lib/chapter-colors"
import { useSyncExternalStore } from "react"

const semesterChapters = {
  1: chapters.filter((ch) => ch.semester === 1),
  2: chapters.filter((ch) => ch.semester === 2),
}

const mainLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/curriculum", label: "Curriculum", icon: BookOpen },
  { href: "/search", label: "Search", icon: Search },
]

function subscribeToSidebar(callback: () => void) {
  window.addEventListener("storage", callback)
  return () => window.removeEventListener("storage", callback)
}

function getCollapsed(): string | null {
  return localStorage.getItem("sidebarCollapsed")
}

function getServerSnapshot(): string | null {
  return null
}

export function Sidebar() {
  const pathname = usePathname()
  const stored = useSyncExternalStore(subscribeToSidebar, getCollapsed, getServerSnapshot)
  const collapsed = stored === "true"

  function toggle() {
    localStorage.setItem("sidebarCollapsed", String(!collapsed))
    window.dispatchEvent(new Event("storage"))
  }

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href)

  return (
    <aside
      className={cn(
        "hidden lg:flex flex-col border-r border-border bg-sidebar h-full shrink-0 transition-[width] duration-200",
        collapsed ? "w-[68px]" : "w-64"
      )}
    >
      <div className={cn("flex items-center gap-2.5 px-4 py-5 border-b border-border", collapsed && "justify-center px-0")}>
        <div className="flex items-center justify-center size-9 rounded-xl bg-primary text-primary-foreground font-display font-bold text-sm shadow-sm shrink-0">
          ST
        </div>
        {!collapsed && (
          <div className="min-w-0">
            <p className="font-display font-bold text-foreground leading-tight">Siswa Telatan</p>
            <p className="text-[11px] text-muted-foreground">English · Grade 10</p>
          </div>
        )}
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-5">
        <ul className="space-y-1">
          {mainLinks.map(({ href, label, icon: Icon }) => (
            <li key={href}>
              <Link
                href={href}
                title={collapsed ? label : undefined}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-all hover:translate-x-0.5",
                  collapsed && "justify-center px-0",
                  isActive(href)
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-sidebar-accent hover:text-foreground"
                )}
              >
                <Icon className="size-4.5 shrink-0" />
                {!collapsed && label}
              </Link>
            </li>
          ))}
        </ul>

        {[1, 2].map((sem) => (
          <div key={sem}>
            {!collapsed && (
              <p className="px-3 mb-1.5 text-[10px] font-semibold tracking-widest text-muted-foreground/70 uppercase">
                Semester {sem}
              </p>
            )}
            <ul className="space-y-1">
              {semesterChapters[sem as 1 | 2].map((ch) => {
                const theme = getChapterTheme(ch.slug)
                const active = pathname === `/chapter/${ch.slug}` || pathname.startsWith(`/chapter/${ch.slug}/`)
                return (
                  <li key={ch.id}>
                    <Link
                      href={`/chapter/${ch.slug}`}
                      title={collapsed ? `Ch${ch.number} ${ch.title}` : undefined}
                      className={cn(
                        "flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-all hover:translate-x-0.5",
                        collapsed && "justify-center px-0",
                        active
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:bg-sidebar-accent hover:text-foreground"
                      )}
                    >
                      <span
                        className="size-2.5 rounded-full shrink-0 ring-2 ring-white/60"
                        style={{ backgroundColor: theme.color }}
                      />
                      {!collapsed && (
                        <span className="truncate">
                          Ch{ch.number} · {ch.title}
                        </span>
                      )}
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
              title={collapsed ? "Classroom Tools" : undefined}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-all hover:translate-x-0.5",
                collapsed && "justify-center px-0",
                isActive("/tools")
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-sidebar-accent hover:text-foreground"
              )}
            >
              <Wrench className="size-4.5 shrink-0" />
              {!collapsed && "Classroom Tools"}
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              title={collapsed ? "About" : undefined}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-all hover:translate-x-0.5",
                collapsed && "justify-center px-0",
                isActive("/about")
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-sidebar-accent hover:text-foreground"
              )}
            >
              <Info className="size-4.5 shrink-0" />
              {!collapsed && "About"}
            </Link>
          </li>
        </ul>
      </nav>

      <div className="border-t border-border p-3">
        <button
          type="button"
          onClick={toggle}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          className="w-full flex items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-sidebar-accent hover:text-foreground transition-colors"
        >
          {collapsed ? <PanelLeftOpen className="size-4.5" /> : <PanelLeftClose className="size-4.5" />}
          {!collapsed && "Collapse"}
        </button>
      </div>
    </aside>
  )
}
