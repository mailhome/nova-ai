import type { ReactNode } from "react";

type Props = {
  desc: string;
  headerLabel: string;
  headerTitle: string;
  content: ReactNode
}

export default function ProductsWrapper({ desc, headerLabel, headerTitle, content }: Props) {
  return (
    <div className='w-full py-5 lg:py-12 lg:px-10 px-4 mx-auto'>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-x-20 gap-x-5 w-full mb-10">
            <div className="flex flex-col lg:items-start lg:justify-start gap-1 items-center justify-center text-center lg:text-left lg:w-auto w-full mx-auto">
                <span className="text-sm font-medium uppercase lg:text-base text-emerald-900">{headerLabel}</span>
                <h2 className="text-2xl lg:text-4xl font-medium text-black mt-2">{headerTitle}</h2>
            </div>
            <div className="flex items-center lg:w-11/12 w-full mx-auto justify-center lg:justify-end text-center lg:text-right">
              <p className="text-muted-foreground text-xs sm:text-md lg:text-base md:text-md">{desc}</p>
            </div>
        </div>
        <div className="w-full">
                {content}
          </div>
    </div>
  )
}
