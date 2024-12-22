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

import { ArrowRightIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

interface Feature {
    icon: typeof ArrowRightIcon
    title: string
    description: string
}

interface ContentSectionProps {
    tagline: string
    title: string
    description: string
    imageSrc?: string
    imageAlt?: string
    content?: string
    features?: Feature[]
    additionalContent?: string
    finalTitle?: string
    finalContent?: string
    centered?: boolean
    imagePosition?: 'default' | 'bottom' // New prop for image position
    topOfPage?: boolean
}

/**
 * @deprecated This component is deprecated. Please use `UnifiedSection` instead.
 */
export default function ContentSection({
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
                                           imagePosition = 'default',
                                           topOfPage = false
                                       }: ContentSectionProps) {
    return (
        <div
            className={`relative overflow-hidden bg-transparent px-6 py-24 sm:py-32 ${
                centered ? 'lg:overflow-visible' : 'lg:overflow-visible lg:px-0'
            }`}
            style={{ background: 'none' }}
        >
            <div className={`mx-auto ${
                centered
                    ? 'max-w-7xl flex flex-col items-center text-center'
                    : 'grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10'
            }`}>
                <div className={`${
                    centered
                        ? 'w-full max-w-3xl'
                        : 'lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'
                }`}>
                    <div className={centered ? '' : 'lg:pr-4'}>
                        <div className={centered ? 'max-w-3xl mx-auto' : 'lg:max-w-lg'}>
                            {tagline && (
                                <p className="text-base/7 font-semibold text-transparent bg-gradient-to-r from-[#32b7b6] to-[#425389] bg-clip-text">
                                    {tagline}
                                </p>
                            )}
                            <h1 className={`${tagline ? 'mt-2' : ''} text-pretty ${topOfPage ? 'text-5xl sm:text-7xl' : 'text-4xl sm:text-5xl'} font-bold tracking-tight text-white`}>
                                {title}
                            </h1>
                            {description && (
                                <p className="mt-8 text-pretty text-lg font-medium text-gray-300 sm:text-xl/8">
                                    {description}
                                </p>
                            )}
                        </div>
                        <div className={`${
                            centered ? 'text-center' : 'max-w-xl lg:max-w-lg'
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
                                    className={`${content ? 'mt-8' : ''} space-y-8 text-pretty text-gray-400 ${centered ? 'inline-block text-left' : ''}`}>
                                    {features.map((feature, index) => (
                                        <li key={index} className="flex gap-x-3">
                                            <feature.icon aria-hidden="true"
                                                          className="mt-1 size-5 flex-none text-[#32b7b6]"/>
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
                    </div>
                </div>
                {imageSrc && (
                    <div className={`${
                        centered
                            ? imagePosition === 'bottom'
                                ? 'mt-16 w-full max-w-3xl relative order-last'
                                : 'mt-16 w-full max-w-6xl relative'
                            : '-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden'
                    }`}>
                        <div className={centered ? 'relative w-full aspect-[16/9]' : ''}>
                            <Image
                                alt={imageAlt || ""}
                                src={imageSrc}
                                width={1824}
                                height={1080}
                                className={`${
                                    centered
                                        ? 'w-full h-full object-cover rounded-xl'
                                        : 'w-[48rem] max-w-none rounded-xl bg-white shadow-xl ring-1 bg-clip-border/10 sm:w-[57rem]'
                                }`}
                            />
                            {centered && (
                                <div
                                    className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"/>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

