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

import { forwardRef, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion'

interface CallToActionProps {
    tagline: string;
    description: string;
    buttonText: string;
    buttonLink: string;
    gradientStartColor?: string;
    gradientStopColor?: string;
    imageSource: string;
    imageWidth: number;
    imageHeight: number;
    imageSizing?: string;
    showCase?: boolean;
}

const baseClasses = "transition-all duration-200 ease-in-out group";
const hoverClasses = "hover:text-transparent hover:bg-gradient-to-r hover:from-[#6717cd] hover:to-[#2871fa] hover:bg-clip-text hover:scale-105 hover:shadow-glow";

const glowStyle = {
    textShadow: '0 0 10px rgba(72, 68, 228, 0.5), 0 0 20px rgba(72, 68, 228, 0.3), 0 0 30px rgba(72, 68, 228, 0.1)'
};

const CallToAction = forwardRef<HTMLDivElement, CallToActionProps>(
    (
        { tagline, description, buttonText, buttonLink, gradientStartColor = "#6717cd", gradientStopColor = "#2871fa", imageSource, imageWidth, imageHeight, imageSizing = "60rem", showCase = false },
        ref
    ) => {
        const internalRef = useRef<HTMLDivElement>(null)
        const isInView = useInView(internalRef, { once: true, margin: "-100px" })

        return (
            <motion.div
                ref={(node) => {
                    internalRef.current = node;
                    if (typeof ref === 'function') {
                        ref(node);
                    } else if (ref) {
                        ref.current = node;
                    }
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
            >
                <div className={`mx-auto max-w-7xl ${showCase ? '' : 'py-24 sm:py-32'} sm:px-6 lg:px-8`}>
                    <motion.div
                        style={{
                            backdropFilter: `blur(10px)`,
                            WebkitBackdropFilter: `blur(10px)`,
                            background: `linear-gradient(to right, rgba(103, 23, 205, 0.1), rgba(40, 113, 250, 0.1))`,
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                        }}
                        className={`relative isolate overflow-hidden border-white/5 border px-6 ${showCase ? 'pt-6' : 'pt-16'} sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0`}
                        whileHover={{ scale: 1.01 }}
                        transition={{ duration: 0.3 }}
                    >
                        <svg
                            viewBox="0 0 1024 1024"
                            aria-hidden="true"
                            className="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                        >
                            <circle
                                r={512}
                                cx={512}
                                cy={512}
                                fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                                fillOpacity="0.7"
                            />
                            <defs>
                                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                                    <stop stopColor={gradientStartColor}/>
                                    <stop offset={1} stopColor={gradientStopColor}/>
                                </radialGradient>
                            </defs>
                        </svg>
                        <div className={`mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left`}>
                            <motion.h2
                                className={`${baseClasses} ${hoverClasses} text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl`}
                                style={glowStyle}
                            >
                                {tagline}
                            </motion.h2>
                            <motion.p
                                className={`${baseClasses} mt-6 text-pretty text-lg/8 text-slate-300`}
                                whileHover={{ scale: 1.05 }}
                            >
                                {description}
                            </motion.p>
                            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                                <motion.a
                                    href={buttonLink}
                                    className={`${baseClasses} rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-300 ease-in-out`}
                                    whileHover={{
                                        scale: 1.05,
                                        background: 'linear-gradient(to right, #6717cd, #2871fa)',
                                        color: 'white',
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {buttonText}
                                </motion.a>
                            </div>
                        </div>
                        <motion.div
                            className="relative mt-24 h-80 lg:mt-20"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image
                                alt="App screenshot"
                                src={imageSource}
                                width={imageWidth}
                                height={imageHeight}
                                className={`absolute left-0 top-0 w-[${imageSizing}] max-w-none rounded-md bg-white/5 ring-1 ring-white/10`}
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        );
    }
);

CallToAction.displayName = 'CallToAction';

export default CallToAction;

