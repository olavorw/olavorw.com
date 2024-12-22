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

import { BentoItemProps } from '@/components/BentoGrid/BentoGrid.types';

export default function BentoItem({
                                      title,
                                      description,
                                      imageSrc,
                                      imageAlt,
                                      className = '',
                                      imageWrapperClassName = '',
                                      imageClassName = '',
                                      children,
                                  }: BentoItemProps) {
    if (!title && !description && !imageSrc && !children) {
        return null;
    }

    return (
        <div className={`${className} ${!imageSrc ? 'col-span-1 row-span-1' : ''}`}>
            <div
                style={{ backdropFilter: `blur(10px)`, WebkitBackdropFilter: `blur(10px)` }}
                className="absolute inset-px rounded-lg bg-black/40"
            ></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                {(title || description) && (
                    <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                        {title && (
                            <h3 className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">{title}</h3>
                        )}
                        {description && (
                            <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">{description}</p>
                        )}
                    </div>
                )}
                {(imageSrc || children) && (
                    <div className={imageWrapperClassName}>
                        {imageSrc && <img className={imageClassName} src={imageSrc} alt={imageAlt || ''} />}
                        {children}
                    </div>
                )}
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
        </div>
    );
}

