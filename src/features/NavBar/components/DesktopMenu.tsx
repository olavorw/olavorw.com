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

import { PopoverGroup } from '@headlessui/react';
import { NavItem } from './NavItem';
import { PopoverMenu } from './PopoverMenu';
import { MenuProps } from '@/features/NavBar/NavBar.types';

interface DesktopMenuProps extends MenuProps {
    opacity: number;
    blur: number;
}

export function DesktopMenu({ solutions, solutionsCTA, hackathons, hackathonsCTA, projects, opacity, blur }: DesktopMenuProps) {
    return (
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
            <PopoverMenu label="Solutions" items={solutions} ctaItems={solutionsCTA} opacity={opacity} blur={blur} />
            <NavItem label="Gallery" href="#" />
            <PopoverMenu label="Hackathons" items={hackathons} ctaItems={hackathonsCTA} opacity={opacity} blur={blur} />
            <NavItem label="About" href="#" />
            <PopoverMenu label="Projects" items={projects} opacity={opacity} blur={blur} />
        </PopoverGroup>
    );
}

