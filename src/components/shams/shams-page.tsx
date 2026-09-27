import React from 'react'
import WrapperContent from '../index/wrapper'
import { shamsList } from '../data/shams'
import { Button } from '../ui/button'

export default function ShamsPage() {
  return (
    <section className=''>
      <div className="px-3 md:px-6 lg:px-10 xl:px-16 lg:py-20 py-10 mx-auto w-full">
        <div className="flex flex-col items-center justify-center gap-y-5 lg:gap-y-10 w-full">
           <div className="border-b w-full">
            <div className="pb-5 lg:pb-16">
              <WrapperContent
              headerLabel="Shams · Sales intelligence"
              desc="Capture leads from every channel, qualify them automatically, and route them to the right rep in seconds — purpose-built for Dubai and Abu Dhabi sales teams." 
              headerTitle={`The agentic sales           
              engine for the UAE.`} 
              contact
              />
            </div>
           </div>
           <ShamsContent />
        </div>
      </div>
    </section>
  )
}

function ShamsContent () {
    return (
        <div className="px-3 md:px-6 lg:px-10 xl:px-16 lg:py-10 py-5 mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:gap-x-20 gap-x-10 gap-y-8">
                <div className="flex items-center justify-center w-full h-full">
                    <img 
                    src="/shams-image.jpg" 
                    alt="Shmas Image" 
                    className="w-full h-full object-cover rounded-lg shadow-md" />
                </div>

                <div className="flex flex-col items-start justify-start gap-y-4 lg:gap-y-4">
                    <h1 className='text-lg md:text-2xl lg:text-4xl font-semibold text-black'>Every lead. Every channel. Zero manual work.</h1>
                    <div className="flex flex-col items-start justify-start gap-y-4 lg:gap-y-4">
                        {shamsList.map((list, index) => (
                            <div key={index} className='flex flex-col items-start justify-start gapy-2'>
                                <h2 className='text-md md:text-xl xl:text-2xl font-medium'>{list.label}</h2>
                                <p className='text-muted-foreground text-md md:text-lg lg:text-xlg'>{list.desc}</p>
                            </div>
                        ))}
                    </div>
                    
                    <Button
                        render={<a href="/contact" />}
                        className="w-full rounded-md bg-[#005c3d] py-6 px-6 font-medium text-white hover:bg-[#004a31] transition-colors text-md lg:text-lg"
                    >
                        Request a Shams Demo
                    </Button>

                    
                </div>
            </div>
        </div>
    )
}
