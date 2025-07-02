import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"

export default function AboutUsPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-primary">
          About MRM Ride Revivals
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          At MRM Ride Revivals, we are passionate about cars and dedicated to bringing out the best in every vehicle we
          touch. Our mission is to provide top-tier detailing services that not only clean but truly revive your ride,
          right here in Houston.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          {/* Replaced placeholder with the new image */}
          <Image
            src="/images/ford-raptor-about.webp"
            alt="MRM Ride Revivals - Ford Raptor Showcase"
            width={600}
            height={800} // Adjust height as per image aspect ratio or desired display
            className="rounded-lg shadow-xl object-cover w-full h-auto md:max-h-[70vh]"
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">Our Story</h2>
          <p className="text-foreground/90">
            Founded by a team of car enthusiasts in Houston, Texas, MRM Ride Revivals started with a simple goal: to
            offer unparalleled detailing quality and customer service to our local community. We believe that a clean
            car is more than just aesthetics; it&apos;s about pride in ownership and preserving your investment.
          </p>
          <p className="text-foreground/90">
            We use only the highest quality products and the latest techniques to ensure your vehicle receives the care
            it deserves. From daily drivers to luxury exotics, we treat every car as if it were our own.
          </p>
          <h2 className="text-2xl font-semibold text-primary mt-6">Our Commitment</h2>
          <p className="text-foreground/90">
            We are committed to excellence in every detail. Our team is professionally trained and continuously learning
            to stay ahead in the detailing industry. Your satisfaction is our ultimate reward, and we strive to exceed
            your expectations with every service.
          </p>
        </div>
      </section>

      <section id="contact" className="text-center py-12 bg-card border border-border rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold tracking-tight text-primary">Get In Touch</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
          Have questions or want to discuss a custom detailing project? We&apos;d love to hear from you!
        </p>
        <div className="mt-8 space-y-4 md:space-y-0 md:flex md:justify-center md:gap-8">
          <div className="flex items-center justify-center gap-2">
            <MapPin className="w-5 h-5 text-primary" />
            <span>Houston, Texas</span> {/* Updated Address */}
          </div>
          <div className="flex items-center justify-center gap-2">
            <Phone className="w-5 h-5 text-primary" />
            <a href="tel:+18326548998" className="hover:text-primary">
              (832) 654-8998 {/* Updated Phone */}
            </a>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Mail className="w-5 h-5 text-primary" />
            <a href="mailto:mrmriderevivals@gmail.com" className="hover:text-primary">
              mrmriderevivals@gmail.com {/* Updated Email */}
            </a>
          </div>
        </div>
        <Button asChild className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90">
          <Link href="/book-now">Book an Appointment</Link>
        </Button>
      </section>
    </div>
  )
}
