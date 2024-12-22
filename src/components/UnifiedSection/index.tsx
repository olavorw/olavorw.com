/*
Copyright 2024 Olav "Olavorw" Sharma, Sahil Chopra - 4934 (https://4934.tech)

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

import { FC, ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Feature {
    icon: ReactNode;
    title: string;
    description: string;
}

interface UnifiedSectionProps {
    tagline?: string;
    title: string;
    description?: string;
    imageSrc?: string;
    imageAlt?: string;
    content?: string;
    features?: Feature[];
    additionalContent?: string;
    finalTitle?: string;
    finalContent?: string;
    centered?: boolean;
    rightAligned?: boolean;
    imagePosition?: 'default' | 'bottom';
    topOfPage?: boolean;
    boldTitle?: boolean;
    stats?: Array<{ name: string; value: string }>;
    links?: Array<{ name: string; href: string }>;
}

const UnifiedSection: FC<UnifiedSectionProps> = ({
                                                     tagline,
                                                     title,
                                                     description,
                                                     imageSrc,
                                                     imageAlt,
                                                     content = "",
                                                     features = [],
                                                     additionalContent = "",
                                                     finalTitle = "",
                                                     finalContent = "",
                                                     centered = false,
                                                     rightAligned = false,
                                                     imagePosition = 'default',
                                                     topOfPage = true,
                                                     boldTitle = true,
                                                     stats = [],
                                                     links = [],
                                                 }) => {
    const alignmentClass = rightAligned ? 'lg:ml-auto text-right' : centered ? 'mx-auto text-center' : '';

    return (
        <div
            className={`relative overflow-hidden bg-transparent px-6 ${
                topOfPage ? 'py-24 sm:py-32' : 'py-12 sm:py-16'
            } ${
                centered || rightAligned ? 'lg:overflow-visible' : 'lg:overflow-visible lg:px-0'
            }`}
            style={{ background: 'none' }}
        >
            <div className={`mx-auto ${
                centered || rightAligned
                    ? 'max-w-7xl flex flex-col items-center'
                    : 'grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10'
            }`}>
                <div className={`${
                    centered || rightAligned
                        ? 'w-full max-w-3xl'
                        : 'lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'
                } ${alignmentClass}`}>
                    <div className={centered || rightAligned ? '' : 'lg:pr-4'}>
                        <div className={centered ? 'max-w-3xl mx-auto' : rightAligned ? 'lg:max-w-lg ml-auto' : 'lg:max-w-lg'}>
                            {tagline && (
                                <p className="text-base/7 font-semibold text-transparent bg-gradient-to-r from-[#32b7b6] to-[#425389] bg-clip-text">
                                    {tagline}
                                </p>
                            )}
                            <h1 className={`${tagline ? 'mt-2' : ''} text-pretty ${topOfPage ? 'text-5xl sm:text-7xl' : 'text-4xl sm:text-5xl'} ${boldTitle ? 'font-bold' : 'font-semibold'} tracking-tight text-white`}>
                                {title}
                            </h1>
                            {description && (
                                <p className="mt-8 text-pretty text-lg font-medium text-gray-300 sm:text-xl/8">
                                    {description}
                                </p>
                            )}
                        </div>
                        <div className={`${
                            centered ? 'text-center' : rightAligned ? 'text-right' : 'max-w-xl lg:max-w-lg'
                        } text-lg text-pretty text-gray-300`}>
                            {content && (
                                <div className={`mt-8 text-gray-300 text-pretty`}>
                                    {content.split('\n').map((paragraph, index) => (
                                        <p key={index} className={index > 0 ? 'mt-4' : ''}>
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            )}
                            {features.length > 0 && (
                                <ul role="list"
                                    className={`${content ? 'mt-8' : ''} space-y-8 text-pretty text-gray-400 ${centered || rightAligned ? 'inline-block text-left' : ''}`}>
                                    {features.map((feature, index) => (
                                        <li key={index} className="flex gap-x-3">
                                            <div className="mt-1 size-5 flex-none text-[#32b7b6]">
                                                {feature.icon}
                                            </div>
                                            <span>
                                                <strong
                                                    className="font-semibold bg-gradient-to-r from-[#32b7b6] to-[#425389] bg-clip-text text-transparent">
                                                    {feature.title}
                                                </strong>{': '}
                                                {feature.description}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {additionalContent && (
                                <div className={`text-gray-300 text-pretty ${features.length > 0 ? 'mt-8' : ''}`}>
                                    {additionalContent.split('\n').map((paragraph, index) => (
                                        <p key={index} className={index > 0 ? 'mt-4' : ''}>
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            )}
                            {finalTitle && (
                                <h2 className={`${additionalContent ? 'mt-16' : 'mt-8'} text-2xl font-semibold tracking-tight text-white`}>
                                    {finalTitle}
                                </h2>
                            )}
                            {finalContent && (
                                <div className="mt-6">
                                    {finalContent.split('\n').map((paragraph, index) => (
                                        <p key={index} className={index > 0 ? 'mt-4' : ''}>
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            )}
                        </div>
                        {links.length > 0 && (
                            <div className={`mt-10 flex items-center gap-x-6 ${centered ? 'justify-center' : rightAligned ? 'justify-end' : ''}`}>
                                {links.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="text-sm/6 font-semibold leading-6 text-white hover:text-transparent hover:bg-gradient-to-r hover:from-[#32b7b6] hover:to-[#425389] hover:bg-clip-text transition ease-in-out duration-300"
                                    >
                                        {link.name} <span aria-hidden="true">→</span>
                                    </Link>
                                ))}
                            </div>
                        )}
                        {stats.length > 0 && (
                            <dl className={`mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 ${centered || rightAligned ? 'lg:grid-cols-4' : ''}`}>
                                {stats.map((stat) => (
                                    <div key={stat.name} className="flex flex-col-reverse">
                                        <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                                        <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
                                    </div>
                                ))}
                            </dl>
                        )}
                    </div>
                </div>
                {imageSrc && (
                    <div className={`${
                        centered || rightAligned
                            ? imagePosition === 'bottom'
                                ? 'mt-16 w-full max-w-3xl relative order-last'
                                : 'mt-16 w-full max-w-6xl relative'
                            : '-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden'
                    }`}>
                        <div className={centered || rightAligned ? 'relative w-full aspect-[16/9]' : ''}>
                            <Image
                                alt={imageAlt || ""}
                                src={imageSrc}
                                width={1824}
                                height={1080}
                                className={`${
                                    centered || rightAligned
                                        ? 'w-full h-full object-cover rounded-xl'
                                        : 'w-[48rem] max-w-none rounded-xl bg-white shadow-xl ring-1 bg-clip-border/10 sm:w-[57rem]'
                                }`}
                            />
                            {(centered || rightAligned) && (
                                <div
                                    className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"/>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UnifiedSection;

