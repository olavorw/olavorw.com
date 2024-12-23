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

'use client';

import { XMarkIcon } from '@heroicons/react/20/solid';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';

export interface BannerProps {
  mainTitle?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
  showCased?: boolean;
}

const baseClasses = 'transition-all duration-300 ease-in-out';
const hoverClasses = 'hover:scale-105 hover:shadow-glow';

const glowStyle = {
  textShadow:
    '0 0 10px rgba(72, 68, 228, 0.5), 0 0 20px rgba(72, 68, 228, 0.3), 0 0 30px rgba(72, 68, 228, 0.1)',
} as const;

const hoverGlowStyle = {
  boxShadow: '0 0 20px rgba(103, 23, 205, 0.3)',
} as const;

export default function Banner({
  mainTitle,
  subtitle,
  buttonText,
  buttonHref,
  showCased = false,
}: BannerProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const navbar = document.querySelector('header');
    if (navbar) {
      const navbarHeight = navbar.offsetHeight;
      document.documentElement.style.setProperty(
        '--navbar-height',
        `${navbarHeight}px`
      );
    }
  }, []); // Added dependency array to prevent continuous updates

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={`
                        flex items-center justify-between gap-x-6 rounded-3xl px-6 py-3
                        ${showCased ? 'relative w-full max-w-7xl mx-auto' : 'fixed left-1/2 z-40 w-full max-w-7xl transform -translate-x-1/2'}
                    `}
          style={{
            position: showCased ? 'relative' : 'fixed',
            top: showCased ? 'auto' : 'calc(var(--navbar-height, 0px) + 1rem)',
            left: showCased ? 'auto' : '50%',
            transform: showCased ? 'none' : 'translateX(-50%)',
            width: '100%',
            maxWidth: '80rem', // max-w-7xl equivalent
            background:
              'linear-gradient(to right, rgba(103, 23, 205, 0.1), rgba(40, 113, 250, 0.1))',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            boxShadow:
              '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
          initial={
            showCased ? { opacity: 0, y: 0 } : { opacity: 0, y: -50, x: '-50%' }
          }
          animate={
            showCased ? { opacity: 1, y: 0 } : { opacity: 1, y: 0, x: '-50%' }
          }
          exit={
            showCased ? { opacity: 0, y: 0 } : { opacity: 0, y: -50, x: '-50%' }
          }
          transition={{ duration: 0.5 }}
          whileHover={{ y: -5, ...hoverGlowStyle }}
        >
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <motion.p
              className="text-sm leading-6 text-white"
              whileHover={{ scale: 1.05 }}
            >
              {mainTitle && (
                <motion.strong
                  className="font-semibold bg-gradient-to-r from-[#6717cd] to-[#2871fa] bg-clip-text text-transparent"
                  style={glowStyle}
                >
                  {mainTitle}
                </motion.strong>
              )}
              {mainTitle && subtitle && (
                <span className="mx-2 text-slate-300">·</span>
              )}
              <span className="text-slate-300">{subtitle}</span>
            </motion.p>
            {buttonText && buttonHref && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={buttonHref}
                  className={`${baseClasses} ${hoverClasses} flex-none rounded-full bg-white/10 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gradient-to-r hover:from-[#6717cd] hover:to-[#2871fa]`}
                >
                  {buttonText}{' '}
                  <span aria-hidden="true" className="ml-1">
                    →
                  </span>
                </Link>
              </motion.div>
            )}
          </div>
          <motion.button
            type="button"
            className={`${baseClasses} -m-1.5 flex-none p-1.5 text-white hover:text-[#4844e4]`}
            onClick={handleClose}
            aria-label="Dismiss banner"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          >
            <XMarkIcon className="h-5 w-5" aria-hidden="true" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
