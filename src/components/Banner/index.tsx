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

import { XMarkIcon } from '@heroicons/react/20/solid'
import { useState, useEffect } from 'react'

interface BannerProps {
    mainTitle?: string;
    subtitle?: string;
    buttonText?: string;
    buttonHref?: string;
    showCased?: boolean;
}

export default function Banner({ mainTitle, subtitle, buttonText, buttonHref, showCased = false }: BannerProps) {
    const [isVisible, setIsVisible] = useState(true)
    const [isAnimated, setIsAnimated] = useState(false)
    const [isDisappearing, setIsDisappearing] = useState(false)

    useEffect(() => {
        if (!showCased) {
            const navbar = document.querySelector('header')
            if (navbar) {
                const navbarHeight = navbar.offsetHeight
                document.documentElement.style.setProperty('--navbar-height', `${navbarHeight}px`)
            }
        }
    }, [showCased])

    useEffect(() => {
        const timer = setTimeout(() => setIsAnimated(true), 500)
        return () => clearTimeout(timer)
    }, [])

    const handleClose = () => {
        setIsDisappearing(true)
        setTimeout(() => setIsVisible(false), 300) // Match this with the transition duration
    }

    if (!isVisible) return null

    const bannerClasses = `
        flex items-center justify-between gap-x-6 rounded-lg bg-gray-500/5 border-white/5 border backdrop-blur-md px-10 py-2.5 
        transition-all duration-300 ease-in-out
        ${isAnimated && !isDisappearing ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}
        ${showCased ? 'w-full max-w-7xl mx-auto' : 'fixed left-1/2 z-40 w-full max-w-7xl transform -translate-x-1/2'}
    `

    const bannerStyle = showCased ? {} : { top: 'calc(var(--navbar-height, 0px))' }

    return (
        <div className={bannerClasses} style={bannerStyle}>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <p className="text-sm leading-6 text-white">
                    {mainTitle && <strong className="font-semibold">{mainTitle}</strong>}
                    {mainTitle && subtitle && <span className="mx-2">·</span>}
                    {subtitle}
                </p>
                {buttonText && buttonHref && (
                    <a
                        href={buttonHref}
                        className="flex-none rounded-full bg-white/10 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-white/20 transition-colors duration-200"
                    >
                        {buttonText} <span aria-hidden="true">→</span>
                    </a>
                )}
            </div>
            <button
                type="button"
                className="-m-1.5 flex-none p-1.5 text-white hover:text-white/80 transition-colors duration-200"
                onClick={handleClose}
                aria-label="Dismiss banner"
            >
                <XMarkIcon className="h-5 w-5" aria-hidden="true" />
            </button>
        </div>
    )
}

