import WrapperContent from "./wrapper";
import { whatwedoItems } from "../data";

export default function WhatWeDo() {
  return (
    <div className="w-full container-wrapper justify-center items-center  bg-[#F8FAFC] border-b shadow-sm xl:py-16 lg:py-10 py-10">
        <WrapperContent
        headerLabel="What we do" 
        headerTitle="Consulting expertise, delivered through two focused platforms." 
        content={<WhatWeDoContent />}
        whatwedo />
    </div>
  )
}

function WhatWeDoContent() {
    return (
        <div className="w-full">
                <div className="w-full xl:pt-10 mt-6 gap-y-6 lg:gap-y-0 gap-x-6 xl:gap-x-12 grid grid-cols-1 lg:grid-cols-3">
                    {whatwedoItems.map((item, index) => (
                        <div key={index} className="w-full  flex flex-col justify-start items-start gap-y-4 border rounded-xl shadow-sm p-6 lg:p-6 xl:p-8  bg-white md:p-0 px-10 ">
                            <p className="text-[#36754D] text-sm font-semibold rounded-full p-2 bg-neutral-100">{item.item}</p>
                            <h2 className="text-neutral-900 text-xl md:text-2xl lg:text-xl xl:text-xl font-bold">{item.label}</h2>
                            <p className="text-muted-foreground text-xs md:text-base lg:text-sm xl:text-md">{item.desc}</p>
                            <ul className="list-disc  list-inside text-muted-foreground text-sm md:text-sm marker:text-green-900 lg:text-sm xl:text-base xl:gap-y-4">
                                {item.itemList.map((listItem, listIndex) => (
                                    <li key={listIndex} className="text-sm py-1">{listItem}</li>
                                ))}
                            </ul>
                            <div className="flex items-center justify-center w-full h-full bg-white rounded-md p-4">
                                <img src={item.imgSrc} alt={item.imgAlt} className="w-full h-full object-contain" />
                            </div>
                            <a href={item.buttonHref} className="text-[#36754D]  px-4 py-2 text-sm md:text-base lg:text-sm xl:text-base font-semibold hover:underline underline-offset-4">{item.buttonLabel}</a>
                        </div>
                    ))}
                </div>
        </div>
    )
}