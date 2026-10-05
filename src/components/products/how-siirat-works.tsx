import React from "react";
import { howSiraatItems } from "../data/how-siirat-works";
import ProductsWrapper from "./products-wrapper";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";


export default function HowSiraatWorks() {
  return (
    <section className='w-full'>
        <div className="w-full py-5 lg:py-12 lg:px-20 px-2">
            <ProductsWrapper
                desc="A shared rules layer turns project requirements into checks that can be repeated at every design stage."
                headerLabel="How Siraat works" 
                headerTitle="From submission to decision, in one connected flow."
                content={<HowSiraatWorksContent />} />
        </div>
    </section>
  )
}

function HowSiraatWorksContent () {
    return (
        <div className="w-full  mx-auto p-6 bg-slate-50/50 rounded-3xl border border-slate-200/80 shadow-sm">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 items-center relative">
        {howSiraatItems.map((step, index) => {
          const IconComponent = step.icon;
          const isLast = index === howSiraatItems.length - 1;

          return (
            <React.Fragment key={index}>
              {/* Card Container */}
              <div className="group relative flex flex-col justify-between bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 min-h-40">
                {/* Icon Badge */}
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-2 border border-emerald-100/50 group-hover:bg-emerald-100 group-hover:scale-105 transition-all">
                  <IconComponent className="w-5 h-5 stroke-[1.75]" />
                </div>

                {/* Content */}
                <div className="space-y-1">
                  <h3 className="font-semibold text-slate-900 text-base lg:text-lg tracking-tight">
                    {step.label}
                  </h3>
                  <p className="text-xs md:text-md lg:text-md font-normal text-slate-500 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>

              {/* Arrow Connector (Desktop) */}
              {!isLast && (
                <div className={cn("hidden md:flex absolute justify-center items-center z-10 text-emerald-600/70 pointer-events-none", index === 1 && "ml-4", index === 2 && "ml-8", index === 3 && "sm:hidden lg:flex" )} style={{ left: `calc(${(index + 1) * 24.5}% - 12px)` }}>
                  <ChevronRight className="w-5 h-5 stroke-[2.25]" />
                </div>
              )}


              {/* Arrow Connector (Mobile) */}
              {!isLast && (
                <div className={cn("flex flex-col sm:flex-row sm:hidden absolute justify-center items-center z-10 text-emerald-600/70 w-full   pointer-events-none", index === 1 && "mb-4", index === 2 && "mb-8" )} style={{ bottom: `calc(${(index + 1) * 24.5}% - 12px)` }}>
                  <ChevronDown className="w-5 h-5 stroke-[2.25]" />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
    )
}

