"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight } from "lucide-react"
import { MobileNav } from "@/components/navigation/MobileNav"
import { SearchTrigger } from "@/components/navigation/SearchTrigger"

const routeLabels: Record<string, string> = {
  "/": "Home",
  "/curriculum": "Curriculum",
  "/semester/1": "Semester 1 — Sports",
  "/semester/2": "Semester 2 — Arts",
  "/tools": "Classroom Tools",
  "/search": "Search",
  "/about": "About",
}

export function Header() {
  const pathname = usePathname()

  const segments = pathname.split("/").filter(Boolean)
  const breadcrumbs = segments.length === 0
    ? [{ label: "Home", href: "/" }]
    : [
        { label: "Home", href: "/" },
        ...segments.map((segment, i) => {
          const href = "/" + segments.slice(0, i + 1).join("/")
          return {
            label: routeLabels[href] ?? segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " "),
            href,
          }
        }),
      ]

  return (
    <header className="sticky top-0 z-30 flex items-center gap-4 border-b border-border bg-background/80 backdrop-blur-sm px-4 py-3 sm:px-6">
      <MobileNav />
      <nav className="flex items-center gap-1 text-sm text-muted-foreground overflow-x-auto">
        {breadcrumbs.map((crumb, i) => (
          <span key={crumb.href} className="flex items-center gap-1 shrink-0">
            {i > 0 && <ChevronRight className="size-3.5 shrink-0" />}
            {i === breadcrumbs.length - 1 ? (
              <span className="font-medium text-foreground">{crumb.label}</span>
            ) : (
              <Link href={crumb.href} className="hover:text-foreground transition-colors">
                {crumb.label}
              </Link>
            )}
          </span>
        ))}
      </nav>
      <div className="ml-auto">
        <SearchTrigger />
      </div>
    </header>
  )
}
