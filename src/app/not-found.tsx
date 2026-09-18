import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="text-center space-y-4 max-w-md">
        <p className="text-sm font-medium text-muted-foreground">404</p>
        <h1 className="text-2xl font-bold tracking-tight">Page not found</h1>
        <p className="text-muted-foreground">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="flex gap-3 justify-center pt-2">
          <Button render={<Link href="/" />}>Back to Home</Button>
          <Button render={<Link href="/curriculum" />} variant="outline">
            View Curriculum
          </Button>
        </div>
      </div>
    </div>
  )
}
