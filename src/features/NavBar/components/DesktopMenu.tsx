import { PopoverGroup } from '@headlessui/react';
import { motion } from 'framer-motion';
import { NavItem } from './NavItem';
import { PopoverMenu } from './PopoverMenu';
import { MenuProps } from '@/features/NavBar/NavBar.types';

interface DesktopMenuProps extends MenuProps {
    opacity: number;
    blur: number;
}

export function DesktopMenu({ col1, col1CTA, col2, col2CTA, col3, col3CTA, opacity, blur }: DesktopMenuProps) {
    const menuItems = [
        { label: "Projects", items: col1, ctaItems: col1CTA },
        { label: "Gallery", href: "#" },
        { label: "About Me", items: col2, ctaItems: col2CTA },
        { label: "Example", href: "#" },
        { label: "Showcase", items: col3, ctaItems: col3CTA },
    ];

    return (
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
            {menuItems.map((item, index) => (
                <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                    {item.href ? (
                        <NavItem label={item.label} href={item.href} />
                    ) : (
                        <PopoverMenu
                            label={item.label}
                            items={item.items!}
                            ctaItems={item.ctaItems}
                            opacity={opacity}
                            blur={blur}
                        />
                    )}
                </motion.div>
            ))}
        </PopoverGroup>
    );
}

