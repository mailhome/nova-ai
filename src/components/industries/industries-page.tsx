import { cn } from "cn";
import { industriesItem } from "../data/industries";
import WrapperContent from "../index/wrapper";
import { Check, MoveRight } from "lucide-react";
import { Button } from "../ui/button";


export default function IndustriesPage() {
  return (
    <section className=''>
      <div className="">
        <div className="flex flex-col items-center justify-center gap-y-5 lg:gap-y-10 w-full px-3 md:px-6 lg:px-10 xl:px-40 lg:py-10 py-10 mx-auto w-full">
           <div className="border-b w-full">
            <div className="pb-5 lg:pb-16">
              <WrapperContent
              headerLabel="Industries"
              desc="Zorai concentrates on two operating environments in the UAE: the complexity of real estate development and the speed of modern retail." 
              headerTitle={`Focused intelligence for the sectors we understand deeply.`} 
              contact
              />
            </div>
           </div>
           <IndustriesContent />
        </div>

        <IndustriesContentLower />
      </div>
    </section>
  )
}

function  IndustriesContent () {
  return (
    <div className="w-full ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 lg:gap-x-20 gap-y-10 w-full border-b lg:pb-20 pb-10">
        {industriesItem.map((item, index) => (
          <div key={index} className={cn("flex flex-col item-start justify-start gap-y-4 p-8 lg:p-10 lg:gap-y-6 w-full bg-white rounded-lg", item.headingLabel === "Real estate developers" && "bg-[#0C211B]")}>
            <div className={cn("bg-emerald-400/20  h-8 w-8 lg:h-12  lg:w-12 rounded-md flex items-center justify-center p-1    ", item.headingLabel === "Real estate developers" && "bg-emerald-700/50")}>
              <item.icon className={cn("lg:size-7 size-5  text-emerald-800", item.headingLabel === "Real estate developers" && "text-emerald-300")} />
            </div>  
            <p className={cn("text-emerald-800 uppercase text-sm lg:text-base font-semibold", item.headingLabel === "Real estate developers" && "text-emerald-200")}>{item.headingLabel}</p>                                      
            <p className={cn("text-black text-xl lg:text-4xl font-medium", item.headingLabel === "Real estate developers" && "text-white")}>{item.label}</p>                                      
            <p className={cn("text-muted-foreground text-xs md:text-md lg:text-xl", item.headingLabel === "Real estate developers" && "text-white")}>{item.desc}</p>  
          <ul className="flex flex-col items-start justify-start gap-y-2 lg:gap-y-4">
              {item.itemList.map((list, index) => (
                 <li 
                 key={index}
                 className="flex justify-start items-center gap-2 lg:gap-2">
                    <Check className={cn("size-4 lg:size-5 text-emerald-800", item.headingLabel === "Real estate developers" && "text-emerald-300")} />
                    <span className={cn("text-muted-foreground text-xs md:text-md lg:text-lg",)}>{list}</span>
                 </li>
              ))}
            </ul> 
            <Button className={cn("w-full lg:w-[200px] h-12 lg:w-h-14 bg-[#306A46] hover:bg-[#306A46] text-white text-md lg:text-xl flex items-center justify-start gap-3 px-4 lg:px-4 rounded-lg font-medium", item.headingLabel === "Real estate developers" && "bg-emerald-200 hover:bg-emerald-200 text-black")} render={<a href={item.buttonHref} />}>
              {item.buttonLabel}
              <MoveRight />
            </Button>                                   
          </div>
        ))}
      </div>
    </div>
  )
}

function IndustriesContentLower () {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 py-2 lg:py-5 gap-x-10 lg:gap-x-20 gap-y-3 xl:px-10 px-5 pb-5 lg:pb-20">
      <div className="flex flex-col lg:items-start lg:justify-start items-center justify-center gap-y-2 lg:gap-y-4 text-center lg:text-left w-full">
        <p className="uppercase flex lg:items-start lg:justify-start text-[#36754D] text-center md:text-md text-sm lg:text-lg font-semibold w-full lg:w-6/12 xl:w-8/12 mx-auto justify-center items-center">Why novai built siirat</p>
        <h1 className={cn("text-xl md:text-xl lg:text-left lg:text-lg xl:text-4xl text-neutral-900 lg:leading-10 text-center  font-semibold lg:pl-30 flex items-center justify-center lg:items-center lg:justify-start w-full")}>
              Project knowledge should become a developer’s advantage.
            </h1>
      </div>
      <div className="flex flex-col items-start justify-start gap-y-5 lg:gap-y-5">
        <p className="text-xs md:text-sm lg:text-lg lg:leading-8 text-muted-foreground">Real estate developers coordinate many external architects, engineers and consultants, but remain accountable for cost, quality, compliance and the performance of the finished asset. The most valuable decisions are often scattered across old reports, design manuals and the experience of individual reviewers.</p>
        <p className="text-xs md:text-sm lg:text-lg lg:leading-8 text-muted-foreground">Zorai created Siraat to turn that knowledge into a living intelligence layer. Portfolio standards, value-engineering lessons and handover requirements become repeatable model checks, applied from concept design through detailed coordination. Every project can then start with the lessons of the last one.</p>
        <a href="/products" className="flex items-center justify-start gap-x-2 lg:gap-4 text-[#36754D] font-medium hover:underline  underline-offset-4">See the Siraat construction workflow
        </a>
      </div>
    </div>
  )
}
