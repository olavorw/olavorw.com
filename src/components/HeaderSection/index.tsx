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

import { FC } from 'react';
import Link from 'next/link';

interface HeaderSectionProps {
    Tagline?: string;
    Name: string;
    Description?: string;
    Content?: string;
    Stat1Name?: string;
    Stat2Name?: string;
    Stat3Name?: string;
    Stat4Name?: string;
    Stat1Value?: string;
    Stat2Value?: string;
    Stat3Value?: string;
    Stat4Value?: string;
    Link1Name?: string;
    Link2Name?: string;
    Link3Name?: string;
    Link4Name?: string;
    Link1Value?: string;
    Link2Value?: string;
    Link3Value?: string;
    Link4Value?: string;
    centered?: boolean; // New prop for centering option
    topOfPage?: boolean;
}

/**
 * @deprecated This component is deprecated. Please use `UnifiedSection` instead.
 */
const HeaderSection: FC<HeaderSectionProps> = ({
                                                Tagline,
                                                Name,
                                                Description,
                                                Content,
                                                Stat1Name,
                                                Stat2Name,
                                                Stat3Name,
                                                Stat4Name,
                                                Stat1Value,
                                                Stat2Value,
                                                Stat3Value,
                                                Stat4Value,
                                                Link1Name,
                                                Link2Name,
                                                Link3Name,
                                                Link4Name,
                                                Link1Value,
                                                Link2Value,
                                                Link3Value,
                                                Link4Value,
                                                centered = false, // Default to false for backward compatibility
                                                topOfPage = false,
                                               }) => {
    const Links = [
        { name: Link1Name, href: Link1Value },
        { name: Link2Name, href: Link2Value },
        { name: Link3Name, href: Link3Value },
        { name: Link4Name, href: Link4Value },
    ].filter(link => link.name && link.href);

    const Stats = [
        { name: Stat1Name, value: Stat1Value },
        { name: Stat2Name, value: Stat2Value },
        { name: Stat3Name, value: Stat3Value },
        { name: Stat4Name, value: Stat4Value },
    ].filter(stat => stat.name && stat.value);

    return (
        <section className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className={`mx-auto max-w-2xl ${centered ? 'text-center' : 'lg:mx-0'}`}>
                    {Tagline && (
                        <p className="text-base/7 font-semibold text-transparent bg-gradient-to-r from-[#32b7b6] to-[#425389] bg-clip-text">
                            {Tagline}
                        </p>
                    )}
                    <h2 className={`font-bold tracking-tight text-white ${topOfPage ? 'text-5xl sm:text-7xl' : 'text-4xl sm:text-5xl'}`}>{Name}</h2>
                    {Description && (
                        <div className="mt-8 text-pretty text-lg font-medium text-gray-300 sm:text-xl/8">
                            {Description.split('\n').map((paragraph, index) => (
                                <p key={index} className={index > 0 ? 'mt-4' : ''}>
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    )}
                    {Content && (
                        <div className={`mt-8 text-lg text-gray-300 text-pretty`}>
                            {Content.split('\n').map((paragraph, index) => (
                                <p key={index} className={index > 0 ? 'mt-4' : ''}>
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    )}
                </div>
                <div className={`mx-auto mt-10 max-w-2xl ${centered ? 'text-center' : 'lg:mx-0 lg:max-w-none'}`}>
                    {Links.length > 0 && (
                        <div className={`grid gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white ${
                            centered ? 'grid-cols-1 sm:grid-cols-2 md:flex md:justify-center lg:gap-x-10' :
                                'grid-cols-1 sm:grid-cols-2 md:flex lg:gap-x-10'
                        }`}>
                            {Links.map((link) => (
                                <Link
                                    className="text-white hover:text-transparent hover:bg-gradient-to-r hover:from-[#32b7b6] hover:to-[#425389] hover:bg-clip-text ease-in-out duration-300"
                                    key={link.name}
                                    href={link.href || '#'}
                                >
                                    {link.name} <span aria-hidden="true">&rarr;</span>
                                </Link>
                            ))}
                        </div>
                    )}
                    {Stats.length > 0 && (
                        <dl className={`mt-16 grid gap-8 sm:mt-20 ${
                            centered ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center' :
                                'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
                        }`}>
                            {Stats.map((stat) => (
                                <div key={stat.name} className="flex flex-col-reverse">
                                    <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                                    <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
                                </div>
                            ))}
                        </dl>
                    )}
                </div>
            </div>
        </section>
    );
};

// noinspection JSDeprecatedSymbols
export default HeaderSection;

