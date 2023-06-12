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
            <div className="cardTitle dark:bg-gray-900 bg-gray-100">
              The Problem
            </div>
            <p>Some info about the problem we are solving</p>
          </div>
          <div className="card max-w-[400px] dark:bg-gray-800 shadow-lg flex flex-col gap-1">
            <div className="cardTitle dark:bg-gray-900 bg-gray-100">
              Our solution
            </div>
            <p>Some info about our solution</p>
          </div>
        </div>
        <div className="card w-full flex flex-col gap-2 max-w-[700px] mt-2 dark:bg-gray-800" >
          <div className="cardTitle dark:bg-gray-900 bg-gray-100">
            Our Pipeline
          </div>
          <img
            className="rounded-lg"
            src={
              "https://spark.apache.org/docs/latest/img/ml-PipelineModel.png"
            }
          ></img>
        </div>
      </div>
    </section>
  )
}
