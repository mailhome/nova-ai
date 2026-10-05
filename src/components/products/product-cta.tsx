import { MoveRight } from "lucide-react";
import { ButtonProps } from "./botton-props";


export default function ProductCta() {
  return (
    <div className="w-full py-10 lg:py-20 md:py-10 lg:px-20 px-2 lg:gap-x-10 xl:gap-x-20 gap-x-5">
        <div className="bg-[#306A46] w-full h-auto px-10 py-10 lg:py-16 rounded-xl text-white">
            <div className="grid lg:grid-cols-12 grid-cols-1 gap-y-4">
                <div className="lg:col-span-8 col-span-12 flex flex-col items-start justify-start gap-y-2 lg:gap-y-4">
                      <span className="text-xs sm:text-sm font-medium text-center lg:text-left uppercase lg:text-md text-emerald-200  tracking-[4px]">Siraat Intelligence Platform for Construction</span>
                      <h2 className="text-lg sm:text-5xl lg:text-4xl font-medium text-white mt-2 w-full text-center lg:text-left mx-auto">
                         Turn your next BIM submission into a faster, clearer decision.
                      </h2>
                      <p className="text-neutral-300 text-center lg:text-left sm:text-md lg:text-lg md:text-lg text-xs">
                          Bring one live project and its review requirements. We’ll map the first rulebook and validation workflow with your team.
                      </p>
                </div>
                <div className="lg:col-span-4 col-span-12 flex items-center lg:justify-end justify-start w-full lg:w-auto gap-x-4">
                    <ButtonProps
                    className="bg-white hover:bg-white text-[#306A46] font-semibold py-2 px-4 rounded-lg"
                    buttonHref="/contact"
                    buttonLabel="Book a construction demo"
                    icon={MoveRight}
                     />
                </div>
            </div>
        </div>
    </div>
  )
}
