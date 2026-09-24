import { buttonLinks } from "@/components/data"
import { Dot } from "lucide-react"
import { Button } from "../ui/button"

export default function Hero() {
  return (
    <section className="px-4 md:px-6 xl:h-full xl:pb-20 pb-10 w-full lg:px-10 border-b shadow-sm xl:px-16 mx-auto">
        <div className="xl:pt-10 pt-6 lg:pt-10 lg:mt-6 mt-4">
            <div className="grid grid-cols-1 w-full lg:grid-cols-2 gap-x-6 lg:gap-x-10 xl:gap-x-14 ">
                <div className="flex flex-col justify-center gap-y-6 lg:gap-y-6 xl:gap-y-10 items-start">
                    <div className="w-full flex justify-center items-center lg:justify-start ">
                        <p className="bg-[#EDF3F3] px-2 py-1 text-emerald-900 uppercase  font-semibold text-sm flex ">agentic ai consulting <Dot /> Dubai <Dot /> UAE</p>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-y-4">
                        <h1 className="text-3xl sm:text-5xl lg:text-5xl text-center lg:text-left xl:text-6xl font-bold text-neutral-900 xl:leading-16">Your business isn't off-the-shelf. Your AI shouldn't be either.</h1>
                        <p className="text-muted-foreground text-sm md:text-xl lg:text-xl xl:text-xl">Zorai is a Dubai-based agentic AI consultancy. We design and deploy autonomous agents that understand your operational DNA — and partner with teams across Dubai, Abu Dhabi and the wider UAE on AI enablement, from bespoke integrations to Shams for sales and Siraat for construction intelligence.</p>
                    </div>
                    <div className="flex items-center flex-col lg:flex-row justify-start gap-x-6 xl:gap-x-3 w-full gap-y-2 md:gap-y-4">
                        {buttonLinks.map((button, index) => (
                            <Button variant="default" key={index} className={`px-4 w-full lg:w-auto py-5 rounded-lg shadow-md text-md lg:text-base xl:text-lg border-2 font-semibold ${button.activeLabel ? "bg-emerald-900 text-white" : "bg-white text-neutral-900 hover:bg-neutral-200"}`}>
                                <a href={button.href}>
                                    {button.label}
                                </a> 
                            </Button>
                        ))}
                    </div>
                    <p className="py-1 text-neutral-600 uppercase hidden lg:flex lg:text-lg text-xs">Trusted by teams across dubai<Dot /> Abu Dhabi <Dot /> Sharjah</p>
                </div>

                {/* Hero Section Image */}
                <div className="flex items-center justify-center w-full h-full">
                    <img 
                    src="/hero-dashboard.png" 
                    alt="Hero Image" 
                    className="w-full h-full object-cover rounded-lg shadow-md" />
                </div>
            </div>
        </div>
    </section>
  )
}
