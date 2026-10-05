import { solutionList } from "./data/solutions";
import WrapperContent from "./index/wrapper";
import { Button } from "./ui/button";


export default function SolutionsPage() {
  return (
    <div className="">
        <div className="flex flex-col items-center justify-center gap-y-5 lg:gap-y-10 w-full px-3 md:px-6 lg:px-10 xl:px-40 lg:py-10 py-10 mx-auto">
           <div className="border-b w-full">
            <div className="pb-5 lg:pb-16">
              <WrapperContent
              headerLabel="Agentic AI Consulting · UAE"
              desc="Not every business is the same. To get maximum value from agentic AI, you need a system designed for your specific processes — that's what Zorai delivers, from Dubai to Abu Dhabi and beyond." 
              headerTitle={`Consulting + bespoke agents, built around your UAE business.`} 
              contact
              />
            </div>
           </div>
           <SolutionPageList />
        </div>
        </div>
  )
}

function SolutionPageList ()  {
    return (
        <section className="w-full">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-10 lg:gap-x-10 gap-y-10 w-full lg:py-10 py-5">
            {solutionList.map((list) => (
                <div key={list.index} className="p-5 lg:p-8 flex flex-col items-start justify-start gap-1 w-full lg:gap-1 bg-white gap-x-10 border shadow-sm rounded-lg">
                    <p className="uppercase  text-[#36754D] text-left md:text-md text-sm lg:text-lg font-semibold ">{list.index}</p>
                    <h2 className="text-md md:text-base lg:text-lg font-semibold">{list.label}</h2>
                    <p className="text-muted-foreground text-xs md:text-sm lg:text-md">{list.desc}</p>
                </div>
            ))}
        </div>
        <div className="w-full mt-5 lg:w-auto flex items-center justify-center">
            <Button
                render={<a href="/contact" />}
                className="w-full lg:w-100  rounded-md bg-[#005c3d] py-6 px-6 font-medium text-white hover:bg-[#004a31] transition-colors text-md lg:text-lg ">
                    Start a discovery call
            </Button>
        </div>
        </section>

    )
}
