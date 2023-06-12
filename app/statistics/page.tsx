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
          <div className="card max-w-[300px] dark:bg-gray-800 shadow-lg flex flex-col gap-1">
            <div className="cardTitle dark:bg-gray-900 bg-gray-100">Title</div>
            <p>Some info about Stats of the model</p>
          </div>
          <div className="max-w-[300px] flex flex-col gap-2 card">
            <div className="cardTitle dark:bg-gray-900 bg-gray-100">Title</div>
            <img
              className="rounded-lg"
              src={
                "https://images.ctfassets.net/pdf29us7flmy/4FaqpZFMenRQoDl0LGqFes/02c40a20ee37917f3e117b9c599f132d/GOLD-6487-CareerGuide-Batch04-Images-GraphCharts-01-Line.png?w=720&q=100&fm=jpg"
              }
            ></img>
            <div className="card dark:bg-gray-800 shadow-lg">
              Description of the graph
            </div>
          </div>
          <div className="max-w-[300px] flex flex-col gap-2 card">
            <div className="cardTitle dark:bg-gray-900 bg-gray-100">Title</div>
            <img
              className="rounded-lg"
              src={
                "https://images.ctfassets.net/pdf29us7flmy/4FaqpZFMenRQoDl0LGqFes/02c40a20ee37917f3e117b9c599f132d/GOLD-6487-CareerGuide-Batch04-Images-GraphCharts-01-Line.png?w=720&q=100&fm=jpg"
              }
            ></img>
            <div className="card dark:bg-gray-800 shadow-lg">
              Description of the graph
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
