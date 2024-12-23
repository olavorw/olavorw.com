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

import { PopoverGroup } from '@headlessui/react';
import { NavItem } from './NavItem';
import { PopoverMenu } from './PopoverMenu';
import { MenuProps } from '@/features/NavBar/NavBar.types';

interface DesktopMenuProps extends MenuProps {
    opacity: number;
    blur: number;
}

export function DesktopMenu({ col1, col1CTA, col2, col2CTA, col3, opacity, blur }: DesktopMenuProps) {
    return (
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
            <PopoverMenu label="Projects" items={col1} ctaItems={col1CTA} opacity={opacity} blur={blur} />
            <NavItem label="Gallery" href="#" />
            <PopoverMenu label="About Me" items={col2} ctaItems={col2CTA} opacity={opacity} blur={blur} />
            <NavItem label="Example" href="#" />
            <PopoverMenu label="Showcase" items={col3} opacity={opacity} blur={blur} />
        </PopoverGroup>
    );
}

