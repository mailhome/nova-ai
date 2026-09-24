import type { BuiltForTheUaeMarketsProps, CtaButtonProps, HeroSectionButtons, WhatWeDoItemsProps } from "@/components/types/types";

export const buttonLinks: HeroSectionButtons[] = [
    {
        label: "Book a UAE strategy call",
        href: "/contact",
        activeLabel: true
    },
    {
        label: "Explore Shams",
        href: "/shams",
        activeLabel: false,
    },
    {
        label: "Explore Siraat",
        href: "/products",
        activeLabel: false,
    },
]

export const whatwedoItems: WhatWeDoItemsProps[] = [
    {
        item: "01",
        label: "Agentic AI Consulting & Enablement",
        desc: "A consulting-led service for Dubai and Abu Dhabi enterprises. We map your workflows and build bespoke autonomous agents that automate your existing business processes end-to-end.",
        itemList: ["Process discovery & workflow mapping", "Custom agent design and implementation", "Integration with your existing UAE stack", "AI enablement, training & ongoing optimization"],
        imgSrc: "/explore-consulting.jpg",
        imgAlt: "Explore consulting",
        buttonLabel: "Explore Consulting",
        buttonHref: "/solutions"
    }, 

    {
        item: "02",
        label: "Shams Platform",
        desc: "Our SaaS engine for sales teams. Shams automatically captures and manages leads from every channel — WhatsApp, email, web, and social — and routes them through your sales pipeline.",
        itemList: ["Omnichannel lead capture & qualification", "Automated routing & meeting scheduling", "WhatsApp Business API — the #1 channel in the UAE", "Unified sales pipeline dashboard"],
        imgSrc: "/discover-shams.jpg",
        imgAlt: "Discover Shams",
        buttonLabel: "Discover Shams",
        buttonHref: "/shams"
    }, 

    {
        item: "03",
        label: "Siraat Platform",
        desc: "Construction intelligence for real estate developers. Siraat validates BIM submissions against cost, design, coordination, LOD and asset information requirements.",
        itemList: ["Seven coordinated BIM validation lenses", "Reusable value engineering rulebooks", "Model quality gates by stage and discipline", "FM-ready asset information checks"],
        imgSrc: "/discover-shams.jpg",
        imgAlt: "Discover Siraat",
        buttonLabel: "Discover Siraat",
        buttonHref: "/products"
    }, 
]

export const builtForUaeMarkets: BuiltForTheUaeMarketsProps[] = [
    {
        labelHeading: "Dubai-based delivery team",
        labelDesc: "On-the-ground consultants and engineers across Dubai and Abu Dhabi for in-person discovery, workshops and rollout."
    },
    {
        labelHeading: "Arabic + English ready",
        labelDesc: "Agents tuned for bilingual conversations and the dialects your UAE customers actually use."
    },
    {
        labelHeading: "Channels that matter here",
        labelDesc: "Deep WhatsApp Business, Instagram DM and email coverage — the channels that dominate UAE lead flow."
    },
]
export const meetCustomersList: BuiltForTheUaeMarketsProps[] = [
    {
        labelHeading: "Whatsapp Business",
        labelDesc: "Engage on the UAE's most-used messaging app with agents that handle full conversations end-to-end."
    },
    {
        labelHeading: "Web Widget",
        labelDesc: "Convert visitors with a smart concierge that qualifies leads before they hit your CRM."
    },
    {
        labelHeading: "Social Media",
        labelDesc: "Auto-respond to DMs and comments across Instagram, Facebook, and TikTok."
    },
    {
        labelHeading: "Email Automation",
        labelDesc: "Context-aware, AI-written emails that move deals forward — not just templates."
    },
]

export const ctaButtonItems: CtaButtonProps[] = [
    {
        label: "Book a Demo",
        href: "/contact"
    },
    {
        label: "Start with Shams",
        href: "/shams"
    },
    {
        label: "Explore Siirat",
        href: "/products"
    },
]

