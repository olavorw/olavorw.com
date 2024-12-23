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

import { useEffect, useState } from 'react'
import Link from "next/link"
import { Logo } from "@/components/Logo"
import { Mail, Twitter, Github, Youtube, Gitlab, Triangle } from 'lucide-react'
import { motion } from 'framer-motion'

const baseClasses = "flex items-center gap-x-1 text-sm/6 font-semibold transition-all duration-200 ease-in-out group";
const hoverClasses = "hover:text-transparent hover:bg-gradient-to-r hover:from-[#6717cd] hover:to-[#2871fa] hover:bg-clip-text hover:scale-105 hover:shadow-glow";

const glowStyle = {
    textShadow: '0 0 10px rgba(72, 68, 228, 0.5), 0 0 20px rgba(72, 68, 228, 0.3), 0 0 30px rgba(72, 68, 228, 0.1)'
};

const socialIcons = [
    { Icon: Twitter, href: "https://twitter.com/olavorw", label: "X" },
    { Icon: Github, href: "https://github.com/olavorw", label: "GitHub" },
    { Icon: Youtube, href: "https://youtube.com/@olavorw", label: "YouTube" },
    { Icon: Mail, href: "mailto:olav@olavorw.com", label: "Email" },
    { Icon: Gitlab, href: "https://gitlab.com/olavorw", label: "GitLab" },
    { Icon: Triangle, href: "https://vercel.com/olavorw/", label: "Vercel" },
];

const footerSections = [
    {
        title: "Solutions",
        items: ["Marketing", "Analytics", "Automation", "Commerce", "Insights"],
    },
    {
        title: "Support",
        items: ["Submit ticket", "Documentation", "Guides"],
    },
    {
        title: "Community",
        items: ["About", "Blog", "Join Us", "Press"],
    },
    {
        title: "Legal",
        items: [
            { name: "Terms of Service", href: "https://olavorw.com/policies/tos" },
            { name: "Privacy Policy", href: "https://olavorw.com/policies/privacy" },
            { name: "Copyright Information", href: "https://olavorw.com/policies/copyright" },
            { name: "Apache 2.0 License", href: "https://www.apache.org/licenses/LICENSE-2.0" },
        ],
    },
];

export default function Footer() {
    const [opacity, setOpacity] = useState(0)

    useEffect(() => {
        const timer = setTimeout(() => {
            setOpacity(0.4)
        }, 100)

        return () => clearTimeout(timer)
    }, [])

    return (
        <motion.footer
            className="px-6 py-8 mt-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <motion.div
                className="border-white/5 border mx-auto max-w-[1400px] sm:rounded-3xl transition-all duration-500 ease-in-out"
                style={{
                    background: `linear-gradient(to right, rgba(103, 23, 205, ${0.1*opacity + 0.05}), rgba(40, 113, 250, ${0.1*opacity + 0.05}))`,
                    backdropFilter: `blur(10px)`,
                    WebkitBackdropFilter: `blur(10px)`,
                    boxShadow: `0 4px 6px -1px rgba(0, 0, 0, ${opacity * 0.1}), 0 2px 4px -1px rgba(0, 0, 0, ${opacity * 0.06})`
                }}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
            >
                <div className="px-6 py-12 md:py-16">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-12">
                        {/* Logo and Description Column */}
                        <div className="col-span-full lg:col-span-4">
                            <motion.div
                                className="mb-6 transition-transform duration-300 ease-in-out hover:scale-105 hover:filter hover:drop-shadow-glow"
                                whileHover={{ scale: 1.05, filter: "drop-shadow(0 0 10px rgba(72, 68, 228, 0.5))" }}
                            >
                                <Logo />
                            </motion.div>
                            <motion.p
                                className="text-slate-300 text-sm leading-relaxed max-w-xs"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                            >
                                I do cool nerdy stuff! よい一日を！
                            </motion.p>
                            <motion.div
                                className="mt-6 flex gap-6"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                            >
                                {socialIcons.map(({ Icon, href, label }) => (
                                    <motion.div
                                        key={label}
                                        whileHover={{ scale: 1.2, rotate: 360 }}
                                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                                    >
                                        <Link href={href} className="group">
                                            <Icon className="h-5 w-5 text-slate-400 transition-all duration-200 ease-in-out group-hover:text-[#4844e4] group-hover:filter group-hover:drop-shadow-glow" />
                                            <span className="sr-only">{label}</span>
                                        </Link>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Footer Sections */}
                        {footerSections.map((section, sectionIndex) => (
                            <motion.div
                                key={section.title}
                                className="sm:col-span-1 lg:col-span-2"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * sectionIndex, duration: 0.5 }}
                            >
                                <h3 className="text-sm font-semibold text-white">{section.title}</h3>
                                <ul className="mt-4 space-y-3">
                                    {section.items.map((item, itemIndex) => (
                                        <motion.li
                                            key={typeof item === 'string' ? item : item.name}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 * itemIndex, duration: 0.3 }}
                                        >
                                            <Link
                                                href={typeof item === 'string' ? '#' : item.href}
                                                className={`${baseClasses} ${hoverClasses} text-slate-400`}
                                            >
                                                {typeof item === 'string' ? item : item.name}
                                            </Link>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>

                    {/* Copyright */}
                    <motion.div
                        className="mt-16 border-t border-slate-800 pt-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        <Link
                            href="https://olavorw.com/policies/copyright"
                            className={`${baseClasses} ${hoverClasses} text-sm text-slate-400 hover:text-transparent`}
                            style={glowStyle}
                        >
                            © {new Date().getFullYear()} 4934 Tech All rights reserved.
                        </Link>
                    </motion.div>
                </div>
            </motion.div>
        </motion.footer>
    )
}

