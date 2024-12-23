/*
Copyright 2024 Olav "Olavorw" Sharma (https://olavorw.com)

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

'use client';

import { forwardRef, useCallback, useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Dialog,
  DialogPanel,
  Disclosure,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react';
import {
  ArrowPathIcon,
  ArrowRightIcon,
  Bars3Icon,
  ChartPieIcon,
  ChevronDownIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  ShieldCheckIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid';
import { AppWindowIcon, GalleryHorizontal } from 'lucide-react';
import { Logo } from '@/components/Logo';
import {
  DesktopMenuProps,
  DisclosureMenuProps,
  MenuCTAItem,
  MenuItem,
  MobileMenuProps,
  NavItemProps,
  PopoverMenuProps,
} from '../NavBar.types';

const baseClasses =
  'flex items-center gap-x-1 text-sm/6 font-semibold transition-all duration-200 ease-in-out group';
const hoverClasses =
  'hover:text-transparent hover:bg-gradient-to-r hover:from-[#6717cd] hover:to-[#2871fa] hover:bg-clip-text hover:scale-105 hover:shadow-glow';

const glowStyle = {
  textShadow:
    '0 0 10px rgba(72, 68, 228, 0.5), 0 0 20px rgba(72, 68, 228, 0.3), 0 0 30px rgba(72, 68, 228, 0.1)',
};

const hoverGlowStyle = {
  boxShadow: '0 0 20px rgba(103, 23, 205, 0.3)',
};

const NavItem = forwardRef<HTMLAnchorElement, NavItemProps>(
  ({ label, href = '#', isOpen, hasDropdown, hasArrow, onClick }, ref) => {
    return (
      <a
        ref={ref}
        href={href}
        className={`${baseClasses} ${hoverClasses} ${isOpen ? 'text-transparent bg-gradient-to-tr from-[#6717cd] to-[#2871fa] bg-clip-text' : 'text-white'}`}
        onClick={onClick}
        style={glowStyle}
      >
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
              isOpen
                ? 'rotate-180 text-[#2871fa]'
                : 'text-slate-300 group-hover:text-[#2871fa]'
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

function DisclosureMenu({ label, items }: DisclosureMenuProps) {
  return (
    <Disclosure as="div" className="w-full">
      {({ open }) => (
        <>
          <Disclosure.Button
            className={`${baseClasses} ${hoverClasses} group flex w-full items-center justify-between rounded-lg py-2 text-base/7 font-semibold transition-all duration-300 ease-in-out ${
              open
                ? 'text-transparent bg-gradient-to-r from-[#6717cd] to-[#2871fa] bg-clip-text'
                : 'text-white'
            }`}
          >
            {label}
            <ChevronDownIcon
              aria-hidden="true"
              className={`size-5 flex-none transition-transform duration-300 ease-in-out ${open ? 'rotate-180' : ''} ${open ? 'text-[#6717cd]' : 'group-hover:text-[#2871fa]'}`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="mt-2 space-y-2">
            {items.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`${baseClasses} ${hoverClasses} block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-slate-400`}
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

function PopoverMenu({
  label,
  items,
  ctaItems,
  opacity,
  blur,
}: PopoverMenuProps) {
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
                  backgroundColor: `rgba(100, 116, 139, ${0.05 * opacity + 0.05})`,
                  backdropFilter: `blur(${blur}px)`,
                  WebkitBackdropFilter: `blur(${blur}px)`,
                  boxShadow:
                    '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                  transition: 'box-shadow 0.3s ease-in-out',
                }}
                whileHover={hoverGlowStyle}
              >
                <div className="p-4">
                  {items.map((item: MenuItem, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                      className="group relative flex hover:bg-slate-500/5 items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:outline-white/5 hover:outline hover:outline-1 hover:border-white/10 transition-all duration-300 ease-in-out"
                      whileHover={{
                        scale: 1.05,
                        boxShadow: '0 0 20px rgba(103, 23, 205, 0.3)',
                      }}
                    >
                      <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-slate-500/15 group-hover:divide-slate-900/10">
                        <item.icon
                          aria-hidden="true"
                          className="size-6 text-slate-300 group-hover:text-[#6717cd] transition-colors duration-200 ease-in-out"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className={`${baseClasses} ${hoverClasses} block font-semibold text-white`}
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-slate-400">
                          {item.description}
                        </p>
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
                        className={`${baseClasses} ${hoverClasses} group flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-white`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.2,
                          delay: 0.1 + index * 0.05,
                        }}
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

function DesktopMenu({
  col1,
  col1CTA,
  col2,
  col2CTA,
  col3,
  col3CTA,
  opacity,
  blur,
}: DesktopMenuProps) {
  const menuItems = useMemo(
    () => [
      { label: 'Projects', items: col1, ctaItems: col1CTA },
      { label: 'Gallery', href: '#' },
      { label: 'About Me', items: col2, ctaItems: col2CTA },
      { label: 'Example', href: '#' },
      { label: 'Showcase', items: col3, ctaItems: col3CTA },
    ],
    [col1, col1CTA, col2, col2CTA, col3, col3CTA]
  );

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
              col1={col1}
              col1CTA={col1CTA}
              col2={col2}
              col2CTA={col2CTA}
              col3={col3}
              col3CTA={col3CTA}
            />
          )}
        </motion.div>
      ))}
    </PopoverGroup>
  );
}

function MobileMenu({
  isOpen,
  onClose,
  col1,
  col1CTA,
  col2,
  col2CTA,
  col3,
  col3CTA,
  opacity,
  blur,
}: MobileMenuProps) {
  const col1WithCTA = useMemo(
    () => [...col1, ...col1CTA.map((cta) => ({ ...cta, description: '' }))],
    [col1, col1CTA]
  );

  const col2WithCTA = useMemo(
    () => [...col2, ...col2CTA.map((cta) => ({ ...cta, description: '' }))],
    [col2, col2CTA]
  );

  const col3WithCTA = useMemo(
    () => [...col3, ...col3CTA.map((cta) => ({ ...cta, description: '' }))],
    [col3, col3CTA]
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog
          as={motion.div}
          className="relative z-50 lg:hidden"
          onClose={onClose}
          open={isOpen}
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
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
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
                        <DisclosureMenu label="Solutions" items={col1WithCTA} />
                        <motion.a
                          href="#"
                          className={`${baseClasses} ${hoverClasses} block rounded-lg py-2 text-base/7 font-semibold text-slate-400`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Gallery
                        </motion.a>
                        <DisclosureMenu
                          label="Hackathons"
                          items={col2WithCTA}
                        />
                        <motion.a
                          href="#"
                          className={`${baseClasses} ${hoverClasses} block rounded-lg py-2 text-base/7 font-semibold text-slate-400`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          About
                        </motion.a>
                        <DisclosureMenu label="Projects" items={col3WithCTA} />
                      </div>
                    </div>
                    <div className="border-t border-slate-400/50 px-6 py-6">
                      <motion.a
                        href="#"
                        className={`${baseClasses} ${hoverClasses} block rounded-lg py-2.5 text-base/7 font-semibold text-slate-400`}
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

const col3: MenuItem[] = [
  {
    name: 'Project Gallery',
    description: 'A gallery of some of my favorite projects',
    href: '/showcase/projectGallery',
    icon: GalleryHorizontal,
  },
  {
    name: 'Web Components',
    description: "A showcase of my favorite web components I've developed",
    href: '/showcase/web-components',
    icon: AppWindowIcon,
  },
];
const col3CTA: MenuCTAItem[] = [
  { name: 'View All', href: '/showcase', icon: ArrowPathIcon },
];

// noinspection SpellCheckingInspection
const col2: MenuItem[] = [
  {
    name: 'Winter 2024',
    description: 'An online single-day hackathon',
    href: 'col2/winter2024',
    icon: Bars3Icon,
  },
  {
    name: 'PwnPointed',
    description: 'A security themed online hackathon.',
    href: 'col2/pwnpointed',
    icon: ShieldCheckIcon,
  },
  {
    name: 'XAutomation',
    description: 'A multi-day in-person automation themed hackathon.',
    href: 'col2/summer2024',
    icon: XMarkIcon,
  },
];

const col2CTA: MenuCTAItem[] = [
  { name: 'View Upcoming', href: 'col2/upcoming', icon: ArrowPathIcon },
  { name: 'View All', href: 'col2', icon: ArrowPathIcon },
];

const col1: MenuItem[] = [
  {
    name: 'Analytics',
    description: 'Get a better understanding of your traffic',
    href: '#',
    icon: ChartPieIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Security',
    description: 'Your customers data will be safe and secure',
    href: '#',
    icon: FingerPrintIcon,
  },
  {
    name: 'Integrations',
    description: 'Connect with third-party tools',
    href: '#',
    icon: SquaresPlusIcon,
  },
  {
    name: 'Automations',
    description: 'Build strategic funnels that will convert',
    href: '#',
    icon: ArrowPathIcon,
  },
];
const col1CTA: MenuCTAItem[] = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
];

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const [blur, setBlur] = useState(0);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    const maxScroll = 200; // Adjust this value to control how quickly the effect maxes out
    const newOpacity = Math.min(scrollPosition / maxScroll, 0.4); // Max opacity of 0.4
    const newBlur = Math.min((scrollPosition / maxScroll) * 10, 10); // Max blur of 10px
    setOpacity(newOpacity);
    setBlur(newBlur);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-40 px-4 py-4 transition-all duration-300 ease-in-out"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <motion.nav
        aria-label="Global"
        className="border-white/5 border mx-auto flex max-w-[1400px] items-center justify-between sm:rounded-3xl py-2 px-6 transition-all duration-300 ease-in-out"
        style={{
          background: `linear-gradient(to right, rgba(103, 23, 205, ${0.1 * opacity + 0.05}), rgba(40, 113, 250, ${0.1 * opacity + 0.05}))`,
          backdropFilter: `blur(${blur}px)`,
          WebkitBackdropFilter: `blur(${blur}px)`,
          boxShadow: `0 4px 6px -1px rgba(0, 0, 0, ${opacity * 0.1}), 0 2px 4px -1px rgba(0, 0, 0, ${opacity * 0.06})`,
        }}
        whileHover={{ scale: 1.01, ...hoverGlowStyle }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="flex lg:flex-1 transition-transform duration-300 ease-in-out hover:scale-105 hover:filter hover:drop-shadow-glow"
          whileHover={{
            scale: 1.05,
            filter: 'drop-shadow(0 0 10px rgba(72, 68, 228, 0.5))',
          }}
        >
          <Logo />
        </motion.div>
        <div className="flex lg:hidden">
          <motion.button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 transition-all duration-300 ease-in-out ${opacity > 0.5 ? 'text-slate-300' : 'text-slate-700'} hover:text-[#4844e4]`}
            whileHover={{
              scale: 1.1,
              filter: 'drop-shadow(0 0 10px rgba(72, 68, 228, 0.5))',
            }}
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
      </motion.nav>
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
  );
}
