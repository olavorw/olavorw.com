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

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ExternalLink } from 'lucide-react';

interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  linkText?: string;
  linkHref?: string;
  dropdownText?: string;
  features?: CardFeatureProps[];
}

interface CardFeatureProps {
  feature: string;
  featureIcon?: React.ReactNode;
  featureDescription?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  icon,
  linkText = 'Link',
  linkHref = '#',
  dropdownText = 'Learn more',
  features = [],
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl border border-white/10 p-6 shadow-xl transition-all duration-300 ease-in-out backdrop-blur-sm"
      whileHover={{
        scale: 1.03,
        boxShadow: '0 0 30px rgba(103, 23, 205, 0.3)',
      }}
      style={{
        backdropFilter: `blur(10px)`,
        WebkitBackdropFilter: `blur(10px)`,
        background: `linear-gradient(to right, rgba(103, 23, 205, 0.1), rgba(40, 113, 250, 0.1))`,
        boxShadow:
          '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute -right-10 -top-10 z-0 h-40 w-40 rounded-full bg-gradient-to-br from-[#6717cd] to-[#2871fa] opacity-20 blur-3xl" />
      <div className="relative z-10">
        <motion.div
          className="mb-4 inline-block rounded-full bg-gradient-to-r from-[#6717cd] to-[#2871fa] p-3 text-white"
          whileHover={{ scale: 1.1, rotate: 360 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        >
          {icon}
        </motion.div>
        <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
        <p className="mb-4 text-slate-300 ">{description}</p>
        <div className="flex items-center justify-between">
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="group inline-flex items-center text-sm transition duration-300 ease-out font-semibold hover:bg-gradient-to-r from-[#6717cd] to-[#2871fa] hover:text-transparent bg-clip-text"
            whileHover={{ scale: 1.05 }}
          >
            {dropdownText}
            <ChevronDown
              className={`ml-2 h-4 w-4 transition-transform duration-300 ease-out group-hover:text-[#2871fa] ${isExpanded ? 'rotate-180' : ''}`}
            />
          </motion.button>
          <motion.a
            href={linkHref}
            className="group inline-flex items-center text-sm transition duration-300 ease-out font-semibold hover:bg-gradient-to-r from-[#6717cd] to-[#2871fa] hover:text-transparent bg-clip-text"
            whileHover={{ scale: 1.05 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="h-4 w-4 mr-1 transition duration-300 ease-out group-hover:text-[#6717cd]" />
            {linkText}
          </motion.a>
        </div>
        <AnimatePresence>
          {isExpanded && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 space-y-2"
            >
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.5, duration: 0.5 }}
                  className="flex items-center bg-gradient-to-r from-[#6717cd] to-[#2871fa] text-transparent bg-clip-text font-medium"
                  whileHover={{ scale: 1.05 }}
                >
                  {feature.featureIcon && (
                    <span className="mr-2 text-[#6717cd]">
                      {feature.featureIcon}
                    </span>
                  )}
                  {typeof feature === 'string' ? (
                    feature
                  ) : (
                    <span className="bg-gradient-to-r from-[#6717cd] to-[#2871fa] text-transparent bg-clip-text">
                      {feature.feature}
                    </span>
                  )}
                  {feature.featureDescription && (
                    <span className="text-slate-300 font-normal">
                      {': ' + feature.featureDescription}
                    </span>
                  )}
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

interface EpicCardsProps {
  cards: CardProps[];
}

const EpicCards: React.FC<EpicCardsProps> = ({ cards }) => {
  return (
    <motion.div
      className="py-12 sm:py-16 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto grid max-w-2xl grid-cols-1 gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card {...card} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default EpicCards;
