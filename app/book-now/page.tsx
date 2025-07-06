import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function BookNowPage() {
    return (
        <div className="flex flex-col items-center">
            {/* Page Title */}
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-primary">
                    Book Your Detailing Appointment
                </h1>
                <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                    Select from our available services and times below to book your revival instantly.
                </p>
            </div>

            {/* Card component to contain the booking widget */}
            <Card className="w-full max-w-4xl overflow-hidden">
                <CardHeader>
                    <CardTitle>Schedule Your Service</CardTitle>
                </CardHeader>
                <CardContent>
                    {/*
                      This iframe is the most robust way to embed the widget.
                      It directly loads the booking page into a frame inside the card,
                      solving the rendering issue.
                    */}
                    <iframe
                        src="https://square.site/book/L1Z4B515J0VKD/m-r-m-ride-revivals"
                        title="Square Appointments"
                        style={{
                            border: 'none',
                            width: '100%',
                            height: '800px' // You can adjust this height if needed
                        }}
                    ></iframe>
                </CardContent>
            </Card>
        </div>
    );
}

