export default function StatsPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          Statistics
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl text-center">
          View the <b>amazing</b> statics <br className="hidden sm:inline" /> of
          our prompt generation tool.
        </p>
        <div className="flex flex-wrap gap-5 justify-center mt-10">
          <div className="max-w-[500px] flex flex-col gap-2 card">
            <div className="cardTitle dark:bg-gray-900 bg-gray-100">
              Perplexity
            </div>
            <img
              className="rounded-lg"
              src={
                "https://media.discordapp.net/attachments/1119075412983677001/1120219751487119480/perplexity.png?width=1124&height=910"
              }
            ></img>
            <div className="card dark:bg-gray-800 shadow-lg">
              The mean perplexity of the model of the greedy decoding is 2.723,
              while an untrained model&apos;s mean perplexity of the 390 examples
              leads 11.75.
            </div>
          </div>
          <div className="max-w-[500px] flex flex-col gap-2 card">
            <div className="cardTitle dark:bg-gray-900 bg-gray-100">
              Rouge Score
            </div>
            <img
              className="rounded-lg"
              src={
                "https://cdn.discordapp.com/attachments/1119075412983677001/1120219751738781707/output.png"
              }
            ></img>
            <div className="card dark:bg-gray-800 shadow-lg">
              We use the Rogue score 1 , 2 , L and sum of the ChatGPT with the
              same instruction for the Prompt Generator models and compare the
              rogue score. The high rogue score demonstrates the model will
              closely match the reference text for predictions. However, these
              metrics ignore that ChatGPT does the same instruction very
              differently from the reference text.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
