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

import Image from 'next/image';

export function Logo() {
    return (
        <a href="https://4934.tech" className="-m-1.5 p-1.5 group">
            <span className="sr-only">4934</span>
            <div className="relative w-20 h-20 overflow-hidden">
                <Image
                    src="/Logo/4934sqw.png"
                    alt="4934 Logo"
                    width={80}
                    height={80}
                    className="absolute top-0 left-0 transition-opacity duration-200 ease-in-out group-hover:opacity-0"
                />
                <Image
                    src="/Logo/4934sqg.png"
                    alt="4934 Logo"
                    width={80}
                    height={80}
                    className="absolute top-0 left-0 transition-opacity duration-200 ease-in-out opacity-0 group-hover:opacity-100"
                />
            </div>
        </a>
    );
}

