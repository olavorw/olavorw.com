import { Dialog, DialogPanel } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Logo } from '@/components/Logo';
import { DisclosureMenu } from './DisclosureMenu';
import { MenuProps, MenuItem } from '@/features/NavBar/NavBar.types';

interface MobileMenuProps extends MenuProps {
    isOpen: boolean;
    onClose: () => void;
    opacity: number;
    blur: number;
}

export function MobileMenu({ isOpen, onClose, col1, col1CTA, col2, col2CTA, col3, col3CTA, opacity, blur }: MobileMenuProps) {
    // Convert CTA items to MenuItem format by adding a description field
    const col1WithCTA: MenuItem[] = [
        ...col1,
        ...col1CTA.map(cta => ({
            ...cta,
            description: '' // Add empty description to satisfy MenuItem type
        }))
    ];

    const col2WithCTA: MenuItem[] = [
        ...col2,
        ...col2CTA.map(cta => ({
            ...cta,
            description: '' // Add empty description to satisfy MenuItem type
        }))
    ];

    const col3WithCTA: MenuItem[] = [
        ...col3,
        ...col3CTA.map(cta => ({
            ...cta,
            description: '' // Add empty description to satisfy MenuItem type
        }))
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <Dialog
                    as={motion.div}
                    className="relative z-50 lg:hidden"
                    onClose={onClose}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="fixed inset-0 bg-slate-700/5"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />

                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                                <motion.div
                                    className="pointer-events-auto w-screen max-w-md"
                                    initial={{ x: "100%" }}
                                    animate={{ x: 0 }}
                                    exit={{ x: "100%" }}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                >
                                    <DialogPanel
                                        className="flex h-full flex-col overflow-y-scroll shadow-xl"
                                        style={{
                                            backdropFilter: `blur(${blur}px)`,
                                            WebkitBackdropFilter: `blur(${blur}px)`,
                                            backgroundColor: `rgba(50, 50, 50, ${opacity + 0.5})`,
                                        }}
                                    >
                                        <div className="px-6 pt-6 pb-4">
                                            <div className="flex items-center justify-between">
                                                <Logo />
                                                <motion.button
                                                    type="button"
                                                    className="rounded-md text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                                    onClick={onClose}
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    <span className="sr-only">Close panel</span>
                                                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                </motion.button>
                                            </div>
                                        </div>
                                        <div className="relative mt-6 flex-1 px-6">
                                            <div className="space-y-4">
                                                <DisclosureMenu label="Solutions" items={col1WithCTA}/>
                                                <motion.a
                                                    href="#"
                                                    className="block rounded-lg py-2 text-base/7 font-semibold text-white hover:bg-slate-500/50 hover:text-transparent hover:bg-gradient-to-r hover:from-[#6717cd] hover:to-[#2871fa] hover:bg-clip-text transition-colors duration-200 ease-in-out"
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    Gallery
                                                </motion.a>
                                                <DisclosureMenu label="Hackathons" items={col2WithCTA}/>
                                                <motion.a
                                                    href="#"
                                                    className="block rounded-lg py-2 text-base/7 font-semibold text-white hover:bg-slate-500/50 hover:text-transparent hover:bg-gradient-to-r hover:from-[#6717cd] hover:to-[#2871fa] hover:bg-clip-text transition-colors duration-200 ease-in-out"
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    About
                                                </motion.a>
                                                <DisclosureMenu label="Projects" items={col3WithCTA}/>
                                            </div>
                                        </div>
                                        <div className="border-t border-slate-400/50 px-6 py-6">
                                            <motion.a
                                                href="#"
                                                className="block rounded-lg py-2.5 text-base/7 font-semibold text-white hover:bg-slate-500/50 hover:text-transparent hover:bg-gradient-to-r hover:from-[#6717cd] hover:to-[#2871fa] hover:bg-clip-text transition-colors duration-200 ease-in-out"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                Log in
                                            </motion.a>
                                        </div>
                                    </DialogPanel>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </Dialog>
            )}
        </AnimatePresence>
    );
}

