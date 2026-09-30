import { BuildingComplex,  ShoppingBag } from "lucide-react";
import type { IndustriesItemProps } from "../types/types";

export const industriesItem: IndustriesItemProps[] = [
    {
        icon: BuildingComplex,
        headingLabel: "Real estate developers",
        label: "Better design decisions before construction begins.",
        desc: "Siraat helps developers turn BIM submissions into coordinated evidence across value engineering, internal standards, building requirements, clashes, model quality and asset information.",
        itemList: [
            "Apply one standard across every consultant", 
            "Surface cost and quality issues before tender",
            "Protect review capacity with stage-based LOD gates",
            "Prepare usable asset information for FM handover"
        ],
        buttonLabel: "Explore Siirat",
        buttonHref: "/products"
    },

    {
        icon: ShoppingBag,
        headingLabel: "E-commerce & retail",
        label: "Keep every customer conversation moving.",
        desc: "Shams captures and qualifies demand across WhatsApp, web, email and social, then routes each opportunity into one visible sales pipeline for UAE retail teams.",
        itemList: [
            "Unify enquiries from every sales channel", 
            "Qualify customers in Arabic or English",
            "Route opportunities to the right team",
            "Prepare usable asset information for FM handover"
        ],
        buttonLabel: "Explore Shams",
        buttonHref: "/shams"
    },

]