// noinspection SpellCheckingInspection

import Image from 'next/image';

export default function Testimonials() {
    const testimonials = [
        // High priority testimonials (shown on mobile)
        {
            quote: "Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae auctor libero. Hac condimentum dignissim nibh vulputate ut nunc. Amet nibh orci mi venenatis blandit vel et proin. Non hendrerit in vel ac diam.",
            author: "Brenna Goyette",
            handle: "@brennagoyette",
            avatar: "/placeholder.svg?height=40&width=40",
            priority: true
        },
        {
            quote: "Aut reprehenderit voluptatem eum asperiores beatae id. Iure molestiae ipsam ut officia rem nulla blanditiis.",
            author: "Lindsay Walton",
            handle: "@lindsaywalton",
            avatar: "/placeholder.svg?height=40&width=40",
            priority: true
        },
        {
            quote: "Nam nesciunt dolorem dolor asperiores cum. Incidunt molestiae quis deleniti vitae ut in earum delectus iusto.",
            author: "Courtney Henry",
            handle: "@courtneyhenry",
            avatar: "/placeholder.svg?height=40&width=40",
            priority: true
        },
        // Medium priority testimonials (shown on tablet)
        {
            quote: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsum.",
            author: "Leslie Alexander",
            handle: "@lesliealexander",
            avatar: "/placeholder.svg?height=40&width=40"
        },
        {
            quote: "Quia dolorem qui et. Atque quo aliquid sit eos officia. Dolores similique laboriosam quaerat cupiditate.",
            author: "Michael Foster",
            handle: "@michaelfoster",
            avatar: "/placeholder.svg?height=40&width=40"
        },
        {
            quote: "Voluptas quos itaque ipsam in voluptatem est. Iste eos blanditiis repudiandae. Earum deserunt enim molestiae ipsum perferendis recusandae saepe corrupti.",
            author: "Tom Cook",
            handle: "@tomcook",
            avatar: "/placeholder.svg?height=40&width=40"
        },
        // Lower priority testimonials (shown only on desktop)
        {
            quote: "Molestias ea eorum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi rerum voluptatem minus harum.",
            author: "Leonard Krasner",
            handle: "@leonardkrasner",
            avatar: "/placeholder.svg?height=40&width=40"
        },
        {
            quote: "Consequatur ut atque. Itaque nostrum molestiae id veniam eos cumque. Ut quia eum fugit laborum autem inventore ut voluptate.",
            author: "Dries Vincent",
            handle: "@driesvincent",
            avatar: "/placeholder.svg?height=40&width=40"
        },
        {
            quote: "Aliquid dolore praesentium ratione. Cumque ea officia repellendus laboriosam. Vitae quod id explicabo non sunt.",
            author: "Whitney Francis",
            handle: "@whitneyfrancis",
            avatar: "/placeholder.svg?height=40&width=40"
        },
        {
            quote: "Architecto libero natus est. Est quam debitis officia enim atque ut non. Sunt reiciendis quasi eaque. Itaque error ut et.",
            author: "Floyd Miles",
            handle: "@floydmiles",
            avatar: "/placeholder.svg?height=40&width=40"
        },
        {
            quote: "Temporibus ea molestiae impedit adipisci perspiciatis illo aliquid. Quis ut ratione et voluptatem et. Nostrum explicabo iste unde beatae.",
            author: "Emily Selman",
            handle: "@emilyselman",
            avatar: "/placeholder.svg?height=40&width=40"
        }
    ];

    // Filter testimonials based on screen size
    const mobileTestimonials = testimonials.filter(t => t.priority);
    const tabletTestimonials = testimonials.slice(0, 6);
    const desktopTestimonials = testimonials;

    return (
        <section className="py-24 relative overflow-hidden min-h-screen">
            <div className="absolute inset-0 bg-transparent" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Mobile Layout (3 testimonials) */}
                <div className="grid grid-cols-1 gap-10">
                    {mobileTestimonials.map((testimonial, index) => (
                        <div key={index}>
                            <blockquote className="bg-black/40 backdrop-blur-lg rounded-2xl shadow-sm p-6">
                                <p className="text-gray-300 mb-4">&quot;{testimonial.quote}&quot;</p>
                                <div className="flex items-center">
                                    <Image
                                        src={testimonial.avatar}
                                        width={40}
                                        height={40}
                                        alt={testimonial.author}
                                        className="rounded-full"
                                    />
                                    <div className="ml-3">
                                        <p className="text-white font-medium">{testimonial.author}</p>
                                        <p className="text-gray-400 text-sm">{testimonial.handle}</p>
                                    </div>
                                </div>
                            </blockquote>
                        </div>
                    ))}
                </div>

                {/* Tablet Layout (6 testimonials) */}
                <div className="hidden md:grid md:grid-cols-2 lg:hidden gap-6">
                    {tabletTestimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className={index === 1 ? 'md:col-span-2' : ''}
                        >
                            <blockquote className="bg-black/40 backdrop-blur-lg rounded-2xl shadow-sm p-6">
                                <p className="text-gray-300 mb-4">&quot;{testimonial.quote}&quot;</p>
                                <div className="flex items-center">
                                    <Image
                                        src={testimonial.avatar}
                                        width={40}
                                        height={40}
                                        alt={testimonial.author}
                                        className="rounded-full"
                                    />
                                    <div className="ml-3">
                                        <p className="text-white font-medium">{testimonial.author}</p>
                                        <p className="text-gray-400 text-sm">{testimonial.handle}</p>
                                    </div>
                                </div>
                            </blockquote>
                        </div>
                    ))}
                </div>

                {/* Desktop Layout (all testimonials) */}
                <div className="hidden lg:grid lg:grid-cols-4 gap-8">
                    {/* First column */}
                    <div className="space-y-8">
                        {desktopTestimonials.slice(0, 3).map((testimonial, index) => (
                            <blockquote key={index} className="bg-black/40 backdrop-blur-lg rounded-2xl shadow-sm p-6">
                                <p className="text-gray-300 mb-4">&quot;{testimonial.quote}&quot;</p>
                                <div className="flex items-center">
                                    <Image
                                        src={testimonial.avatar}
                                        width={40}
                                        height={40}
                                        alt={testimonial.author}
                                        className="rounded-full"
                                    />
                                    <div className="ml-3">
                                        <p className="text-white font-medium">{testimonial.author}</p>
                                        <p className="text-gray-400 text-sm">{testimonial.handle}</p>
                                    </div>
                                </div>
                            </blockquote>
                        ))}
                    </div>

                    {/* Middle columns (larger testimonials) */}
                    <div className="col-span-2 space-y-8">
                        {desktopTestimonials.slice(3, 6).map((testimonial, index) => (
                            <blockquote key={index} className="bg-black/40 backdrop-blur-lg rounded-2xl shadow-sm p-14">
                                <p className="text-gray-300 mb-4 text-lg">&quot;{testimonial.quote}&quot;</p>
                                <div className="flex items-center">
                                    <Image
                                        src={testimonial.avatar}
                                        width={48}
                                        height={48}
                                        alt={testimonial.author}
                                        className="rounded-full"
                                    />
                                    <div className="ml-3">
                                        <p className="text-white font-medium">{testimonial.author}</p>
                                        <p className="text-gray-400 text-sm">{testimonial.handle}</p>
                                    </div>
                                </div>
                            </blockquote>
                        ))}
                    </div>

                    {/* Last column */}
                    <div className="space-y-8">
                        {desktopTestimonials.slice(6, 9).map((testimonial, index) => (
                            <blockquote key={index} className="bg-black/40 backdrop-blur-lg rounded-2xl shadow-sm p-6">
                                <p className="text-gray-300 mb-4">&quot;{testimonial.quote}&quot;</p>
                                <div className="flex items-center">
                                    <Image
                                        src={testimonial.avatar}
                                        width={40}
                                        height={40}
                                        alt={testimonial.author}
                                        className="rounded-full"
                                    />
                                    <div className="ml-3">
                                        <p className="text-white font-medium">{testimonial.author}</p>
                                        <p className="text-gray-400 text-sm">{testimonial.handle}</p>
                                    </div>
                                </div>
                            </blockquote>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

