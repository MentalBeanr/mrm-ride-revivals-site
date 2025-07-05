import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Car, Sparkles, ShieldCheck } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="flex flex-col items-center text-center space-y-12">
      {/* Hero Section with Logo Background */}
      <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center text-center overflow-hidden">
        {/* Background Image */}


        {/* Video Background (keeping the bubbles effect) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-5 opacity-30"
          poster="/placeholder.svg?width=1920&height=1080&text=Loading+Video..."
        >
          <source src= "/videos/ferrari_background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark overlay */}


        {/* Content */}
        <div className="relative z-20 container px-4 md:px-6">
          <div className="flex flex-col justify-center space-y-4">
            <div className="mb-8">
              <Image
                src="/images/mrm-logo.png"
                alt="MRM Ride Revivals Logo"
                width={300}
                height={150}
                className="mx-auto h-32 w-auto md:h-40"
                priority
              />
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none text-white font-orbitron">
              Premium Car Detailing Services
            </h1>
            <p className="max-w-[600px] text-neutral-200 md:text-xl mx-auto">
              Experience the ultimate transformation for your vehicle. We bring back the shine, inside and out.
            </p>
            <div className="mx-auto pt-4">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6"
              >
                <Link href="/book-now">Book Your Revival Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card border-border hover:shadow-lg hover:shadow-primary/20 transition-shadow">
              <CardHeader className="items-center">
                <Car className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Expert Detailing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground">
                  Our skilled technicians use premium products and techniques to restore your car&apos;s beauty.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-card border-border hover:shadow-lg hover:shadow-primary/20 transition-shadow">
              <CardHeader className="items-center">
                <Sparkles className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Showroom Shine</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground">
                  We aim for perfection, leaving your vehicle with a stunning, long-lasting finish.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-card border-border hover:shadow-lg hover:shadow-primary/20 transition-shadow">
              <CardHeader className="items-center">
                <ShieldCheck className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Customer Satisfaction</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground">
                  Your happiness is our priority. We guarantee quality service and exceptional results.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
