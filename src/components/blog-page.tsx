import React from 'react'
import WrapperContent from './index/wrapper'

export default function BlogPage() {
  return (
    <div className="">
        <div className="flex flex-col items-center justify-center gap-y-5 lg:gap-y-10 w-full px-3 md:px-6 lg:px-10 xl:px-40 lg:py-10 py-10 mx-auto">
           <div className="border-b w-full">
            <div className="pb-5 lg:pb-16">
              <WrapperContent
              headerLabel="Blog"
              desc="Practical guides and sharp analysis for UAE teams building with agentic AI — no fluff, just what works." 
              headerTitle={`Stories on AI, agents and market trends.`} 
              contact
              />
            </div>
           </div>
           <BlogPageContent />
        </div>
        </div>
  )
}

function BlogPageContent() {
  return (
    <div className="w-full py-10 lg:py-20">
      <div className="flex flex-col gap-y-10">
        <h3 className="text-xl font-medium text-black">No Blogs yet</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Blog post items would go here */}
        </div>
      </div>
    </div>
  )
}