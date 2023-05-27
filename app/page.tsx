import Link from "next/link"
import { ArrowDown, ArrowRight } from "lucide-react"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { MiniBar } from "@/components/mini-bar"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10 w-fit">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          PromptGPT
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl text-center">
          Instantly generate an <b>efficient</b> prompt for an LLM{" "}
          <br className="hidden sm:inline" /> with just a <b>few</b> clicks.
        </p>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <div className="bg-gray-200 dark:bg-gray-800 p-1.5 rounded-lg w-fit">
          <MiniBar />
        </div>
        <div className="lg:flex-row flex-col flex gap-4 justify-center items-center flex-wrap lg:items-stretch">
          <div className="bg-white dark:bg-black min-w-[315px] max-h-[500px] lg:min-h-[400px] min-h-[200px] rounded-xl p-1 border border-gray-700 shadow-lg grid">
            <div className="h-full w-full rounded-lg border border-gray-700 bg-white dark:bg-black overflow-y-scroll">
              <Textarea
                className="h-full p-2.5"
                placeholder="Type your prompt here."
              />
            </div>
          </div>
          <div className="h-full flex my-auto">
            <div className="hidden lg:block">
            <ArrowRight/>
            </div>
            <div className="lg:hidden">
            <ArrowDown/>
            </div>
          </div>
          <div className="bg-white dark:bg-black min-w-[315px] max-h-[500px] lg:min-h-[400px] min-h-[200px] rounded-xl p-1 border border-gray-700 shadow-lg grid">
            <div className="h-full w-full rounded-lg border border-gray-700 bg-white dark:bg-black overflow-y-scroll">
              <div className="p-2.5 opacity-50 text-sm italic font-medium">
                Generated prompt will appear here...
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
