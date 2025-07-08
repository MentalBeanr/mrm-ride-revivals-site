import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

const pricingTiers = [
  {
    name: "Interior Revival",
    price: "$50 - $100",
    description: "Deep clean and rejuvenation for your vehicle's interior.",
    features: [
      "Deep Interior Vacuum (Incl. Trunk)",
      "Leather/Upholstery Cleaning & Conditioning",
      "Dashboard & Console Detailed Cleaning",
      "Shampoo Carpets & Mats",
      "Interior Window Cleaning",
      "Door Jamb Cleaning",
    ],
    cta: "Book Interior Revival",
    popular: true,
  },
  {
    name: "Exterior Excellence",
    price: "$50 - $100",
    description: "Comprehensive exterior detailing for a showroom shine.",
    features: [
      "Exterior Hand Wash & Dry",
      "Wheel Cleaning & Tire Dressing",
      "Glass Cleaning (Exterior)",
      "Premium Wax/Sealant Application",
      "Exterior Plastic Trim Restoration",
      "Engine Bay Cleaning",
    ],
    cta: "Book Exterior Excellence",
  },
  {
    name: "The Full Revival",
    price: "$100 - $150",
    description: "The ultimate package for a complete vehicle transformation, inside and out.",
    features: [
      "Includes ALL standard Interior Revival services",
      "Includes ALL standard Exterior Excellence services",
      "Plus, select add-ons from both Interior & Exterior may be included or discounted (Discuss during consultation)",
    ],
    cta: "Book Full Revival",
  },
]

export default function PricingAndServicesPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-primary">
          Our Detailing Pricing & Services
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Choose the perfect package to bring your ride back to life. Prices are estimates and may vary based on vehicle
          size, condition, and specific requirements including add-on services.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
        {pricingTiers.map((tier) => (
          <Card
            key={tier.name}
            className={`flex flex-col bg-card border-border shadow-lg ${tier.popular ? "border-primary ring-2 ring-primary" : ""}`}
          >
            <CardHeader className="items-center text-center">
              <CardTitle className="text-2xl text-primary">{tier.name}</CardTitle>
              <p className="text-4xl font-bold">{tier.price}</p>
              <CardDescription className="text-muted-foreground h-20">{tier.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-2">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/90">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/book-now">{tier.cta}</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </section>

      <section className="text-center mt-12">
        <h2 className="text-2xl font-semibold">Need Something Custom?</h2>
        <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
          Contact us for a personalized quote for specific services or unique vehicle needs. We&apos;ll provide a final
          quote after discussing your requirements.
        </p>
        <Button
          variant="outline"
          asChild
          className="mt-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
        >
          <Link href="/about-us#contact">Get a Custom Quote</Link>
        </Button>
      </section>
    </div>
  )
}
