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

import {Check, X} from "lucide-react";

interface EmailSignupProps {
    showcase?: boolean;
}

export default function EmailSignup({ showcase }: EmailSignupProps) {
    return (
        <div className={`relative ${showcase ? '' : 'overflow-hidden bg-transparent py-16 sm:py-24 lg:py-32'} isolate`}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                    <div className="max-w-xl lg:max-w-lg">
                        <h2 className="text-4xl font-semibold tracking-tight text-white">Want to stay updated?</h2>
                        <p className="mt-4 text-lg text-gray-300">
                            Get occasional updates about our community and projects.
                        </p>
                        <div className="mt-6 flex max-w-md gap-x-4">
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                className="block w-full rounded-md bg-gray-500/5 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-white/5 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#32b7b6] transition-all duration-300 ease-in-out"
                                required
                                placeholder="Enter your email"
                            />
                            <button
                                type="submit"
                                className=" relative inline-block rounded-md bg-gradient-to-br from-[#1d6a69] to-[#1d243c] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 ease-in-out before:absolute before:inset-0 before:rounded-md before:bg-gradient-to-br before:from-[#32b7b6] before:to-[#425389] before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100"
                            >
                                <span className="relative">Subscribe</span>
                            </button>
                        </div>
                    </div>
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                        <div className="flex flex-col items-start">
                            <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                <Check aria-hidden="true" className="size-6 text-gray-300" />
                            </div>
                            <dt className="mt-4 text-base font-semibold text-white">Once in a while</dt>
                            <dd className="mt-2 text-base/7 text-gray-400">
                                We don&apos;t usually have stuff worthy of your inbox every day. We&apos;ll only send you the good stuff.
                            </dd>
                        </div>
                        <div className="flex flex-col items-start">
                            <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                <X aria-hidden="true" className="size-6 text-gray-300" />
                            </div>
                            <dt className="mt-4 text-base font-semibold text-white">No spam, ever</dt>
                            <dd className="mt-2 text-base/7 text-gray-400">
                                We hate spam as much as you do. We promise to never spam you with irrelevant emails.
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    )
}
