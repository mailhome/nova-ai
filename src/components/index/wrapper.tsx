
import { cn } from "@/lib/utils";
import type React from "react";

type Props = {
    headerLabel: string;
    headerTitle: string;
    desc?: string;
    content: React.ReactNode
    whatwedo?: boolean;
}

export default function WrapperContent({ headerLabel, desc, headerTitle, content, whatwedo}: Props) {
  return (
    <div className={cn("w-full", whatwedo && "w-full")}>
        <div className={cn("flex flex-col items-center w-full justify-start gap-y-2", whatwedo && "items-start justify-start")}>
            <p className="uppercase flex items-center justify-center text-[#36754D] text-center md:text-md text-sm lg:text-lg font-semibold w-10/12 lg:w-6/12 xl:w-8/12 mx-auto">{headerLabel}</p>
            <h1 className="text-xl md:text-3xl text-center lg:text-3xl xl:text-4xl text-neutral-900 font-bold w-10/12 lg:w-6/12 xl:w-8/12 md:w-10/12 mx-auto">{headerTitle}</h1>
            {desc && (
                <p className="text-muted-foreground lg:text-md xl:text-xl text-sm text-center lg:w-6/12 xl:w-6/12 mt-2 lg:mt-4 md:w-10/12 mx-auto">{desc}</p>
            )}
        </div>
        <div className="w-full">
            {content}
        </div>
    </div>
  )
}
