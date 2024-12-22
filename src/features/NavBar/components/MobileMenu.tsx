/*
Copyright 2024 Olav "Olavorw" Sharma - 4934 (https://4934.tech)

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

import { Dialog, DialogPanel, Transition } from '@headlessui/react';
import { Fragment } from 'react';
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

export function MobileMenu({ isOpen, onClose, solutions, solutionsCTA, hackathons, hackathonsCTA, projects, opacity, blur }: MobileMenuProps) {
    // Convert CTA items to MenuItem format by adding a description field
    const solutionsWithCTA: MenuItem[] = [
        ...solutions,
        ...solutionsCTA.map(cta => ({
            ...cta,
            description: '' // Add empty description to satisfy MenuItem type
        }))
    ];

    const hackathonsWithCTA: MenuItem[] = [
        ...hackathons,
        ...hackathonsCTA.map(cta => ({
            ...cta,
            description: '' // Add empty description to satisfy MenuItem type
        }))
    ];

    return (
        <Transition show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50 lg:hidden" onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-700/5" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <DialogPanel
                                    className="pointer-events-auto w-screen max-w-md"
                                    style={{
                                        backdropFilter: `blur(${blur}px)`,
                                        WebkitBackdropFilter: `blur(${blur}px)`,
                                        backgroundColor: `rgba(50, 50, 50, ${opacity + 0.5})`,
                                    }}
                                >
                                    <div className="flex h-full flex-col overflow-y-scroll bg-transparent shadow-xl">
                                        <div className="px-6 pt-6 pb-4">
                                            <div className="flex items-center justify-between">
                                                <Logo />
                                                <button
                                                    type="button"
                                                    className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                                    onClick={onClose}
                                                >
                                                    <span className="sr-only">Close panel</span>
                                                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="relative mt-6 flex-1 px-6">
                                            <div className="space-y-4">
                                                <DisclosureMenu label="Solutions" items={solutionsWithCTA}/>
                                                <a
                                                    href="#"
                                                    className="block rounded-lg py-2 text-base/7 font-semibold text-white hover:bg-gray-500/50 hover:text-transparent hover:bg-gradient-to-r hover:from-[#32b7b6] hover:to-[#425389] hover:bg-clip-text transition-colors duration-200 ease-in-out"
                                                >
                                                    Gallery
                                                </a>
                                                <DisclosureMenu label="Hackathons" items={hackathonsWithCTA}/>
                                                <a
                                                    href="#"
                                                    className="block rounded-lg py-2 text-base/7 font-semibold text-white hover:bg-gray-500/50 hover:text-transparent hover:bg-gradient-to-r hover:from-[#32b7b6] hover:to-[#425389] hover:bg-clip-text transition-colors duration-200 ease-in-out"
                                                >
                                                    About
                                                </a>
                                                <DisclosureMenu label="Projects" items={projects}/>
                                            </div>
                                        </div>
                                        <div className="border-t border-gray-400/50 px-6 py-6">
                                            <a
                                                href="#"
                                                className="block rounded-lg py-2.5 text-base/7 font-semibold text-white hover:bg-gray-500/50 hover:text-transparent hover:bg-gradient-to-r hover:from-[#32b7b6] hover:to-[#425389] hover:bg-clip-text transition-colors duration-200 ease-in-out"
                                            >
                                                Log in
                                            </a>
                                        </div>
                                    </div>
                                </DialogPanel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}

