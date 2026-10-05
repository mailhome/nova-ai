import { productsOrganisationalIntelligenceItems } from "../data/products";


export default function ProductsOrganisationalIntelligence() {
  return (
    <div className="grid lg:grid-cols-12 grid-cols-1 w-full bg-[#0C211B] py-10 lg:py-20 md:py-10 lg:px-20 px-2 lg:gap-x-10 xl:gap-x-20 gap-x-5">
        <div className="lg:col-span-5 col-span-12 flex flex-col  gap-y-2 lg:gap-y-5  lg:items-start lg:justify-center gap-1 items-center justify-center text-center lg:text-left py-5 lg:py-0 w-full">
            <span className="text-sm font-medium uppercase lg:text-md text-emerald-200  tracking-[4px]">Organisational Intelligence</span>
            <h2 className="text-3xl sm:text-5xl lg:text-4xl font-medium text-white mt-2 w-10/12 lg:w-full text-center lg:text-left mx-auto">
                Your best project decisions should compound.
            </h2>
            <p className="text-neutral-300 text-center lg:text-left text-md lg:text-lg md:text-lg">
                Siraat captures the standards, lessons and acceptance criteria that usually disappear into reports. Each completed project strengthens the rulebooks used by the next.
            </p>
        </div>
        <div className=" lg:col-span-7 col-span-12 grid sm:grid-cols-2 grid-cols-1 w-full lg:gap-4 gap-6 px-4 lg:px-6">
            {productsOrganisationalIntelligenceItems.map((item, index) => (
                <div key={index} className="flex flex-col items-start lg:py-4 lg:px-6 px-3 md:px-5 py-5 justify-start gap-3 lg:gap-3 bg-emerald-900/50 border-2 border-neutral-600 text-left rounded-lg">
                    <span className="text-md font-bold text-emerald-200">{item.indexNumber}</span>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="text-neutral-300">{item.desc}</p>
                </div>
            ))}
        </div>
    </div>
  )
}
