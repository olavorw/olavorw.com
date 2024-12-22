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

import { BentoGridItems } from '@/components/BentoGrid/BentoGrid.types';
import BentoItem from './BentoItem';

interface BentoGridProps {
    items?: BentoGridItems;
    showcase?: boolean;
}

export default function BentoGrid({ items = {} }: BentoGridProps) {
    const hasItems = Object.values(items).some(item => item !== undefined);
    return (
        <section className="bg-transparent py-20 sm:py-12">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                {hasItems && (
                    <div className={`mt-10 grid gap-4 sm:mt-16 ${getGridClass(Object.values(items).filter(Boolean).length)}`}>
                        <BentoItem
                            {...items.col1}
                            className="relative"
                            imageWrapperClassName="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm"
                            imageClassName="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl"
                        />
                        <BentoItem
                            {...items.col2}
                            className="relative"
                            imageWrapperClassName="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2"
                            imageClassName="w-full max-lg:max-w-xs"
                        />
                        <BentoItem
                            {...items.col3}
                            className="relative"
                            imageWrapperClassName="flex flex-1 items-center [container-type:inline-size] max-lg:py-12 lg:pb-2"
                            imageClassName="h-[min(152px,40cqw)] object-cover"
                        />
                        <BentoItem
                            {...items.col4}
                            className="relative"
                            imageWrapperClassName="relative min-h-[30rem] w-full grow"
                            imageClassName="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl"
                        >
                            {items.col4?.codeSnippet && (
                                <div className="px-6 pb-14 pt-6">
                                    <pre className="text-sm text-gray-300 overflow-x-auto">
                                        <code>{items.col4.codeSnippet}</code>
                                    </pre>
                                </div>
                            )}
                        </BentoItem>
                    </div>
                )}
            </div>
        </section>
    );
}

function getGridClass(itemCount: number): string {
    switch (itemCount) {
        case 1:
            return 'grid-cols-1 max-w-md mx-auto';
        case 2:
            return 'grid-cols-1 md:grid-cols-2 max-w-2xl mx-auto';
        default:
            return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto';
    }
}

