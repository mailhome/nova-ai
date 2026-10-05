import { valueIsVisibleItems } from "../data/products";
import ProductsWrapper from "./products-wrapper";


export default function ValueIsVisible () {
  return (
      <section className='w-full'>
          <div className="w-full py-5 lg:py-4 lg:px-20 px-2">
              <ProductsWrapper
                  desc="Standardise the checks that protect cost, design intent, review capacity and long-term asset performance."
                  headerLabel="start where the value is visible"
                  headerTitle="Four workflows for stronger developer control."
                  content={<ValueIsVisibleContent />} />
          </div>
      </section>
  )
}

function ValueIsVisibleContent() {
    return (
        <div className="grid sm:grid-cols-2 grid-cols-1 lg:gap-x-20 lg:gap-y-10 gap-y-10 gap-x-6 w-full">
            {valueIsVisibleItems.map((item, index) => (
                <div key={index} className="flex flex-col justify-start items-start gap-2 h-auto rounded-lg border border-slate-200/80 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                    <div className="py-10 px-10 bg-white w-full flex flex-col items-start justify-start gap-y-4 lg:gap-y-2 rounded-lg">
                        <div className="flex items-center w-full justify-between">
                            <h3 className="text-xs font-medium uppercase  lg:text-md text-emerald-900">{item.label}</h3>
                            <p className="text-xs sm:text-sm md:text-md text-muted-foreground">{item.indexNumber}</p>
                        </div>
                        <h1 className="text-md font-semibold lg:text-xl text-black">{item.title}</h1>
                        <p className="text-xs sm:text-sm text-slate-600">{item.desc}</p>
                    </div>
                    <div className="h-min-50 lg:p-10 md:p-6 sm:p-4 p-4 lg:h-min-100 bg-[#F3F6F8] w-full">
                        <img src={item.imgSrc} alt={item.imgAlt} className="w-full h-full object-cover" />
                    </div>
                </div>
            ))}
        </div>
    )
}