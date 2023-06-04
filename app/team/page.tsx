import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function StatsPage() {
  return (
    <section class="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div class="flex flex-col items-center gap-2">
      <h1 class="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
      Team
      </h1>
        <p class="max-w-[700px] text-lg text-muted-foreground sm:text-xl text-center">
          See the team behind the <b>awesome</b> Ai product. <br class="hidden sm:inline">for your use.
        </p>
      </div>
    </section>

    <section class="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div class="container">
        <div class="image, circular--square">
          <img class="circular--square" src="https://media.licdn.com/dms/image/D4D35AQGmHr2BjRBQew/profile-framedphoto-shrink_400_400/0/1685599550387?e=1686456000&amp;v=beta&amp;t=i_m2WD4W9QcvjxT6pDU-D7Cf3HnrX4NjTp8Kf-3iiCs">
        </div>
        <div class="text">
          <h1>
          John Hua is a xxx and a beautiful person with a beautiful photo. He contributed xyz. This could be you on the website if you join the team and give us $200,000 in venture capital.
          </h1>
        </div>
      </div>
    </section>

    <section class="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div class="container">
        <div class="image, circular--square">
          <img class="circular--square" src="https://media.licdn.com/dms/image/D4D35AQGmHr2BjRBQew/profile-framedphoto-shrink_400_400/0/1685599550387?e=1686456000&amp;v=beta&amp;t=i_m2WD4W9QcvjxT6pDU-D7Cf3HnrX4NjTp8Kf-3iiCs">
        </div>
        <div class="text">
          <h1>
          John Hua is a xxx and a beautiful person with a beautiful photo. He contributed xyz. This could be you on the website if you join the team and give us $200,000 in venture capital.
          </h1>
        </div>
      </div>
    </section>

    <section class="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div class="container">
        <div class="image, circular--square">
          <img class="circular--square" src="https://media.licdn.com/dms/image/D4D35AQGmHr2BjRBQew/profile-framedphoto-shrink_400_400/0/1685599550387?e=1686456000&amp;v=beta&amp;t=i_m2WD4W9QcvjxT6pDU-D7Cf3HnrX4NjTp8Kf-3iiCs">
        </div>
        <div class="text">
          <h1>
          John Hua is a xxx and a beautiful person with a beautiful photo. He contributed xyz. This could be you on the website if you join the team and give us $200,000 in venture capital.
          </h1>
        </div>
      </div>
    </section>

    <section class="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div class="container">
        <div class="image, circular--square">
          <img class="circular--square" src="https://media.licdn.com/dms/image/D4D35AQGmHr2BjRBQew/profile-framedphoto-shrink_400_400/0/1685599550387?e=1686456000&amp;v=beta&amp;t=i_m2WD4W9QcvjxT6pDU-D7Cf3HnrX4NjTp8Kf-3iiCs">
        </div>
        <div class="text">
          <h1>
          John Hua is a xxx and a beautiful person with a beautiful photo. He contributed xyz. This could be you on the website if you join the team and give us $200,000 in venture capital.
          </h1>
        </div>
      </div>
    </section>
  )
}
