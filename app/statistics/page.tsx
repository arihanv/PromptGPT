import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight } from "lucide-react"

export default function StatsPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          Statistics
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl text-center">
          View the <b>amazing</b> statics <br className="hidden sm:inline" /> of our prompt generation tool.
        </p>
      </div>
    </section>
  )
}
