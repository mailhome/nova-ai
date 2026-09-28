import React from 'react'
import WrapperContent from '../index/wrapper'
import { resourcesItems } from '../data/resources'

export default function ResourcesPage() {
  return (
     <section className=''>
      <div className="px-3 md:px-6 lg:px-10 xl:px-16 lg:py-20 py-10 mx-auto w-full">
        <div className="flex flex-col items-center justify-center gap-y-5 lg:gap-y-10 w-full">
           <div className="border-b w-full">
            <div className="pb-5 lg:pb-16">
              <WrapperContent
              headerLabel="Resources"
              desc="Capture leads from every channel, qualify them automatically, and route them to the right rep in seconds — purpose-built for Dubai and Abu Dhabi sales teams." 
              headerTitle={`Learn how agentic AI actually ships in the UAE.`} 
              contact
              />
            </div>
           </div>
           <ResourcesContent />
        </div>
      </div>
    </section>
  )
}
  
function ResourcesContent () {
    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-10 lg:gap-y-10 gap-y-5 w-full">
            {resourcesItems.map((item, index) => (
                <a key={index} href={item.href} className='bg-white py-6 lg:py-6 px-6 lg:px-6 flex flex-col items-start justify-start gap-y-2 lg:gap-y-4 cursor-pointer w-full border rounded-lg hover:border-emerald-900/20'>
                    <p className='uppercase flex items-center justify-center text-[#36754D] text-center md:text-md text-sm lg:text-base font- '>{item.headingLabel}</p>
                    <h2 className='text-md md:text-lg lg:text-xl font-medium'>{item.label}</h2>
                    <p className='text-sm md:text-md lg:text-lg text-muted-foreground'>{item.desc}</p>
                </a>
            ))}
        </div>
    )
}
