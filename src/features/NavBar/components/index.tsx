'use client'

import { useEffect, useState, forwardRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Popover, PopoverButton, PopoverPanel, PopoverGroup, Disclosure, Dialog, DialogPanel } from '@headlessui/react'
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    ShieldCheckIcon,
    SquaresPlusIcon,
    XMarkIcon,
    ChevronDownIcon,
    ArrowRightIcon,
} from '@heroicons/react/24/outline'
import { PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { AppWindowIcon, GalleryHorizontal } from 'lucide-react'
import { Logo } from '@/components/Logo'
// import { DesktopMenu } from './DesktopMenu'
// import { MobileMenu } from './MobileMenu'
// import { NavItem } from './NavItem'
import { MenuItem, MenuCTAItem, MenuProps } from '../NavBar.types'

// NavItem Component
interface NavItemProps {
    label: string;
    href?: string;
    isOpen?: boolean;
    hasDropdown?: boolean;
    hasArrow?: boolean;
    onClick?: () => void;
}

const NavItem = forwardRef<HTMLAnchorElement, NavItemProps>(
    ({ label, href = '#', isOpen, hasDropdown, hasArrow, onClick }, ref) => {
        const baseClasses = "flex items-center gap-x-1 font-semibold transition-colors duration-200 ease-in-out group";
        const activeClasses = "text-transparent bg-gradient-to-tr from-[#6717cd] to-[#2871fa] bg-clip-text";
        const inactiveClasses = "text-white hover:text-transparent hover:bg-gradient-to-r hover:from-[#6717cd] hover:to-[#2871fa] hover:bg-clip-text";

        return (
            <a ref={ref} href={href} className={`${baseClasses} ${isOpen ? activeClasses : inactiveClasses}`} onClick={onClick}>
                <svg width="0" height="0" className="absolute">
                    <linearGradient id="arrow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#6717cd" />
                        <stop offset="100%" stopColor="#2871fa" />
                    </linearGradient>
                </svg>
                {label}
                {hasDropdown && (
                    <ChevronDownIcon
                        aria-hidden="true"
                        className={`size-5 flex-none transition-transform duration-300 ease-in-out ${
                            isOpen ? 'rotate-180 text-[#2871fa]' : 'text-slate-300 group-hover:text-[#2871fa]'
                        }`}
                    />
                )}
                {hasArrow && (
                    <ArrowRightIcon
                        aria-hidden="true"
                        className="size-4 flex-none text-slate-300 group-hover:fill-[url(#arrow-gradient)] transition-colors duration-200 ease-in-out"
                    />
                )}
            </a>
        );
    }
);

NavItem.displayName = 'NavItem';

// DisclosureMenu Component
interface DisclosureMenuProps {
    label: string;
    items: MenuItem[];
}

function DisclosureMenu({ label, items }: DisclosureMenuProps) {
    return (
        <Disclosure as="div" className="w-full">
            {({ open }) => (
                <>
                    <Disclosure.Button className={`group flex w-full items-center justify-between rounded-lg py-2 text-base/7 font-semibold transition-all duration-300 ease-in-out ${
                        open
                            ? 'text-transparent bg-gradient-to-r from-[#6717cd] to-[#2871fa] bg-clip-text'
                            : 'text-white hover:bg-slate-900/5 hover:text-transparent hover:bg-gradient-to-r hover:from-[#6717cd] hover:to-[#2871fa] hover:bg-clip-text'
                    }`}
                    >
                        {label}
                        <ChevronDownIcon
                            aria-hidden="true"
                            className={`size-5 flex-none transition-transform duration-300 ease-in-out ${open ? 'rotate-180' : ''} ${open ? 'text-[#6717cd]' : 'group-hover:text-[#6717cd]'}`}
                        />
                    </Disclosure.Button>
                    <Disclosure.Panel className="mt-2 space-y-2">
                        {items.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-white hover:bg-black900/15 hover:text-transparent hover:bg-gradient-to-r hover:from-[#6717cd] hover:to-[#2871fa] hover:bg-clip-text transition-colors duration-200 ease-in-out"
                            >
                                {item.name}
                            </a>
                        ))}
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}

// PopoverMenu Component
interface PopoverMenuProps {
    label: string;
    items: MenuItem[];
    ctaItems?: MenuCTAItem[];
    opacity: number;
    blur: number;
}

function PopoverMenu({ label, items, ctaItems, opacity, blur }: PopoverMenuProps) {
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

// DesktopMenu Component
interface DesktopMenuProps extends MenuProps {
    opacity: number;
    blur: number;
}

function DesktopMenu({ col1, col1CTA, col2, col2CTA, col3, col3CTA, opacity, blur }: DesktopMenuProps) {
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

// MobileMenu Component
interface MobileMenuProps extends MenuProps {
    isOpen: boolean;
    onClose: () => void;
    opacity: number;
    blur: number;
}

function MobileMenu({ isOpen, onClose, col1, col1CTA, col2, col2CTA, col3, col3CTA, opacity, blur }: MobileMenuProps) {
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

// Main NavBar Component
const col3: MenuItem[] = [
    { name: 'Project Gallery', description: 'A gallery of some of my favorite projects', href: '/showcase/projectGallery', icon: GalleryHorizontal },
    { name: 'Web Components', description: 'A showcase of my favorite web components I\'ve developed', href: '/showcase/webComponents', icon: AppWindowIcon },
]
const col3CTA: MenuCTAItem[] = [
    { name: 'View All', href: '/showcase', icon: ArrowPathIcon },
]

const col2: MenuItem[] = [
    { name: 'Winter 2024', description: 'An online single-day hackathon', href: 'col2/winter2024', icon: Bars3Icon },
    { name: 'PwnPointed', description: 'A security themed online hackathon.', href: 'col2/pwnpointed', icon: ShieldCheckIcon },
    { name: 'XAutomation', description: 'A multi-day in-person automation themed hackathon.', href: 'col2/summer2024', icon: XMarkIcon },
]

const col2CTA: MenuCTAItem[] = [
    { name: 'View Upcoming', href: 'col2/upcoming', icon: ArrowPathIcon },
    { name: 'View All', href: 'col2', icon: ArrowPathIcon },
]

const col1: MenuItem[] = [
    { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Security', description: 'Your customers data will be safe and secure', href: '#', icon: FingerPrintIcon },
    { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const col1CTA: MenuCTAItem[] = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

export default function NavBar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [opacity, setOpacity] = useState(0)
    const [blur, setBlur] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY
            const maxScroll = 200 // Adjust this value to control how quickly the effect maxes out
            const newOpacity = Math.min(scrollPosition / maxScroll, 0.4) // Max opacity of 0.4
            const newBlur = Math.min(scrollPosition / maxScroll * 10, 10) // Max blur of 10px
            setOpacity(newOpacity)
            setBlur(newBlur)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <motion.header
            className="fixed top-0 left-0 right-0 z-40 px-4 py-4 transition-all duration-300 ease-in-out"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <nav
                aria-label="Global"
                className="border-white/5 border mx-auto flex max-w-[1400px] items-center justify-between sm:rounded-3xl py-2 px-6 transition-all duration-300 ease-in-out"
                style={{
                    backgroundColor: `rgba(100, 116, 139, ${0.05*opacity + 0.05})`,
                    backdropFilter: `blur(${blur}px)`,
                    WebkitBackdropFilter: `blur(${blur}px)`,
                    boxShadow: `0 4px 6px -1px rgba(0, 0, 0, ${opacity * 0.1}), 0 2px 4px -1px rgba(0, 0, 0, ${opacity * 0.06})`
                }}
            >
                <motion.div
                    className="flex lg:flex-1"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                    <Logo />
                </motion.div>
                <div className="flex lg:hidden">
                    <motion.button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 transition-colors duration-300 ease-in-out ${opacity > 0.5 ? 'text-slate-300' : 'text-slate-700'}`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </motion.button>
                </div>
                <DesktopMenu
                    col1={col1}
                    col1CTA={col1CTA}
                    col2={col2}
                    col2CTA={col2CTA}
                    col3={col3}
                    col3CTA={col3CTA}
                    opacity={opacity}
                    blur={blur}
                />
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <NavItem label="Join Us" href="#" hasArrow />
                </div>
            </nav>
            <AnimatePresence>
                {mobileMenuOpen && (
                    <MobileMenu
                        isOpen={mobileMenuOpen}
                        onClose={() => setMobileMenuOpen(false)}
                        col1={col1}
                        col1CTA={col1CTA}
                        col2={col2}
                        col2CTA={col2CTA}
                        col3={col3}
                        col3CTA={col3CTA}
                        opacity={opacity}
                        blur={blur}
                    />
                )}
            </AnimatePresence>
        </motion.header>
    )
}

