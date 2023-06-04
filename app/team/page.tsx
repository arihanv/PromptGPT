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
          Teammates
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl text-center">
          View the <b>amazing</b> teammates behind the product. <br className="hidden sm:inline" /> of
          our prompt generation tool.
        </p>

        <p> loren ipsum first name & last name person 1 </p>
        <p> loren ipsim first name & last name person 2 </p>
        <p> loren ipsum first name & last name person 3 </p>
        <p> loren ipsim first name & last name person 4 </p>


      </div>
    </section>
  )
}
