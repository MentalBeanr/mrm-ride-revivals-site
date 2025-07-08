"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import Image from "next/image"

// Changed "About Us" to "Contact Us"
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/pricing", label: "Pricing & Services" },
  { href: "/book-now", label: "Book Now" },
  { href: "/about-us", label: "Contact Us" }, // Changed the label here
  { href: "/reviews", label: "Reviews" },
]

export default function Header() {
  const pathname = usePathname()

  return (
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 max-w-screen-2xl items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
                src="/images/mrm-logo.png"
                alt="MRM Ride Revivals Logo"
                width={120}
                height={60}
                className="h-12 w-auto hover:opacity-80 transition-opacity"
                priority
            />
          </Link>

          <nav className="hidden md:flex flex-1 justify-center items-center space-x-6">
            {navLinks.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                        "text-sm font-medium transition-colors hover:text-primary",
                        pathname === link.href ? "text-primary" : "text-foreground/80",
                    )}
                >
                  {link.label}
                </Link>
            ))}
          </nav>

          <div className="md:hidden flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                    variant="outline"
                    size="icon"
                    className="bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-full max-w-xs bg-background p-6">
                <div className="mb-6">
                  <Link href="/" className="flex items-center">
                    <Image
                        src="/images/mrm-logo.png"
                        alt="MRM Ride Revivals Logo"
                        width={100}
                        height={50}
                        className="h-10 w-auto"
                    />
                  </Link>
                </div>
                <nav className="grid gap-4">
                  {navLinks.map((link) => (
                      <SheetClose asChild key={link.href}>
                        <Link
                            href={link.href}
                            className={cn(
                                "flex items-center space-x-3 rounded-md px-3 py-2 text-base font-medium hover:bg-accent hover:text-accent-foreground",
                                pathname === link.href ? "bg-accent text-accent-foreground" : "text-foreground/80",
                            )}
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
          <div className="hidden md:flex items-center">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/book-now">Book Now</Link>
            </Button>
          </div>
        </div>
      </header>
  )
}