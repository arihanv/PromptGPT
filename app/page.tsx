"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowDown, ArrowRight, Loader2 } from "lucide-react"

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { MiniBar } from "@/components/mini-bar"

export default function IndexPage() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [loading, setLoading] = useState(true)

  async function getQuery(query: string) {
    const res = await fetch(
      `https://gpt-api-z4khdeirua-uc.a.run.app/predict/${query}`
    )

    console.log(
      "Asked:",
      `https://gpt-api-z4khdeirua-uc.a.run.app/predict/${query}`
    )

    const data = await res.json()
    console.log(data[0].revised)
    setOutput(data[0].revised)
    setLoading(false)
  }

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
          <div className="bg-white relative dark:bg-black min-w-[315px] lg:min-w-[400px] max-h-[500px] lg:min-h-[410px] min-h-[200px] rounded-xl p-1 border border-gray-700 shadow-lg grid">
            <div className="flex w-full rounded-lg border border-gray-700 bg-white dark:bg-black h-full flex-col">
              <Textarea
                onChange={(e) => setInput(e.target.value)}
                className="h-full p-2.5 resize-none rounded-b-none"
                placeholder="Type your prompt here."
              />
              <Button
                onClick={(e) => {
                  e.preventDefault()
                  setLoading(true)
                  getQuery(input)
                }}
                className="rounded-t-none"
                variant="default"
              >
                Send Query
              </Button>
            </div>
          </div>
          <div className="h-full flex my-auto">
            <div className="hidden lg:block">
              <ArrowRight />
            </div>
            <div className="lg:hidden">
              <ArrowDown />
            </div>
          </div>
          <div className="bg-white dark:bg-black w-[315px] lg:w-[400px] max-h-[500px] lg:h-[410px] h-[200px] rounded-xl p-1 border border-gray-700 shadow-lg grid">
            <div className="flex w-full rounded-lg border border-gray-700 bg-white dark:bg-black overflow-y-scroll">
              {!output ? (
                <div className="p-2.5 opacity-50 text-sm italic font-medium">
                  Generated prompt will appear here...
                </div>
              ) : (
                <>
                  {!loading ? (
                    <div className="p-2.5 opacity-50 text-sm font-medium">
                      {output}
                    </div>
                  ) : (
                    <div className="flex w-full">
                      <div className="animate-spin text-gray-400 repeat-infinite dark:text-gray-600 m-auto">
                        <Loader2 size={30} />
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
