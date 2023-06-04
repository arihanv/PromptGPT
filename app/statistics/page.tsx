import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function StatsPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          Statistics
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl text-center">
          View the <b>amazing</b> stats <br className="hidden sm:inline" /> of
          our prompt generation tool.
        </p>
    </section>

    <section class="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div class="flex flex-col items-left gap-2">
        <h1 class="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          Embed a visual here- tableau, csv, excel, etc.
        </h1>
        <p class="max-w-[700px] text-lg text-muted-foreground sm:text-0.50 text-left">
          Embed a descriptive analysis of the statistics here <br class="hidden sm:inline"> of our prompt generation tool.
        </p>
      </div>
    </section>

    <section class="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div class="flex flex-col items-left gap-2">
        <h1 class="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          References
        </h1>
        <p class="max-w-[700px] text-lg text-muted-foreground sm:text-0.50 text-left">
          <ul>
            <li>
              <a href="lorenipsum.com"> Reference 1 anchor </a>
            </li>
            <li>
                <a href="lorenipsum.com"> Reference 2 </a>
            </li>
            <li>
                <a href="lorenipsum.com"> Reference 3 </a>
            </li>
          </ul>
        </p>
      </div>
    </section>

  )
}
