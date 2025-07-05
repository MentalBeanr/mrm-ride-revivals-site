import Script from 'next/script';

export default function BookNowPage() {
    return (
        <>
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-primary">
                    Book Your Detailing Appointment
                </h1>
                <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                    Select from our available services and times below to book your revival instantly.
                </p>
            </div>

            <div style={{ minHeight: '750px' }}>
                <Script src="https://app.squareup.com/appointments/buyer/widget/98sriyfydm23zn/L1Z4B515J0VKD.js" />
            </div>
        </>
    );
}
