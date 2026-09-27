import type { LucideIcon } from "lucide-react";

export interface NavbarProps {
    label: string;
    href: string;
}

export interface HeroSectionButtons {
    label: string;
    href: string;
    activeLabel?: boolean;
}

export interface WhatWeDoItemsProps {
item: string;
label: string;
desc: string;
itemList: String[];
imgSrc: string;
imgAlt: string;
buttonLabel: string
buttonHref: string
}

export interface BuiltForTheUaeMarketsProps {
    labelHeading: string;
    labelDesc: string;
}

export interface CtaButtonProps {
    href: string;
    label:string;
}

export interface FooterSubItemsProps {
    title: string;
    subItem: SubItemsProps[]
}


interface SubItemsProps {
    label: string;
    href: string;
}

export interface ContactItems {
    icon: LucideIcon;
    label: string;
}