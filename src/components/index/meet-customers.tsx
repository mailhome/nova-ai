import { builtForUaeMarkets, meetCustomersList } from "../data";
import WrapperContent from "./wrapper";


export default function MeetCustomers() {
  return (
    <div className="w-full  px-4 md:px-6 lg:px-10 xl:px-16 mx-auto justify-center items-center px-4  bg-[#F8FAFC] border-b shadow-sm xl:py-16 lg:py-10 py-10">
        <WrapperContent
        headerLabel="Channels" 
        headerTitle="Meet customers wherever they are." 
        content={<MeetCustomersList />}
        whatwedo />
    </div>
  )
}

function MeetCustomersList() {
    return (
        <div className="w-full">
            <div className="w-full xl:mt-10 mt-6 gap-y-6 lg:gap-y-0 gap-x-6 xl:gap-x-6 grid grid-cols-1 lg:grid-cols-4">
                {meetCustomersList.map((item) => (
                    <div key={item.labelHeading} className="bg-white flex flex-col items-start justify-start py-4 px-6  gap-y-3 border rounded-lg">
                        <h1 className="text-md md:text-base lg:text-xl xl:text-xl text-neutral-800 font-semibold">{item.labelHeading}</h1>
                        <p className="text-xs md:text-sm lg:text-md xl:text-base text-muted-foreground ">{item.labelDesc}</p>

                    </div>
                ))}
            </div>
        </div>
    )
}
