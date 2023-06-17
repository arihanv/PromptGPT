export default function StatsPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          Research
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl text-center">
          <b>What</b> do we do? <br className="hidden sm:inline" /> <b>How</b>{" "}
          do we do it?
        </p>
        <div className="flex flex-wrap gap-5 justify-center mt-10 bg-gray-100 dark:bg-gray-900 p-5 rounded-lg">
          <div className="card max-w-[350px] dark:bg-gray-800 shadow-lg flex flex-col gap-1">
            <div className="cardTitle dark:bg-gray-900 bg-gray-200">
              The Problem
            </div>
            <p className="text-sm">
              Crafting effective prompts for ChatGPT has long been a challenge
              faced by users. Users often find themselves frustrated when
              attempting to achieve the desired text output from chatGPT, which
              even led to a community of users attempting to find the best
              prompt for one-shot answers. This inspires us to create PromptGPT
              in order to help the user find that desired output.
            </p>
          </div>
          <div className="card max-w-[400px] dark:bg-gray-800 shadow-lg flex flex-col gap-1">
            <div className="cardTitle dark:bg-gray-900 bg-gray-200">
              Our solution
            </div>
            <p className="text-sm">
              Imagine a content creator who needs assistance
              generating engaging article ideas. Instead of brainstorming and
              refining prompts through trial and error, PromptGPT allows them to
              input a single sentence and receive a prompt-engineered best
              practice suggestion for one-shot result. This enables the creator
              to save time and focus on crafting high-quality content with one
              simple instruction.
            </p>
          </div>
        </div>
        <div className="card w-full flex flex-col gap-2 max-w-[700px] mt-2 dark:bg-gray-800">
          <div className="cardTitle dark:bg-gray-900 bg-gray-100">
            Our Pipeline
          </div>
          <img
            className="rounded-lg"
            src={
              "https://cdn.discordapp.com/attachments/1119004433263624212/1119099315445583973/Drawing_2023-06-15_21.44.20.excalidraw.png"
            }
          ></img>
        </div>
      </div>
    </section>
  )
}
