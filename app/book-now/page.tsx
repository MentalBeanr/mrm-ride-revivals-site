import Script from 'next/script';

export default function BookNowPage() {
      return (
          <div className="space-y-8">
                <h1 className="text-3xl font-bold tracking-tight text-center sm:text-4xl md:text-5xl text-primary">
                      Book Your Detailing Appointment
                </h1>
                <p className="text-center text-muted-foreground max-w-2xl mx-auto">
                      Select from our available services and times below to book your revival instantly.
                </p>

                {/* --- Square Appointments Widget Script --- */}
                <Script src="https://app.squareup.com/appointments/buyer/widget/98sriyfydm23zn/L1Z4B515J0VKD.js" />

          </div>
      );
}
