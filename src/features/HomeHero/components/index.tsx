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

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const baseClasses = "transition-all duration-300 ease-in-out";
const hoverClasses = "hover:scale-105 hover:shadow-glow";
const textHoverClasses = "hover:text-transparent hover:bg-gradient-to-r hover:from-[#6717cd] hover:to-[#2871fa] hover:bg-clip-text hover:scale-105 hover:shadow-glow";

const glowStyle = {
    textShadow: '0 0 10px rgba(72, 68, 228, 0.5), 0 0 20px rgba(72, 68, 228, 0.3), 0 0 30px rgba(72, 68, 228, 0.1)'
};

export default function HomeHero() {

    return (
        <div className="relative">
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="hidden sm:mb-8 sm:flex sm:justify-center"
                    >
                        <motion.div
                            className="relative rounded-full px-3 py-1 text-sm/6 text-slate-300 ring-1 ring-white/10 hover:ring-white/20"
                            whileHover={{ scale: 1.05 }}
                        >
                            Pioneering open source.{' '}
                            <a
                                href="#"
                                className={`${baseClasses} font-semibold text-transparent bg-gradient-to-r from-[#6717cd] to-[#2871fa] bg-clip-text`}
                                style={glowStyle}
                            >
                                About me <span aria-hidden="true">→</span>
                            </a>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="text-center space-y-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    >
                        <h1 className="text-balance text-5xl font-bold tracking-tight text-white sm:text-7xl">
                            <motion.span
                                className="inline-block"
                                whileHover={{scale: 1.05}}
                            >
                                Let&apos;s
                            </motion.span>
                            {" "}
                            <motion.span
                                className="inline-block text-transparent bg-gradient-to-tr from-[#6717cd] to-[#2871fa] bg-clip-text"
                                whileHover={{scale: 1.05}}
                                style={glowStyle}
                            >
                                Engineer
                            </motion.span>
                            {" "}
                            <motion.span
                                className="inline-block"
                                whileHover={{scale: 1.05}}
                            >
                                our own
                            </motion.span>
                            {" "}
                            <motion.span
                                className="inline-block text-transparent bg-gradient-to-br from-[#6717cd] to-[#2871fa] bg-clip-text"
                                whileHover={{scale: 1.05}}
                                style={glowStyle}
                            >
                                Future
                            </motion.span>
                            <motion.span
                                className="inline-block"
                                whileHover={{scale: 1.05}}
                            >
                                .
                            </motion.span>
                        </h1>

                        <motion.p
                            className="text-pretty text-xl/8 font-medium text-slate-300 sm:text-xl/8"
                            whileHover={{scale: 1.02}}
                        >
                        Hello World, I&apos;m Olav, a full stack software developer, hardware enthusiast, entrepreneur, and founder of 4934 Tech. You might know me as &quot;Olavorw&quot;. I am a pioneer of the open source community.
                        </motion.p>

                        <motion.div
                            className="flex items-center justify-center gap-x-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                        >
                            <motion.a
                                href="https://github.com/4934tech/ultraagent"
                                className={`${baseClasses} ${hoverClasses} rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`}
                                whileHover={{
                                    scale: 1.05,
                                    background: 'linear-gradient(to right, #6717cd, #2871fa)',
                                    color: 'white',
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Join Us
                            </motion.a>

                            <motion.a
                                href="#"
                                className={`${baseClasses} ${hoverClasses} group flex items-center gap-x-2 text-sm/6 font-semibold text-white`}
                                whileHover={{ scale: 1.05, x: 5 }}
                            >
                                <span className={`${textHoverClasses}`}>Explore Projects</span>
                                <ArrowRight className={`group-hover:text-[#2871fa] size-4 transition-transform duration-300 ease-out group-hover:translate-x-1`} />
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

