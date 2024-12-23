import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuItem, MenuCTAItem } from '@/features/NavBar/NavBar.types';
import { NavItem } from './NavItem';

interface PopoverMenuProps {
    label: string;
    items: MenuItem[];
    ctaItems?: MenuCTAItem[];
    opacity: number;
    blur: number;
}

export function PopoverMenu({ label, items, ctaItems, opacity, blur }: PopoverMenuProps) {
    return (
        <Popover className="relative">
            {({ open }) => (
                <>
                    <PopoverButton as="div">
                        <NavItem label={label} isOpen={open} hasDropdown />
                    </PopoverButton>

                    <AnimatePresence>
                        {open && (
                            <PopoverPanel
                                static
                                as={motion.div}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 } as never}
                                className={`border-white/5 border absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl shadow-lg`}
                                style={{
                                    backgroundColor: `rgba(100, 116, 139, ${0.05*opacity + 0.05})`,
                                    backdropFilter: `blur(${blur}px)`,
                                    WebkitBackdropFilter: `blur(${blur}px)`,
                                }}
                            >
                                <div className="p-4">
                                    {items.map((item: MenuItem, index) => (
                                        <motion.div
                                            key={item.name}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.2, delay: index * 0.05 }}
                                            className="group relative flex hover:bg-slate-500/5 items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:outline-white/5 hover:outline hover:outline-1 hover:border-white/10 transition-colors duration-200 ease-in-out"
                                        >
                                            <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-slate-500/15 group-hover:divide-slate-900/10">
                                                <item.icon aria-hidden="true" className="size-6 text-slate-300 group-hover:text-[#6717cd] transition-colors duration-200 ease-in-out" />
                                            </div>
                                            <div className="flex-auto">
                                                <a href={item.href} className="block font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#6717cd] group-hover:to-[#2871fa] group-hover:bg-clip-text transition-colors duration-200 ease-in-out">
                                                    {item.name}
                                                    <span className="absolute inset-0" />
                                                </a>
                                                <p className="mt-1 text-slate-400">{item.description}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                                {ctaItems && (
                                    <div className="grid grid-cols-2 divide-x divide-slate-900/5">
                                        {ctaItems.map((item: MenuCTAItem, index) => (
                                            <motion.a
                                                key={item.name}
                                                href={item.href}
                                                className="group flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-white hover:bg-slate-900/15 hover:text-transparent hover:bg-gradient-to-r hover:from-[#6717cd] hover:to-[#2871fa] hover:bg-clip-text transition-colors duration-200 ease-in-out"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.2, delay: 0.1 + index * 0.05 }}
                                            >
                                                <item.icon
                                                    aria-hidden="true"
                                                    className="size-5 flex-none text-white transition-colors duration-200 ease-in-out group-hover:text-[#6717cd]"
                                                />
                                                {item.name}
                                            </motion.a>
                                        ))}
                                    </div>
                                )}
                            </PopoverPanel>
                        )}
                    </AnimatePresence>
                </>
            )}
        </Popover>
    );
}
