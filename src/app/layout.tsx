// noinspection SpellCheckingInspection

import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Azeret_Mono } from "next/font/google";
import "@/styles/globals.css";
import NavBar from "@/features/NavBar/components";
import DynamicBackground from "../features/CyberBackground/components";
import Footer from "@/features/Footer/components";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const azeretMono = Azeret_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Olav\'s wonderful website.",
    description: 'Olav\'s wonderful website.',
    authors: [
        { name: 'I\'m Olav "Olavorw" Sharma. I do cool nerdy stuff. In more detail, I\'m a full stack software developer, hardware enthusiast, entrepreneur, and founder of 4934 Tech.', url: "https://olavorw.com" }
    ],
    keywords: [
        "Olav", "Community", "Makers", "Olavorw", "Olav Sharma", "Olanorw", "Sharma",
        "Programming", "Coding", "Software", "Development", "Web", "App", "Mobile",
        "Game", "AI", "Machine Learning", "UltraAgent", "4934", "Tech", "Full Stack Software Developer",
        "Dev", "Developer", "Hardware", "Ecommerce", "Entrepreneur", "Startup", "Founder",
    ],
    icons: {
        icon: [
            { url: '/favicon.ico?v=1.1', sizes: '32x32' },
        ],
    },
    openGraph: {
        title: "Olav\'s wonderful website.",
        description: 'I\'m Olav "Olavorw" Sharma. I do cool nerdy stuff. In more detail, I\'m a full stack software developer, hardware enthusiast, entrepreneur, and founder of 4934 Tech.',
        url: "https://olavorw.com",
        siteName: "olavorw.com",
        images: [
            {
                url: "https://4934.tech/Logo/4934sqbd.png",
                width: 1024,
                height: 1024,
                alt: "4934 Tech Index",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Olav\'s wonderful website.",
        description: "I\'m Olav \"Olavorw\" Sharma. I do cool nerdy stuff. In more detail, I\'m a full stack software developer, hardware enthusiast, entrepreneur, and founder of 4934 Tech.",
        images: ["https://4934.tech/Logo/4934sqbd.png"],
        creator: "@4934tech",
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`dark ${geistSans.variable} ${azeretMono.variable}`}>
        <body className="font-sans antialiased bg-gray-950 text-gray-100 flex flex-col min-h-screen">
        <NavBar />
        <DynamicBackground />
        <main className="flex-grow pt-16 z-10 relative">
            {children}
        </main>
        <Footer />
        </body>
        </html>
    );
}
