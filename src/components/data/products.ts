import { BadgeCheck, CircleDollarSign, ClipboardCheck, Layers, Network, Ruler, ShieldCheck, StickyNoteCheck } from "lucide-react"
import type { ProductOrganisationalIntelligenceItemsProps, ProductValidationItemsProps, ValueIsVisibleItemsProps } from "../types/types"


export const productsHeroItems: String[] = [
    "One model submission",
    "Seven coordinated checks",
    "One decision trail"
]

export const productsHeroFooterItems: String[] = [
    "Built for the full project team",
    "Developers",
    "Design managers",
    "BIM teams",
    "Cost consultants",
    "Asset operators"
]


export const productsValidationItems: ProductValidationItemsProps[] = [
    {
        icon: CircleDollarSign,
        label: "Value engineering",
        desc: "Test design choices against cost and specification targets before they become expensive to change.",
        indexNumber: "01"
    },
    {
        icon: ClipboardCheck,
        label: "Internal Standards",
        desc: "Apply your own planning, design and BIM requirements consistently across every submission.",
        indexNumber: "02"
    },
    {
        icon: ShieldCheck,
        label: "Building requirements",
        desc: "Check configured municipality, authority and life-safety rules against the model.",
        indexNumber: "03"
    },
    {
        icon: Network,
        label: "Clash coordination",
        desc: "Surface physical conflicts across architecture, structure and MEP in a federated model.",
        indexNumber: "04"
    },
    {
        icon: Ruler,
        label: "Stage cost checks",
        desc: "Compare model quantities, areas and volumes with benchmarks from concept to pre-tender.",
        indexNumber: "05"
    },
    {
        icon: Layers,
        label: "LOD quality",
        desc: "Confirm that each discipline has delivered the geometry and detail expected at its stage.",
        indexNumber: "06"
    },
    {
        icon: StickyNoteCheck,
        label: "Information need",
        desc: "Verify that model elements carry the structured information required for handover and FM",
        indexNumber: "07"
    },
    {
        icon: BadgeCheck,
        label: "Unified review output",
        desc: "Findings are prioritised in one decision trail for consultants, reviewers and owners.",
        indexNumber: "08"
    },
]

export const valueIsVisibleItems: ValueIsVisibleItemsProps[] = [
    {
        label: "value engineering intelligence",
        title: "Keep cost decisions alive across every stage",
        desc: "Convert lessons from completed projects, preferred materials and cost targets into reusable checks. Siraat flags design drift while alternatives are still practical—not after tender.",
        imgSrc: "/value-engineering.jpg",
        imgAlt: "Value engineering intelligence",
        indexNumber: "01",
    },
    {
        label: "Digital design governance",
        title: "Review models that are ready to be reviewed.",
        desc: "Bring design manuals, BIM standards, accessibility targets and project criteria into a shared rulebook, so every consultant submission is assessed on the same basis.",
        imgSrc: "/digital-design.jpg",
        imgAlt: "Digital design governance",
        indexNumber: "02",
    },
    {
        label: "Model quality gates",
        title: "Review models that are ready to be reviewed.",
        desc: "Define required LOD by stage and discipline. Submissions are checked for expected elements, geometry, naming and classification before they consume technical review time.",
        imgSrc: "/model-quality.jpg",
        imgAlt: "Model quality gates",
        indexNumber: "03",
    },
    {
        label: "Asset information readiness",
        title: "Design the handover data from day one.",
        desc: "Translate AIR, ISO 19650-aligned information needs and FM requirements into continuous checks for asset IDs, classifications, warranties and maintenance data.",
        imgSrc: "/asset-information.jpg",
        imgAlt: "Asset information readiness",
        indexNumber: "04",
    },


]

export const productsOrganisationalIntelligenceItems: ProductOrganisationalIntelligenceItemsProps[] = [
    {
        title: "Your best project decisions should compound.",
        desc: "Lessons, outcomes and cost decisions",
        indexNumber: "01"
    },
    {
        title: "Living rulebooks",
        desc: "Standards encoded for repeatable checks",
        indexNumber: "02"
    },
    {
        title: "Model validation",
        desc: "Evidence applied at each design gate",
        indexNumber: "03"
    },
    {
        title: "Portfolio learning",
        desc: "Better inputs for the next project",
        indexNumber: "04"
    }
];