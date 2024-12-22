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

const CallToAction = forwardRef<HTMLDivElement, CallToActionProps>(
    (
        { tagline, description, buttonText, buttonLink, gradientStartColor = "#32b7b6", gradientStopColor = "#425389", imageSource, imageWidth, imageHeight, imageSizing = "60rem", showCase = false },
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
                    <div style={{backdropFilter: `blur(10px)`, WebkitBackdropFilter: `blur(10px)`}}
                         className={`relative isolate overflow-hidden bg-gray-500/5 border-white/5 border px-6 ${showCase ? 'pt-6' : 'pt-16'} shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0`}>
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
                            <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                                {tagline}
                            </h2>
                            <p className="mt-6 text-pretty text-lg/8 text-gray-300">
                                {description}
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                                <a
                                    href={buttonLink}
                                    className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                >
                                    {buttonText}
                                </a>
                            </div>
                        </div>
                        <div className="relative mt-24 h-80 lg:mt-20">
                            <Image
                                alt="App screenshot"
                                src={imageSource}
                                width={imageWidth}
                                height={imageHeight}
                                className={`absolute left-0 top-0 w-[${imageSizing}] max-w-none rounded-md bg-white/5 ring-1 ring-white/10`}
                            />
                        </div>
                    </div>
                </div>
            </motion.div>
        );
    }
);

CallToAction.displayName = 'CallToAction';

export default CallToAction;

