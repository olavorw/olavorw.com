import type { LucideIcon } from 'lucide-react'

export interface MenuItem {
    name: string;
    description: string;
    href: string;
    icon: LucideIcon;
}

export interface MenuCTAItem {
    name: string;
    href: string;
    icon: LucideIcon;
}

export interface MenuProps {
    col1: MenuItem[];
    col1CTA: MenuCTAItem[];
    col2: MenuItem[];
    col2CTA: MenuCTAItem[];
    col3: MenuItem[];
}

