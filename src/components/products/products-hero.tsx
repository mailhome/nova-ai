
import { productsHeroItems } from '../data/products'
import { ButtonProps } from './botton-props'
import { Check, MoveRight, Sparkles } from 'lucide-react'

export default function ProductsHero() {
  return (
    <section className="w-full h-full lg:h-auto ">
        <div className="py-10 lg:py-10 lg:px-20 px-4 mx-auto bg-[#10241E]">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-y-10 gap-x-20 w-full">
                <div className="flex lg:items-start lg:justify-start flex-col gap-4 lg:gap-4 w-full items-center justify-center">
                    <div className="flex rounded-full py-2 px-4 lg:py-2 lg:px-4 bg-emerald-900/20 border border-emerald-200 items-center lg:justify-start justify-center w-auto gap-2">
                        <Sparkles className="text-emerald-200 size-4 lg:size-4" />
                        <span className="text-emerald-200 uppercase font-semibold md:text-md text-sm">Construction intelligence</span>
                    </div>
                    <h1 className="text-4xl md:text-7xl text-center lg:text-left lg:text-6xl font-semibold text-white">Build with clarity, before you build.</h1>
                    <p className="text-gray-300 lg:text-base sm:text-lg md:text-lg text-xs leading-6 lg:leading-6 text-center lg:text-left">
                        Siraat Intelligence Platform for Construction turns BIM models into coordinated, review-ready decisions—checking quality, cost, compliance and asset data in one workflow.
                    </p>
                    <div className="flex items-start pb-5 border-b lg:pb-5 border-green-900/90 justify-start gap-x-4 flex-col lg:flex-row w-full lg:w-auto gap-y-4">
                        <ButtonProps 
                        buttonLabel="Request a project review"
                        buttonHref="/contact"
                        icon={MoveRight}
                        className="bg-emerald-200 hover:bg-emerald-100 text-emerald-900 shadow-sm border"
                        />
                        <ButtonProps 
                        buttonLabel="Explore the platform"
                        buttonHref="/products#"
                        className="bg-emerald-900 hover:bg-emerald-900 text-white shadow-sm border px-6"
                        />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-3 lg:gap-2  my-3 lg:mt-3 w-full justify-start items-start lg:justify-start lg:items-start px-4 lg:px-0">
                        {productsHeroItems.map((item, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <Check className=" text-emerald-200 size-5" />
                                <span className="text-muted-foreground text-sm md:text-md lg:text-md">{item}</span>
                            </div>
                        ))} 
                    </div>
                </div>

                <div className="flex items-center justify-center w-full h-full">
                    <img src="/products-image.jpg" alt="Products Image" className="object-contain w-full h-full" />
                </div>
            </div>
            
        </div>
        
    </section>
  )
}
