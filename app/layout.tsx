import type React from "react"
import type { Metadata } from "next"
import { Inter, Orbitron } from "next/font/google" // Added Orbitron
import Script from "next/script" // <--- 1. IMPORT SCRIPT COMPONENT
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "700", "900"], variable: "--font-orbitron" }) // Configured Orbitron

export const metadata: Metadata = {
  title: "MRM Ride Revivals - Premium Car Detailing",
  description: "Expert car detailing services to revive your ride. Book your appointment today!",
  generator: 'v0.dev'
}

export function RootLayout({
                               children,
                           }: Readonly<{
    children: React.ReactNode
}>) {
    let html = <>
        <html lang="en" suppressHydrationWarning>
        <head>
            <
            !-- Google tag (gtag.js) --&gt;
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
        {" "}
        {/* Added Orbitron variable */}
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark">
            <div className="flex flex-col min-h-screen bg-background">
                <Header/>
                <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
                <Footer/>
            </div>
        </ThemeProvider>
        </body>
        </html>
    </>;
    return html
}