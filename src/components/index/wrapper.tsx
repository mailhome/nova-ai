
import { cn } from "@/lib/utils";
import type React from "react";

type Props = {
    headerLabel: string;
    headerTitle: string;
    desc?: string;
    content?: React.ReactNode
    whatwedo?: boolean;
    contact?: boolean;
}

export default function WrapperContent({ headerLabel, desc, headerTitle, content, whatwedo, contact }: Props) {
  return (
    <div className={cn("w-full", whatwedo && "w-full")}>
        <div className={cn("flex flex-col items-center  justify-start gap-y-2 lg:gap-y-2 lg:w-6/12 w-full xl:w-11/12 sm:w-8/12 mx-auto", whatwedo && "items-start justify-start")}>
            <p className="uppercase flex items-center justify-center text-[#36754D] text-center md:text-sm text-xs lg:text-sm font-semibold w-full lg:w-6/12 xl:w-8/12 mx-auto">{headerLabel}</p>
            <h1 className={cn("text-xl md:text-3xl text-center lg:text-3xl xl:text-4xl text-neutral-900 font-medium w-full lg:w-8/12 xl:w-7/12 sm:w-10/12 mx-auto", contact && "text-center xl:text-5xl lg:text-4xl text-3xl xl:w-8/12 lg:w-8/12 w-full mx-auto")}>{headerTitle}</h1>
            {desc && (
                <p className="text-muted-foreground sm:text-sm lg:text-md xl:text-xl text-xs text-center lg:w-7/12 xl:w-7/12 mt-2 lg:mt-4 sm:w-10/12 w-full mx-auto">{desc}</p>
            )}
        </div>
        <div className="w-full">
            {content}
        </div>
    </div>
  )
}
