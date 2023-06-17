"use client"

import { use, useState } from "react"
import Link from "next/link"
import { AlertCircle, ArrowDown, ArrowRight, Loader2 } from "lucide-react"

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { MiniBar } from "@/components/mini-bar"

export default function IndexPage() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [loading, setLoading] = useState(true)
  const [loadingRe, setLoadingRe] = useState(false)
  const [spellPrompt, setSpellPrompt] = useState("")

  async function getQuery(query: string) {
    setLoading(true)
    setOutput("Generating...")

    try {
      const stat = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/status`)
      const stat_res = await stat.json()
    } catch {
      setOutput("Error: Server is busy. Try again later.")
      return
    }

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/predict/${query}`
      )
      // console.log(
      //   "Asked:",
      //   `${process.env.NEXT_PUBLIC_API_URL}/predict/${query}`
      // )
      const data = await res.json()
      console.log(data[0].revised)
      setOutput(data[0].revised)
    } catch {
      setOutput("Error: Server is busy. Try again later.")
    } finally {
      setLoading(false)
    }
  }

  async function getRespell(query: string) {
    const response = await fetch("https://api.respell.ai/v1/run", {
      method: "POST",
      headers: {
        authorization: "Bearer " + process.env.NEXT_PUBLIC_RESPELL_API_KEY,
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        spellId: "g_cKRamCFGE56b186d25r",
        spellVersionId: "QGu2QE9Fu7QCXmlyO5MME",
        inputs: {
          input: query,
        },
      }),
    })
    try {
      const data = await response.json()
      console.log(data)
      setSpellPrompt(data.outputs.output)
    } catch {
      setSpellPrompt("An Error Has Occured")
      console.log("error")
    } finally {
      setLoadingRe(false)
    }
  }

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10 w-fit">
      <div className="flex justify-center items-center">
        <div className="text-xs w-fit bg-yellow-100 text-yellow-500 dark:text-yellow-100 bg-opacity-70 p-1.5 rounded-lg text-center flex gap-1 items-center">
          <div className="opacity-60 text-yellow-500 dark:text-yellow-100">
            <AlertCircle size={18} />
          </div>
          Server currently only accepts 1 request at a time, so concurrent requests may fail
        </div>
      </div>
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
        <div className="lg:flex-row flex-col flex gap-4 justify-center items-center flex-wrap lg:items-stretch">
          <div className="bg-white relative dark:bg-black min-w-[315px] lg:min-w-[400px] max-h-[500px] lg:min-h-[410px] min-h-[200px] rounded-xl p-1 border border-gray-700 shadow-lg grid">
            <div className="flex w-full rounded-lg border border-gray-700 bg-white dark:bg-black lg:h-full flex-col">
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
          <div className="bg-white dark:bg-black w-[315px] lg:w-[400px] max-h-[500px] lg:h-[410px] h-[200px] rounded-xl p-1 border border-gray-700 shadow-lg flex flex-col">
            <div
              className={`flex w-full rounded-x-lg rounded-t-lg rounded-b-lg${
                output && !loading ? "-none" : ""
              } border border-gray-700 bg-white dark:bg-black overflow-y-scroll h-full`}
            >
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

            <Button
              onClick={(e) => {
                e.preventDefault()
                setLoadingRe(true)
                setSpellPrompt("Generating...")
                window.scrollTo({
                  top: document.documentElement.scrollHeight,
                  behavior: "smooth",
                })
                getRespell(output)
              }}
              className={`rounded-t-none w-full ${
                output && !loading ? "" : "hidden"
              }`}
              variant="default"
            >
              Try it out!
            </Button>
          </div>
        </div>
        <br></br>
        <div>
          <div className="text-sm mb-1">
            Powered by{" "}
            <span className="bg-gradient-to-r font-semibold  from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text">
              Respell.ai
            </span>
          </div>
          <div className="bg-white dark:bg-black w-[315px] lg:w-[400px] max-h-[500px] lg:h-[410px] h-[200px] rounded-xl p-1 border border-gray-700 shadow-lg grid">
            <div className="flex w-full rounded-lg border border-gray-700 bg-white dark:bg-black overflow-y-scroll">
              {!spellPrompt ? (
                <div className="p-2.5 opacity-50 text-sm font-medium h-full flex items-center justify-center w-full flex-col gap-1">
                  <div className="dark:bg-gray-800 bg-gray-200 p-1.5 rounded-lg">
                    <AlertCircle />
                  </div>
                  <div className="dark:bg-gray-800 bg-gray-200 px-2.5 py-1 rounded-xl">
                    First generate a prompt!
                  </div>
                </div>
              ) : (
                <>
                  {!loadingRe && spellPrompt ? (
                    <div className="p-2.5 opacity-50 text-sm font-medium">
                      {spellPrompt}
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
