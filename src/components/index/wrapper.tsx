
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
        <div className={cn("flex flex-col items-center  justify-start gap-y-2 lg:gap-y-2 w-full lg:w-6/12 xl:w-11/12 md:w-10/12 mx-auto", whatwedo && "items-start justify-start")}>
            <p className="uppercase flex items-center justify-center text-[#36754D] text-center md:text-md text-sm lg:text-lg font-semibold w-10/12 lg:w-6/12 xl:w-8/12 mx-auto">{headerLabel}</p>
            <h1 className={cn("text-xl md:text-3xl text-center lg:text-4xl xl:text-6xl text-neutral-900 font-semibold w-10/12 lg:w-6/12 xl:w-10/12 md:w-10/12 mx-auto", contact && "text-center xl:text-5xl lg:text-4xl text-3xl xl:w-8/12 lg:w-8/12 w-full mx-auto")}>{headerTitle}</h1>
            {desc && (
                <p className="text-muted-foreground lg:text-md xl:text-2xl text-sm text-center lg:w-8/12 xl:w-8/12 mt-2 lg:mt-4 md:w-10/12 mx-auto">{desc}</p>
            )}
        </div>
        <div className="w-full">
            {content}
        </div>
    </div>
  )
}
