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
    solutions: MenuItem[];
    solutionsCTA: MenuCTAItem[];
    hackathons: MenuItem[];
    hackathonsCTA: MenuCTAItem[];
    projects: MenuItem[];
}

