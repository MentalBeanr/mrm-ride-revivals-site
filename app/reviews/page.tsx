import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const reviews = [
  {
    name: "Sarah L.",
    avatarFallback: "SL",
    avatarImage: "/placeholder.svg?width=40&height=40&text=SL",
    rating: 5,
    title: "Absolutely Blown Away!",
    comment:
      "My car looks newer than when I bought it! The attention to detail was incredible. The team at MRM Ride Revivals is professional and truly passionate about their work. Highly recommend!",
    date: "June 20, 2025",
  },
  {
    name: "Mike P.",
    avatarFallback: "MP",
    avatarImage: "/placeholder.svg?width=40&height=40&text=MP",
    rating: 5,
    title: "Best Detailing Service in Town",
    comment:
      "I've tried a few detailers, but MRM is on another level. The interior of my SUV was a mess (thanks, kids!), and they made it look pristine. Worth every penny.",
    date: "June 15, 2025",
  },
  {
    name: "Jessica B.",
    avatarFallback: "JB",
    avatarImage: "/placeholder.svg?width=40&height=40&text=JB",
    rating: 4,
    title: "Great Service, Very Thorough",
    comment:
      "Very happy with the exterior detail. My car's paint is so glossy now. Booking was easy, and the staff was friendly. Will be back for an interior clean soon.",
    date: "June 5, 2025",
  },
  {
    name: "David K.",
    avatarFallback: "DK",
    avatarImage: "/placeholder.svg?width=40&height=40&text=DK",
    rating: 5,
    title: "Revived My Old Ride!",
    comment:
      "They truly live up to their name! My 10-year-old sedan looks fantastic. The Full Revival package is amazing. Thank you, MRM!",
    date: "May 28, 2025",
  },
]

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className={`w-5 h-5 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
    ))}
  </div>
)

export default function ReviewsPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-primary">
          Customer Testimonials
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Hear what our satisfied customers have to say about their MRM Ride Revivals experience.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <Card key={index} className="bg-card border-border shadow-lg flex flex-col">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={review.avatarImage || "/placeholder.svg"} alt={review.name} />
                    <AvatarFallback>{review.avatarFallback}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg text-foreground/90">{review.name}</CardTitle>
                    <CardDescription className="text-xs text-muted-foreground">{review.date}</CardDescription>
                  </div>
                </div>
                <StarRating rating={review.rating} />
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <h3 className="font-semibold text-primary mb-1">{review.title}</h3>
              <p className="text-sm text-foreground/80">&quot;{review.comment}&quot;</p>
            </CardContent>
          </Card>
        ))}
      </section>
      <section className="text-center mt-12">
        <p className="text-muted-foreground">
          Want to share your experience? Contact us or leave a review on our social media!
        </p>
      </section>
    </div>
  )
}
