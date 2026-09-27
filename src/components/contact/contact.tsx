import { infoList } from '../data/contact'
import WrapperContent from '../index/wrapper'
import { Button } from '../ui/button'
import ContactForm from './contact-form'


export default function Contact() {
  return (
    <section className=''>
      <div className="px-3 md:px-6 lg:px-10 xl:px-16 lg:py-20 py-10 mx-auto w-full">
        <div className="flex flex-col items-center justify-center gap-y-5 lg:gap-y-10 w-full">
           <div className="border-b w-full">
            <div className="pb-5 lg:pb-16">
              <WrapperContent
              headerLabel="Contact"
              desc="Tell us about your business — we'll match you with the right next step: a Shams or Siraat demo, an AI enablement workshop, or a discovery call for a bespoke agentic integration." 
              headerTitle={`Let's talk about your
              agentic roadmap.`} 
              contact
              />
            </div>
           </div>
        </div>
        <div className="py-5 lg:py-10 w-full ">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-10 w-full">
              <div className="flex justify-start items-start w-full lg:col-span-7 md:col-span-6 col-span-12 px-3 md:px-0">
                <ContactForm />
              </div>

              <div className="flex flex-col items-start justify-start w-full lg:col-span-5 md:col-span-6 lg:gap-y-6 gap-y-6 col-span-12 px-3 md:px-0">
                <div className="bg-white rounded-lg py-4 lg:py-8 px-4 lg:px-6 flex items-start justify-start flex-col w-full gap-y-2 md:gap-y-2">
                  <h1 className='uppercase text-base xl:text-base font-semibold text-[#306A46]'>Norai UAE</h1>
                  <p className='text-lg lg:text-xl font-semibold'>Dubai, United Arab Emirates</p>
                  <div className="flex flex-col items-start justify-start gap-y-4 md:gap-y-4 mt-2 lg:mt-4">
                    {infoList.map((list, index) => (
                      <div key={index} className='flex items-center justify-start gap-x-1 lg:gap-x-2'>
                        <list.icon className='size-5 text-[#306A46]' />
                        <span className='text-muted-foreground'>{list.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#306A46] rounded-lg py-4 lg:py-8 px-4 lg:px-6 flex items-start justify-start flex-col w-full gap-y-4 md:gap-y-8 lg:gap-y-4">
                  <h1 className='text-lg lg:text-2xl font-semibold text-white'>30 minute and transform your business</h1>
                  <p className='text-md lg:text-lg text-neutral-200'>Book a free 30-minute strategy call with our Dubai team — pick a slot that works for you and we'll show you exactly how agentic AI can move the needle.</p>
                  <a href="/contact" className='w-full'>
                    <Button className=" rounded-md bg-white text-[#306A46] font-semibold text-md lg:text-lg py-4 h-10 w-full lg:w-auto px-2 lg:px-4 hover:bg-white hover:text-[#306A46] cursor-pointer">
                      Book your 30-minute call
                    </Button>
                  </a>
                </div>
              </div>
            </div>
           </div>
      </div>
    </section>
  )
}
