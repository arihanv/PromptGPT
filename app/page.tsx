import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { MiniBar } from "@/components/mini-bar"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
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
        <div className="flex gap-4 justify-center">
          <div className="bg-white dark:bg-black min-w-[415px] max-h-[500px] min-h-[400px] rounded-xl p-1 border border-gray-700 shadow-lg">
            <div className="h-full w-full rounded-lg border border-gray-700 bg-white dark:bg-black overflow-y-scroll">
              <Textarea
                className="h-full p-2.5"
                placeholder="Type your prompt here."
              />
            </div>
          </div>
          <div className="h-full flex my-auto">
            <ArrowRight />
          </div>
          <div className="bg-white dark:bg-black min-w-[415px] max-h-[500px] min-h-[400px] rounded-xl p-1 border border-gray-700 shadow-lg">
            <div className="h-full w-full rounded-lg border border-gray-700 bg-white dark:bg-black overflow-y-scroll">
              <div className="p-2.5 opacity-50 text-sm italic font-medium">
                Your prompt will appear here...
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
