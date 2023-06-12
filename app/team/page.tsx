import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function StatsPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          Team
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl text-center">
          Meet the <b>team</b> behind the <br className="hidden sm:inline" />{" "}
          Prompt GPT magic.
        </p>
        <div className="flex flex-wrap gap-5 justify-center mt-10">
          <div className="max-w-[250px] flex flex-col gap-3 card items-center border-none">
            <div className="cardTitle dark:bg-gray-900 bg-gray-100">John Hua</div>
            <Avatar className="w-[13rem] h-[13rem]">
              <AvatarImage src="https://images.pexels.com/photos/7130560/pexels-photo-7130560.jpeg?cs=srgb&dl=pexels-codioful-%28formerly-gradienta%29-7130560.jpg&fm=jpg" alt="" />
              <AvatarFallback>JH</AvatarFallback>
            </Avatar>
            <div className="card dark:bg-gray-800 shadow-lg">
             Hello my name is John
            </div>
          </div>
          <div className="max-w-[250px] flex flex-col gap-3 card items-center border-none">
            <div className="cardTitle dark:bg-gray-900 bg-gray-100">Arihan Varanasi</div>
            <Avatar className="w-[13rem] h-[13rem]">
              <AvatarImage src="https://avatars.githubusercontent.com/u/63890951?v=4" alt="@arihanv" />
              <AvatarFallback>AV</AvatarFallback>
            </Avatar>
            <div className="card dark:bg-gray-800 shadow-lg">
             Hello my name is Arihan
            </div>
          </div>
          <div className="max-w-[250px] flex flex-col gap-3 card items-center border-none">
            <div className="cardTitle dark:bg-gray-900 bg-gray-100">Dan Nguyen</div>
            <Avatar className="w-[13rem] h-[13rem]">
              <AvatarImage src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v904-nunny-004.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=419940fc6baf1c6a20e20b10dbaf34f9" alt="" />
              <AvatarFallback>DN</AvatarFallback>
            </Avatar>
            <div className="card dark:bg-gray-800 shadow-lg">
             Hello my name is Dan
            </div>
          </div>
          <div className="max-w-[250px] flex flex-col gap-3 card items-center border-none">
            <div className="cardTitle dark:bg-gray-900 bg-gray-100">Rami Malek</div>
            <Avatar className="w-[13rem] h-[13rem]">
              <AvatarImage src="https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg" alt="" />
              <AvatarFallback>RM</AvatarFallback>
            </Avatar>
            <div className="card dark:bg-gray-800 shadow-lg">
             Hello my name is Rami
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
