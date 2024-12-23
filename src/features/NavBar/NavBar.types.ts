import type { LucideIcon } from 'lucide-react';

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
  col3CTA: MenuCTAItem[];
}

// New types for better organization
export interface NavItemProps {
  label: string;
  href?: string;
  isOpen?: boolean;
  hasDropdown?: boolean;
  hasArrow?: boolean;
  onClick?: () => void;
}

export interface DisclosureMenuProps {
  label: string;
  items: MenuItem[];
}

export interface PopoverMenuProps extends MenuProps {
  label: string;
  items: MenuItem[];
  ctaItems?: MenuCTAItem[];
  opacity: number;
  blur: number;
}

export interface DesktopMenuProps extends MenuProps {
  opacity: number;
  blur: number;
}

export interface MobileMenuProps extends MenuProps {
  isOpen: boolean;
  onClose: () => void;
  opacity: number;
  blur: number;
}
