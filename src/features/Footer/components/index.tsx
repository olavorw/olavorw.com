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

import { useEffect, useState } from 'react'
import Link from "next/link"
import { Logo } from "@/components/Logo"
// noinspection JSDeprecatedSymbols
import { Facebook, Mail, Twitter, Github, Youtube, Gitlab, Triangle } from 'lucide-react'

const baseClasses = "flex items-center gap-x-1 text-sm/6 font-semibold transition-all duration-200 ease-in-out group";
const hoverClasses = "hover:text-transparent hover:bg-gradient-to-r hover:from-[#32b7b6] hover:to-[#425389] hover:bg-clip-text";

export default function Footer() {
    const [opacity, setOpacity] = useState(0)

    useEffect(() => {
        const timer = setTimeout(() => {
            setOpacity(0.4)
        }, 100)

        return () => clearTimeout(timer)
    }, [])

    // noinspection XmlDeprecatedElement
    return (
        <footer className="px-6 py-8 mt-auto">
            <div className="border-white/5 border mx-auto max-w-[1400px] sm:rounded-3xl transition-all duration-500 ease-in-out"
                 style={{
                     backgroundColor: `rgba(127.5, 127.5, 127.5, ${0.1*opacity + 0.05})`,
                     backdropFilter: `blur(10px)`,
                     WebkitBackdropFilter: `blur(10px)`,
                     boxShadow: `0 4px 6px -1px rgba(0, 0, 0, ${opacity * 0.1}), 0 2px 4px -1px rgba(0, 0, 0, ${opacity * 0.06})`
                 }}>
                <div className="px-6 py-12 md:py-16">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-12">
                        {/* Logo and Description Column */}
                        <div className="col-span-full lg:col-span-4">
                            <div className="mb-6">
                                <Logo />
                            </div>
                            <p className="text-slate-300 text-sm leading-relaxed max-w-xs">
                                A transparent, open source, friendly community organization for makers.
                            </p>
                            <div className="mt-6 flex gap-6">
                                <Link href="https://facebook.com/4934tech" className="group">
                                    <Facebook className="h-5 w-5 text-slate-400 transition-colors duration-200 ease-in-out group-hover:text-[#32b7b6]" />
                                    <span className="sr-only">Facebook</span>
                                </Link>
                                <Link href="https://twitter.com/4934tech" className="group">
                                    <Twitter className="h-5 w-5 text-slate-400 transition-colors duration-200 ease-in-out group-hover:text-[#32b7b6]" />
                                    <span className="sr-only">Twitter</span>
                                </Link>
                                <Link href="https://4934tech/4934tech" className="group">
                                    <Github className="h-5 w-5 text-slate-400 transition-colors duration-200 ease-in-out group-hover:text-[#32b7b6]" />
                                    <span className="sr-only">GitHub</span>
                                </Link>
                                <Link href="https://youtube.com/@4934tech" className="group">
                                    <Youtube className="h-5 w-5 text-slate-400 transition-colors duration-200 ease-in-out group-hover:text-[#32b7b6]" />
                                    <span className="sr-only">YouTube</span>
                                </Link>
                                <Link href="mailto:4934@4934.tech" className="group">
                                    <Mail className="h-5 w-5 text-slate-400 transition-colors duration-200 ease-in-out group-hover:text-[#32b7b6]" />
                                    <span className="sr-only">Email</span>
                                </Link>
                                <Link href={"https://gitlab.com/4934"} className={"group"}>
                                    <Gitlab className="h-5 w-5 text-slate-400 transition-colors duration-200 ease-in-out group-hover:text-[#32b7b6]" />
                                    <span className="sr-only">GitLab</span>
                                </Link>
                                <Link href={"https://vercel.com/4934/"} className={"group"}>
                                    <Triangle className="h-5 w-5 text-slate-400 transition-colors duration-200 ease-in-out group-hover:text-[#32b7b6]" />
                                    <span className={"sr-only"}>Vercel</span>
                                </Link>
                            </div>
                        </div>

                        {/* Solutions Column */}
                        <div className="sm:col-span-1 lg:col-span-2 lg:col-start-5">
                            <h3 className="text-sm font-semibold text-white">Solutions</h3>
                            <ul className="mt-4 space-y-3">
                                <li>
                                    <Link href="#" className={`${baseClasses} ${hoverClasses} text-slate-400`}>
                                        Marketing
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className={`${baseClasses} ${hoverClasses} text-slate-400`}>
                                        Analytics
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className={`${baseClasses} ${hoverClasses} text-slate-400`}>
                                        Automation
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className={`${baseClasses} ${hoverClasses} text-slate-400`}>
                                        Commerce
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className={`${baseClasses} ${hoverClasses} text-slate-400`}>
                                        Insights
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Support Column */}
                        <div className="sm:col-span-1 lg:col-span-2">
                            <h3 className="text-sm font-semibold text-white">Support</h3>
                            <ul className="mt-4 space-y-3">
                                <li>
                                    <Link href="#" className={`${baseClasses} ${hoverClasses} text-slate-400`}>
                                        Submit ticket
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className={`${baseClasses} ${hoverClasses} text-slate-400`}>
                                        Documentation
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className={`${baseClasses} ${hoverClasses} text-slate-400`}>
                                        Guides
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Community Column */}
                        <div className="sm:col-span-1 lg:col-span-2">
                            <h3 className="text-sm font-semibold text-white">Community</h3>
                            <ul className="mt-4 space-y-3">
                                <li>
                                    <Link href="#" className={`${baseClasses} ${hoverClasses} text-slate-400`}>
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className={`${baseClasses} ${hoverClasses} text-slate-400`}>
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className={`${baseClasses} ${hoverClasses} text-slate-400`}>
                                        Join Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className={`${baseClasses} ${hoverClasses} text-slate-400`}>
                                        Press
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Legal Column */}
                        <div className="sm:col-span-1 lg:col-span-2">
                            <h3 className="text-sm font-semibold text-white">Legal</h3>
                            <ul className="mt-4 space-y-3">
                                <li>
                                    <Link href="https://4934.tech/policies/tos" className={`${baseClasses} ${hoverClasses} text-slate-400`}>
                                        Terms of Service
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://4934.tech/policies/privacy" className={`${baseClasses} ${hoverClasses} text-slate-400`}>
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://4934.tech/policies/copyright" className={`${baseClasses} ${hoverClasses} text-slate-400`}>
                                        Copyright Information
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.apache.org/licenses/LICENSE-2.0" className={`${baseClasses} ${hoverClasses} text-slate-400`}>
                                        Apache 2.0 License
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="mt-16 border-t border-slate-800 pt-8">
                        <Link href="https://4934.tech/policies/copyright" className={`${baseClasses} ${hoverClasses} text-sm text-slate-400`}>
                            © {new Date().getFullYear()} 4934 Tech All rights reserved.
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

