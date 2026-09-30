import { cn } from "cn";
import { ctaButtonItems } from "../data";
import { Button } from "../ui/button";


export default function Cta() {
  return (
    <div className="py-10 w-full  px-4 md:px-6 lg:px-10 xl:px-16 mx-auto">
        <div className="w-full py-10 lg:py-16 bg-[#306A46] rounded-lg ">
            <div className="text-center flex flex-col items-center justify-center gap-y-2">
                <h2 className="text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-white w-11/12 md:w-10/12 lg:w-6/12 xl:w-6/12 mx-auto">Ready to put agentic AI to work in the UAE?</h2>
                <p className="text-md md:text-lg xlg:text-xl xl:text-xl my-3 text-neutral-100 w-11/12 md:w-10/12 lg:w-6/12 xl:w-4/12 mx-auto">Choose Shams for intelligent sales operations or Siraat for construction intelligence.</p>
                <div className="flex md:flex-row flex-col items-center justify-center gap-x-6  rounded-md text-white mt-2 lg:mt-4 w-full lg:w-auto gap-y-4">
                    {ctaButtonItems.map((item) => (
                        <a key={item.href} href={item.href} className="w-full">
                            <Button className={cn("text-sm md:text-md lg:text-lg xl:text-xl text-white border border-neutral-100/50 rounded-md hover:bg-neutral-200/50 hover:text-white py-4 h-12 px-4 bg-transparent cursor-pointer font-semibold w-11/12 md:w-auto", item.href === "/contact" && "bg-white text-[#306A46] hover:bg-white/90 hover:text-[#306A46] w-11/12")}>
                                {item.label}
                            </Button>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}
