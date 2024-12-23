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

import { ChevronDownIcon, ArrowRightIcon } from '@heroicons/react/20/solid';
import { forwardRef } from 'react';

interface NavItemProps {
    label: string;
    href?: string;
    isOpen?: boolean;
    hasDropdown?: boolean;
    hasArrow?: boolean;
    onClick?: () => void;
}

export const NavItem = forwardRef<HTMLAnchorElement, NavItemProps>(
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

