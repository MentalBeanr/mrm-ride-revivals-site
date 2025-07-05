import type React from "react"
import type { Metadata } from "next"
import { Inter, Orbitron } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "700", "900"], variable: "--font-orbitron" })

export const metadata: Metadata = {
    title: "MRM Ride Revivals - Premium Car Detailing",
    description: "Expert car detailing services to revive your ride. Book your appointment today!",
    generator: 'v0.dev'
    manifest: "/site.webmanifest",
    icons: {
        icon: [
            { url: "/favicon.ico" },
            { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        ],
        apple: "/apple-touch-icon.png",
        other: [
            {
                rel: 'android-chrome-192x192',
                url: '/android-chrome-192x192.png',
                sizes: '192x192',
            },
            {
                rel: 'android-chrome-512x512',
                url: '/android-chrome-512x512.png',
                sizes: '512x512',
            },
        ],
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <head>
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
                <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
                <Footer />
            </div>
        </ThemeProvider>
        </body>
        </html>
    )
}