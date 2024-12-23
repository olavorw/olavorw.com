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

'use client'

import { FC, ReactNode, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

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

const baseClasses = "transition-all duration-300 ease-in-out";

const glowStyle = {
    textShadow: '0 0 10px rgba(72, 68, 228, 0.5), 0 0 20px rgba(72, 68, 228, 0.3), 0 0 30px rgba(72, 68, 228, 0.1)'
};

const hoverGlowStyle = {
    boxShadow: '0 0 20px rgba(103, 23, 205, 0.3)',
};

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
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const alignmentClass = rightAligned ? 'lg:ml-auto text-right' : centered ? 'mx-auto text-center' : '';

    return (
        <motion.div
            ref={sectionRef}
            className={`relative overflow-hidden bg-transparent px-6 ${
                topOfPage ? 'py-24 sm:py-32' : 'py-12 sm:py-16'
            } ${
                centered || rightAligned ? 'lg:overflow-visible' : 'lg:overflow-visible lg:px-0'
            }`}
            style={{ background: 'none' }}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <motion.div
                className={`mx-auto ${
                    centered || rightAligned
                        ? 'max-w-7xl flex flex-col items-center'
                        : 'grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10'
                }`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
            >
                <div className={`${
                    centered || rightAligned
                        ? 'w-full max-w-3xl'
                        : 'lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'
                } ${alignmentClass}`}>
                    <div className={centered || rightAligned ? '' : 'lg:pr-4'}>
                        <motion.div
                            className={centered ? 'max-w-3xl mx-auto' : rightAligned ? 'lg:max-w-lg ml-auto' : 'lg:max-w-lg'}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            {tagline && (
                                <motion.p
                                    className="text-base/7 font-semibold text-transparent bg-gradient-to-r from-[#4844e4] to-[#2871fa] bg-clip-text"
                                    whileHover={{ scale: 1.05 }}
                                    style={glowStyle}
                                >
                                    {tagline}
                                </motion.p>
                            )}
                            <motion.h1
                                className={`${tagline ? 'mt-2' : ''} text-pretty ${topOfPage ? 'text-5xl sm:text-7xl' : 'text-4xl sm:text-5xl'} ${boldTitle ? 'font-bold' : 'font-semibold'} tracking-tight text-white`}
                                whileHover={{ scale: 1.05 }}
                                style={glowStyle}
                            >
                                {title}
                            </motion.h1>
                            {description && (
                                <motion.p
                                    className="mt-8 text-pretty text-lg font-medium text-slate-300 sm:text-xl/8"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    {description}
                                </motion.p>
                            )}
                        </motion.div>
                        <motion.div
                            className={`${
                                centered ? 'text-center' : rightAligned ? 'text-right' : 'max-w-xl lg:max-w-lg'
                            } text-lg text-pretty text-slate-300`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            {content && (
                                <div className={`mt-8 text-slate-300 text-pretty`}>
                                    {content.split('\n').map((paragraph, index) => (
                                        <motion.p
                                            key={index}
                                            className={index > 0 ? 'mt-4' : ''}
                                            whileHover={{ scale: 1.02 }}
                                        >
                                            {paragraph}
                                        </motion.p>
                                    ))}
                                </div>
                            )}
                            {features.length > 0 && (
                                <ul role="list"
                                    className={`${content ? 'mt-8' : ''} space-y-8 text-pretty text-slate-400 ${centered || rightAligned ? 'inline-block text-left' : ''}`}>
                                    {features.map((feature, index) => (
                                        <motion.li
                                            key={index}
                                            className="flex gap-x-3"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                            transition={{ duration: 0.5, delay: 0.1 * index }}
                                            whileHover={{ scale: 1.02 }}
                                        >
                                            <motion.div
                                                className="mt-1 size-5 flex-none text-[#4844e4]"
                                                whileHover={{ scale: 1.2, rotate: 360 }}
                                            >
                                                {feature.icon}
                                            </motion.div>
                                            <span>
                                                <motion.strong
                                                    className="font-semibold bg-gradient-to-r from-[#4844e4] to-[#2871fa] bg-clip-text text-transparent"
                                                    whileHover={{ scale: 1.02 }}
                                                    style={glowStyle}
                                                >
                                                    {feature.title}
                                                </motion.strong>{': '}
                                                {feature.description}
                                            </span>
                                        </motion.li>
                                    ))}
                                </ul>
                            )}
                            {additionalContent && (
                                <div className={`text-slate-300 text-pretty ${features.length > 0 ? 'mt-8' : ''}`}>
                                    {additionalContent.split('\n').map((paragraph, index) => (
                                        <motion.p
                                            key={index}
                                            className={index > 0 ? 'mt-4' : ''}
                                            whileHover={{ scale: 1.02 }}
                                        >
                                            {paragraph}
                                        </motion.p>
                                    ))}
                                </div>
                            )}
                            {finalTitle && (
                                <motion.h2
                                    className={`${additionalContent ? 'mt-16' : 'mt-8'} text-2xl font-semibold tracking-tight text-white`}
                                    whileHover={{ scale: 1.05 }}
                                    style={glowStyle}
                                >
                                    {finalTitle}
                                </motion.h2>
                            )}
                            {finalContent && (
                                <div className="mt-6">
                                    {finalContent.split('\n').map((paragraph, index) => (
                                        <motion.p
                                            key={index}
                                            className={index > 0 ? 'mt-4' : ''}
                                            whileHover={{ scale: 1.02 }}
                                        >
                                            {paragraph}
                                        </motion.p>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                        {links.length > 0 && (
                            <motion.div
                                className={`mt-10 flex items-center gap-x-6 ${centered ? 'justify-center' : rightAligned ? 'justify-end' : ''}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                            >
                                {links.map((link) => (
                                    <motion.div
                                        key={link.name}
                                        whileHover={{ scale: 1.05, x: 5 }}
                                    >
                                        <Link
                                            href={link.href}
                                            className={`${baseClasses} group flex items-center gap-x-2 text-sm/6 font-semibold text-white`}
                                        >
                                            <div className={"hover:text-transparent hover:bg-gradient-to-r hover:from-[#6717cd] hover:to-[#2871fa] hover:bg-clip-text hover:scale-105 hover:shadow-glow"}>
                                                {link.name}
                                            </div>
                                            <div className={"group-hover:text-[#2871fa]"}>
                                                 <ArrowRight className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
                                           </div>
                                        </Link>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}
                        {stats.length > 0 && (
                            <motion.dl
                                className={`mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 ${centered || rightAligned ? 'lg:grid-cols-4' : ''}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                            >
                                {stats.map((stat) => (
                                    <motion.div
                                        key={stat.name}
                                        className="flex flex-col-reverse"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <dt className="text-base leading-7 text-slate-300">{stat.name}</dt>
                                        <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
                                    </motion.div>
                                ))}
                            </motion.dl>
                        )}
                    </div>
                </div>
                {imageSrc && (
                    <motion.div
                        className={`${
                            centered || rightAligned
                                ? imagePosition === 'bottom'
                                    ? 'mt-16 w-full max-w-3xl relative order-last'
                                    : 'mt-16 w-full max-w-6xl relative'
                                : '-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden'
                        }`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <motion.div
                            className={centered || rightAligned ? 'relative w-full aspect-[16/9]' : ''}
                            whileHover={{ scale: 1.05, ...hoverGlowStyle }}
                        >
                            <Image
                                alt={imageAlt || ""}
                                src={imageSrc}
                                width={1824}
                                height={1080}
                                className={`${
                                    centered || rightAligned
                                        ? 'w-full h-full object-cover sm:rounded-3xl'
                                        : 'w-[48rem] max-w-none sm:rounded-3xl bg-white shadow-xl ring-1 bg-clip-border/10 sm:w-[57rem]'
                                }`}
                            />
                            {(centered || rightAligned) && (
                                <div
                                    className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"/>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </motion.div>
        </motion.div>
    );
};

export default UnifiedSection;

