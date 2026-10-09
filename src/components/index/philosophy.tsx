import WrapperContent from "./wrapper";


export default function PhilosophyContent() {
  return (
    <div className="border-b shadow-sm w-full flex justify-center  items-center bg-[#F5F7FA] ">
    <div className="xl:py-16 lg:py-10 py-10 container-wrapper">
        <WrapperContent
            headerLabel="Philosophy"
            headerTitle="No two businesses are the same. Their AI shouldn't be either."
            content={<p className="mt-4 w-full lg:w-10/12 xl:w-full  mx-auto text-center text-muted-foreground text-xs md:text-base lg:text-lg">Off-the-shelf LLM wrappers fail because they ignore the nuances of your supply chain, your customer voice, and the way your team actually works. Novai believes maximum value comes from agents that inhabit your systems — built through deep consulting and bespoke implementation, on the ground in the UAE.</p>}
        />
    </div>
    </div>
  )
}
