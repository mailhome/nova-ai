import { cn } from "cn";
import { Button } from "../ui/button";
import type { LucideIcon } from "lucide-react";

type Props = {
    className: string;
    buttonHref: string;
    buttonLabel: string;
    icon?: LucideIcon;
    classNameIcon?: string;
}
export const ButtonProps = ({ className, buttonHref, buttonLabel, icon, classNameIcon}: Props) => {
    return ( 
        <Button 
        render={<a href={buttonHref} />}
        className={cn("px-2 lg:px-6 font-medium text-sm sm:text-lg lg:text-md flex items-center gap-2 lg:gap-4 lg:justify-start justify-center lg:py-2 py-2 lg:h-12 h-12 w-full lg:w-auto rounded-none lg:rounded-md text-center lg:text-left", className)}>
            {buttonLabel}
            {icon && (() => {
                const Icon = icon;
                return <Icon className={cn("size-6 bg-transparent", classNameIcon)} />;
            })()}
        </Button>
    );
}