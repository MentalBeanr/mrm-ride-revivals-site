import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"

export default function ContactUsPage() {
  return (
      <div className="space-y-12">
        <section id="contact" className="text-center py-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary">Get In Touch</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Have questions or want to discuss a custom detailing project? We&apos;d love to hear from you!
          </p>
          <div className="mt-8 space-y-4 md:space-y-0 md:flex md:justify-center md:gap-8">
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Houston, Texas</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Phone className="w-5 h-5 text-primary" />
              <a href="tel:+18326548998" className="hover:text-primary">
                (832) 654-8998
              </a>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Mail className="w-5 h-5 text-primary" />
              <a href="mailto:mrmriderevivals@gmail.com" className="hover:text-primary">
                mrmriderevivals@gmail.com
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