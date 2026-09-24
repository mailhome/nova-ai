import type { FooterSubItemsProps } from "../types/types";

export const footerItems: FooterSubItemsProps[] =[
    {
        title: "Products",
        subItem: [
           { label: "Shams Platform", href: "/shams"},
           { label: "Siraat for Construction", href: "/products"}
        ]
    },


    {
        title: "Solutions",
        subItem: [
           { label: "Agentic AI Consulting", href: "/solutions"},
           { label: "AI Agents", href: "/ai-agents-uae"},
           { label: "ChatGPT for Business", href: "/chatgpt-for-business"},
           { label: "Claude for Business", href: "/claude-for-business"},
           { label: "By Industries", href: "/industries"},
        ]
    },

    {
        title: "Resources",
        subItem: [
           { label: "Documentation", href: "/resources"},
           { label: "UAE Customers", href: "/uae-customers"},
           { label: "Case Studies", href: "/resources"},
           { label: "Blog", href: "/blog"},
        
        ]
    },
    {
        title: "Company",
        subItem: [
           { label: "About", href: "/about"},
           { label: "Partners", href: "/partners"},
           { label: "Contact", href: "/contact"},
        
        ]
    },
]