import { BadgeCheck, BuildingComplex, ScanLine, Waypoints } from "lucide-react";
import type { HowSiraatWorksItemsProps } from "../types/types";

export const howSiraatItems: HowSiraatWorksItemsProps[] = [
    {
        icon: BuildingComplex,
        label: "BIM submissions",
        desc: "Architecture · Structure · MEP",
    },
    {
        icon: Waypoints,
        label: "Shared rulebooks",
        desc: "Project · Portfolio · Authority",
    },
    {
        icon: ScanLine,
        label: "Coordinated validation",
        desc: "Seven checks run together",
    },

    {
        icon: BadgeCheck,
        label: "Decision trail",
        desc: "Prioritised, traceable findings",
    },

]