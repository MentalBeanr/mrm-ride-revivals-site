'use client';

import type React from "react";
import { Inter, Orbitron } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react"; // 1. Import the component

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "700", "900"], variable: "--font-orbitron" });

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    const mainClass = "flex-grow container mx-auto px-4 py-8";

    return (
        <html lang="en" suppressHydrationWarning>
        <head>
            {/* Google Analytics Script */}
            <Script
                async
                src="https://www.googletagmanager.com/gtag/js?id=G-2487W0WL38"
            />
            <Script id="google-analytics">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-2487W0WL38');
                `}
            </Script>
        </head>
        <body className={`${inter.variable} ${orbitron.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark">
            <div className="flex flex-col min-h-screen bg-background">
                <Header />
                <main className={mainClass}>
                    {children}
                </main>
                <Footer />
            </div>
        </ThemeProvider>
        <Analytics /> {/* 2. Add the component before the closing body tag */}
        </body>
        </html>
    );
}