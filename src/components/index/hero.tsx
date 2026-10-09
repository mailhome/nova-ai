import { buttonLinks } from "@/components/data"
import { Dot } from "lucide-react"
import { Button } from "../ui/button"

export default function Hero() {
  return (
    <section className="xl:h-full xl:pb-20 pb-10 w-full border-b shadow-sm xl:px-24 container-wrapper">
        <div className="xl:pt-10 pt-6 lg:pt-10 lg:mt-6 mt-4">
            <div className="grid grid-cols-1 w-full lg:grid-cols-2 gap-x-6 lg:gap-x-10 xl:gap-x-20 gap-y-6 lg:gap-y-0">
                <div className="flex flex-col justify-center gap-y-6 lg:gap-y-6 xl:gap-y-5 items-start">
                    <div className="w-full flex justify-center items-center lg:justify-start ">
                        <p className="bg-[#EDF3F3] px-2 py-1 text-emerald-900 uppercase  font-semibold text-sm flex ">agentic ai consulting <Dot /> Dubai <Dot /> UAE</p>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-y-2 sm:gap-y-4">
                        <h1 className="text-3xl sm:text-6xl lg:text-4xl text-center lg:text-left xl:text-5xl font-bold text-neutral-900 xl:leading-14">Your business isn't off-the-shelf. Your AI shouldn't be either.</h1>
                        <p className="text-gray-600 text-[10px] sm:text-base lg:text-lg xl:text-base">Novai is a Dubai-based agentic AI consultancy. We design and deploy autonomous agents that understand your operational DNA — and partner with teams across Dubai, Abu Dhabi and the wider UAE on AI enablement, from bespoke integrations to Shams for sales and Siraat for construction intelligence.</p>
                    </div>
                    <div className="flex items-center flex-col md:flex-row justify-start gap-x-6 xl:gap-x-3 w-full gap-y-4 md:gap-y-4">
                        {buttonLinks.map((button, index) => (
                            <Button variant="default" key={index} className={`px-4 sm:px-6 w-full md:w-auto py-5 sm:h-12 rounded-lg shadow-md text-sm lg:text-md xl:text-md border ${button.activeLabel ? "bg-emerald-900 text-white hover:bg-emerald-900/80" : "bg-white hover:bg-white/50 text-neutral-900"}`}>
                                <a href={button.href}>
                                    {button.label}
                                </a> 
                            </Button>
                        ))}
                    </div>
                    <p className="py-1 mt-4 text-neutral-600 uppercase hidden lg:flex lg:text-base text-xs">Trusted by teams across dubai<Dot /> Abu Dhabi <Dot /> Sharjah</p>
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
