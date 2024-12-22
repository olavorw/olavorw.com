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

export default function HomeHero() {

    return (
        <div>

            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                    {/*
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-gray-100/10 hover:bg-gradient-to-tr from-[#32b7b6]/10 to-[#425389]/10 transition-colors duration-200 ease-in-out">
                            Announcing 4934 UltraAgent.{' '}
                            <a href="#" className="font-semibold bg-gradient-to-tr from-[#32b7b6] to-[#425389] bg-clip-text text-transparent">
                                <span aria-hidden="true" className="absolute inset-0" />
                                Read more <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                    </div>
                    */}
                    <div className="text-center">
                        <h1 className="text-balance text-5xl font-bold tracking-tight text-white sm:text-7xl">
                            <span
                                className="bg-gradient-to-tr from-[#32b7b6] to-[#425389] bg-clip-text text-transparent">
                                Innovate
                            </span>
                            {" "}
                            Together.
                            {" "}
                            <span
                                className="bg-gradient-to-br from-[#32b7b6] to-[#425389] bg-clip-text text-transparent">
                                Build
                            </span>
                            {" "}
                            the Future.
                        </h1>

                        <p className="mt-8 text-pretty text-xl/8 font-medium text-gray-300 sm:text-xl/8">
                            Join our community of developers, designers, and innovators working together to create cutting-edge open source technology that pushes the boundaries of what&apos;s possible.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="https://github.com/4934tech/ultraagent"
                                className="relative inline-block rounded-md bg-gradient-to-br from-[#1d6a69] to-[#1d243c] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 ease-in-out before:absolute before:inset-0 before:rounded-md before:bg-gradient-to-br before:from-[#32b7b6] before:to-[#425389] before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100"
                            >
                                <span className="relative">Join Us</span>
                            </a>

                            <a href="#" className="text-sm/6 font-semibold text-white">
                                Explore Projects <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
