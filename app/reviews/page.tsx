import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Script from "next/script";

export default function ReviewsPage() {
  return (
      <div className="space-y-8">
        <section className="text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">
            What Our Customers Are Saying
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            We take pride in our work, but don&apos;t just take our word for it. Here are some reviews from our valued clients.
          </p>
        </section>

        <section>
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Our Google Reviews</CardTitle>
            </CardHeader>
            <CardContent>
              {/* The Elfsight widget code you provided has been placed here */}
              <Script src="https://static.elfsight.com/platform/platform.js" strategy="lazyOnload" />
              <div className="elfsight-app-54fb78fa-1c36-483c-8792-2e2ee824b128" data-elfsight-app-lazy></div>
            </CardContent>
          </Card>
        </section>
      </div>
  );
}
